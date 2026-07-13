import type { Metadata } from "next"

import { CaseIndexRow, RoleLensNav } from "@/components/dossier"
import { portfolioPublic } from "@/lib/public-content"
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
      "맡은 범위, 구현 구조, 확인 방법과 공개 상태를 비교하는 Product Engineer 강태욱의 사례 인덱스입니다.",
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
  const orderedCases = order
    .map((slug) => portfolioPublic.cases.find((item) => item.slug === slug))
    .filter((item): item is (typeof portfolioPublic.cases)[number] => Boolean(item))

  return (
    <>
      <section className="page-intro">
        <div className="site-container site-grid gap-y-6">
          <div className="col-span-4 md:col-span-5 xl:col-span-9">
            <p className="eyebrow">Work</p>
            <h1 className="display-title mt-5">맡은 범위와 구현을 비교하는 사례</h1>
          </div>
          <div className="col-span-4 self-end md:col-span-3 xl:col-span-5 xl:col-start-11">
            <p className="lede text-base md:text-lg">
              {lens?.summary ??
                "각 사례에서 맡은 범위, 구현한 구조, 확인 방법과 공개 가능한 수준을 같은 순서로 적었습니다."}
            </p>
          </div>
        </div>
      </section>

      <div className="site-container">
        <RoleLensNav activeLens={activeLens} path="/portfolio" />
      </div>

      <section className="page-section pt-10" aria-labelledby="case-index-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">공개 사례</p>
              <h2 id="case-index-title" className="section-title mt-3">
                공개 자료와 익명 사례
              </h2>
            </div>
            <div className="col-span-4 grid content-end gap-3 text-sm text-ink-muted md:col-span-4 xl:col-span-6 xl:col-start-10">
              <p>
                <span className="status-label mr-2 text-verified">공개</span>
                공개 저장소와 재현 경로가 있습니다.
              </p>
              <p>
                <span className="status-label mr-2 text-context">익명화</span>
                회사·고객·내부 데이터를 제거한 구조와 역할만 공개합니다.
              </p>
            </div>
          </div>

          <div className="hidden border-t py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-ink-muted lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(9rem,.65fr)_minmax(10rem,.65fr)_8rem_2.75rem] lg:px-2">
            <span>사례 / 문제</span>
            <span>역할 / 영역</span>
            <span>확인 방법</span>
            <span>공개 범위</span>
            <span className="sr-only">열기</span>
          </div>
          <div>
            {orderedCases.map((caseStudy) => (
              <CaseIndexRow key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>

          <aside className="mt-10 grid gap-3 border-y py-5 text-sm text-ink-muted md:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="font-mono text-xs font-bold text-withheld">공개 보류</p>
            <p>
              소유권·구현 성숙도·공개 범위가 부족한 사례는 내용을 채워 보이지 않습니다. 기존 URL에는 noindex 공개 보류 안내만 남깁니다.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
