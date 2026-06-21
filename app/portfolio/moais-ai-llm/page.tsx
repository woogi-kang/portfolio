import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Gauge,
  History,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"
import type { Metadata } from "next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "MOAIS AI/LLM Portfolio",
  description:
    "Kang Taewook's portfolio page for MOAIS AI/LLM Engineer, covering RAG, long-term memory, AI coaching workflows, PromptOps, and production AI operations.",
}

const fitSignals = [
  {
    icon: Bot,
    title: "Product AI from PoC to Production",
    body: "PO·기획자와 문제를 정의하고 RAG, Tool Calling, API, 운영 로그까지 이어지는 AI 기능을 제품 구조로 연결했습니다.",
  },
  {
    icon: History,
    title: "Personalized Memory",
    body: "사용자 기록, 대화, 추천 근거를 장기 메모리와 프로필로 쌓아 다시 검색·요약·추천에 활용하는 구조를 설계했습니다.",
  },
  {
    icon: BrainCircuit,
    title: "RAG and Agent Workflow",
    body: "LangChain/LangGraph, Vector DB, Structured Output, prompt routing으로 검색·도구 호출·응답 생성을 분리했습니다.",
  },
  {
    icon: Gauge,
    title: "Production Quality Loop",
    body: "응답 품질, latency, cost, failure case, prompt version, eval report를 운영 지표로 보고 개선 루프를 설계했습니다.",
  },
]

const cases = [
  {
    icon: Workflow,
    label: "01",
    title: "RAG AI Service and Agent Workflow",
    subtitle: "AI 상담 서비스 / LangChain / LangGraph",
    summary:
      "AI 상담 서비스에서 사용자 질문을 검색, 도구 호출, 응답 생성, 실패 처리로 분리하고 RAG와 Tool Calling을 제품 API와 운영 흐름으로 연결했습니다.",
    proof: [
      "Next.js, FastAPI, GCP, Gemini, Vector DB, RAG, Tool Calling, SSE Streaming 기반 구조 개선",
      "LangChain/LangGraph 기반으로 retrieval, tool execution, response generation, fallback을 분리",
      "질문 의도, 검색 근거, tool result, answer format, failure case를 운영 단위로 추적",
    ],
    moais:
      "골프픽스 AI 코치도 스윙 히스토리, 골프 지식, 대화 기억을 한 번에 밀어 넣는 방식보다 memory schema, retrieval policy, tool contract, fallback을 나누어야 안정적으로 운영할 수 있습니다.",
    stack: ["Next.js", "FastAPI", "GCP", "Gemini", "Vector DB", "RAG", "Tool Calling", "LangGraph"],
  },
  {
    icon: Sparkles,
    label: "02",
    title: "Personalized Memory Graph",
    subtitle: "Memoriz / User History / Recommendation",
    summary:
      "Memoriz는 사진, 장소, 일정, 감정 기록을 공동 데이터 원장으로 축적하고 AI 검색·요약·추천으로 다시 활용하는 모바일 제품입니다.",
    proof: [
      "사진 기반 기록 후보, AI 제목/요약/태그, 자연어 검색, 앨범/지도/타임라인 탐색 구조",
      "추천 정책을 quality, date appeal, feasibility, personalization, sponsor boost 축으로 분해",
      "Gemini provider smoke, structured JSON, Pydantic validation, focused test로 AI 기능 검증",
    ],
    moais:
      "유저 진단 프로필은 단순 요약이 아니라 최근 스윙, 반복 문제, 교정 히스토리, 대화 선호도, 목표가 누적 갱신되는 사용자 모델이어야 합니다.",
    stack: ["Flutter", "FastAPI", "Gemini", "Pydantic", "pgvector", "R2", "E2E"],
  },
  {
    icon: ShieldCheck,
    label: "03",
    title: "AI Evaluation and Report Automation",
    subtitle: "CheckYourHospital / AI SEO-AEO Diagnosis",
    summary:
      "CheckYourHospital은 병원 홈페이지의 AI 검색/SEO 준비도와 이벤트 데이터를 진단하고 PDF 리포트로 만드는 개인 사이드 프로젝트입니다.",
    proof: [
      "Technical SEO, Content, International, Authority, AI/AEO, Machine Readability, Medical Compliance 7개 카테고리 진단",
      "critical issue가 있으면 전체 점수를 제한하는 gating rule과 PDF report pipeline 구성",
      "AI SOV snapshot, source pool analyzer, semantic review analyzer처럼 반복 측정 가능한 품질 표면 설계",
    ],
    moais:
      "AI 코칭 품질도 정답성, 근거 적합성, 개인화 정도, 위험 조언 여부, 지연 시간, 비용을 함께 보아야 합니다. 반복 가능한 eval case와 리포트가 모델/프롬프트 변경 리스크를 줄입니다.",
    stack: ["Next.js", "FastAPI", "Playwright", "Gemini", "Cloud SQL", "GCS", "PDF"],
  },
  {
    icon: MonitorSmartphone,
    label: "04",
    title: "Complex Product and Device Operations",
    subtitle: "Smart Glasses / Realtime Voice / Field Ops",
    summary:
      "AI 스마트 안경 제품군과 Flutter 프로젝트에서 앱, 실시간 통신, 디바이스, 운영 도구가 함께 움직이는 제품 표면을 다뤘습니다.",
    proof: [
      "OWL, C-Biz, C-Sound의 Mobile/Desktop/Smart Glasses 앱 구조 설계와 Flutter 제품 리드",
      "BLE Central/Peripheral, GATT, MTU, 청크 메시징, STT, WebSocket, Kiosk Mode, OTA, ADB Factory 운영",
      "OTT, TV 앱, 채팅, 실시간 주문 동기화, DRM/Video Player 안정화 프로젝트 경험",
    ],
    moais:
      "모아이스는 B2C 모바일 앱, B2B SDK, 오프라인 장비, 스포츠 현장이 함께 움직이는 제품입니다. AI 기능도 앱 UX, API, 로그, 운영 도구, 비용, 글로벌 사용자 피드백을 함께 고려해야 합니다.",
    stack: ["Flutter", "Riverpod", "BLE", "WebSocket", "STT", "Kiosk", "OTA", "Sentry"],
  },
]

const visualProofs = [
  {
    title: "Agent Run Control",
    subtitle: "Company OS",
    image: "/company-os-worker-status-desktop.png",
    alt: "Company OS provider run status panel showing Codex and Claude execution states",
    body: "Agent 실행을 provider별 상태, 승인 대기, 증거 첨부 단위로 추적하는 운영 화면입니다.",
  },
  {
    title: "Memory Draft Review",
    subtitle: "Memoriz",
    image: "/memoriz-ai-draft-review.png",
    alt: "Memoriz mobile screen showing AI-generated record draft review before saving",
    body: "사용자 기록을 AI가 구조화하되, 저장 전 사람이 검토할 수 있게 만든 human review 흐름입니다.",
  },
  {
    title: "Memory Reuse",
    subtitle: "Memoriz",
    image: "/memoriz-natural-search-reuse.png",
    alt: "Memoriz mobile screen showing natural language search over past memory records",
    body: "저장된 기록을 자연어 검색과 추천 이벤트로 다시 활용하는 AI product loop입니다.",
  },
  {
    title: "Evaluation Report",
    subtitle: "CheckYourHospital",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital problem solution fit validation table for AI search readiness diagnosis",
    body: "문제 정의, 검증 단계, 제품 반영을 하나의 리포트/평가 구조로 닫는 방식입니다.",
  },
]

const coachingPlan = [
  "유저 프로필, 스윙 히스토리, 대화 기록, 최근 진단 결과를 분리한 memory/RAG schema 정의",
  "골프 지식, 사용자 데이터, 최근 스윙 문제, 이전 코칭 이력을 답변 근거 우선순위로 정리",
  "AI 코치 답변을 advice, rationale, evidence, next drill, uncertainty로 구조화",
  "응답 품질, latency, cost, unsafe advice, failure case를 추적하는 eval/observability loop 구축",
]

export default function MoaisPortfolioPage() {
  return (
    <main className="bg-white [overflow-wrap:anywhere] dark:bg-slate-950">
      <section className="border-b bg-[#f4f7f4] dark:bg-[#0d1210]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              MOAIS AI/LLM Portfolio
            </p>
            <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 [overflow-wrap:anywhere] sm:text-4xl md:text-6xl dark:text-white">
              <span className="block">스윙 데이터와</span>
              <span className="block">사용자 히스토리를</span>
              <span className="block">개인화 AI 코칭 경험으로</span>
              <span className="block">바꾸는 엔지니어링</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 [overflow-wrap:anywhere] dark:text-slate-300">
              <span className="block">RAG, 장기 메모리, PromptOps,</span>
              <span className="block">LangChain/LangGraph, Tool Calling,</span>
              <span className="block">운영 품질 개선 루프를 골프픽스의 AI 코치와</span>
              <span className="block">유저 진단 프로필 관점으로 정리했습니다.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Link href="/moais-ai-llm-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href="/moais-ai-llm-cover-letter-kang-taewook.pdf">
                  Cover letter <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="min-w-0 overflow-hidden rounded-md border bg-white p-3 dark:bg-slate-950">
            <Image
              src="/company-os-dashboard-desktop.png"
              alt="Company OS dashboard showing work queue, approval gates, provider runs, and evidence vault"
              width={1440}
              height={1000}
              priority
              className="aspect-[16/11] w-full rounded-sm bg-white object-contain object-left-top"
            />
            <div className="mt-3 grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-3">
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">RAG workflow</div>
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Memory graph</div>
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

      <section className="bg-[#eef4f0] py-14 dark:bg-[#101916] md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
                Evidence Map
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                공고의 요구사항을 실제 프로젝트 증거로 연결
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                포지션의 핵심 요구사항인 개인화 코칭, RAG, 장기 메모리, 프로덕션 운영, 작은 팀의 주도성을 기준으로 공개 가능한 경험을 재구성했습니다.
              </p>
            </div>
            <div className="grid gap-5">
              {cases.map((item) => {
                const Icon = item.icon
                return (
                  <article key={item.title} className="min-w-0 overflow-hidden rounded-md border bg-white p-6 dark:bg-slate-950">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="font-mono text-sm text-slate-500 dark:text-slate-400">{item.label}</span>
                          <Badge variant="outline" className="rounded-md">
                            {item.subtitle}
                          </Badge>
                        </div>
                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.summary}</p>
                      </div>
                      <Icon className="h-7 w-7 shrink-0 text-emerald-700 dark:text-emerald-300" />
                    </div>

                    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                          Proof
                        </p>
                        <ul className="mt-3 space-y-3">
                          {item.proof.map((proof) => (
                            <li key={proof} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                              <span>{proof}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                          MOAIS 연결
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.moais}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white py-14 dark:bg-slate-950 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
              Visual Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
              AI 기능을 운영 가능한 제품 표면으로 만든 사례
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300">
              단순 스크린샷 모음이 아니라, 모아이스 AI/LLM 포지션에서 중요한 실행 제어, human review, memory reuse, evaluation report를 각각 보여주도록 정리했습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-md">RAG</Badge>
              <Badge variant="outline" className="rounded-md">Long-term memory</Badge>
              <Badge variant="outline" className="rounded-md">Structured output</Badge>
              <Badge variant="outline" className="rounded-md">Eval report</Badge>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visualProofs.map((proof) => (
              <article key={proof.title} className="min-w-0 overflow-hidden rounded-md border bg-[#f4f7f4] dark:bg-[#0d1210]">
                <div className="border-b bg-white p-5 dark:bg-slate-950">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="rounded-md">
                      {proof.subtitle}
                    </Badge>
                    <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{proof.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{proof.body}</p>
                </div>
                <div className="bg-slate-100 p-3 dark:bg-slate-900">
                  <Image
                    src={proof.image}
                    alt={proof.alt}
                    width={proof.image.includes("memoriz") ? 866 : 1440}
                    height={proof.image.includes("memoriz") ? 1744 : 900}
                    className="aspect-[4/3] w-full rounded-sm bg-white object-contain dark:bg-slate-950"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f7f4] py-14 dark:bg-[#0d1210] md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-300">
            How I Would Start
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
            골프픽스 AI 코치에서 먼저 정리할 실행 체크
          </h2>
          <div className="mt-8 grid gap-3">
            {coachingPlan.map((check, index) => (
              <div key={check} className="grid gap-3 rounded-md border bg-white p-4 dark:bg-slate-950 md:grid-cols-[64px_1fr] md:items-center">
                <span className="font-mono text-sm text-slate-500 dark:text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{check}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
              <Link href="/portfolio">
                Back to all case studies <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md bg-white dark:bg-slate-950">
              <Link href="mailto:woogi.dev@gmail.com">
                <MessageCircle className="h-4 w-4" />
                woogi.dev@gmail.com
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md bg-white dark:bg-slate-950">
              <Link href="/moais-ai-llm-cover-letter-kang-taewook.pdf">
                Cover letter PDF
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
