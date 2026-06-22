import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Gamepad2,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "OVERDARE AI Agent Portfolio",
  description:
    "Kang Taewook's portfolio page for OVERDARE Senior Software Engineer (AI Agent), covering agent execution, AI memory graph, evaluation pipelines, and complex product engineering.",
}

const fitSignals = [
  {
    icon: Bot,
    title: "Agent Execution Layer",
    body: "자연어 요청을 task, tool call, approval, run log, verification으로 나누어 실행 흐름을 관리하도록 설계했습니다.",
  },
  {
    icon: Gamepad2,
    title: "Game / UGC Foundation",
    body: "C/C++, WinAPI, OpenGL 커스텀 게임 엔진과 Unity 개발 경험을 바탕으로 제작 도구의 런타임 제약을 이해합니다.",
  },
  {
    icon: BrainCircuit,
    title: "AI Product Quality",
    body: "LLM 결과물을 structured output, eval report, guard script, human review 기준으로 관리합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "Complex Product Surface",
    body: "Flutter 멀티플랫폼, BLE, 실시간 통신, 현장 운영 자동화를 제품 출시와 운영까지 이어갔습니다.",
  },
]

const cases = [
  {
    icon: GitBranch,
    label: "01",
    title: "Managed Agent Execution System",
    subtitle: "Company OS / Claude Craft",
    summary:
      "Codex, Claude, Gemini CLI를 공통 task contract로 다루고, 실행 전 승인과 실행 후 감사 로그가 남는 Agent 운영 구조를 설계했습니다.",
    proof: [
      "task, run, approval, artifact, audit event, worker status를 분리한 control plane",
      "고위험 작업은 approval gate를 거치고, worker는 dry-run과 write-scope readiness를 먼저 확인",
      "25+ 도메인 Agent와 340+ Skill 자산을 여러 CLI가 공유할 수 있도록 workspace화",
    ],
    overdare:
      "OVERDARE Studio의 AI Agent도 tool call, 실패 복구, human review, execution trace가 필요합니다. 이 경험은 제작 Agent를 단순 답변 기능이 아니라 실제 실행 흐름으로 설계하는 데 맞닿아 있습니다.",
    stack: ["Codex CLI", "Claude Code", "Gemini CLI", "FastAPI", "Next.js", "PostgreSQL", "Redis"],
  },
  {
    icon: Sparkles,
    label: "02",
    title: "AI Memory Graph and Date Recommendation Agent",
    subtitle: "Memoriz",
    summary:
      "Memoriz는 커플이 만든 사진, 장소, 일정, 감정 기록을 공동 데이터 원장으로 축적하고, AI 검색과 데이트 추천으로 다시 활용하는 모바일 제품입니다.",
    proof: [
      "사진 기반 자동 기록 후보, AI 제목/요약/태그, 자연어 검색, 앨범/지도/타임라인 탐색 구조",
      "데이트 추천 정책을 Quality, Date appeal, Feasibility, Personalization, Sponsor boost 축으로 분해",
      "Gemini Album AI provider smoke, structured JSON, Pydantic validation, 19개 집중 테스트 통과",
    ],
    overdare:
      "사용자 생성 기록을 구조화하고 추천 가능한 자산으로 바꾸는 경험은 UGC 게임 제작 Agent에도 연결됩니다. 제작자의 입력을 scene, object, rule, validation task로 바꾸는 사고와 유사합니다.",
    stack: ["Flutter", "FastAPI", "Gemini", "pgvector", "R2", "Playwright", "E2E"],
  },
  {
    icon: ShieldCheck,
    label: "03",
    title: "AI Evaluation and Report Automation",
    subtitle: "CheckYourHospital",
    summary:
      "CheckYourHospital은 병원 홈페이지의 AI 검색/SEO 준비도와 이벤트 데이터를 진단하고 PDF 리포트로 만드는 개인 사이드 프로젝트입니다.",
    proof: [
      "Technical SEO, Content, International, Authority, AI/AEO, Machine Readability, Medical Compliance 7개 카테고리 진단",
      "의료법 critical issue가 있으면 전체 점수를 제한하는 gating rule과 PDF report pipeline 구성",
      "AEO source pool analyzer, AI SOV snapshot, review semantic analyzer처럼 반복 측정 가능한 AI 품질 지표 설계",
    ],
    overdare:
      "AI 기능은 생성만으로 끝나면 품질이 흔들립니다. Studio Agent도 사용자의 의도 반영도, 실행 가능성, 누락된 rule/asset, regression case를 평가하는 루프가 필요합니다.",
    stack: ["Next.js", "FastAPI", "Playwright", "Gemini", "Cloud SQL", "GCS", "PDF"],
  },
  {
    icon: Layers3,
    label: "04",
    title: "Complex Product Engineering",
    subtitle: "Smart Glasses / OTT / Realtime Apps",
    summary:
      "AI 스마트 안경 제품군과 여러 Flutter 프로젝트에서 앱, 실시간 통신, 디바이스, 운영 도구가 함께 움직이는 제품을 다뤘습니다.",
    proof: [
      "OWL, C-Biz, C-Sound의 Mobile/Desktop/Smart Glasses 앱 구조 설계와 Flutter 제품 리드",
      "BLE Central/Peripheral, GATT, MTU, 청크 메시징, STT, WebSocket, Kiosk Mode, OTA, ADB Factory 운영",
      "OTT, TV 앱, 채팅, 실시간 주문 동기화, DRM/Video Player 안정화 프로젝트 경험",
    ],
    overdare:
      "OVERDARE는 AI Agent뿐 아니라 모바일 UGC, 채팅, 아바타, 크리에이터 경제가 결합된 제품입니다. 여러 제품 영역을 끝까지 운영해 본 경험은 Agent 기능의 출시 리스크를 줄이는 데 도움이 됩니다.",
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
    title: "AI Draft Review",
    subtitle: "Memoriz",
    image: "/memoriz-ai-draft-review.png",
    alt: "Memoriz mobile screen showing AI-generated record draft review before saving",
    body: "사진과 메타데이터에서 생성된 AI 기록 초안을 사용자가 검토하고 저장하는 흐름입니다.",
  },
  {
    title: "Memory Reuse",
    subtitle: "Memoriz",
    image: "/memoriz-natural-search-reuse.png",
    alt: "Memoriz mobile screen showing natural language search over past memory records",
    body: "저장된 기록을 자연어 검색과 추천 이벤트에서 다시 활용하는 흐름입니다.",
  },
  {
    title: "Evaluation Loop",
    subtitle: "CheckYourHospital",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital problem solution fit validation table for AI search readiness diagnosis",
    body: "문제 정의, 검증 단계, 제품 반영을 한 리포트 안에서 함께 관리하는 방식입니다.",
  },
]

const operatingChecks = [
  "사용자의 한 문장 요청을 제작 의도, 오브젝트/에셋, 상호작용 규칙, 검증 항목으로 분해",
  "Agent tool contract와 structured output schema를 먼저 정의",
  "실패 원인, 불확실성, 사용자 확인 필요 지점을 UI와 로그에 남김",
  "prompt/tool/model 변경 시 eval set과 regression case로 품질 저하를 확인",
]

export default function OverdarePortfolioPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <p className="font-mono text-xs text-[#f2d27b]">OVERDARE AI AGENT FIT</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              UGC 제작 의도를 실행 가능한 Agent workflow로 풀어냅니다.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">
              게임 제작 기반 이해, Agent 실행 구조, 평가/리포트 자동화, 복잡한 제품 운영 경험을 OVERDARE Studio 관점으로 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#f3f2e9] text-[#111812] hover:bg-white">
                <Link href="/overdare-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href="/overdare-cover-letter-career-description-kang-taewook.pdf">
                  Supporting document <ArrowRight className="h-4 w-4" />
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
              제출용 문서의 주장을 실제 프로젝트로 뒷받침합니다.
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
                      <p className="font-mono text-xs text-muted-foreground">OVERDARE FIT</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.overdare}</p>
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
              각 화면이 보여주는 역할을 분리했습니다.
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
              OVERDARE Studio AI Agent에서 먼저 점검할 일
            </h2>
          </Reveal>
          <div className="grid gap-px border bg-border">
            {operatingChecks.map((check, index) => (
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
              <Link href="mailto:woogi.dev@gmail.com">woogi.dev@gmail.com</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
