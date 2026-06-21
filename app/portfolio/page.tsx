import Link from "next/link"
import { ArrowRight, BrainCircuit, Filter } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Case Studies",
  description: "LLM data pipeline, catalog-like data layer, grounded AI service, evaluation, and AI product operations case studies.",
}

export default function PortfolioPage() {
  const domains = ["LLM Extraction", "Catalog Layer", "RAG/Grounding", "Evaluation", "Recommendation", "Product Ops"]

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b bg-[#f7f8f5] dark:bg-[#0d1117]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
            Portfolio
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl dark:text-white">
                <span className="block">LLM 데이터 파이프라인과</span>
                <span className="block">AI 제품 운영 시스템</span>
                <span className="block">구축 사례</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
                단순 데모나 개인 자동화가 아니라, 제품이 반복해서 사용할 수 있는 entity/attribute/alias 데이터 계층, LLM extraction, grounded AI service, evaluation, report/admin 운영 흐름 중심으로 정리했습니다.
              </p>
            </div>
            <div className="rounded-md border bg-white p-5 dark:bg-slate-950">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-950 dark:text-white">
                <Filter className="h-4 w-4 text-teal-700 dark:text-teal-300" />
                Focus domains
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {domains.map((domain) => (
                  <span key={domain} className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            href="/portfolio/alwayz-shopport-ai-data"
            className="group mb-6 grid gap-5 rounded-md border bg-[#eef4f0] p-6 transition-colors hover:border-emerald-700 dark:bg-[#101916] dark:hover:border-emerald-300 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                  Targeted Portfolio
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                Alwayz Shopport Product Engineer (AI & Data) 제출용 포트폴리오
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                LLM 기반 상품 속성 추출, catalog-like data layer, grounded AI Agent, evidence-gated recommendation 관점으로 별도 정리했습니다.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 dark:text-slate-400" />
          </Link>

          <Link
            href="/portfolio/moais-ai-llm"
            className="group mb-6 grid gap-5 rounded-md border bg-[#eef4f0] p-6 transition-colors hover:border-emerald-700 dark:bg-[#101916] dark:hover:border-emerald-300 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
                  Targeted Portfolio
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
                MOAIS AI/LLM Engineer 제출용 포트폴리오
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                RAG, 장기 메모리, PromptOps, LangChain/LangGraph, AI 코칭 운영 루프 중심으로 별도 정리했습니다.
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 dark:text-slate-400" />
          </Link>

          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((project, index) => {
              const Icon = project.icon
              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group min-w-0 overflow-hidden rounded-md border p-6 transition-colors hover:border-teal-700 dark:hover:border-teal-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
                        {String(index + 1).padStart(2, "0")} / {project.period}
                      </p>
                      <p className="mt-4 text-sm font-medium text-teal-700 dark:text-teal-300">{project.eyebrow}</p>
                      <h2 className="mt-2 break-words text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h2>
                    </div>
                    <Icon className="h-6 w-6 shrink-0 text-slate-500 transition-colors group-hover:text-teal-700 dark:text-slate-400 dark:group-hover:text-teal-300" />
                  </div>
                  <p className="mt-5 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {project.impact.slice(0, 2).map((impact) => (
                      <li key={impact} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex min-w-0 flex-wrap gap-2 overflow-hidden">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="max-w-full rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-teal-700 dark:group-hover:text-teal-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t bg-[#f7f8f5] py-16 dark:bg-[#0d1117]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">
              더 자세한 경력 흐름은 이력서에서 확인할 수 있습니다.
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              제출용 이력서와 동일한 포지셔닝으로 AI Data Product, LLM Pipeline, Product Engineering 중심의 경력을 정리했습니다.
            </p>
          </div>
          <Button asChild className="w-fit rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
            <Link href="/resume">
              Resume <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
