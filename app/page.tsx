import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import {
  CareerTrajectory,
  CaseIndexRow,
  RoleLensNav,
} from "@/components/dossier"
import { ProfileStamp } from "@/components/profile-stamp"
import { portfolioPublic } from "@/lib/public-content"
import type { RoleLensId } from "@/lib/public-content"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}): Promise<Metadata> {
  const { lens } = await searchParams

  return {
    title: "Product Engineer — AI Systems & Automation",
    description:
      "외부 데이터를 검증된 레코드로 만들고 사람 승인 뒤 제품과 업무에 연결하는 Product Engineer 강태욱의 포트폴리오입니다.",
    alternates: { canonical: "/" },
    robots: { index: lens === undefined, follow: true },
  }
}

const unifiedOrder = [
  "woogi-harness",
  "structured-domain-data-pipeline",
  "human-governed-ai-operations",
  "smart-glasses-realtime-platform",
]

function parseLens(value: string | string[] | undefined): RoleLensId | undefined {
  if (typeof value !== "string") return undefined
  return portfolioPublic.roleLenses.some((lens) => lens.id === value)
    ? (value as RoleLensId)
    : undefined
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}) {
  const { lens: lensParam } = await searchParams
  const activeLens = parseLens(lensParam)
  const lens = portfolioPublic.roleLenses.find((item) => item.id === activeLens)
  const order = lens?.caseOrder ?? unifiedOrder
  const featuredCases = order
    .map((slug) => portfolioPublic.cases.find((item) => item.slug === slug))
    .filter((item): item is (typeof portfolioPublic.cases)[number] => Boolean(item))
    .slice(0, 4)
  const summary = lens?.summary ?? portfolioPublic.profile.summary

  return (
    <>
      <section className="page-intro home-intro">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-5 xl:col-span-10">
            <p className="eyebrow">Seoul · Product Engineer</p>
            <h1 className="display-title mt-5">
              <span className="home-role-line">Product Engineer</span>
              <span className="mt-2 block text-action">AI Systems &amp; Automation</span>
            </h1>
            <p className="lede mt-6 md:mt-8">{summary}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
              <Link className="link-arrow" href="/portfolio">
                대표 사례 보기 <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                className="link-arrow text-foreground"
                href={portfolioPublic.profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="col-span-4 self-end md:col-span-3 xl:col-span-5 xl:col-start-12" aria-label="대표 공개 증거">
            <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 border-t pt-4 sm:grid-cols-[8.5rem_minmax(0,1fr)]">
              <ProfileStamp
                src={portfolioPublic.profile.image}
                name={portfolioPublic.profile.name}
              />
              <div className="min-w-0">
                <p className="font-mono text-xs font-bold text-verified">공개 저장소</p>
                <p className="mt-2 font-heading text-xl font-bold">Woogi Harness</p>
                <p className="mt-2 text-sm text-ink-muted">
                  전문 에이전트 25개 이상 · 활성 skill entrypoint 385개
                </p>
                <p className="mt-3 text-xs text-ink-muted">
                  registry validate · harness doctor 재현 가능
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="site-container">
        <RoleLensNav activeLens={activeLens} />
      </div>

      <section className="page-section" aria-labelledby="trajectory-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4 md:mb-10">
            <div className="col-span-4 md:col-span-3 xl:col-span-5">
              <p className="eyebrow">Career</p>
              <h2 id="trajectory-title" className="section-title mt-3">
                기기 앱에서 데이터와 AI 업무까지
              </h2>
            </div>
            <p className="col-span-4 max-w-2xl self-end text-ink-muted md:col-span-5 xl:col-span-8 xl:col-start-9">
              모바일, TV, 스마트 글래스 앱을 만들던 경험을 API, 데이터 파이프라인과 승인형 AI 업무로 넓혀 왔습니다.
            </p>
          </div>
          <CareerTrajectory />
        </div>
      </section>

      <section className="page-section" aria-labelledby="work-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4 md:mb-10">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">Work</p>
              <h2 id="work-title" className="section-title mt-3">
                무엇을 만들고 어떻게 확인했는가
              </h2>
            </div>
            <div className="col-span-4 self-end md:col-span-4 xl:col-span-6 xl:col-start-10">
              <p className="text-ink-muted">
                {lens
                  ? `${lens.label} 역할에서 먼저 볼 사례 순서입니다. 본문 내용은 바뀌지 않습니다.`
                  : "AI 업무, 제품 전달과 디바이스 작업을 맡은 범위, 구현, 확인 방법으로 비교합니다."}
              </p>
            </div>
          </div>
          <div>
            {featuredCases.map((caseStudy) => (
              <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
          <Link className="link-arrow mt-6" href={`/portfolio${activeLens ? `?lens=${activeLens}` : ""}`}>
            전체 사례 인덱스 보기 <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="page-section" aria-labelledby="next-title">
        <div className="site-container">
          <h2 id="next-title" className="section-title">
            경력, 글, 연락처
          </h2>
          <div className="mt-8 grid border-t md:grid-cols-3">
            {[
              {
                href: "/resume",
                title: "Resume",
                body: "경력과 맡은 범위를 문서형 타임라인으로 정리했습니다.",
              },
              {
                href: "/posts",
                title: "Writing",
                body: "AI·제품·디바이스 작업에서 남긴 기술 기록입니다.",
              },
              {
                href: "/contact",
                title: "Contact",
                body: "채용 포지션이나 협업 과제를 간단히 남길 수 있습니다.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group min-h-48 border-b p-5 transition-[background-color] duration-150 hover:bg-muted md:border-r md:p-6 md:last:border-r-0"
              >
                <span className="flex items-center justify-between font-heading text-2xl font-bold">
                  {item.title}
                  <ArrowRight className="size-5 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="mt-3 block text-sm text-ink-muted">{item.body}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
