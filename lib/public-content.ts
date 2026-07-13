export type RoleLensId =
  | "ai-product"
  | "product-fullstack"
  | "multiplatform-device"

export type ClaimStatus = "verified" | "context-only"

export type DisclosureStatus = "public" | "anonymized" | "withheld"

export type PublicClaim = {
  text: string
  status: ClaimStatus
  claimIds: string[]
  sourceLabel?: string
}

export type PublicEvidence = {
  label: string
  kind: "repository" | "command" | "diagram" | "screen"
  detail: string
  href?: string
  status: ClaimStatus
}

export type PublicCase = {
  slug: string
  title: string
  kicker: string
  period: string
  role: string
  domain: string
  verificationMethod: string
  summary: string
  problem: string
  constraints: string[]
  responsibility: string[]
  decisions: Array<{ title: string; body: string }>
  implementation: string[]
  validation: PublicClaim[]
  outcomes: PublicClaim[]
  evidence: PublicEvidence[]
  disclosure: {
    status: DisclosureStatus
    note: string
  }
  diagram: {
    caption: string
    nodes: string[]
  }
  lenses: RoleLensId[]
  seo: {
    title: string
    description: string
    index: boolean
  }
}

export type RoleLens = {
  id: RoleLensId
  label: string
  shortLabel: string
  summary: string
  caseOrder: string[]
}

export type RoleEvidenceStage = {
  label: string
  detail: string
  status: ClaimStatus
}

export type RoleDossier = {
  slug: string
  company: string
  role: string
  thesis: string
  applicationNote?: string
  existingEvidence: PublicClaim[]
  futureProposal: string[]
  caseSlugs?: string[]
  evidenceMap?: {
    caption: string
    note: string
    stages: RoleEvidenceStage[]
  }
}

export type PortfolioPublicProjection = {
  schemaVersion: number
  generatedFrom: string
  reviewedAt: string
  profile: {
    name: string
    nameEn: string
    role: string
    summary: string
    email: string
    github: string
    linkedin: string
    location: string
    image: string
  }
  roleLenses: RoleLens[]
  trajectory: Array<{
    phase: string
    period: string
    title: string
    body: string
    status: ClaimStatus
  }>
  cases: PublicCase[]
  withheldCases: Array<{
    slug: string
    title: string
    reason: string
  }>
  legacyRedirects: Array<{
    source: string
    destination: string
  }>
  experience: Array<{
    period: string
    organization: string
    role: string
    summary: string
    status: ClaimStatus
  }>
  skills: Array<{
    label: string
    items: string[]
  }>
  roleDossiers: RoleDossier[]
}

export { portfolioPublic } from "@/content/portfolio-public.generated"
