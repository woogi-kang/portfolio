import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileText,
  Gauge,
  SearchCheck,
  ShieldCheck,
} from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Alwayz Shopport AI & Data Portfolio",
  description:
    "Kang Taewook's targeted portfolio for Alwayz Shopport Product Engineer (AI & Data), covering LLM extraction, catalog data pipelines, grounded AI services, and recommendation quality.",
}

const fitSignals = [
  {
    icon: Database,
    title: "Catalog-like Data Layer",
    body: "웹 페이지, 이미지, OCR, DOM snapshot, 리뷰 텍스트를 entity, attribute, alias, search index로 정리해 AI 제품이 같은 데이터를 안정적으로 재사용할 수 있게 합니다.",
  },
  {
    icon: BrainCircuit,
    title: "LLM Structured Extraction",
    body: "Gemini/Claude Structured Output, Pydantic schema, selector validation, retry, token/cost tracking으로 속성 추출을 반복 실행 가능한 파이프라인으로 구성했습니다.",
  },
  {
    icon: SearchCheck,
    title: "Grounded AI Agent",
    body: "RAG/HybridSearch, Google Search Grounding, Tool Calling, source metadata, SSE streaming을 결합해 출처와 실패 케이스를 추적할 수 있는 AI 상담 UX를 만들었습니다.",
  },
  {
    icon: ShieldCheck,
    title: "Recommendation Quality",
    body: "Memoriz에서 LLM이 추측으로 장소를 만들지 않도록 근거 기반 품질 정책을 설계하고, 확인된 데이터만 추천 seed와 KPI에 반영했습니다.",
  },
]

const cases = [
  {
    icon: Database,
    label: "01",
    title: "LLM Extraction Pipeline for Domain Attributes",
    subtitle: "Jisoo Data Pipeline / Jisooknows",
    summary:
      "병원·미용 도메인에서 웹 페이지, ARIA snapshot, screenshot, DOM 후보를 수집하고 Gemini/Claude Structured Output으로 crawl structure와 이벤트·시술 속성을 추출했습니다.",
    proof: [
      "Playwright snapshot/screenshot/DOM context를 Gemini에 전달해 crawl structure 생성",
      "selector validation과 실패 피드백 재시도로 페이지 구조 변경에 대응",
      "Claude wrapper에 Pydantic schema, concurrency semaphore, timeout/retry, token/cost tracking 적용",
    ],
    shopport:
      "쇼포트의 상품 속성 추출도 상세페이지, 이미지, 후기, 판매 정보가 흩어져 있기 때문에 LLM extraction을 schema, validation, retry, cost 관점으로 운영해야 한다고 봅니다.",
    stack: ["Playwright", "Gemini", "Claude", "Pydantic", "Structured Output", "PostgreSQL"],
  },
  {
    icon: SearchCheck,
    label: "02",
    title: "Entity, Alias, Search Dictionary Layer",
    subtitle: "Jisooknows AI Chat / Grounding",
    summary:
      "표준 시술/병원 엔티티, 다국어 번역, alias coverage, search dictionary를 정리하고 AI 상담의 RAG/HybridSearch, Google Search Grounding, source metadata에서 함께 쓰도록 구성했습니다.",
    proof: [
      "표준 엔티티와 다국어 alias를 search dictionary로 분리",
      "clinic RAG와 Google Search Grounding을 질문 유형에 따라 분기",
      "tool calls, web references, token usage logs를 메시지 단위로 저장",
    ],
    shopport:
      "같은 상품이 플랫폼마다 다른 이름, 이미지, 설명으로 판매될 때는 entity/alias/search 구조가 먼저 안정화되어야 AI Agent 추천 품질도 좋아집니다.",
    stack: ["RAG", "HybridSearch", "Search Alias", "Google Search Grounding", "Tool Calling", "Token Logs"],
  },
  {
    icon: ShieldCheck,
    label: "03",
    title: "근거 기반 Recommendation Pipeline",
    subtitle: "Memoriz / Place Verification / Taste Graph",
    summary:
      "사진, GPS, OCR, 일정 context를 바탕으로 장소 후보와 확정 장소를 분리하고, 확인된 데이터만 title/summary, taste profile, recommendation seed, KPI 집계에 사용했습니다.",
    proof: [
      "LLM이 장소명을 임의로 만들지 않도록 원천 데이터 기준 설계",
      "후보, 확정, area/container fallback을 분리해 hallucination과 비용 제어",
      "confirmed place 기반 taste profile, recommendation seed, first CTA funnel, KPI report 구성",
    ],
    shopport:
      "쇼핑 추천에서도 후기·상세페이지·가격·후보 상품명이 섞일 때 AI가 그럴듯한 결론을 내리기보다, 확정 가능한 데이터와 불확실한 후보를 분리하는 품질 정책이 필요합니다.",
    stack: ["FastAPI", "Flutter", "Gemini", "pgvector", "RAG", "KPI Report"],
  },
  {
    icon: Gauge,
    label: "04",
    title: "AI Visibility and Report Product",
    subtitle: "CheckYourHospital / AI SEO-AEO",
    summary:
      "병원 홈페이지를 7개 카테고리 48개 항목으로 진단하고, AI 검색 mention, machine readability, GEO/AEO score, 의료법 compliance, PDF report를 하나의 제품 흐름으로 묶었습니다.",
    proof: [
      "Playwright crawler와 FastAPI worker로 48개 진단 항목 병렬 실행",
      "AI recommendation simulation과 AI SOV snapshot으로 mention rate와 source URLs 집계",
      "critical issue gating, benchmark, PDF report, report view로 고객 설명 가능성 확보",
    ],
    shopport:
      "AI 쇼핑 Agent도 추천 품질을 감으로만 판단하면 개선이 어렵습니다. 실험, 평가, 리포트, source tracking이 있어야 모델·프롬프트·데이터 변경을 빠르게 검증할 수 있습니다.",
    stack: ["Next.js", "FastAPI", "Playwright", "Gemini", "Cloud SQL", "PDF Report"],
  },
]

const visualProofs = [
  {
    title: "AI Workflow Control",
    image: "/company-os-dashboard-desktop.png",
    alt: "AI workflow dashboard showing work queue and provider runs",
    body: "요청, 실행, 승인, 산출물, 근거 자료를 남기는 AI workflow 운영 화면입니다.",
  },
  {
    title: "Worker Run Status",
    image: "/company-os-worker-status-desktop.png",
    alt: "Worker status panel showing provider execution states",
    body: "provider별 실행 상태와 실패 원인을 따로 추적해 운영 리스크를 줄이는 구조입니다.",
  },
  {
    title: "Memory Search Reuse",
    image: "/memoriz-natural-search-reuse.png",
    alt: "Memoriz natural search screen using stored memory records",
    body: "구조화된 기록을 자연어 검색과 추천 UX에서 다시 활용하는 흐름입니다.",
  },
  {
    title: "Evaluation Report",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital validation table for AI search readiness diagnosis",
    body: "진단, 평가, 리포트, 제품 반영을 한 흐름에서 관리하는 방식입니다.",
  },
]

const contributionPlan = [
  "상품 상세페이지, 이미지, 후기, 판매 문구에서 추출할 product/visual/sales/perceived attribute schema 정의",
  "LLM extraction 결과를 validation, confidence, source URL, raw source와 함께 저장하는 catalog pipeline 설계",
  "동일 상품/유사 상품의 entity resolution을 alias, image/text source, platform-specific metadata 기준으로 분리",
  "AI 쇼핑 Agent 응답을 recommendation, rationale, source, uncertainty, next question으로 나누고 eval set으로 회귀 관리",
]

export default function AlwayzShopportPortfolioPage() {
  return (
    <main className="bg-background [overflow-wrap:anywhere]">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs text-[#f2d27b]">ALWAYZ SHOPPORT FIT</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              흩어진 상품 데이터를 AI Agent가 믿고 쓸 수 있게 정리합니다.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">
              쇼포트의 커머스 카탈로그 시스템과 AI 쇼핑 Agent에 맞춰 LLM extraction, entity/alias/search data layer, 근거 기반 추천 경험을 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#f3f2e9] text-[#111812] hover:bg-white">
                <Link href="/alwayz-shopport-product-engineer-ai-data-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href="/portfolio">
                  전체 작업 보기 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden border border-white/10 bg-white">
            <Image
              src="/company-os-dashboard-desktop.png"
              alt="AI workflow dashboard showing queue, provider runs, approval gates, and reference vault"
              width={1440}
              height={1000}
              priority
              className="aspect-[16/11] w-full object-contain object-left-top"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-px border bg-border px-0 md:grid-cols-4">
          {fitSignals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <Reveal key={signal.title} delay={index * 0.04} className="bg-card p-5 md:p-6">
                <Icon className="h-6 w-6" />
                <h2 className="mt-5 text-xl font-semibold tracking-normal">{signal.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{signal.body}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">FIT MATRIX</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
              쇼포트 문제와 바로 맞닿는 네 가지 사례
            </h2>
          </Reveal>
          <div className="mt-10 border-t">
            {cases.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="grid gap-6 border-b py-7 md:grid-cols-[72px_1fr_1.1fr]">
                    <div className="flex items-center gap-3 md:block">
                      <span className="font-mono text-sm text-muted-foreground">{item.label}</span>
                      <Icon className="mt-0 h-5 w-5 md:mt-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-normal">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.stack.slice(0, 6).map((tech) => (
                          <span key={tech} className="border px-2 py-1 text-xs text-muted-foreground">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">SHOPPORT FIT</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.shopport}</p>
                      <ul className="mt-5 space-y-2 text-sm leading-6">
                        {item.proof.slice(0, 2).map((proof) => (
                          <li key={proof} className="flex gap-2 text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                            <span>{proof}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-card py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">FIRST CONTRIBUTION</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              합류 직후 먼저 잡을 수 있는 일
            </h2>
          </Reveal>
          <div className="grid gap-px border bg-border">
            {contributionPlan.map((item, index) => (
              <Reveal key={item} delay={index * 0.04} className="grid gap-4 bg-background p-5 md:grid-cols-[64px_1fr]">
                <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-7 text-muted-foreground">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">VISUAL PROOF</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
              운영까지 이어진 AI 제품 화면
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visualProofs.map((proof, index) => (
              <Reveal key={proof.title} delay={index * 0.04} className="overflow-hidden border bg-card">
                <Image
                  src={proof.image}
                  alt={proof.alt}
                  width={1200}
                  height={800}
                  loading="eager"
                  className="aspect-[16/10] w-full bg-white object-contain object-left-top"
                />
                <div className="border-t p-5">
                  <h3 className="text-lg font-semibold tracking-normal">{proof.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{proof.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
