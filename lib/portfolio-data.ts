import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Gauge,
  Glasses,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Radar,
  Repeat2,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react"

export const profile = {
  name: "Kang Taewook",
  handle: "Woogi",
  role: "AX Engineer / AI Agent & Automation Engineer",
  headline: "AI Agent와 자동화 시스템으로 팀의 반복 업무를 제품처럼 설계하고 운영합니다.",
  summary:
    "Flutter 멀티플랫폼 제품 개발에서 출발해 RAG, PromptOps, MCP, Tool Calling, 데이터 파이프라인, 사내 메신저 에이전트, 운영 자동화까지 확장해 온 Product Engineer입니다.",
  location: "Seoul, Korea",
  email: "woogi.dev@gmail.com",
  github: "https://github.com/woogi-kang",
  linkedin: "https://www.linkedin.com/in/taewook-kang/",
  medium: "https://medium.com/@dev-woogi",
  resumePdf: "/kang-taewook-resume-submission-2026.pdf",
}

export const metrics = [
  { label: "실무 경력", value: "6년차", detail: "2020.09 - 현재" },
  { label: "Agent/Skill 운영", value: "25+ / 340+", detail: "도메인 에이전트와 팀 스킬" },
  { label: "제품군 운영", value: "3 services x 3 platforms", detail: "Mobile, Desktop, Smart Glasses" },
  { label: "운영 자동화", value: "AX 전환", detail: "개발, 운영, CS, 마케팅 병목 개선" },
]

export const focusAreas = [
  {
    icon: Bot,
    title: "AI Agent Platform",
    body: "Claude Code, Codex CLI, Gemini CLI, OpenClaw 환경별 Harness, Workflow, Agent, Skill, Slash Command를 설계하고 팀 문화로 정착시킵니다.",
  },
  {
    icon: BrainCircuit,
    title: "PromptOps & LLM Evaluation",
    body: "시스템 프롬프트를 운영 자산으로 관리하기 위해 버전, 상태, 롤백, A/B 평가, 성과 스냅샷, 검증 하네스를 설계합니다.",
  },
  {
    icon: Database,
    title: "RAG & Data Pipeline",
    body: "Vector DB, Vertex AI Embedding, LangChain/LangGraph, MCP, Tool Calling, Structured Output 기반 데이터 수집/검증/상담 서비스를 구축합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "Product Shipping",
    body: "Flutter 앱, 웹, 백엔드, 인프라, BLE 디바이스, Kiosk/OTA/ADB 운영 자동화까지 제품 출시와 운영 안정화를 함께 책임집니다.",
  },
]

export const operatingPrinciples = [
  "AI 도구 도입보다 팀의 반복 업무가 줄어드는 운영 체계를 우선합니다.",
  "프롬프트, 에이전트, 스킬, 검증 기준을 코드와 같은 운영 자산으로 관리합니다.",
  "0 to 1 구축 후 배포, 현장 운영, 모니터링, 보정 루프까지 닫습니다.",
  "개발 직군 밖의 기획, 디자인, CS, 마케팅 병목도 자동화 대상으로 봅니다.",
]

export type CaseStudy = {
  slug: string
  title: string
  eyebrow: string
  period: string
  summary: string
  impact: string[]
  stack: string[]
  icon: typeof Bot
  sections: {
    title: string
    body: string[]
  }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ax-agent-platform",
    title: "Team AX Agent Platform",
    eyebrow: "Plaad / AI Agent & Automation",
    period: "2026.01 - 현재",
    summary:
      "Claude Code, Codex CLI, Gemini CLI, OpenClaw를 각 도구의 실행 모델에 맞게 Harness화하고, 에이전트/스킬/슬래시 커맨드를 팀이 재사용할 수 있는 작업 체계로 정리했습니다.",
    impact: [
      "25개 이상 도메인 에이전트와 340개 이상 스킬을 팀 템플릿으로 공유",
      "개발, 기획, 디자인, 콘텐츠, 마케팅, 리뷰, 법무, 재무 업무를 에이전트 워크플로우로 구조화",
      "개인 생산성 도구가 아니라 팀 공통 운영 문화로 AX 사용 방식을 정착",
    ],
    stack: ["Claude Code", "Codex CLI", "Gemini CLI", "OpenClaw", "MCP", "Slash Commands", "Subagents"],
    icon: Workflow,
    sections: [
      {
        title: "Problem",
        body: [
          "AI CLI 도구는 빠르게 도입되지만, 팀마다 사용 방식과 품질 기준이 달라지면 결과물이 일관되지 않습니다.",
          "반복 업무를 줄이려면 프롬프트 몇 개가 아니라 역할, 입력 형식, 산출물 기준, 검증 루틴, 공유 방식을 함께 설계해야 했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "각 CLI 환경의 제약과 실행 모델에 맞춰 Harness, Agent, Skill, Command, Template을 분리했습니다.",
          "작업을 plan, design, develop, QA, deploy, retro 단계로 쪼개고, 결과물을 리뷰 가능한 형태로 남기도록 워크플로우를 구성했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "팀원이 같은 문제를 반복해서 설명하지 않아도 되는 공통 작업 인터페이스를 만들었습니다.",
          "AX를 단기 실험이 아니라 제품 개발 프로세스의 일부로 운영할 수 있는 기반을 만들었습니다.",
        ],
      },
    ],
  },
  {
    slug: "promptops-data-pipeline",
    title: "PromptOps Data Pipeline",
    eyebrow: "AI Data Collection / Evaluation Harness",
    period: "2026",
    summary:
      "병원/시술 데이터 수집 파이프라인에서 시스템 프롬프트를 버전 관리하고, MCP/Playwright/Structured Output 기반 검증 하네스로 수집 품질을 관리하는 구조를 설계했습니다.",
    impact: [
      "DB/YAML 기반 prompt versioning, active/testing/archive 상태, 롤백 API 설계",
      "샘플링 검증, 전수 검증, 자동 승인/보정 흐름을 데이터 수집 파이프라인에 연결",
      "운영자가 품질 이슈를 추적하고 프롬프트 변경 효과를 비교할 수 있는 구조 마련",
    ],
    stack: ["PromptOps", "Claude Agent SDK", "MCP", "Playwright", "Structured Output", "PostgreSQL", "FastAPI"],
    icon: ShieldCheck,
    sections: [
      {
        title: "Problem",
        body: [
          "크롤링과 LLM 추출이 결합된 데이터 파이프라인은 프롬프트 변경 하나로 품질이 흔들릴 수 있습니다.",
          "운영자가 어떤 프롬프트가 언제 활성화되었고 어떤 데이터 품질을 냈는지 확인할 수 있어야 했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "시스템 프롬프트, 병원별 프롬프트, 시술 상세 프롬프트를 분리하고 version, owner, status, metric, rollback 정보를 관리했습니다.",
          "브라우저 기반 수집 결과를 구조화된 스키마로 검증하고, 원문/이미지/가격/시술명을 재확인하는 보정 흐름을 구성했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "프롬프트를 감으로 수정하는 방식에서 벗어나, 운영 지표와 검증 결과를 기준으로 개선할 수 있는 구조를 만들었습니다.",
          "데이터 파이프라인이 실패했을 때 원인 추적, 롤백, 보정이 가능한 운영 단위를 만들었습니다.",
        ],
      },
    ],
  },
  {
    slug: "self-improving-social-agents",
    title: "Self-Improving Social Outreach Agents",
    eyebrow: "SNS Automation / Lead Generation",
    period: "2026",
    summary:
      "X, Threads, Instagram, Xiaohongshu 기반 의료관광 아웃리치에서 키워드/LLM 분류, Expert-to-Persona 생성, factual guard, self-evolution loop를 설계했습니다.",
    impact: [
      "성과 데이터 수집, A/B 평가, multi-LLM 개선안 생성, voting/debate, testing/adopt 루프 설계",
      "브랜드 안전성과 사실 보존을 위해 factual/persona/drift guard 적용",
      "자동 포스팅보다 human-in-the-loop 리뷰와 품질 개선 중심으로 운영 위험 관리",
    ],
    stack: ["Playwright", "Codex", "Gemini", "PostgreSQL", "LLM-as-Judge", "Thompson Sampling", "Rate Limiter"],
    icon: Repeat2,
    sections: [
      {
        title: "Problem",
        body: [
          "SNS 자동화는 단순 생성량보다 사실성, 톤, 플랫폼별 맥락, 계정 안전성이 더 중요합니다.",
          "운영자가 매번 캠페인 전략과 콘텐츠 변형을 수작업으로 관리하면 확장성이 떨어집니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "키워드 프리필터와 LLM 의도 분류로 후보를 줄이고, Expert Base에서 factual content를 만든 뒤 Persona Adaptation으로 플랫폼 톤을 조정했습니다.",
          "성과 데이터를 바탕으로 prompt variant를 만들고 A/B 평가, voting/debate, lesson storage를 거쳐 다음 실행에 반영했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "SNS 운영을 무작위 자동화가 아니라 측정 가능한 실험과 개선 루프로 설계했습니다.",
          "플랫폼 정책과 브랜드 리스크를 고려한 semi-automated outreach 기반을 만들었습니다.",
        ],
      },
    ],
  },
  {
    slug: "ai-rag-consultation-products",
    title: "AI Beauty & Health Consultation Products",
    eyebrow: "RAG / Full-stack AI Product",
    period: "2026",
    summary:
      "뷰티/건강 상담 서비스에서 Next.js, FastAPI, GCP, Gemini, Vector DB, RAG, Tool Calling, SSE Streaming 기반 사용자 경험과 운영 도구를 개발했습니다.",
    impact: [
      "상담형 AI 제품의 프론트엔드, 백엔드, 인프라, 데이터 흐름을 함께 설계",
      "Vector DB와 semantic routing으로 지식 검색과 대화 흐름을 분리",
      "Admin tooling, event pipeline, data correction flow까지 운영 관점에서 연결",
    ],
    stack: ["Next.js", "FastAPI", "Gemini", "Vertex AI Embedding", "Vector DB", "RAG", "GCP Cloud Run"],
    icon: BrainCircuit,
    sections: [
      {
        title: "Problem",
        body: [
          "상담형 AI 제품은 답변 생성뿐 아니라 지식 검색, 사용자 상태, 운영 정책, 데이터 품질이 함께 맞물려야 합니다.",
          "프론트엔드 대화 UX와 백엔드 inference pipeline, 운영자 도구가 분리되면 제품 개선 속도가 느려집니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "RAG, tool calling, SSE streaming, admin workflow를 하나의 사용자/운영 흐름으로 연결했습니다.",
          "Cloud Run, Cloud SQL, Redis, Secret Manager 기반으로 서비스 운영에 필요한 인프라를 함께 다뤘습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI 기능을 데모가 아니라 운영 가능한 제품 흐름으로 묶었습니다.",
          "데이터 수집, 상담 품질, 운영 보정이 이어지는 full-stack AI product 기반을 만들었습니다.",
        ],
      },
    ],
  },
  {
    slug: "smart-glasses-platform-suite",
    title: "OWL / C-Biz / C-Sound Smart Glasses Platform",
    eyebrow: "XpertINC / Flutter App Lead",
    period: "2025.04 - 2025.12",
    summary:
      "AI 스마트 안경 제품군의 모바일, 데스크톱, 스마트 글래스 앱 구조를 설계하고 BLE 디바이스 연동, 자막/음성 전달, Kiosk/OTA/ADB 운영 자동화를 리드했습니다.",
    impact: [
      "3개 서비스의 Mobile, Desktop, Smart Glasses 플랫폼을 소수 인원으로 유지보수 가능한 구조로 정리",
      "샤롯데씨어터, 블루스퀘어, 코엑스, 베트남 컨퍼런스, 보조기기/보조금 대상 서비스 운영을 뒷받침",
      "Android Device Owner Kiosk Mode, OTA, ADB Factory 웹앱으로 현장 기기 운영 자동화",
    ],
    stack: ["Flutter", "Dart", "Riverpod", "Melos", "BLE", "GATT", "Android Kiosk", "OTA", "ADB"],
    icon: Glasses,
    sections: [
      {
        title: "Problem",
        body: [
          "동일한 제품군 안에서 모바일 앱, 데스크톱 앱, 스마트 글래스 앱, 현장 기기 운영 도구를 함께 관리해야 했습니다.",
          "BLE 연결 품질과 현장 기기 배포 안정성이 실제 서비스 운영 품질을 좌우했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "모노레포 기반 멀티플랫폼 구조, BLE central/peripheral, GATT, MTU 협상, 청크 메시징, 배터리/디스플레이 동기화 흐름을 정리했습니다.",
          "Kiosk Mode, OTA 업데이트, ADB 병렬 설치/삭제/업데이트 웹앱으로 현장 운영자의 반복 작업을 줄였습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "짧은 기간에 3개 서비스와 각 플랫폼을 운영 가능한 수준으로 유지보수했습니다.",
          "제품 개발뿐 아니라 공연장, 컨퍼런스, 보조기기 현장의 운영 문제까지 개발 범위로 다뤘습니다.",
        ],
      },
    ],
  },
  {
    slug: "flutter-consulting-modernization",
    title: "Project-based Flutter Consulting",
    eyebrow: "App Architecture / Migration / Operations",
    period: "2023.03 - 2025.01",
    summary:
      "OTT, 보안 문서, 소셜 주문, 인플루언서 매칭, 프리미엄 데이팅, 로컬 OTA, 프리다이빙 커뮤니티 앱에서 구조 개선, 마이그레이션, 출시 안정화를 담당했습니다.",
    impact: [
      "OChoice OTT의 Android/iOS/Android TV/WebOS/Tizen 확장과 DRM/Video Player 안정화",
      "KT Cloud SecuDrive Flutter 1.x -> 3.x, BLoC -> Riverpod 마이그레이션",
      "Socket.io, Talkplus, Sentry, Crashlytics, Analytics 기반 실시간 기능/운영 모니터링 개선",
    ],
    stack: ["Flutter", "Riverpod", "BLoC", "Melos", "Mason", "Fastlane", "Sentry", "Crashlytics"],
    icon: Wrench,
    sections: [
      {
        title: "Problem",
        body: [
          "여러 조직에서 Flutter 제품의 기술 부채, 레거시 마이그레이션, 멀티플랫폼 확장, 배포 안정화 문제가 반복되고 있었습니다.",
          "짧은 투입 기간 안에 원인을 파악하고, 팀이 이어서 유지보수할 수 있는 구조를 남겨야 했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "상태관리, API layer, 패키지 구조, CI/CD, 모니터링, 실시간 SDK 연동을 제품 상황에 맞게 개선했습니다.",
          "완전한 재작성보다 운영 리스크를 줄이는 점진적 전환과 릴리즈 안정화를 우선했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "짧은 근속처럼 보일 수 있는 이력을 프로젝트 기반 문제 해결 경험으로 정리할 수 있는 실무 성과를 만들었습니다.",
          "도메인이 달라도 출시와 운영을 막는 기술 병목을 빠르게 찾아 해결하는 역량을 축적했습니다.",
        ],
      },
    ],
  },
]

export const capabilities = [
  {
    icon: GitBranch,
    title: "Agent Workflow Design",
    items: ["Plan/Design/Develop/QA/Deploy workflow", "Subagent task decomposition", "Reusable team templates"],
  },
  {
    icon: Gauge,
    title: "Evaluation & Operations",
    items: ["Prompt versioning", "A/B evaluation", "Structured output validation", "Rollback and audit logs"],
  },
  {
    icon: Radar,
    title: "Automation Surface",
    items: ["Slack/Discord agents", "Kakao bot workflows", "Playwright/uiautomator2", "Crawler and admin tooling"],
  },
  {
    icon: Cloud,
    title: "AI Product Infrastructure",
    items: ["GCP Cloud Run/Cloud SQL", "PostgreSQL/Redis", "Vector DB/RAG", "SSE and tool calling"],
  },
  {
    icon: Layers3,
    title: "Flutter Product Systems",
    items: ["Mobile/Desktop/TV/Smart Glasses", "BLE/GATT", "Kiosk/OTA/ADB", "Release automation"],
  },
  {
    icon: Code2,
    title: "Full-stack Delivery",
    items: ["Next.js/React/TypeScript", "FastAPI/Python", "Admin dashboards", "Monitoring and stabilization"],
  },
]

export const timeline = [
  {
    period: "2026.01 - 현재",
    role: "AX Engineer / AI Agent & Automation Engineer",
    company: "주식회사 플레드",
    body: "AI Agent/Skill 플랫폼, PromptOps, RAG/Vector DB 기반 서비스, MCP/Tool Calling, 데이터 파이프라인, SNS/메신저 자동화, 프론트엔드/백엔드/인프라를 설계하고 구현.",
  },
  {
    period: "2025.04 - 2025.12",
    role: "App Lead / AX Transformation",
    company: "엑스퍼트아이엔씨",
    body: "OWL, C-Biz, C-Sound Flutter 멀티플랫폼 앱 구조, BLE 디바이스 연동, Android Kiosk/OTA/ADB 현장 운영, Claude Code 기반 사내 AX 전환 담당.",
  },
  {
    period: "2023.03 - 2025.01",
    role: "Project-based Flutter Consultant / App Lead",
    company: "Multiple product teams",
    body: "OTT, 보안 문서, 실시간 주문, 인플루언서 매칭, 프리미엄 데이팅, 로컬 OTA, 프리다이빙 커뮤니티 앱의 구조 개선과 출시 안정화 담당.",
  },
  {
    period: "2020.09 - 2022.12",
    role: "Flutter Product Engineer",
    company: "휴넷 / 벡터스페이스 / 핫써니",
    body: "Flutter 앱 개발, 마이그레이션, 채팅/비디오/지도/배포 자동화, 운영 모니터링, 성장관리/독서모임/여행 숏폼 앱 운영에 기여.",
  },
]

export const stackGroups = [
  {
    title: "AI/AX",
    items: ["Claude Code", "Codex CLI", "Gemini CLI", "OpenClaw", "Multica", "MCP", "LangChain", "LangGraph", "PromptOps", "LLM Evaluation"],
  },
  {
    title: "Product Engineering",
    items: ["Next.js", "React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "GCP", "Firebase"],
  },
  {
    title: "App & Device",
    items: ["Flutter", "Dart", "Riverpod", "Melos", "BLE", "GATT", "Kiosk Mode", "OTA", "ADB"],
  },
  {
    title: "Quality & Automation",
    items: ["Playwright", "uiautomator2", "Sentry", "Crashlytics", "GitHub Actions", "Fastlane", "CircleCI", "TeamCity"],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
