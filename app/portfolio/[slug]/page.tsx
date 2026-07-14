import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

import {
  ArchitectureFigure,
  CaseFactPanel,
  DecisionBlock,
  DisclosureNote,
  EvidenceFigure,
  ValidationBlock,
} from "@/components/dossier"
import { portfolioPublic } from "@/lib/public-content"

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return [
    ...portfolioPublic.cases.map((item) => ({ slug: item.slug })),
    ...portfolioPublic.withheldCases.map((item) => ({ slug: item.slug })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = portfolioPublic.cases.find((item) => item.slug === slug)
  if (caseStudy) {
    return {
      title: caseStudy.seo.title,
      description: caseStudy.seo.description,
      alternates: { canonical: `/portfolio/${slug}` },
      robots: { index: caseStudy.seo.index, follow: true },
      openGraph: {
        title: caseStudy.seo.title,
        description: caseStudy.seo.description,
        url: `/portfolio/${slug}`,
      },
    }
  }

  const withheld = portfolioPublic.withheldCases.find((item) => item.slug === slug)
  if (withheld) {
    return {
      title: `${withheld.title} — 비공개 사례`,
      description: withheld.reason,
      alternates: { canonical: `/portfolio/${slug}` },
      robots: { index: false, follow: false, nocache: true },
    }
  }

  return { title: "사례를 찾을 수 없습니다" }
}

function WithheldCase({ title, reason }: { title: string; reason: string }) {
  return (
    <section className="page-intro min-h-[65dvh]">
      <div className="site-container site-grid gap-y-8">
        <div className="col-span-4 md:col-span-5 xl:col-span-9">
          <p className="eyebrow text-withheld">Case unavailable</p>
          <h1 className="section-title mt-5">{title}</h1>
          <p className="lede mt-6">{reason}</p>
        </div>
        <aside className="col-span-4 self-end border-y py-5 text-sm text-ink-muted md:col-span-3 xl:col-span-5 xl:col-start-11">
          이 프로젝트는 아직 소개할 수 있는 범위를 확인하고 있습니다. 정리가 끝나면 실제로 맡은 역할과 결과를 중심으로 업데이트하겠습니다.
        </aside>
        <Link className="link-arrow col-span-4 w-fit" href="/portfolio">
          <ArrowLeft className="size-4" aria-hidden="true" /> 전체 사례로 돌아가기
        </Link>
      </div>
    </section>
  )
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params
  const withheld = portfolioPublic.withheldCases.find((item) => item.slug === slug)
  if (withheld) return <WithheldCase title={withheld.title} reason={withheld.reason} />

  const caseStudy = portfolioPublic.cases.find((item) => item.slug === slug)
  if (!caseStudy) notFound()

  const caseIndex = portfolioPublic.cases.findIndex((item) => item.slug === slug)
  const nextCase = portfolioPublic.cases[(caseIndex + 1) % portfolioPublic.cases.length]
  const relatedEvidence = caseStudy.evidence.filter(
    (item) => "href" in item && Boolean(item.href),
  )

  return (
    <article className="public-case">
      <header className="page-intro">
        <div className="site-container">
          <Link className="link-arrow mb-8 w-fit text-foreground" href="/portfolio">
            <ArrowLeft className="size-4" aria-hidden="true" /> 사례 인덱스
          </Link>
          <div className="site-grid gap-y-8">
            <div className="col-span-4 md:col-span-5 xl:col-span-10">
              <p className="eyebrow">{caseStudy.kicker}</p>
              <h1 className="display-title mt-5">{caseStudy.title}</h1>
              <p className="lede mt-6 md:mt-8">{caseStudy.summary}</p>
            </div>
            <div className="col-span-4 self-end md:col-span-3 xl:col-span-5 xl:col-start-12">
              <DisclosureNote note={caseStudy.disclosure.note} />
            </div>
          </div>
          <div className="mt-10">
            <CaseFactPanel
              items={[
                { label: "역할", value: caseStudy.role },
                { label: "영역", value: caseStudy.domain },
                { label: "구분", value: caseStudy.period },
              ]}
            />
          </div>
        </div>
      </header>

      <section className="page-section" aria-labelledby="problem-title">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <h2 id="problem-title" className="section-title mt-3">문제와 제약</h2>
          </div>
          <div className="col-span-4 md:col-span-5 xl:col-span-9 xl:col-start-8">
            <p className="text-xl leading-relaxed md:text-2xl">{caseStudy.problem}</p>
            <ul className="mt-8 border-t">
              {caseStudy.constraints.map((constraint, index) => (
                <li key={constraint} className="grid grid-cols-[2rem_minmax(0,1fr)] border-b py-4 text-sm md:py-5 md:text-base">
                  <span className="font-mono text-xs text-action">{String(index + 1).padStart(2, "0")}</span>
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="responsibility-title">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <h2 id="responsibility-title" className="section-title mt-3">내가 맡은 범위</h2>
          </div>
          <ol className="col-span-4 border-t md:col-span-5 xl:col-span-9 xl:col-start-8">
            {caseStudy.responsibility.map((item, index) => (
              <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b py-5 md:py-6">
                <span className="font-mono text-xs text-action">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section" aria-labelledby="decision-title">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <h2 id="decision-title" className="section-title mt-3">핵심 판단</h2>
          </div>
          <div className="col-span-4 md:col-span-5 xl:col-span-9 xl:col-start-8">
            {caseStudy.decisions.map((decision, index) => (
              <DecisionBlock key={decision.title} index={index} title={decision.title} body={decision.body} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="implementation-title">
        <div className="site-container">
          <div className="site-grid gap-y-8">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <h2 id="implementation-title" className="section-title mt-3">구현한 내용</h2>
            </div>
            <ol className="col-span-4 border-t md:col-span-5 xl:col-span-9 xl:col-start-8">
              {caseStudy.implementation.map((item, index) => (
                <li key={item} className="grid grid-cols-[2.5rem_minmax(0,1fr)] border-b py-4 md:py-5">
                  <span className="font-mono text-xs text-action">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 md:mt-12">
            <ArchitectureFigure caption={caseStudy.diagram.caption} nodes={caseStudy.diagram.nodes} />
          </div>
        </div>
      </section>

      <section className="page-section" aria-labelledby="validation-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <h2 id="validation-title" className="section-title mt-3">구현과 결과</h2>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <ValidationBlock id="case-validation" claims={caseStudy.validation} />
            <ValidationBlock id="case-outcomes" title="결과" claims={caseStudy.outcomes} />
          </div>
        </div>
      </section>

      {relatedEvidence.length > 0 ? (
        <section className="page-section" aria-labelledby="evidence-title">
          <div className="site-container">
            <div className="site-grid mb-8 gap-y-4">
              <div className="col-span-4 md:col-span-3 xl:col-span-5">
                <h2 id="evidence-title" className="section-title mt-3">관련 자료</h2>
              </div>
            </div>
            <div className="grid border-b sm:grid-cols-2">
              {relatedEvidence.map((evidence) => (
                <EvidenceFigure key={evidence.label} evidence={evidence} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <nav className="border-t" aria-label="다음 사례">
        <div className="site-container grid gap-0 md:grid-cols-2">
          <Link className="group min-h-36 border-b py-7 md:border-b-0 md:border-r md:pr-8" href="/portfolio">
            <span className="font-mono text-xs text-ink-muted">전체 사례</span>
            <span className="mt-4 flex items-center gap-2 font-heading text-2xl font-bold">
              <ArrowLeft className="size-5 transition-transform duration-150 group-hover:-translate-x-1" aria-hidden="true" />
              모든 프로젝트
            </span>
          </Link>
          <Link className="group min-h-36 py-7 md:pl-8" href={`/portfolio/${nextCase.slug}`}>
            <span className="font-mono text-xs text-ink-muted">다음 사례</span>
            <span className="mt-4 flex items-center justify-between gap-3 font-heading text-2xl font-bold">
              {nextCase.title}
              <ArrowRight className="size-5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </nav>
    </article>
  )
}
