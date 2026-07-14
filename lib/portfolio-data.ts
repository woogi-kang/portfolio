import {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Gauge,
  Glasses,
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
  role: "AI Data Product Engineer / Product Engineer",
  headline: "비정형 도메인 데이터를 LLM 파이프라인과 제품 경험으로 연결합니다.",
  summary:
    "Flutter 기반 멀티플랫폼 제품 개발에서 출발해 AI 데이터 제품, LLM 파이프라인, AX/AI Agent 영역으로 확장해 온 Product Engineer입니다. 웹, 이미지, OCR, 위치, 리뷰 텍스트처럼 형태가 제각각인 데이터를 수집하고 검증해 RAG, Vector DB, Tool Calling, PromptOps, 평가 하네스, AI 상담·검색·추천 서비스에 연결해 왔습니다.",
  location: "Seoul, Korea",
  email: "woogi.dev@gmail.com",
  github: "https://github.com/woogi-kang",
  linkedin: "https://www.linkedin.com/in/taewook-kang/",
  medium: "https://medium.com/@dev-woogi",
  resumePdf: "/alwayz-shopport-product-engineer-ai-data-resume-kang-taewook.pdf",
  careerDescriptionPdf: "/kang-taewook-resume-submission-2026.pdf",
}

export const metrics = [
  { label: "실무 경력", value: "6년차", detail: "2020.09 - 현재" },
  { label: "AI 데이터 제품", value: "Catalog Data", detail: "Entity, Attribute, Alias, Search" },
  { label: "LLM 파이프라인", value: "Structured", detail: "Extraction, Grounding, Evaluation" },
  { label: "제품 구현", value: "Full-stack", detail: "App, API, Worker, Report" },
]

export const focusAreas = [
  {
    icon: Database,
    title: "LLM Data Pipeline and Catalog Layer",
    body: "웹 페이지, 이미지, OCR, DOM snapshot, 리뷰 텍스트를 모아 entity, attribute, alias, embedding, search index로 정리합니다. AI 검색·추천·상담이 같은 데이터를 안정적으로 재사용할 수 있게 만드는 일에 집중합니다.",
  },
  {
    icon: BrainCircuit,
    title: "Grounded AI Service and Agent UX",
    body: "RAG/HybridSearch, Google Search Grounding, Tool Calling, source metadata, token usage log, SSE streaming을 묶어 답변 근거와 실패 케이스가 남는 AI 상담·검색 UX를 구현합니다.",
  },
  {
    icon: Gauge,
    title: "Quality, Evaluation, and Guardrails",
    body: "Prompt versioning, A/B evaluation, factual guard, drift guard, confidence threshold, human review queue를 통해 모델·프롬프트·검색 전략이 바뀔 때 생기는 품질 리스크를 관리합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "Full-stack Product Shipping",
    body: "Next.js, FastAPI, PostgreSQL, Redis, GCP, Flutter를 사용해 AI 기능을 API, worker, admin/report, app/web UI, monitoring까지 이어지는 제품 구조로 구현합니다.",
  },
]

export const operatingPrinciples = [
  "LLM 기능은 좋은 프롬프트만으로 안정화되지 않습니다. 먼저 믿을 수 있는 데이터 구조, 실패 처리, 평가 루프가 필요합니다.",
  "데이터 수집은 checkpoint, retry, validation, export까지 이어져야 제품과 의사결정에 실제로 쓰일 수 있습니다.",
  "AI가 추론해도 되는 영역과 반드시 원천 데이터가 필요한 영역을 나누고, 불확실한 결과는 human review나 fallback으로 처리합니다.",
  "기술 선택 자체보다 사용자 경험, 데이터 품질, 운영 비용, 실험 속도가 제품 성과를 만든다고 봅니다.",
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
    slug: "llm-structured-extraction-catalog-pipeline",
    title: "LLM Structured Extraction and Catalog Pipeline",
    eyebrow: "Entity / Attribute / Alias / Search Data Layer",
    period: "2026",
    summary:
      "병원·미용·뷰티 도메인에서 웹 페이지, 이미지, OCR, ARIA snapshot, DOM 후보를 수집하고 Gemini/Claude Structured Output으로 엔티티와 속성을 추출하는 데이터 파이프라인을 구축했습니다.",
    impact: [
      "Playwright snapshot, screenshot, DOM 후보를 Gemini에 전달해 crawl structure를 만들고 selector validation과 실패 피드백 재시도를 적용",
      "Claude API wrapper에 Pydantic schema 기반 structured output, 동시성 제어, timeout/retry, token/cost tracking을 적용",
      "표준 시술/병원 엔티티, 다국어 번역, alias coverage, search dictionary를 AI 상담의 RAG/HybridSearch에서 재사용하도록 정리",
    ],
    stack: ["Playwright", "Gemini", "Claude", "Pydantic", "Structured Output", "PostgreSQL", "Search Alias", "RAG"],
    icon: Database,
    sections: [
      {
        title: "Problem",
        body: [
          "도메인 데이터는 웹 페이지, 이미지, OCR, 리뷰성 텍스트, 다국어 별칭처럼 형태가 흩어져 있어 LLM 서비스가 바로 신뢰하고 쓰기 어렵습니다.",
          "수집 대상 페이지마다 DOM 구조가 다르고, LLM 추출 결과도 schema, selector, 비용, 실패 재시도 기준이 없으면 반복 운영하기 어렵습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "Playwright로 ARIA snapshot, screenshot, DOM 후보를 수집하고 Gemini/Claude Structured Output으로 crawl structure와 이벤트·시술 속성을 추출했습니다.",
          "Pydantic schema, selector validation, retry, checkpoint, token/cost tracking을 함께 설계해 LLM extraction을 일회성 프롬프트가 아니라 다시 돌릴 수 있는 데이터 파이프라인으로 만들었습니다.",
          "표준 엔티티, 다국어 번역, alias coverage, search dictionary를 정리해 AI 상담과 검색에서 같은 데이터를 재사용할 수 있게 했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "비정형 도메인 데이터를 AI 제품이 사용할 수 있는 entity, attribute, alias, search index 단위로 정리했습니다.",
          "상품/시각/판매/체감 속성 추출과 비슷한 문제를 병원·미용 도메인에서 먼저 다뤄본 사례입니다.",
        ],
      },
    ],
  },
  {
    slug: "evidence-gated-ai-recommendation-pipeline",
    title: "근거 기반 AI Memory and Recommendation Pipeline",
    eyebrow: "Memoriz / Place Verification / Taste Graph / Recommendation",
    period: "2026",
    summary:
      "Memoriz에서 사진, GPS, OCR, 일정 context를 바탕으로 장소 후보와 확정 장소를 분리하고, 확인된 데이터만 제목/요약, taste profile, recommendation seed, KPI 집계에 사용하도록 품질 정책을 설계했습니다.",
    impact: [
      "LLM이 장소명을 임의로 만들지 않도록 원천 데이터와 근거 기반 품질 정책을 분리해 설계",
      "후보, 확정, area/container fallback을 나누어 hallucination과 과도한 provider search 비용을 제어",
      "확정 장소만 taste profile, recommendation seed, 첫 추천 CTA, KPI report에 반영",
    ],
    stack: ["FastAPI", "Flutter", "Gemini", "Pydantic", "pgvector", "RAG", "KPI Report", "Human Review"],
    icon: ShieldCheck,
    sections: [
      {
        title: "Problem",
        body: [
          "사진과 위치만으로 정확한 장소를 맞추는 문제는 음식점, 카페, 복합건물처럼 오답 비용이 높은 케이스가 많습니다.",
          "AI가 그럴듯한 이름을 만들어내면 사용자 기록과 추천 seed까지 오염될 수 있어 원천 데이터와 후보 데이터를 엄격히 나눠야 했습니다.",
        ],
      },
      {
        title: "Approach",
        body: [
          "OCR, 간판, 영수증, 예약, 메뉴판, 일정 context처럼 검색어를 만들 수 있는 근거 자료가 있을 때만 provider search를 허용했습니다.",
          "확정 장소가 없으면 title/summary 생성을 보류하고, 불확실한 식당·카페·복합건물은 area/container fallback으로 처리했습니다.",
          "확정된 장소만 취향 그래프와 추천 seed에 반영하고, 첫 추천 CTA와 KPI report에서 노출/클릭/저장 흐름을 추적했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI 추천 품질을 모델 응답 자체가 아니라 데이터 신뢰도, 사용자 확인, fallback 정책으로 관리했습니다.",
          "커머스 카탈로그에서도 후기, 상세페이지, 가격, 이미지, 후보 상품명이 섞일 때 같은 원천 데이터 기준이 중요하다고 봅니다.",
        ],
      },
    ],
  },
  {
    slug: "internal-automation-agent-workflow",
    title: "Company-wide AI Workflow Automation",
    eyebrow: "업무 요청·실행·승인·메신저 Agent 접점",
    period: "2026.01 - 2026.05",
    summary:
      "AI CLI 사용이 개발자 개인 도구에 머무르지 않도록 사내 업무 자동화 툴과 agent/skill 자산 저장소를 정리했습니다. 메신저 기반 Agent gateway를 Slack/Discord와 연결해 회사 구성원이 각자 업무 맥락에서 AI 에이전트를 호출할 수 있는 접점도 설계했습니다.",
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
          "agent/skill 자산 저장소는 여러 AI CLI가 같은 규칙, agent, skill, command를 공유하도록 정리했고, 메신저 기반 Agent gateway는 Slack/Discord 접점에서 사용할 수 있게 했습니다.",
          "사내 업무 자동화 툴과 task board에는 요청, 실행, 승인, 결과 기록, human review가 남도록 구성했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI를 개발자 개인 CLI 사용이 아니라 모든 구성원이 각자 업무 맥락에서 호출할 수 있는 회사 공용 업무 접점으로 확장했습니다.",
          "도메인별 에이전트, 실행 기록, 승인 흐름, 산출물 관리가 함께 남아 현업으로 확산하기 쉬운 운영 방식을 만들었습니다.",
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
      "네이버 플레이스 피부과 4,255건을 시작으로 병원 상세, 피부 시술, 이벤트·프로모션, 뷰티 제품, 리뷰, 채널·성과 데이터를 수집·검증하는 데이터 파이프라인을 구축했습니다. HTTP-only crawler, Playwright worker, Gemini/Codex CLI, Cloud SQL, R2, SQLite checkpoint를 상황에 맞게 조합했습니다.",
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
          "단발성 크롤링이 아니라 중단 후 재개, 실패 재시도, 병합, 보정, export까지 가능한 파이프라인으로 정리했습니다.",
          "수집한 데이터는 리포트와 대시보드에서 바로 사용할 수 있는 형태로 가공했습니다.",
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
      "factual guard, persona guard, human review, rate limit, emergency halt로 브랜드 리스크를 관리",
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
          "전문가 기반 콘텐츠 생성과 persona adaptation을 분리하고, 성과 데이터를 prompt variant와 lesson으로 되돌리는 흐름을 만들었습니다.",
          "개선안은 단일 응답에 의존하지 않고 평가와 승인 흐름을 거치도록 했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "브랜드 콘텐츠 운영을 감에 의존하는 생성 작업이 아니라 측정 가능한 LLM Test & Learn 프로세스로 전환했습니다.",
          "사실성, 톤, drift, 성과를 함께 보는 품질 중심 자동화 방식을 만들었습니다.",
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
      "개인 사이드 프로젝트 CheckYourHospital의 AI SEO/AEO 진단 서비스와 Memoriz의 AI album/search 기능에서 평가 데이터, 리포트, 품질 가드, Admin, E2E, follow-up automation까지 이어지는 품질 검증 체계를 구축했습니다.",
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
          "AI 결과물을 리포트와 Admin에서 확인할 수 있게 만들고, 평가 데이터, 리포트 산출물, targeted test를 기능 변경 흐름에 포함했습니다.",
          "리드 캡처와 후속 자동화까지 제품 흐름 안에 포함했습니다.",
        ],
      },
      {
        title: "Result",
        body: [
          "AI 기능을 데모가 아니라 고객에게 설명 가능한 리포트와 운영자가 검증할 수 있는 업무 흐름으로 만들었습니다.",
          "품질 기준과 운영 산출물이 함께 남는 AI 제품 개발 방식을 정리했습니다.",
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
          "짧은 기간에 3개 서비스와 각 플랫폼을 실제 운영할 수 있는 수준으로 유지보수했습니다.",
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
    icon: Database,
    title: "Catalog-like Data Layer",
    items: ["Entity and attribute extraction", "Alias and multilingual search dictionary", "Embedding/search document design"],
  },
  {
    icon: Gauge,
    title: "LLM Quality Loop",
    items: ["Prompt versioning", "A/B evaluation", "Factual and drift guard", "Human review and fallback policy"],
  },
  {
    icon: Radar,
    title: "Grounded AI Service",
    items: ["RAG/HybridSearch", "Google Search Grounding", "Tool Calling and source metadata", "SSE streaming UX"],
  },
  {
    icon: Cloud,
    title: "Data Pipeline Infrastructure",
    items: ["Cloud SQL/PostgreSQL", "SQLite checkpoint and retry", "Playwright/httpx crawlers", "CSV/JSON export"],
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
    period: "2026.01 - 2026.05",
    role: "App Lead · AX Engineer",
    company: "주식회사 플레드",
    body: "AI Agent와 데이터 자동화로 개발, 운영, 마케팅, CS, 리포트 업무의 반복 구간을 줄이는 역할. 병원·미용·뷰티 도메인의 웹/이미지/OCR/리뷰성 데이터를 수집·구조화·검증하고 AI 상담, RAG/HybridSearch, grounded web search, report/admin 운영 흐름으로 연결.",
  },
  {
    period: "2025.04 - 2025.12",
    role: "App Lead / AX Transformation",
    company: "엑스퍼트아이엔씨",
    body: "OWL, C-Biz, C-Sound Flutter 멀티플랫폼 앱 구조, BLE 디바이스 연동, Android Kiosk/OTA/ADB 현장 운영, Claude Code 기반 사내 AX 전환 담당.",
  },
  {
    period: "2023.03 - 2025.01",
    role: "프로젝트 기반 Flutter 컨설턴트 · App Lead",
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
    title: "AI/LLM/Data",
    items: ["Gemini", "Claude", "OpenAI API", "Structured Output", "Tool Calling", "RAG", "Vector DB", "PromptOps", "LLM Evaluation"],
  },
  {
    title: "Data Pipeline",
    items: ["Python", "FastAPI", "Pydantic", "PostgreSQL", "SQLite checkpoint", "Redis", "Playwright", "httpx", "CSV/JSON export"],
  },
  {
    title: "Product Engineering",
    items: ["Next.js", "React", "TypeScript", "Flutter", "Dart", "Riverpod", "GCP", "Firebase", "Docker"],
  },
  {
    title: "Quality & Automation",
    items: ["Playwright", "uiautomator2", "Sentry", "Crashlytics", "GitHub Actions", "Fastlane", "CircleCI", "TeamCity"],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
