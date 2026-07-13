import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import {
  CaseIndexRow,
  ExperienceTimeline,
  RoleLensNav,
} from "@/components/dossier"
import { portfolioPublic } from "@/lib/public-content"
import type { RoleLensId } from "@/lib/public-content"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}): Promise<Metadata> {
  const { lens } = await searchParams

  return {
    title: "Resume — Product Engineer",
    description:
      "Device, Product Delivery, AI Systems로 확장해 온 Product Engineer 강태욱의 HTML 이력서입니다.",
    alternates: { canonical: "/resume" },
    robots: { index: lens === undefined, follow: true },
  }
}

function parseLens(value: string | string[] | undefined): RoleLensId | undefined {
  if (typeof value !== "string") return undefined
  return portfolioPublic.roleLenses.some((lens) => lens.id === value)
    ? (value as RoleLensId)
    : undefined
}

export default async function ResumePage({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}) {
  const { lens: lensParam } = await searchParams
  const activeLens = parseLens(lensParam)
  const lens = portfolioPublic.roleLenses.find((item) => item.id === activeLens)
  const caseOrder = lens?.caseOrder ?? [
    "woogi-harness",
    "smart-glasses-realtime-platform",
    "ott-multiplatform-integration",
  ]
  const selectedCases = caseOrder
    .map((slug) => portfolioPublic.cases.find((item) => item.slug === slug))
    .filter((item): item is (typeof portfolioPublic.cases)[number] => Boolean(item))
    .slice(0, 3)

  return (
    <article>
      <header className="page-intro">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-5 xl:col-span-10">
            <p className="eyebrow">HTML 이력서 · 공개용 문서</p>
            <h1 className="display-title mt-5">{portfolioPublic.profile.name}</h1>
            <p className="mt-5 font-heading text-xl font-bold text-action md:text-3xl">
              {portfolioPublic.profile.role}
            </p>
            <p className="lede mt-6">{lens?.summary ?? portfolioPublic.profile.summary}</p>
          </div>
          <aside className="col-span-4 self-end border-y py-5 md:col-span-3 xl:col-span-5 xl:col-start-12">
            <dl className="grid gap-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">활동 지역</dt>
                <dd className="font-semibold">{portfolioPublic.profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">포트폴리오</dt>
                <dd className="font-semibold">woogi.is-a.dev</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-muted">기본 형식</dt>
                <dd className="font-semibold">웹 이력서</dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-ink-muted">
              승인된 중립 PDF가 준비되기 전에는 회사 맞춤 PDF를 기본 이력서로 노출하지 않습니다.
            </p>
          </aside>
        </div>
      </header>

      <div className="site-container">
        <RoleLensNav activeLens={activeLens} path="/resume" />
      </div>

      <section className="page-section" aria-labelledby="experience-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
            <p className="eyebrow">경력</p>
              <h2 id="experience-title" className="section-title mt-3">경력 타임라인</h2>
            </div>
            <p className="col-span-4 self-end text-sm text-ink-muted md:col-span-5 xl:col-span-7 xl:col-start-9">
              공식 직함과 현재 재직 상태가 확정되지 않은 구간은 단정하지 않고, 공개 가능한 역할과 수행 범위만 표시합니다.
            </p>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      <section className="page-section" aria-labelledby="selected-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">Related work</p>
              <h2 id="selected-title" className="section-title mt-3">이력에서 바로 확인할 사례</h2>
            </div>
          </div>
          {selectedCases.map((caseStudy) => (
            <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <section className="page-section" aria-labelledby="skills-title">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <p className="eyebrow">기술</p>
              <h2 id="skills-title" className="section-title mt-3">사례에서 사용한 기술</h2>
          </div>
          <div className="col-span-4 border-t md:col-span-5 xl:col-span-9 xl:col-start-8">
            {portfolioPublic.skills.map((group) => (
              <div key={group.label} className="grid gap-3 border-b py-5 md:grid-cols-[10rem_minmax(0,1fr)]">
                <h3 className="font-mono text-xs font-bold text-action">{group.label}</h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ink-muted">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container flex flex-wrap items-center justify-between gap-5 border-y py-6">
          <p className="max-w-2xl text-ink-muted">
            채용 포지션이나 확인할 사례를 알려주시면 관련 문서 링크와 맡은 범위를 답변드리겠습니다.
          </p>
          <div className="flex flex-wrap gap-x-5">
            <Link className="link-arrow" href="/contact">
              Contact <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link className="link-arrow text-foreground" href={portfolioPublic.profile.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
