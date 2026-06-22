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

import { Reveal } from "@/components/motion-reveal"
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
    body: "PO·기획자와 문제를 정의하고 RAG, Tool Calling, API, 운영 로그까지 이어지는 AI 기능을 실제 제품 구조 안에 넣었습니다.",
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
    body: "응답 품질, latency, cost, failure case, prompt version, eval report를 운영 지표로 보고 개선 흐름을 설계했습니다.",
  },
]

const cases = [
  {
    icon: Workflow,
    label: "01",
    title: "RAG AI Service and Agent Workflow",
    subtitle: "AI 상담 서비스 / LangChain / LangGraph",
    summary:
      "AI 상담 서비스에서 사용자 질문을 검색, 도구 호출, 응답 생성, 실패 처리로 분리하고 RAG와 Tool Calling이 제품 API와 운영 흐름에서 함께 동작하게 했습니다.",
    proof: [
      "Next.js, FastAPI, GCP, Gemini, Vector DB, RAG, Tool Calling, SSE Streaming 기반 구조 개선",
      "LangChain/LangGraph 기반으로 retrieval, tool execution, response generation, fallback을 분리",
      "질문 의도, 검색 근거, tool result, answer format, failure case를 운영 단위로 추적",
    ],
    moais:
      "골프픽스 AI 코치도 스윙 히스토리, 골프 지식, 대화 기억을 한 번에 넣는 방식보다 memory schema, retrieval policy, tool contract, fallback을 나눠야 안정적으로 운영할 수 있습니다.",
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
      "AI SOV snapshot, source pool analyzer, semantic review analyzer처럼 반복 측정 가능한 품질 지표 설계",
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
      "AI 스마트 안경 제품군과 Flutter 프로젝트에서 앱, 실시간 통신, 디바이스, 운영 도구가 함께 움직이는 제품을 다뤘습니다.",
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
    body: "Agent 실행을 provider별 상태, 승인 대기, 첨부 자료 단위로 추적하는 운영 화면입니다.",
  },
  {
    title: "Memory Draft Review",
    subtitle: "Memoriz",
    image: "/memoriz-ai-draft-review.png",
    alt: "Memoriz mobile screen showing AI-generated record draft review before saving",
    body: "사용자 기록은 AI가 구조화하고, 저장 전에는 사람이 검토할 수 있게 만든 흐름입니다.",
  },
  {
    title: "Memory Reuse",
    subtitle: "Memoriz",
    image: "/memoriz-natural-search-reuse.png",
    alt: "Memoriz mobile screen showing natural language search over past memory records",
    body: "저장된 기록을 자연어 검색과 추천 이벤트에서 다시 활용하는 흐름입니다.",
  },
  {
    title: "Evaluation Report",
    subtitle: "CheckYourHospital",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital problem solution fit validation table for AI search readiness diagnosis",
    body: "문제 정의, 검증 단계, 제품 반영을 한 리포트 안에서 함께 관리하는 방식입니다.",
  },
]

const coachingPlan = [
  "유저 프로필, 스윙 히스토리, 대화 기록, 최근 진단 결과를 분리한 memory/RAG schema 정의",
  "골프 지식, 사용자 데이터, 최근 스윙 문제, 이전 코칭 이력을 답변 근거 우선순위로 정리",
  "AI 코치 답변을 advice, rationale, source, next drill, uncertainty로 구조화",
  "응답 품질, latency, cost, unsafe advice, failure case를 추적하는 eval/observability 흐름 구축",
]

export default function MoaisPortfolioPage() {
  return (
    <main className="bg-background [overflow-wrap:anywhere]">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs text-[#f2d27b]">MOAIS AI/LLM FIT</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              스윙 데이터와 사용자 히스토리를 개인화 AI 코칭으로 이어갑니다.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">
              RAG, 장기 메모리, PromptOps, LangChain/LangGraph, Tool Calling, 운영 품질 개선 경험을 골프픽스 AI 코치 관점으로 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#f3f2e9] text-[#111812] hover:bg-white">
                <Link href="/moais-ai-llm-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href="/moais-ai-llm-cover-letter-kang-taewook.pdf">
                  Cover letter <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden border border-white/10 bg-white">
            <Image
              src="/company-os-dashboard-desktop.png"
              alt="Company OS dashboard showing work queue, approval gates, provider runs, and reference vault"
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
            <p className="font-mono text-xs text-muted-foreground">EVIDENCE MAP</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
              공고 요구사항과 맞닿는 실제 프로젝트
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
                      <p className="font-mono text-xs text-muted-foreground">MOAIS FIT</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.moais}</p>
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
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">VISUAL PROOF</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
              AI 기능을 실제 운영 화면으로 이어간 사례
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visualProofs.map((proof, index) => (
              <Reveal key={proof.title} delay={index * 0.04} className="overflow-hidden border bg-background">
                <div className="border-b p-5">
                  <p className="font-mono text-xs text-muted-foreground">{proof.subtitle}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-normal">{proof.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{proof.body}</p>
                </div>
                <Image
                  src={proof.image}
                  alt={proof.alt}
                  width={proof.image.includes("memoriz") ? 866 : 1440}
                  height={proof.image.includes("memoriz") ? 1744 : 900}
                  className="aspect-[4/3] w-full bg-white object-contain object-left-top"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">FIRST CONTRIBUTION</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              골프픽스 AI 코치에서 먼저 점검할 일
            </h2>
          </Reveal>
          <div className="grid gap-px border bg-border">
            {coachingPlan.map((check, index) => (
              <Reveal key={check} delay={index * 0.04} className="grid gap-4 bg-card p-5 md:grid-cols-[64px_1fr]">
                <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-7 text-muted-foreground">{check}</p>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-start-2 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/portfolio">
                전체 작업 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-background">
              <Link href="mailto:woogi.dev@gmail.com">
                <MessageCircle className="h-4 w-4" />
                woogi.dev@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
