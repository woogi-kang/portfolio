import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check, CircleDashed, LockKeyhole } from "lucide-react"

import { portfolioPublic } from "@/content/portfolio-public.generated"
import type {
  ClaimStatus,
  PublicCase,
  PublicClaim,
  PublicEvidence,
  RoleEvidenceStage,
  RoleLensId,
} from "@/lib/public-content"
import { cn } from "@/lib/utils"

const disclosureLabel = {
  public: "공개",
  anonymized: "익명화",
  withheld: "보류",
} as const

const evidenceKindLabel = {
  repository: "저장소",
  command: "명령",
  diagram: "구조도",
  screen: "화면",
} as const

function StatusMark({
  status,
  label,
}: {
  status: ClaimStatus
  label?: string
}) {
  return (
    <span className={cn("status-label", status === "verified" ? "text-verified" : "text-context")}>
      {label ?? (status === "verified" ? "공개 검증" : "맥락 확인")}
    </span>
  )
}

export function RoleLensNav({
  activeLens,
  path = "/",
  className,
}: {
  activeLens?: RoleLensId
  path?: string
  className?: string
}) {
  return (
    <nav className={cn("border-y", className)} aria-label="직무 렌즈">
      <div className="flex min-w-0 overflow-x-auto">
        <Link
          href={path}
          aria-current={!activeLens ? "page" : undefined}
          className={cn(
            "flex min-h-12 shrink-0 items-center border-r px-4 font-mono text-xs font-bold text-ink-muted transition-[background-color,color] duration-150 hover:bg-muted hover:text-foreground",
            !activeLens && "bg-foreground text-background hover:bg-foreground hover:text-background",
          )}
        >
          전체
        </Link>
        {portfolioPublic.roleLenses.map((lens) => (
          <Link
            key={lens.id}
            href={`${path}?lens=${lens.id}`}
            aria-current={activeLens === lens.id ? "page" : undefined}
            className={cn(
              "flex min-h-12 shrink-0 items-center border-r px-4 font-mono text-xs font-bold text-ink-muted transition-[background-color,color] duration-150 hover:bg-muted hover:text-foreground",
              activeLens === lens.id && "bg-foreground text-background hover:bg-foreground hover:text-background",
            )}
          >
            {lens.label}
          </Link>
        ))}
      </div>
      <p className="border-t px-4 py-2 font-mono text-[10px] text-ink-muted sm:hidden">
        좌우로 이동해 렌즈 전환
      </p>
    </nav>
  )
}

export function CareerTrajectory({
  entries = portfolioPublic.trajectory,
}: {
  entries?: typeof portfolioPublic.trajectory
}) {
  return (
    <ol className="border-t" aria-label="경력 궤적">
      {entries.map((entry, index) => (
        <li key={entry.phase} className="site-grid border-b py-5 md:py-7">
          <p className="col-span-1 font-mono text-xs text-ink-muted">0{index + 1}</p>
          <div className="col-span-3 md:col-span-2 xl:col-span-3">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-mono text-xs font-bold text-action">{entry.phase}</p>
              <StatusMark status={entry.status} />
            </div>
            <p className="mt-1 font-mono text-xs text-ink-muted">{entry.period}</p>
          </div>
          <div className="col-span-4 mt-4 md:col-span-5 md:mt-0 xl:col-span-10">
            <h3 className="text-xl md:text-2xl">{entry.title}</h3>
            <p className="mt-2 max-w-3xl text-sm text-ink-muted md:text-base">{entry.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function CaseIndexRow({
  caseStudy,
}: {
  caseStudy: PublicCase
}) {
  const label = disclosureLabel[caseStudy.disclosure.status]

  return (
    <article className="group border-t last:border-b">
      <Link
        href={`/portfolio/${caseStudy.slug}`}
        className="grid min-h-32 gap-4 rounded-none py-5 transition-[background-color] duration-150 hover:bg-muted/70 lg:grid-cols-[minmax(0,1.15fr)_minmax(9rem,.65fr)_minmax(10rem,.65fr)_8rem_2.75rem] lg:items-center lg:px-2"
        aria-label={`${caseStudy.title} 사례 보기`}
      >
        <span>
          <span className="block font-heading text-xl font-bold md:text-2xl">{caseStudy.title}</span>
          <span className="mt-1 block max-w-2xl text-sm text-ink-muted">{caseStudy.summary}</span>
        </span>
        <span className="text-sm">
          <span className="block font-semibold">{caseStudy.role}</span>
          <span className="mt-1 block text-ink-muted">{caseStudy.domain}</span>
        </span>
        <span className="text-sm text-ink-muted">
          <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-wider lg:hidden">확인 방법</span>
          {caseStudy.verificationMethod}
        </span>
        <span className={cn("status-label w-fit", caseStudy.disclosure.status === "public" ? "text-verified" : "text-context")}>
          {label}
        </span>
        <ArrowRight className="size-5 text-action transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}

export function CaseFactPanel({
  items,
}: {
  items: Array<{ label: string; value: string }>
}) {
  return (
    <dl className="grid border-l border-t sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="border-b border-r p-4 md:p-5">
          <dt className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-muted">{item.label}</dt>
          <dd className="mt-2 text-sm font-semibold">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export function DecisionBlock({
  index,
  title,
  body,
}: {
  index: number
  title: string
  body: string
}) {
  return (
    <article className="grid gap-3 border-t py-6 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-6 md:py-8">
      <p className="font-mono text-xs text-action">D{String(index + 1).padStart(2, "0")}</p>
      <div>
        <h3 className="text-xl md:text-2xl">{title}</h3>
        <p className="mt-3 max-w-3xl text-ink-muted">{body}</p>
      </div>
    </article>
  )
}

export function ArchitectureFigure({
  caption,
  nodes,
}: {
  caption: string
  nodes: readonly string[]
}) {
  return (
    <figure className="structural-panel overflow-hidden">
      <figcaption className="flex items-center justify-between gap-4 border-b px-4 py-3 font-mono text-xs text-ink-muted">
        <span>{caption}</span>
        <span>공개용 구조도</span>
      </figcaption>
      <ol className="grid gap-0 p-4 md:grid-cols-[repeat(var(--node-count),minmax(0,1fr))] md:p-6" style={{ "--node-count": nodes.length } as React.CSSProperties}>
        {nodes.map((node, index) => (
          <li key={node} className="relative flex min-h-20 items-center border border-b-0 px-4 py-3 text-sm font-semibold last:border-b md:min-h-28 md:border-b md:border-r-0 md:last:border-r">
            <span className="mr-3 font-mono text-[10px] text-action">N{index + 1}</span>
            {node}
            {index < nodes.length - 1 ? (
              <ArrowRight className="absolute -bottom-3 left-1/2 z-10 size-5 -translate-x-1/2 rotate-90 bg-[var(--surface)] text-action md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:rotate-0" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="border-t px-4 py-3 text-xs text-ink-muted">
        내부 구조 원본이 아니라 공개 가능한 구성 요소만 단순화한 그림입니다.
      </p>
    </figure>
  )
}

export function EvidenceChainFigure({
  caption,
  note,
  label = "공개용 역량 지도",
  stages,
}: {
  caption: string
  note: string
  label?: string
  stages: readonly RoleEvidenceStage[]
}) {
  return (
    <figure className="structural-panel overflow-hidden">
      <figcaption className="grid gap-1 border-b px-4 py-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-4">
        <span className="font-mono text-xs font-bold text-foreground">{caption}</span>
        <span className="font-mono text-[10px] text-ink-muted">{label}</span>
      </figcaption>
      <ol className="grid p-4 lg:grid-cols-5 lg:p-6">
        {stages.map((stage, index) => (
          <li
            key={stage.label}
            className="relative border border-b-0 p-4 last:border-b lg:min-h-40 lg:border-b lg:border-r-0 lg:last:border-r"
          >
            <span className="font-mono text-[10px] font-bold text-context">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="mt-5 block text-lg">{stage.label}</strong>
            <span className="mt-2 block text-xs leading-relaxed text-ink-muted">{stage.detail}</span>
            {index < stages.length - 1 ? (
              <ArrowRight
                className="absolute -bottom-3 left-1/2 z-10 size-5 -translate-x-1/2 rotate-90 bg-[var(--surface)] text-action lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
      <p className="border-t px-4 py-3 text-xs text-ink-muted">{note}</p>
    </figure>
  )
}

export function EvidenceFigure({ evidence }: { evidence: PublicEvidence }) {
  const content = (
    <>
      <span className="font-mono text-xs font-bold text-action">{evidenceKindLabel[evidence.kind]}</span>
      <strong className="mt-3 block text-lg">{evidence.label}</strong>
      <span className="mt-2 block text-sm text-ink-muted">{evidence.detail}</span>
      <span className="mt-5 inline-flex items-center gap-2">
        <StatusMark status={evidence.status} />
        {evidence.href ? <ArrowUpRight className="size-4 text-action" aria-hidden="true" /> : null}
      </span>
    </>
  )

  if (evidence.href) {
    return (
      <Link
        href={evidence.href}
        target="_blank"
        rel="noreferrer"
        className="block min-h-44 border-t p-5 transition-[background-color] duration-150 hover:bg-muted md:p-6"
      >
        {content}
      </Link>
    )
  }

  return <div className="min-h-44 border-t p-5 md:p-6">{content}</div>
}

export function ValidationBlock({
  title = "검증",
  id,
  claims,
}: {
  title?: string
  id?: string
  claims: readonly PublicClaim[]
}) {
  const headingId = id ?? `validation-${title.replace(/\s+/g, "-")}`

  return (
    <section className="structural-panel" aria-labelledby={headingId}>
      <div className="border-b px-5 py-4">
        <h3 id={headingId} className="text-xl">{title}</h3>
      </div>
      <ul>
        {claims.map((claim) => (
          <li key={claim.text} className="grid gap-3 border-b p-5 last:border-b-0 md:grid-cols-[1.5rem_minmax(0,1fr)_auto] md:items-start">
            {claim.status === "verified" ? (
              <Check className="mt-1 size-4 text-verified" aria-hidden="true" />
            ) : (
              <CircleDashed className="mt-1 size-4 text-context" aria-hidden="true" />
            )}
            <p className="text-sm md:text-base">{claim.text}</p>
            <StatusMark status={claim.status} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function DisclosureNote({
  status,
  note,
}: {
  status: PublicCase["disclosure"]["status"]
  note: string
}) {
  return (
    <aside className="grid gap-4 border-y py-5 xl:grid-cols-[12rem_minmax(0,1fr)] xl:items-start" aria-label="공개 경계">
      <div className="flex items-center gap-2">
        <LockKeyhole className="size-4 text-ink-muted" aria-hidden="true" />
        <span className={cn("status-label", status === "public" ? "text-verified" : status === "anonymized" ? "text-context" : "text-withheld")}>
          {disclosureLabel[status]}
        </span>
      </div>
      <p className="text-sm text-ink-muted md:text-base">{note}</p>
    </aside>
  )
}

export function ExperienceTimeline({
  entries = portfolioPublic.experience,
}: {
  entries?: typeof portfolioPublic.experience
}) {
  return (
    <ol className="border-t" aria-label="경력 타임라인">
      {entries.map((entry) => (
        <li key={`${entry.period}-${entry.organization}`} className="grid gap-3 border-b py-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8 md:py-8">
          <p className="font-mono text-xs text-action">{entry.period}</p>
          <article>
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-ink-muted">{entry.organization}</p>
              <StatusMark
                status={entry.status}
                label={entry.status === "context-only" ? "공식 직함 미확정" : undefined}
              />
            </div>
            <h3 className="mt-1 text-xl md:text-2xl">{entry.role}</h3>
            <p className="mt-3 max-w-3xl text-ink-muted">{entry.summary}</p>
          </article>
        </li>
      ))}
    </ol>
  )
}
