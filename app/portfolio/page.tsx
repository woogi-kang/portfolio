import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BrainCircuit, FileText, SearchCheck } from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Case studies on LLM data pipelines, catalog data layers, grounded AI services, evaluation, and AI product operations.",
}

const targetedPortfolios = [
  {
    href: "/portfolio/alwayz-shopport-ai-data",
    label: "Alwayz Shopport",
    title: "Product Engineer (AI & Data)",
    focus: "상품 속성 추출, 카탈로그 데이터 구조, 근거 기반 쇼핑 Agent",
  },
  {
    href: "/portfolio/moais-ai-llm",
    label: "MOAIS",
    title: "AI/LLM Engineer",
    focus: "RAG, 장기 메모리, 개인화 AI 코칭, 평가 루프",
  },
  {
    href: "/portfolio/overdare-ai-agent",
    label: "OVERDARE",
    title: "Senior Software Engineer (AI Agent)",
    focus: "Agent 실행 구조, UGC 워크플로우, 도구 계약, 품질 기준",
  },
]

const artifacts = [
  "/company-os-dashboard-desktop.png",
  "/memoriz-natural-search-reuse.png",
  "/checkyourhospital-psf-validation-table.png",
]

export default function PortfolioPage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <p className="font-mono text-xs text-[#f2d27b]">EVIDENCE LIBRARY</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
              케이스 스터디를 실제 화면과 검증 흐름 중심으로 정리했습니다.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">
              LLM 추출, 카탈로그 데이터 구조, 근거 기반 AI 서비스, 평가, 제품 운영을 실제 산출물 기준으로 훑어볼 수 있게 묶었습니다.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-3 gap-2">
            {artifacts.map((src, index) => (
              <div key={src} className="overflow-hidden border border-white/10 bg-white">
                <Image
                  src={src}
                  alt={`Portfolio artifact ${index + 1}`}
                  width={900}
                  height={700}
                  className="aspect-[4/3] w-full object-contain object-left-top"
                  priority={index === 0}
                />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="grid gap-px border bg-border md:grid-cols-3">
            {targetedPortfolios.map((portfolio, index) => (
              <Link key={portfolio.href} href={portfolio.href} className="group bg-card p-5 transition-colors hover:bg-background md:p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-5 text-sm font-semibold">{portfolio.label}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal">{portfolio.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{portfolio.focus}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs text-muted-foreground">CASE STUDIES</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
                어떤 문제를 맡았고, 무엇을 만들었는지 한눈에 비교합니다.
              </h2>
            </div>
            <Button asChild className="w-fit">
              <Link href="/resume">
                이력서 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-10 border-t">
            {caseStudies.map((project, index) => {
              const Icon = project.icon
              return (
                <Reveal key={project.slug} delay={index * 0.025}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group grid gap-5 border-b py-6 transition-colors hover:bg-card md:grid-cols-[72px_1.1fr_1.4fr_190px] md:px-4"
                  >
                    <div className="flex items-center gap-3 md:block">
                      <p className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                      <Icon className="mt-0 h-5 w-5 md:mt-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-normal">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{project.eyebrow}</p>
                    </div>
                    <div>
                      <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <span key={tech} className="border px-2 py-1 text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 md:justify-end">
                      <span className="inline-flex items-center gap-2 text-sm font-medium">
                        자세히 보기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <BrainCircuit className="h-5 w-5" />
              <SearchCheck className="h-5 w-5" />
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-normal">
              전체 경력 흐름과 제출용 PDF는 이력서 페이지에 모아두었습니다.
            </h2>
          </div>
          <Button asChild className="w-fit">
            <Link href="/resume">
              이력서와 PDF 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
