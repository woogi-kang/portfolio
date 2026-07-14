import type { Metadata } from "next"
import Link from "next/link"

import { CaseIndexRow, RoleLensNav } from "@/components/dossier"
import { portfolioPublic, selectCasesByLens } from "@/lib/public-content"
import type { RoleLensId } from "@/lib/public-content"

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}): Promise<Metadata> {
  const { lens } = await searchParams

  return {
    title: "Work — Product Engineer",
    description:
      "문제 정의부터 구현과 운영까지 맡아 만든 Product Engineer 강태욱의 프로젝트를 정리했습니다.",
    alternates: { canonical: "/portfolio" },
    robots: { index: lens === undefined, follow: true },
  }
}

function parseLens(value: string | string[] | undefined): RoleLensId | undefined {
  if (typeof value !== "string") return undefined
  return portfolioPublic.roleLenses.some((lens) => lens.id === value)
    ? (value as RoleLensId)
    : undefined
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ lens?: string | string[] }>
}) {
  const { lens: lensParam } = await searchParams
  const activeLens = parseLens(lensParam)
  const lens = portfolioPublic.roleLenses.find((item) => item.id === activeLens)
  const order = lens?.caseOrder ?? portfolioPublic.cases.map((item) => item.slug)
  const orderedCases = selectCasesByLens(
    portfolioPublic.cases,
    order,
    activeLens,
  )

  return (
    <>
      <section className="page-intro">
        <div className="site-container site-grid gap-y-6">
          <div className="col-span-4 md:col-span-5 xl:col-span-9">
            <p className="eyebrow">Work</p>
            <h1 className="display-title mt-5">문제에서 운영까지 만든 일</h1>
          </div>
          <div className="col-span-4 self-end md:col-span-3 xl:col-span-5 xl:col-start-11">
            <p className="lede text-base md:text-lg">
              {lens?.summary ??
                "프로젝트마다 어떤 문제가 있었고, 제가 무엇을 맡아 어떻게 구현했는지 정리했습니다."}
            </p>
          </div>
        </div>
      </section>

      <div className="site-container">
        <RoleLensNav activeLens={activeLens} path="/portfolio" showCounts />
      </div>

      <section className="page-section pt-10" aria-labelledby="case-index-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">Projects · {orderedCases.length}</p>
              <h2 id="case-index-title" className="section-title mt-3">
                {lens?.label ?? "전체 프로젝트"}
              </h2>
            </div>
            <p className="col-span-4 self-end text-sm text-ink-muted md:col-span-4 xl:col-span-5 xl:col-start-11" aria-live="polite">
              {orderedCases.length}개 프로젝트를 보여드립니다.
            </p>
          </div>

          <div className="hidden border-t py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-muted lg:grid lg:grid-cols-[minmax(0,1.3fr)_minmax(9rem,.65fr)_minmax(9rem,.45fr)_2.75rem] lg:px-2">
            <span>사례 / 문제</span>
            <span>역할 / 영역</span>
            <span>구분</span>
            <span className="sr-only">열기</span>
          </div>
          <div>
            {orderedCases.length > 0 ? (
              orderedCases.map((caseStudy) => (
                <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} />
              ))
            ) : (
              <div className="border-y py-8 text-sm text-ink-muted" role="status">
                이 분야에 해당하는 프로젝트가 없습니다.{" "}
                <Link className="font-semibold text-action underline underline-offset-4" href="/portfolio">
                  전체 프로젝트 보기
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
