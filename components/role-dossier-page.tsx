import Link from "next/link"
import { ArrowLeft, Check, CircleDashed, Lightbulb } from "lucide-react"

import {
  CaseIndexRow,
  EvidenceChainFigure,
} from "@/components/dossier"
import { portfolioPublic } from "@/lib/public-content"
import type {
  PublicCase,
  RoleDossier,
  RoleProjectGroup,
} from "@/lib/public-content"

const dossiers: readonly RoleDossier[] = portfolioPublic.roleDossiers
const publicCases: readonly PublicCase[] = portfolioPublic.cases

function ProjectGroupSection({
  slug,
  group,
  muted,
}: {
  slug: string
  group: RoleProjectGroup
  muted: boolean
}) {
  const titleId = `${slug}-${group.id}-title`

  return (
    <section
      id={`${slug}-${group.id}`}
      className={`page-section ${muted ? "bg-surface-muted" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="site-container site-grid gap-y-8">
        <div className="col-span-4 md:col-span-3 xl:col-span-5">
          <p className="eyebrow text-action">{group.eyebrow}</p>
          <h2 id={titleId} className="section-title mt-3">
            {group.title}
          </h2>
          <p className="mt-4 max-w-md text-sm text-ink-muted">{group.note}</p>
        </div>

        <div className="col-span-4 border-t border-line-strong md:col-span-5 xl:col-span-9 xl:col-start-8">
          {group.projects.map((project, index) => (
            <article key={project.name} className="border-b border-line-strong py-7">
              <div className="grid gap-6 xl:grid-cols-9 xl:gap-10">
                <div className="xl:col-span-4">
                  <p className="eyebrow text-context">
                    {String(index + 1).padStart(2, "0")} · {project.meta}
                  </p>
                  <h3 className="mt-3 text-2xl md:text-3xl">{project.name}</h3>
                  {project.summary ? (
                    <p className="mt-3 text-sm text-ink-muted md:text-base">
                      {project.summary}
                    </p>
                  ) : null}
                </div>

                <div className="xl:col-span-5">
                  {project.story ? (
                    <dl className="border-t border-line-strong text-sm md:text-base">
                      {([
                        ["업무 맥락", project.story.context],
                        ["문제", project.story.problem],
                        ["만든 것", project.story.build],
                        ["결과", project.story.result],
                      ] as const).map(([label, value]) => (
                        <div
                          key={label}
                          className={`grid gap-2 border-b border-line-strong py-4 md:grid-cols-[6rem_minmax(0,1fr)] md:gap-5 ${
                            label === "결과" ? "text-foreground" : "text-ink-muted"
                          }`}
                        >
                          <dt className={`eyebrow ${label === "결과" ? "text-action" : ""}`}>
                            {label}
                          </dt>
                          <dd className={label === "결과" ? "font-semibold" : ""}>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    <>
                      {project.outcome ? (
                        <p className="border-l-2 border-[var(--action)] pl-4 font-heading text-lg font-bold leading-relaxed text-foreground md:text-xl">
                          {project.outcome}
                        </p>
                      ) : null}
                      {project.highlights?.length ? (
                        <ul className={`${project.outcome ? "mt-5" : ""} space-y-3 text-sm text-ink-muted md:text-base`}>
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-2">
                              <span className="mt-[0.7rem] size-1 bg-[var(--action)]" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
              {project.sourceLabel ? (
                <p className="status-label mt-5 text-context">{project.sourceLabel}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function RoleDossierPage({ slug }: { slug: string }) {
  const dossier = dossiers.find((item) => item.slug === slug)
  if (!dossier) return null

  const relatedCases = (dossier.caseSlugs ?? [])
    .map((caseSlug) => publicCases.find((item) => item.slug === caseSlug))
    .filter((item): item is PublicCase => Boolean(item))

  return (
    <article>
      <header className="page-intro role-dossier-intro">
        <div className="site-container">
          <Link className="link-arrow mb-6 w-fit text-foreground" href="/portfolio">
            <ArrowLeft className="size-4" aria-hidden="true" /> 사례 인덱스
          </Link>
          <div className="site-grid gap-y-6">
            <div className="col-span-4 md:col-span-5 xl:col-span-10">
              <p className="eyebrow">지원 역할 문서</p>
              <h1 className="display-title mt-4">{dossier.company}</h1>
              <p className="mt-3 font-heading text-xl font-bold text-action md:text-3xl">
                {dossier.role}
              </p>
              <p className="lede mt-4">{dossier.thesis}</p>
            </div>
            <div className="col-span-4 self-end border-y py-5 text-sm text-ink-muted md:col-span-3 xl:col-span-5 xl:col-start-12">
              {dossier.reviewCue ??
                "실제 수행 사례와 합류 후 확인할 가설을 별도 구역에 적었습니다."}
            </div>
          </div>
          {dossier.applicationNote ? (
            <p className="mt-6 border-l-2 border-context pl-4 text-sm text-ink-muted md:max-w-4xl md:text-base">
              {dossier.applicationNote}
            </p>
          ) : null}

          {dossier.metrics?.length ? (
            <dl className="mt-10 grid gap-px border-y border-line-strong bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
              {dossier.metrics.map((metric) => (
                <div key={metric.label} className="bg-canvas px-0 py-5 md:p-6">
                  <dt className="eyebrow">{metric.label}</dt>
                  <dd className="mt-3 font-heading text-[clamp(1.35rem,2.4vw,2.15rem)] font-bold leading-tight text-action">
                    {metric.value}
                  </dd>
                  <dd className="mt-2 text-xs text-ink-muted md:text-sm">{metric.note}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </header>

      {dossier.projectGroups?.map((group, index) => (
        <ProjectGroupSection
          key={group.id}
          slug={slug}
          group={group}
          muted={index % 2 === 1}
        />
      ))}

      <section className="page-section" aria-labelledby={`${slug}-evidence-title`}>
        <div className="site-container">
          <div className="site-grid gap-y-8">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <p className="eyebrow text-verified">
                {dossier.evidenceSection?.eyebrow ?? "이미 수행"}
              </p>
              <h2 id={`${slug}-evidence-title`} className="section-title mt-3">
                {dossier.evidenceSection?.title ?? "실제로 구현한 범위"}
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-muted">
                {dossier.evidenceSection?.note ??
                  "저장소, 코드와 프로젝트 기록으로 확인한 내용만 적었습니다."}
              </p>
            </div>
            <div className="col-span-4 md:col-span-5 xl:col-span-9 xl:col-start-8">
              <ol className="border-t">
                {dossier.existingEvidence.map((item) => (
                  <li key={item.text} className="grid grid-cols-[2rem_minmax(0,1fr)] border-b py-5">
                    {item.status === "verified" ? (
                      <Check className="mt-1 size-4 text-verified" aria-hidden="true" />
                    ) : (
                      <CircleDashed className="mt-1 size-4 text-context" aria-hidden="true" />
                    )}
                    <div>
                      <p className="font-semibold">{item.text}</p>
                      <span
                        className={`status-label mt-3 ${
                          item.status === "verified" ? "text-verified" : "text-context"
                        }`}
                      >
                        {item.sourceLabel ?? (item.status === "verified" ? "저장소에서 확인" : "프로젝트 기록")}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {dossier.evidenceMap ? (
            <div className="mt-12">
              <EvidenceChainFigure
                caption={dossier.evidenceMap.caption}
                note={dossier.evidenceMap.note}
                label={dossier.evidenceMap.label}
                stages={dossier.evidenceMap.stages}
              />
            </div>
          ) : null}

          {relatedCases.length > 0 ? (
            <div className="mt-14" aria-labelledby={`${slug}-related-title`}>
              <div className="site-grid mb-6 gap-y-3">
                <div className="col-span-4 md:col-span-4 xl:col-span-7">
                  <p className="eyebrow">관련 사례</p>
                  <h3 id={`${slug}-related-title`} className="mt-3 text-2xl md:text-3xl">
                    구현 사례 더 보기
                  </h3>
                </div>
              </div>
              {relatedCases.map((caseStudy) => (
                <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {dossier.fitMap ? (
        <section
          className="page-section bg-surface-muted"
          aria-labelledby={`${slug}-fit-title`}
        >
          <div className="site-container site-grid gap-y-8">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <p className="eyebrow text-action">{dossier.fitMap.eyebrow}</p>
              <h2 id={`${slug}-fit-title`} className="section-title mt-3">
                {dossier.fitMap.title}
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-muted">
                {dossier.fitMap.note}
              </p>
            </div>

            <div className="col-span-4 border-t border-line-strong md:col-span-5 xl:col-span-9 xl:col-start-8">
              {dossier.fitMap.items.map((item, index) => (
                <article
                  key={item.workstream}
                  className="grid gap-5 border-b border-line-strong py-6 xl:grid-cols-9"
                >
                  <div className="xl:col-span-3">
                    <p className="eyebrow text-context">
                      과업 후보 {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-xl md:text-2xl">{item.workstream}</h3>
                  </div>
                  <dl className="grid gap-5 text-sm md:grid-cols-2 md:text-base xl:col-span-6">
                    <div>
                      <dt className="eyebrow">연결되는 경험</dt>
                      <dd className="mt-2 text-ink-muted">{item.evidence}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">첫 검증 기준</dt>
                      <dd className="mt-2 text-ink-muted">{item.firstCheck}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`page-section ${dossier.fitMap ? "" : "bg-surface-muted"}`}
        aria-labelledby={`${slug}-proposal-title`}
      >
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <p className="eyebrow text-context">
              {dossier.proposalSection?.eyebrow ?? "합류 후 검증"}
            </p>
            <h2 id={`${slug}-proposal-title`} className="section-title mt-3">
              {dossier.proposalSection?.title ?? "먼저 확인할 가설"}
            </h2>
            <p className="mt-4 max-w-md text-sm text-ink-muted">
              {dossier.proposalSection?.note ??
                "인터뷰와 작은 파일럿으로 문제와 성과 기준을 먼저 확인할 제안입니다."}
            </p>
          </div>
          <ol className="col-span-4 border-t border-line-strong md:col-span-5 xl:col-span-9 xl:col-start-8">
            {dossier.futureProposal.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[2rem_minmax(0,1fr)] border-b border-line-strong py-5"
              >
                <Lightbulb className="mt-1 size-4 text-context" aria-hidden="true" />
                <p className="font-semibold">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </article>
  )
}
