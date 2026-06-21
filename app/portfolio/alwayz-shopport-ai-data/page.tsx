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

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Alwayz Shopport AI & Data Portfolio",
  description:
    "Kang Taewook's targeted portfolio for Alwayz Shopport Product Engineer (AI & Data), covering LLM extraction, catalog-like data pipelines, grounded AI services, and recommendation quality.",
}

const fitSignals = [
  {
    icon: Database,
    title: "Catalog-like Data Layer",
    body: "웹 페이지, 이미지, OCR, DOM snapshot, 리뷰성 텍스트를 entity, attribute, alias, search index로 구조화해 AI 제품이 재사용할 수 있는 데이터 계층으로 만듭니다.",
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
    body: "Memoriz에서 LLM이 추측하지 않도록 evidence-gated policy를 설계하고, 확정된 데이터만 추천 seed와 KPI로 승격했습니다.",
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
      "표준 시술/병원 엔티티, 다국어 번역, alias coverage, search dictionary를 정리하고 AI 상담의 RAG/HybridSearch, Google Search Grounding, source metadata와 연결했습니다.",
    proof: [
      "표준 엔티티와 다국어 alias를 search dictionary로 분리",
      "clinic RAG와 Google Search Grounding을 질문 유형에 따라 분기",
      "tool calls, web references, token usage logs를 메시지 단위로 저장",
    ],
    shopport:
      "같은 상품이 여러 플랫폼에서 다른 이름, 이미지, 설명으로 판매되는 문제는 entity/alias/search 계층이 먼저 안정화되어야 AI Agent 추천 품질로 이어집니다.",
    stack: ["RAG", "HybridSearch", "Search Alias", "Google Search Grounding", "Tool Calling", "Token Logs"],
  },
  {
    icon: ShieldCheck,
    label: "03",
    title: "Evidence-gated Recommendation Pipeline",
    subtitle: "Memoriz / Place Evidence / Taste Graph",
    summary:
      "사진, GPS, OCR, 일정 context를 바탕으로 장소 후보와 확정 장소를 분리하고, 확정된 데이터만 title/summary, taste profile, recommendation seed, KPI 집계로 승격했습니다.",
    proof: [
      "LLM이 장소명을 단독 생성하지 않도록 source-of-truth rule 설계",
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
      "병원 홈페이지를 7개 카테고리 48개 항목으로 진단하고, AI 검색 mention, machine readability, GEO/AEO score, 의료법 compliance, PDF report를 하나의 제품 흐름으로 연결했습니다.",
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
    body: "요청, 실행, 승인, 산출물, evidence를 남기는 AI workflow 운영 화면입니다.",
  },
  {
    title: "Worker Run Status",
    image: "/company-os-worker-status-desktop.png",
    alt: "Worker status panel showing provider execution states",
    body: "provider별 실행 상태와 실패 추적을 분리해 운영 리스크를 줄이는 구조입니다.",
  },
  {
    title: "Memory Search Reuse",
    image: "/memoriz-natural-search-reuse.png",
    alt: "Memoriz natural search screen using stored memory records",
    body: "구조화된 기록을 자연어 검색과 추천 UX로 다시 사용하는 AI product loop입니다.",
  },
  {
    title: "Evaluation Report",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital validation table for AI search readiness diagnosis",
    body: "진단, 평가, 리포트, 제품 반영을 하나의 검증 구조로 닫는 방식입니다.",
  },
]

const contributionPlan = [
  "상품 상세페이지, 이미지, 후기, 판매 문구에서 추출할 product/visual/sales/perceived attribute schema 정의",
  "LLM extraction 결과를 validation, confidence, source URL, raw evidence와 함께 저장하는 catalog pipeline 설계",
  "동일 상품/유사 상품의 entity resolution을 alias, image/text evidence, platform-specific metadata로 분리",
  "AI 쇼핑 Agent 응답을 recommendation, rationale, evidence, uncertainty, next question 구조로 나누고 eval set으로 회귀 관리",
]

export default function AlwayzShopportPortfolioPage() {
  return (
    <main className="bg-white [overflow-wrap:anywhere] dark:bg-slate-950">
      <section className="border-b bg-[#f4f7f4] dark:bg-[#0d1210]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              Alwayz Shopport AI & Data Portfolio
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-6xl dark:text-white">
              <span className="block">흩어진 도메인 데이터를</span>
              <span className="block">LLM 속성 추출과</span>
              <span className="block">AI Agent가 쓰는</span>
              <span className="block">카탈로그 계층으로 바꿉니다.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              쇼포트의 차세대 커머스 카탈로그 시스템과 AI 쇼핑 Agent에 맞춰, LLM extraction, entity/alias/search data layer, grounded AI service, evidence-gated recommendation 경험을 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Link href="/alwayz-shopport-product-engineer-ai-data-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href="/portfolio">
                  All case studies <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-md border bg-white p-3 dark:bg-slate-950">
            <Image
              src="/company-os-dashboard-desktop.png"
              alt="AI workflow dashboard showing queue, provider runs, approval gates, and evidence vault"
              width={1440}
              height={1000}
              priority
              className="aspect-[16/11] w-full rounded-sm bg-white object-contain object-left-top"
            />
            <div className="mt-3 grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-3">
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">LLM extraction</div>
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Catalog layer</div>
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Eval loop</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white py-12 dark:bg-slate-950 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          {fitSignals.map((signal) => {
            const Icon = signal.icon
            return (
              <article key={signal.title} className="min-w-0 overflow-hidden rounded-md border p-5">
                <Icon className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                <h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{signal.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[#f8faf7] py-14 dark:bg-[#0d1117] md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              Case Evidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
              쇼포트 문제와 직접 맞닿는 네 가지 경험
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {cases.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="min-w-0 overflow-hidden rounded-md border bg-white p-6 dark:bg-slate-950">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                      <p className="mt-4 text-sm font-semibold text-emerald-700 dark:text-emerald-300">{item.subtitle}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                    </div>
                    <Icon className="h-6 w-6 shrink-0 text-emerald-700 dark:text-emerald-300" />
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {item.proof.map((proof) => (
                      <li key={proof} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        <span>{proof}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-md bg-emerald-50 p-4 text-sm leading-6 text-emerald-950 dark:bg-emerald-950/30 dark:text-emerald-100">
                    {item.shopport}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-white py-14 dark:bg-slate-950 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                Contribution Angle
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                쇼포트에 합류하면 바로 기여할 수 있는 방향
              </h2>
            </div>
            <div className="space-y-3">
              {contributionPlan.map((item) => (
                <p key={item} className="border-l-2 border-emerald-700 pl-4 leading-7 text-slate-700 dark:text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf7] py-14 dark:bg-[#0d1117] md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              Visual Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
              운영 가능한 AI 제품으로 닫은 결과물
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visualProofs.map((proof) => (
              <article key={proof.title} className="overflow-hidden rounded-md border bg-white dark:bg-slate-950">
                <Image
                  src={proof.image}
                  alt={proof.alt}
                  width={1200}
                  height={800}
                  loading="eager"
                  className="aspect-[16/10] w-full bg-white object-contain object-left-top"
                />
                <div className="border-t p-5">
                  <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{proof.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{proof.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
