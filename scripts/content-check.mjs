import { readFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const jsonPath = resolve(projectRoot, "content/portfolio-public.json")
const tsPath = resolve(projectRoot, "content/portfolio-public.generated.ts")
const sourcePath = resolve(
  process.env.PORTFOLIO_PUBLIC_SOURCE ??
    resolve(projectRoot, "../career-docs/exports/portfolio-public.json"),
)
const allowedClaimStatuses = new Set(["verified", "context-only"])
const allowedDisclosureStatuses = new Set(["public", "anonymized", "withheld"])
const expectedLensIds = ["ai-product", "product-fullstack", "multiplatform-device"]
const internalPatterns = [
  /\/Users\//,
  /\/home\//,
  /\/private\//,
  /\/tmp\//,
  /file:\/\//i,
  /localhost/i,
  /\[확인 필요\]/,
  /\bINTERNAL\b/,
  /[A-Za-z]:\\/,
]
const anonymizedDenylist = [
  "플레드",
  "엑스퍼트아이엔씨",
  "CheckYourHospital",
  "Memoriz",
  "OChoice",
  "홈초이스",
  "LG헬로비전",
  "딜라이브",
  "KT HCN",
  "OWL",
  "C-Biz",
  "C-Sound",
]
const dossierPublicNameAllowlist = new Map([
  ["thefounders-fde", new Set(["플레드", "CheckYourHospital", "Memoriz"])],
])
const dossierNumericAllowlist = new Map([
  [
    "thefounders-fde",
    new Set(["2026.01", "2026.06", "6", "20", "4", "4,000", "1", "4,255"]),
  ],
])
const allowedNumericClaims = new Map([
  ["woogi-harness", new Set(["25", "385"])],
  ["domain-diagnostic-saas", new Set(["7", "48"])],
])
const claimLedgerStatuses = new Map([
  ["CLM-003", "context-only"],
  ["CLM-006", "verified"],
  ["CLM-023", "context-only"],
  ["CLM-024", "context-only"],
  ["CLM-025", "verified"],
])

function fail(message) {
  throw new Error(`[content:check] ${message}`)
}

function requireString(value, path) {
  if (typeof value !== "string" || value.trim() === "") {
    fail(`${path} must be a non-empty string`)
  }
}

function checkClaim(claim, path) {
  requireString(claim?.text, `${path}.text`)
  if (claim?.sourceLabel !== undefined) {
    requireString(claim.sourceLabel, `${path}.sourceLabel`)
  }
  if (!allowedClaimStatuses.has(claim?.status)) {
    fail(`${path}.status must be verified or context-only`)
  }
  if (!Array.isArray(claim?.claimIds)) {
    fail(`${path}.claimIds must be an array`)
  }
  if (claim.status === "verified" && claim.claimIds.length === 0) {
    fail(`${path} is verified but has no claim ledger id`)
  }
  for (const [claimIdIndex, claimId] of claim.claimIds.entries()) {
    requireString(claimId, `${path}.claimIds[${claimIdIndex}]`)
    const ledgerStatus = claimLedgerStatuses.get(claimId)
    if (!ledgerStatus) fail(`${path} references unknown claim id ${claimId}`)
    if (ledgerStatus === "context-only" && claim.status === "verified") {
      fail(`${path} promotes context-only ledger claim ${claimId} to verified`)
    }
  }
}

function narrativeStrings(value, key = "") {
  if (key === "claimIds" || key === "href" || key === "slug") return []
  if (typeof value === "string") return [value]
  if (Array.isArray(value)) return value.flatMap((item) => narrativeStrings(item, key))
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([childKey, child]) =>
      narrativeStrings(child, childKey),
    )
  }
  return []
}

const raw = await readFile(jsonPath, "utf8")
const data = JSON.parse(raw)

try {
  const source = JSON.parse(await readFile(sourcePath, "utf8"))
  if (JSON.stringify(source) !== JSON.stringify(data)) {
    fail("public content is stale against career-docs; run npm run content:sync")
  }
} catch (error) {
  if (error?.code !== "ENOENT" || process.env.PORTFOLIO_PUBLIC_SOURCE) throw error
}

for (const pattern of internalPatterns) {
  if (pattern.test(raw)) fail(`public projection contains blocked internal marker ${pattern}`)
}
if (/\b(?:unsupported|conflicting)\b/.test(raw)) {
  fail("unsupported or conflicting claim status is present")
}

if (data?.schemaVersion !== 1) fail("schemaVersion must be 1")
requireString(data?.profile?.role, "profile.role")
if (!Array.isArray(data?.roleLenses) || data.roleLenses.length !== 3) {
  fail("roleLenses must contain the three approved lenses")
}
const lensIds = data.roleLenses.map((lens) => lens.id)
if (JSON.stringify(lensIds) !== JSON.stringify(expectedLensIds)) {
  fail(`role lens ids must be ${expectedLensIds.join(", ")}`)
}

if (!Array.isArray(data?.cases) || data.cases.length < 5) {
  fail("at least five public cases are required")
}
const slugs = new Set()
for (const [caseIndex, item] of data.cases.entries()) {
  const path = `cases[${caseIndex}]`
  requireString(item?.slug, `${path}.slug`)
  requireString(item?.title, `${path}.title`)
  requireString(item?.role, `${path}.role`)
  requireString(item?.verificationMethod, `${path}.verificationMethod`)
  requireString(item?.problem, `${path}.problem`)
  if (slugs.has(item.slug)) fail(`duplicate case slug ${item.slug}`)
  slugs.add(item.slug)
  if (!allowedDisclosureStatuses.has(item?.disclosure?.status)) {
    fail(`${path}.disclosure.status is missing or invalid`)
  }
  requireString(item?.disclosure?.note, `${path}.disclosure.note`)
  if (!Array.isArray(item?.validation) || item.validation.length === 0) {
    fail(`${path}.validation must not be empty`)
  }
  if (!Array.isArray(item?.outcomes) || item.outcomes.length === 0) {
    fail(`${path}.outcomes must not be empty`)
  }
  item.validation.forEach((claim, index) => checkClaim(claim, `${path}.validation[${index}]`))
  item.outcomes.forEach((claim, index) => checkClaim(claim, `${path}.outcomes[${index}]`))
  for (const [evidenceIndex, evidence] of item.evidence.entries()) {
    requireString(evidence?.label, `${path}.evidence[${evidenceIndex}].label`)
    if (!allowedClaimStatuses.has(evidence?.status)) {
      fail(`${path}.evidence[${evidenceIndex}].status must be verified or context-only`)
    }
  }
  if (item.disclosure.status === "anonymized") {
    const text = JSON.stringify(item)
    for (const blockedName of anonymizedDenylist) {
      if (text.includes(blockedName)) fail(`${path} leaks anonymized name ${blockedName}`)
    }
  }
  const allowedNumbers = allowedNumericClaims.get(item.slug) ?? new Set()
  const numbers = narrativeStrings(item)
    .flatMap((text) => text.match(/(?<![A-Za-z])\d+(?:[.,]\d+)?(?![A-Za-z])/g) ?? [])
    .filter((number) => !allowedNumbers.has(number))
  if (numbers.length > 0) {
    fail(`${path} contains unapproved numeric claims: ${[...new Set(numbers)].join(", ")}`)
  }
}

for (const lens of data.roleLenses) {
  for (const slug of lens.caseOrder) {
    if (!slugs.has(slug)) fail(`lens ${lens.id} references unknown case ${slug}`)
  }
}

if (!Array.isArray(data?.roleDossiers) || data.roleDossiers.length !== 4) {
  fail("roleDossiers must contain the three preserved role pages and The Founders dossier")
}
const expectedDossierSlugs = new Set([
  "alwayz-shopport-ai-data",
  "moais-ai-llm",
  "overdare-ai-agent",
  "thefounders-fde",
])
for (const [dossierIndex, dossier] of data.roleDossiers.entries()) {
  const path = `roleDossiers[${dossierIndex}]`
  requireString(dossier?.slug, `${path}.slug`)
  requireString(dossier?.company, `${path}.company`)
  if (!expectedDossierSlugs.delete(dossier.slug)) {
    fail(`${path}.slug is duplicated or not an approved role dossier`)
  }
  const dossierText = JSON.stringify(dossier)
  const allowedPublicNames = dossierPublicNameAllowlist.get(dossier.slug) ?? new Set()
  for (const blockedName of anonymizedDenylist) {
    if (dossierText.includes(blockedName) && !allowedPublicNames.has(blockedName)) {
      fail(`${path} leaks non-public project name ${blockedName}`)
    }
  }
  if (!Array.isArray(dossier?.existingEvidence) || dossier.existingEvidence.length === 0) {
    fail(`${path}.existingEvidence must not be empty`)
  }
  dossier.existingEvidence.forEach((claim, index) =>
    checkClaim(claim, `${path}.existingEvidence[${index}]`),
  )
  if (!Array.isArray(dossier?.futureProposal) || dossier.futureProposal.length === 0) {
    fail(`${path}.futureProposal must not be empty`)
  }
  if (dossier.applicationNote !== undefined) {
    requireString(dossier.applicationNote, `${path}.applicationNote`)
  }
  if (dossier.reviewCue !== undefined) {
    requireString(dossier.reviewCue, `${path}.reviewCue`)
  }
  if (dossier.metrics !== undefined) {
    if (!Array.isArray(dossier.metrics) || dossier.metrics.length === 0) {
      fail(`${path}.metrics must be a non-empty array when present`)
    }
    for (const [metricIndex, metric] of dossier.metrics.entries()) {
      requireString(metric?.label, `${path}.metrics[${metricIndex}].label`)
      requireString(metric?.value, `${path}.metrics[${metricIndex}].value`)
      requireString(metric?.note, `${path}.metrics[${metricIndex}].note`)
    }
  }
  if (dossier.projectGroups !== undefined) {
    if (!Array.isArray(dossier.projectGroups) || dossier.projectGroups.length === 0) {
      fail(`${path}.projectGroups must be a non-empty array when present`)
    }
    const groupIds = new Set()
    for (const [groupIndex, group] of dossier.projectGroups.entries()) {
      const groupPath = `${path}.projectGroups[${groupIndex}]`
      requireString(group?.id, `${groupPath}.id`)
      if (!/^[a-z0-9][a-z0-9-]*$/.test(group.id)) fail(`${groupPath}.id is invalid`)
      if (groupIds.has(group.id)) fail(`${groupPath}.id is duplicated`)
      groupIds.add(group.id)
      requireString(group?.eyebrow, `${groupPath}.eyebrow`)
      requireString(group?.title, `${groupPath}.title`)
      requireString(group?.note, `${groupPath}.note`)
      if (!Array.isArray(group?.projects) || group.projects.length === 0) {
        fail(`${groupPath}.projects must not be empty`)
      }
      for (const [projectIndex, project] of group.projects.entries()) {
        const projectPath = `${groupPath}.projects[${projectIndex}]`
        requireString(project?.name, `${projectPath}.name`)
        requireString(project?.meta, `${projectPath}.meta`)
        requireString(project?.summary, `${projectPath}.summary`)
        requireString(project?.sourceLabel, `${projectPath}.sourceLabel`)
        if (project.outcome !== undefined) requireString(project.outcome, `${projectPath}.outcome`)
        if (!Array.isArray(project?.highlights) || project.highlights.length === 0) {
          fail(`${projectPath}.highlights must not be empty`)
        }
        project.highlights.forEach((highlight, highlightIndex) =>
          requireString(highlight, `${projectPath}.highlights[${highlightIndex}]`),
        )
      }
    }
  }
  if (dossier.evidenceSection !== undefined) {
    requireString(dossier.evidenceSection?.eyebrow, `${path}.evidenceSection.eyebrow`)
    requireString(dossier.evidenceSection?.title, `${path}.evidenceSection.title`)
    requireString(dossier.evidenceSection?.note, `${path}.evidenceSection.note`)
  }
  if (dossier.caseSlugs !== undefined) {
    if (!Array.isArray(dossier.caseSlugs) || dossier.caseSlugs.length === 0) {
      fail(`${path}.caseSlugs must be a non-empty array when present`)
    }
    for (const [slugIndex, slug] of dossier.caseSlugs.entries()) {
      requireString(slug, `${path}.caseSlugs[${slugIndex}]`)
      if (!slugs.has(slug)) fail(`${path}.caseSlugs references unknown case ${slug}`)
    }
  }
  if (dossier.evidenceMap !== undefined) {
    requireString(dossier.evidenceMap.caption, `${path}.evidenceMap.caption`)
    requireString(dossier.evidenceMap.note, `${path}.evidenceMap.note`)
    if (!Array.isArray(dossier.evidenceMap.stages) || dossier.evidenceMap.stages.length < 3) {
      fail(`${path}.evidenceMap.stages must contain at least three stages`)
    }
    for (const [stageIndex, stage] of dossier.evidenceMap.stages.entries()) {
      requireString(stage?.label, `${path}.evidenceMap.stages[${stageIndex}].label`)
      requireString(stage?.detail, `${path}.evidenceMap.stages[${stageIndex}].detail`)
      if (!allowedClaimStatuses.has(stage?.status)) {
        fail(`${path}.evidenceMap.stages[${stageIndex}].status must be verified or context-only`)
      }
    }
  }
  if (dossier.fitMap !== undefined) {
    requireString(dossier.fitMap?.eyebrow, `${path}.fitMap.eyebrow`)
    requireString(dossier.fitMap?.title, `${path}.fitMap.title`)
    requireString(dossier.fitMap?.note, `${path}.fitMap.note`)
    if (!Array.isArray(dossier.fitMap?.items) || dossier.fitMap.items.length === 0) {
      fail(`${path}.fitMap.items must not be empty`)
    }
    for (const [itemIndex, item] of dossier.fitMap.items.entries()) {
      requireString(item?.workstream, `${path}.fitMap.items[${itemIndex}].workstream`)
      requireString(item?.evidence, `${path}.fitMap.items[${itemIndex}].evidence`)
      requireString(item?.firstCheck, `${path}.fitMap.items[${itemIndex}].firstCheck`)
    }
  }
  const allowedDossierNumbers = dossierNumericAllowlist.get(dossier.slug)
  if (allowedDossierNumbers) {
    const numbers = narrativeStrings(dossier)
      .flatMap((text) => text.match(/(?<![A-Za-z])\d+(?:[.,]\d+)?(?![A-Za-z])/g) ?? [])
      .filter((number) => !allowedDossierNumbers.has(number))
    if (numbers.length > 0) {
      fail(`${path} contains unapproved numeric claims: ${[...new Set(numbers)].join(", ")}`)
    }
  }
}
if (expectedDossierSlugs.size > 0) {
  fail(`missing role dossiers: ${[...expectedDossierSlugs].join(", ")}`)
}

if (!Array.isArray(data?.legacyRedirects) || data.legacyRedirects.length === 0) {
  fail("legacyRedirects must not be empty")
}
const redirectSources = new Set()
for (const [redirectIndex, redirect] of data.legacyRedirects.entries()) {
  const path = `legacyRedirects[${redirectIndex}]`
  requireString(redirect?.source, `${path}.source`)
  requireString(redirect?.destination, `${path}.destination`)
  if (redirectSources.has(redirect.source)) fail(`duplicate redirect source ${redirect.source}`)
  redirectSources.add(redirect.source)
  const destinationSlug = redirect.destination.replace(/^\/portfolio\//, "")
  if (!slugs.has(destinationSlug)) {
    fail(`${path}.destination references unknown public case ${redirect.destination}`)
  }
}

const withheld = new Set((data.withheldCases ?? []).map((item) => item.slug))
for (const required of [
  "evidence-gated-ai-recommendation-pipeline",
  "self-improving-social-agents",
]) {
  if (!withheld.has(required)) fail(`required withheld case ${required} is missing`)
}

const expectedGenerated = `// Generated by npm run content:sync. Do not edit by hand.\nimport type { PortfolioPublicProjection } from "@/lib/public-content"\n\nexport const portfolioPublic = ${JSON.stringify(data, null, 2)} as const satisfies PortfolioPublicProjection\n`
const generated = await readFile(tsPath, "utf8")
if (generated !== expectedGenerated) {
  fail("generated TypeScript is out of sync; run npm run content:sync")
}

console.log(`Validated ${data.cases.length} public cases, ${data.roleLenses.length} lenses, and generated-content drift`)
