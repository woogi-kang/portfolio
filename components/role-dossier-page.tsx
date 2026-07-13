import Link from "next/link"
import { ArrowLeft, Check, CircleDashed, Lightbulb } from "lucide-react"

import {
  CaseIndexRow,
  EvidenceChainFigure,
} from "@/components/dossier"
import { portfolioPublic } from "@/lib/public-content"
import type { PublicCase, RoleDossier } from "@/lib/public-content"

const dossiers: readonly RoleDossier[] = portfolioPublic.roleDossiers
const publicCases: readonly PublicCase[] = portfolioPublic.cases

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
            <aside className="col-span-4 self-end border-y py-5 text-sm text-ink-muted md:col-span-3 xl:col-span-5 xl:col-start-12">
              실제 수행 사례와 합류 후 확인할 가설을 별도 구역에 적었습니다.
            </aside>
          </div>
          {dossier.applicationNote ? (
            <p className="mt-6 border-l-2 border-context pl-4 text-sm text-ink-muted md:max-w-4xl md:text-base">
              {dossier.applicationNote}
            </p>
          ) : null}
        </div>
      </header>

      <section className="page-section" aria-labelledby={`${slug}-evidence-title`}>
        <div className="site-container">
          <div className="site-grid gap-y-8">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <p className="eyebrow text-verified">이미 수행</p>
              <h2 id={`${slug}-evidence-title`} className="section-title mt-3">
                실제로 구현한 범위
              </h2>
              <p className="mt-4 max-w-md text-sm text-ink-muted">
                공개 저장소 또는 현재 사실 원장에서 확인한 내용만 적었습니다.
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
                        {item.sourceLabel ?? (item.status === "verified" ? "공개 저장소 검증" : "문서 확인")}
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
                    공개 범위 안에서 더 보기
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

      <section
        className="page-section bg-surface-muted"
        aria-labelledby={`${slug}-proposal-title`}
      >
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <p className="eyebrow text-context">합류 후 검증</p>
            <h2 id={`${slug}-proposal-title`} className="section-title mt-3">
              먼저 확인할 가설
            </h2>
            <p className="mt-4 max-w-md text-sm text-ink-muted">
              회사에서 이미 수행한 일이나 확정 계획이 아닙니다. 인터뷰와 작은 파일럿으로 먼저
              확인할 제안입니다.
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
