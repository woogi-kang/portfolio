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

import { Badge } from "@/components/ui/badge"
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
    body: "자연어 요청을 task, tool call, approval, run log, verification으로 나누는 실행 계층을 설계했습니다.",
  },
  {
    icon: Gamepad2,
    title: "Game / UGC Foundation",
    body: "C/C++, WinAPI, OpenGL 커스텀 게임 엔진과 Unity 개발 경험을 바탕으로 제작 도구의 런타임 제약을 이해합니다.",
  },
  {
    icon: BrainCircuit,
    title: "AI Product Quality",
    body: "LLM 결과물을 structured output, eval report, guard script, human review 대상으로 관리합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "Complex Product Surface",
    body: "Flutter 멀티플랫폼, BLE, 실시간 통신, 현장 운영 자동화를 제품 출시와 운영까지 연결했습니다.",
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
      "OVERDARE Studio의 AI Agent도 tool call, 실패 복구, human review, execution trace가 필요합니다. 이 경험은 제작 Agent를 답변 기능이 아니라 운영 가능한 실행 계층으로 설계하는 기반입니다.",
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
      "AEO source pool analyzer, AI SOV snapshot, review semantic analyzer처럼 반복 측정 가능한 AI 품질 표면 설계",
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
      "AI 스마트 안경 제품군과 여러 Flutter 프로젝트에서 앱, 실시간 통신, 디바이스, 운영 도구가 함께 움직이는 제품 표면을 다뤘습니다.",
    proof: [
      "OWL, C-Biz, C-Sound의 Mobile/Desktop/Smart Glasses 앱 구조 설계와 Flutter 제품 리드",
      "BLE Central/Peripheral, GATT, MTU, 청크 메시징, STT, WebSocket, Kiosk Mode, OTA, ADB Factory 운영",
      "OTT, TV 앱, 채팅, 실시간 주문 동기화, DRM/Video Player 안정화 프로젝트 경험",
    ],
    overdare:
      "OVERDARE는 AI Agent뿐 아니라 모바일 UGC, 채팅, 아바타, 크리에이터 경제가 결합된 제품입니다. 넓은 제품 표면을 끝까지 운영한 경험이 Agent 기능의 실제 출시 리스크를 줄입니다.",
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
    body: "저장된 기록을 자연어 검색과 추천 이벤트로 다시 활용하는 AI product loop입니다.",
  },
  {
    title: "Evaluation Loop",
    subtitle: "CheckYourHospital",
    image: "/checkyourhospital-psf-validation-table.png",
    alt: "CheckYourHospital problem solution fit validation table for AI search readiness diagnosis",
    body: "문제 정의, 검증 단계, 제품 반영을 하나의 리포트/평가 구조로 닫는 방식입니다.",
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
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b bg-[#f7f8f5] dark:bg-[#0d1117]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              OVERDARE AI Agent Portfolio
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl dark:text-white">
              UGC 제작 의도를 실행 가능한 Agent workflow로 바꾸는 엔지니어링
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              게임 제작 기반 이해, AI Agent 실행 계층, 평가/리포트 자동화, 복잡한 제품 운영 경험을 OVERDARE Studio의 AI Agent 고도화 관점으로 정리했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Link href="/overdare-resume-kang-taewook.pdf">
                  <FileText className="h-4 w-4" />
                  Resume PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href="/overdare-cover-letter-career-description-kang-taewook.pdf">
                  Supporting document <ArrowRight className="h-4 w-4" />
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
              className="aspect-[16/11] w-full rounded-sm object-cover object-left-top"
            />
            <div className="mt-3 grid gap-3 text-sm text-slate-700 dark:text-slate-300 md:grid-cols-3">
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Task queue</div>
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Approval gate</div>
              <div className="rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-900">Evidence vault</div>
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
                <Icon className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                <h2 className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">{signal.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{signal.body}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[#eef3f0] py-14 dark:bg-[#101918] md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Evidence Map
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                제출용 문서의 주장을 실제 프로젝트 증거로 연결
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                공개 가능한 범위에서 문제, 구현 표면, 검증 방식, OVERDARE 적용 가능성을 분리했습니다.
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
                      <Icon className="h-7 w-7 shrink-0 text-teal-700 dark:text-teal-300" />
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
                          OVERDARE 연결
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{item.overdare}</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Visual Proof
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
              이미지 하나마다 증명할 역할을 분명히 분리
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300">
              단순 스크린샷 모음이 아니라, OVERDARE AI Agent 포지션에서 중요한 실행 제어, human review, memory reuse, evaluation loop를 각각 보여주도록 정리했습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-md">Structured output</Badge>
              <Badge variant="outline" className="rounded-md">Human review</Badge>
              <Badge variant="outline" className="rounded-md">Eval report</Badge>
              <Badge variant="outline" className="rounded-md">Regression guard</Badge>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {visualProofs.map((proof) => (
              <article key={proof.title} className="min-w-0 overflow-hidden rounded-md border bg-[#f7f8f5] dark:bg-[#0d1117]">
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

      <section className="bg-[#f7f8f5] py-14 dark:bg-[#0d1117] md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            How I Would Start
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
            OVERDARE Studio AI Agent에서 먼저 정리할 실행 체크
          </h2>
          <div className="mt-8 grid gap-3">
            {operatingChecks.map((check, index) => (
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
              <Link href="mailto:woogi.dev@gmail.com">woogi.dev@gmail.com</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
