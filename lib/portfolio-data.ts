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
  role: "AI Automation Engineer / Agent Engineer",
  headline: "비개발 직군도 함께 쓰는 AI 업무 운영 체계로 회사의 반복 업무를 자동화합니다.",
  summary:
    "2025년 Claude Code 공개 이후 Claude/Codex/Gemini CLI 기반 환경에서 누적 약 100억 토큰 규모의 실험과 실무 적용을 반복하며, AI를 조직의 업무 방식으로 전환하는 실행 환경을 설계해 온 Product Engineer입니다. 사내 업무 요청을 task로 나누고 Agent/Skill 자산, 메신저 Agent 접점, 검증·기록 루틴을 묶어 비개발 직군도 함께 쓰는 업무 자동화 환경을 구축해 왔습니다.",
  location: "Seoul, Korea",
  email: "woogi.dev@gmail.com",
  github: "https://github.com/woogi-kang",
  linkedin: "https://www.linkedin.com/in/taewook-kang/",
  medium: "https://medium.com/@dev-woogi",
  resumePdf: "/wyatt-resume-kang-taewook.pdf",
  careerDescriptionPdf: "/wyatt-career-description-kang-taewook.pdf",
}

export const metrics = [
  { label: "실무 경력", value: "6년차", detail: "2020.09 - 현재" },
  { label: "Agent 자산 정리", value: "25+ / 394", detail: "도메인 Agent와 분류된 Skill" },
  { label: "AI 업무 운영 체계", value: "사내 자동화 툴", detail: "Messenger, Task Board, Worker" },
  { label: "자동화 범위", value: "Workflow + Data", detail: "사내 업무, 수집, 리포트, 콘텐츠" },
]

export const focusAreas = [
  {
    icon: Bot,
    title: "Company-wide AI Workflow Automation",
    body: "사내 업무 자동화 툴로 업무 요청과 실행 기록을 관리하고, 메신저 기반 Agent gateway를 Slack/Discord와 연결해 모든 회사 구성원이 메신저에서 도메인 특화 AI 에이전트를 호출하도록 설계합니다.",
  },
  {
    icon: Database,
    title: "Data Pipeline & Verification",
    body: "병원 상세, 피부 시술, 이벤트·프로모션, 뷰티 제품, 리뷰, 채널·성과 데이터처럼 업무 도메인에 필요한 외부 데이터를 수집 대상으로 정의하고 checkpoint, retry, validation, export까지 닫아 현업 리포트와 대시보드에 쓸 수 있는 데이터 흐름으로 만듭니다.",
  },
  {
    icon: BrainCircuit,
    title: "PromptOps & Test and Learn",
    body: "프롬프트를 version, status, metric, rollback이 있는 운영 자산으로 관리하고 A/B evaluation, quality score, factual/drift guard로 개선합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "AI Product Operations",
    body: "AI 기능을 Admin, report, runbook, E2E, 평가 산출물, follow-up automation까지 포함한 제품 운영 흐름으로 연결합니다.",
  },
]

export const operatingPrinciples = [
  "AI 도구 도입보다 회사 업무의 반복 지점을 찾아 요청, 실행, 검증, 기록이 이어지는 운영 체계로 바꾸는 일을 우선합니다.",
  "프롬프트, 에이전트, 스킬, 데이터 검증 기준을 코드와 같은 운영 자산으로 관리합니다.",
  "데이터 수집은 checkpoint, retry, validation, export까지 닫아야 실제 업무에 쓸 수 있다고 봅니다.",
  "개발 직군 밖의 전략, 운영, 리포트, 콘텐츠, 고객 접점 업무도 메신저 기반 Agent 접점으로 연결합니다.",
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
    slug: "internal-automation-agent-workflow",
    title: "Company-wide AI Workflow Automation",
    eyebrow: "업무 요청·실행·승인·메신저 Agent 접점",
    period: "2026.01 - 현재",
    summary:
      "AI CLI 사용이 개발자 개인 프롬프트에 머무르지 않도록 사내 업무 자동화 툴과 agent/skill 자산 저장소를 정리하고, 메신저 기반 Agent gateway를 Slack/Discord와 연결해 모든 회사 구성원이 메신저에서 도메인 특화 AI 에이전트를 사용할 수 있는 업무 접점을 설계했습니다.",
    impact: [
      "비개발 직군도 메신저에서 사내 규칙, 서비스 위키, 운영 정책, 리포트 업무 에이전트를 호출할 수 있는 접점 설계",
      "Claude Code, Codex CLI, Gemini CLI가 공유하는 agent/skill workspace 구성",
      "사내 업무 자동화 툴과 task board로 task, run, approval, 산출물, worker heartbeat, audit event가 남는 실행 관리 체계 구성",
    ],
    stack: ["사내 업무 자동화 툴", "Agent/Skill Workspace", "Messenger Gateway", "Slack", "Discord", "Task Board", "Claude Code", "Codex CLI", "Gemini CLI", "FastAPI", "Docker"],
    icon: Workflow,
    sections: [
      {
        title: "Problem",
        body: [
          "AI CLI 도구는 개인 생산성에는 빠르게 효과가 있지만, 팀 단위로 쓰려면 사용 방식, 품질 기준, 결과물 형식, 검증 루틴이 흩어집니다.",
          "특히 비개발 직군은 CLI나 개발 환경에 직접 접근하기 어렵기 때문에, 메신저처럼 익숙한 업무 접점에서 도메인 특화 AI 에이전트를 사용할 수 있어야 했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "agent/skill 자산 저장소는 여러 AI CLI가 같은 규칙, agent, skill, command를 공유하게 하는 작업 자산 저장소로 정리했고, 메신저 기반 Agent gateway는 Slack/Discord 기반 접점으로 연결했습니다.",
          "사내 업무 자동화 툴과 task board는 요청, 실행, 승인, 결과 기록, human review가 남는 업무 운영 시스템 역할을 하도록 구성했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI를 개발자 개인 CLI 사용이 아니라 모든 구성원이 각자 업무 맥락에서 호출할 수 있는 회사 공용 업무 접점으로 확장했습니다.",
          "도메인별 에이전트, 실행 기록, 승인 흐름, 산출물 관리가 함께 남아 현업 확산 가능성과 운영 재현성을 높였습니다.",
        ],
      },
    ],
  },
  {
    slug: "data-collection-verification-pipeline",
    title: "Domain Data Collection and Verification Pipeline",
    eyebrow: "Naver Place / Treatment / Promotion / Beauty Product Data",
    period: "2026",
    summary:
      "네이버 플레이스 피부과 4,255건을 시작으로 병원 상세, 피부 시술, 이벤트·프로모션, 뷰티 제품, 리뷰, 채널·성과 데이터처럼 회사 업무 도메인에 필요한 외부 데이터를 수집·검증하기 위해 HTTP-only crawler, Playwright worker, Gemini/Codex CLI, Cloud SQL, R2, SQLite checkpoint를 조합한 데이터 파이프라인을 구축했습니다.",
    impact: [
      "4,255건 입력 데이터를 대상으로 place id search, home, information, photos, validation, export skill pipeline 설계",
      "병원 상세, 피부 시술, 이벤트·프로모션, 뷰티 제품, 리뷰, 채널·성과 데이터를 업무 도메인별 수집 대상으로 정의",
      "서울 1,723건을 6개 구역 split DB로 나누고 checkpoint, retry, merge, CSV/JSON export까지 운영",
      "locate -> collect -> crosscheck -> R2 upload -> DB insert 흐름의 event pipeline과 monthly runbook 작성",
    ],
    stack: ["Python", "Playwright", "httpx", "PostgreSQL", "SQLite", "Cloud SQL", "R2", "Gemini CLI"],
    icon: Database,
    sections: [
      {
        title: "Problem",
        body: [
          "회사 업무 도메인에 필요한 데이터는 병원 상세, 피부 시술, 이벤트·프로모션, 뷰티 제품, 리뷰, 채널·성과 데이터처럼 출처와 형태가 계속 달라집니다.",
          "외부 플랫폼 데이터는 중복, 동명 객체, DOM 변경, 일부 실패가 항상 발생하기 때문에 수집 결과가 현업 리포트에 쓰이려면 실패 재시도와 검증 가능성이 필요했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "수집 단계를 skill 단위로 나누고, SQLite checkpoint와 split DB를 적용했습니다.",
          "좌표 기반 matching, APOLLO_STATE parsing, structured validation, 실행 산출물 저장을 통해 데이터 품질을 추적했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "단발성 크롤링이 아니라 중단 후 재개, 실패 재시도, 병합, 보정, export가 가능한 운영 파이프라인을 만들었습니다.",
          "수집 데이터를 리포트와 대시보드에 연결할 수 있는 형태로 정리했습니다.",
        ],
      },
    ],
  },
  {
    slug: "self-improving-social-agents",
    title: "PromptOps and Content Test & Learn",
    eyebrow: "Social/Content Automation / LLM Evaluation",
    period: "2026",
    summary:
      "브랜드 콘텐츠 운영을 위해 검색, 수집, 분석, 콘텐츠 생성, 성과 측정, 프롬프트 개선, lesson 저장으로 이어지는 Test & Learn 구조를 설계했습니다.",
    impact: [
      "prompt versioning, active/testing 상태, A/B evaluator, quality score, bandit, drift monitor 구조 설계",
      "metrics -> analyze -> generate -> vote -> debate -> adopt -> lesson으로 이어지는 개선 루프 구성",
      "factual guard, persona guard, human review, rate limit, emergency halt로 브랜드 리스크 관리",
    ],
    stack: ["PromptOps", "A/B Evaluation", "Codex", "Gemini", "PostgreSQL", "LLM-as-Judge", "Quality Guard"],
    icon: Repeat2,
    sections: [
      {
        title: "Problem",
        body: [
          "LLM 콘텐츠 자동화는 생성량보다 사실성, 브랜드 톤, 성과 측정, 개선 루프가 중요합니다.",
          "운영자가 매번 소재와 문구를 수작업으로 관리하면 확장성이 떨어집니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "전문가 기반 콘텐츠 생성과 persona adaptation을 분리하고, 성과 데이터를 prompt variant와 lesson으로 되돌리는 구조를 만들었습니다.",
          "개선안은 단일 응답에 의존하지 않고 평가와 승인 흐름을 거치도록 했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "브랜드 콘텐츠 운영을 감에 의존하는 생성 작업이 아니라 측정 가능한 LLM Test & Learn 프로세스로 전환했습니다.",
          "사실성, 톤, drift, 성과를 함께 보는 품질 중심 자동화 구조를 만들었습니다.",
        ],
      },
    ],
  },
  {
    slug: "ai-product-quality-report-automation",
    title: "AI Product Quality and Report Automation",
    eyebrow: "CheckYourHospital Side Project / Memoriz",
    period: "2026",
    summary:
      "개인 사이드 프로젝트 CheckYourHospital의 AI SEO/AEO 진단 서비스와 Memoriz의 AI album/search 기능에서 평가 데이터, 리포트, 품질 가드, Admin, E2E, follow-up automation까지 포함한 운영 품질 검증 체계를 구축했습니다.",
    impact: [
      "병원 홈페이지를 7개 카테고리 48개 항목으로 진단하는 AI SEO/AEO scoring/report pipeline 설계",
      "AI 추천 시뮬레이션, 다국어 매트릭스, 의료법 컴플라이언스, Naver Place 연동, PDF 리포트 생성 흐름 구축",
      "AI 기능 변경 시 평가 데이터, 리포트 산출물, targeted test 갱신을 요구하는 guard script 적용",
    ],
    stack: ["Next.js", "FastAPI", "Playwright", "Gemini", "GCP", "E2E", "Eval Reports", "PDF"],
    icon: ShieldCheck,
    sections: [
      {
        title: "Problem",
        body: [
          "AI 기능은 모델, 프롬프트, 데이터, threshold가 바뀔 때 품질이 흔들립니다.",
          "기능 구현만으로는 운영 중 품질 저하를 감지하기 어렵습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "AI 결과물을 리포트와 Admin에서 확인 가능하게 만들고, 평가 데이터, 리포트 산출물, targeted test를 기능 변경과 연결했습니다.",
          "리드 캡처와 후속 자동화까지 제품 흐름 안에 포함했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI 기능을 데모가 아니라 고객에게 설명 가능한 리포트와 운영자가 검증 가능한 업무 흐름으로 만들었습니다.",
          "품질 기준과 운영 산출물이 함께 남는 AI 제품 개발 프로세스를 만들었습니다.",
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
    items: ["Messenger-based agent access", "Task contract and approval gate", "Agent/skill/command templates"],
  },
  {
    icon: Gauge,
    title: "LLM Test & Learn",
    items: ["Prompt versioning", "A/B evaluation", "Quality score and factual guard", "Rollback and lesson storage"],
  },
  {
    icon: Radar,
    title: "Automation Surface",
    items: ["Slack/Discord agent workflows", "Kakao workflows", "Playwright/httpx crawlers", "Admin and report tooling"],
  },
  {
    icon: Cloud,
    title: "Data Pipeline Infrastructure",
    items: ["Cloud SQL/PostgreSQL", "SQLite checkpoint and retry", "R2/GCS output storage", "CSV/JSON export"],
  },
  {
    icon: Layers3,
    title: "Flutter Product Systems",
    items: ["Mobile/Desktop/TV/Smart Glasses", "BLE/GATT", "Kiosk/OTA/ADB", "Release automation"],
  },
  {
    icon: Code2,
    title: "Full-stack Delivery",
    items: ["Next.js/React/TypeScript", "FastAPI/Python", "Admin dashboards", "Monitoring and operational runbooks"],
  },
]

export const timeline = [
  {
    period: "2026.01 - 현재",
    role: "AI Automation Engineer / Agent Engineer",
    company: "주식회사 플레드",
    body: "AI Agent와 데이터 자동화로 개발, 운영, 마케팅, CS, 리포트 업무의 반복 구간을 줄이는 역할. 사내 업무 자동화 툴, agent/skill 자산 저장소, 메신저 기반 Agent 접점, task board를 운영·파일럿 단계로 나눠 설계하고 구현.",
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
    title: "AI Automation",
    items: ["사내 업무 자동화 툴", "Agent/Skill Workspace", "Messenger Gateway", "Claude Code", "Codex CLI", "Gemini CLI", "Task Board", "MCP", "PromptOps", "LLM Evaluation"],
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
