import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import {
  capabilities,
  caseStudies,
  focusAreas,
  metrics,
  operatingPrinciples,
  profile,
  stackGroups,
  timeline,
} from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "AI Data Product Engineer / LLM Pipeline Portfolio",
  description:
    "Kang Taewook builds LLM data pipelines, catalog-like data layers, grounded AI services, and full-stack AI product workflows.",
}

const featuredCaseStudies = [
  "llm-structured-extraction-catalog-pipeline",
  "evidence-gated-ai-recommendation-pipeline",
  "ai-product-quality-report-automation",
  "data-collection-verification-pipeline",
]
  .map((slug) => caseStudies.find((project) => project.slug === slug))
  .filter((project): project is (typeof caseStudies)[number] => Boolean(project))

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b bg-[#f7f8f5] dark:bg-[#0d1117]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-50 dark:opacity-20" />
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[#dfe8e4] md:block dark:bg-[#16211f]" />
        <Image
          src="/profile.jpg"
          alt="Kang Taewook profile"
          width={496}
          height={638}
          priority
          className="absolute bottom-0 right-8 hidden h-[84%] w-auto object-contain md:block lg:right-20"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1fr_360px] md:px-8 md:py-20 lg:py-24">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <span className="rounded-md border border-slate-300 bg-white/70 px-3 py-1 dark:border-slate-700 dark:bg-slate-950/70">
                실무 6년차 Product Engineer
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              {profile.role}
            </p>
            <h1 className="max-w-[22rem] text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:max-w-4xl md:text-6xl dark:text-slate-50">
              <span className="block">LLM 데이터 파이프라인과</span>
              <span className="block">AI 제품 경험으로</span>
              <span className="block">비정형 데이터를 구조화합니다.</span>
            </h1>
            <p className="mt-6 max-w-[22rem] text-base leading-8 text-slate-700 md:max-w-2xl md:text-xl dark:text-slate-200">
              {profile.summary} 프롬프트 몇 개를 만드는 수준이 아니라, 데이터 수집, 구조화, 검증, 검색, 추천, 운영 로그가 이어지는 제품 시스템을 설계합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Link href="/portfolio/alwayz-shopport-ai-data">
                  Shopport-fit Portfolio <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href="/portfolio">
                  Case Studies <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-md">
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Button asChild size="icon" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href={profile.github} target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="outline" className="rounded-md bg-white/80 dark:bg-slate-950/60">
                <Link href={profile.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto min-h-[300px] w-full max-w-[260px] md:hidden">
            <Image
              src="/profile.jpg"
              alt="Kang Taewook profile"
              width={496}
              height={638}
              priority
              className="absolute bottom-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-b bg-white dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-px border-x bg-border px-0 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-5 dark:bg-slate-950 md:p-6">
              <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{metric.value}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Workflow System
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                프롬프트가 아니라 신뢰 가능한 데이터 계층과 제품 루프를 만듭니다.
              </h2>
              <div className="mt-6 space-y-3">
                {operatingPrinciples.map((principle) => (
                  <p key={principle} className="border-l-2 border-teal-600 pl-4 text-slate-700 dark:text-slate-300">
                    {principle}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {focusAreas.map((area) => {
                const Icon = area.icon
                return (
                  <article key={area.title} className="min-w-0 overflow-hidden rounded-md border bg-[#fbfcf8] p-5 dark:bg-slate-900/60">
                    <Icon className="h-6 w-6 text-teal-700 dark:text-teal-300" />
                    <h3 className="mt-5 break-words text-lg font-semibold text-slate-950 dark:text-white">{area.title}</h3>
                    <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{area.body}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-[#eef3f0] py-20 dark:bg-[#101918]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Selected Case Studies
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
                LLM 속성 추출, 데이터 검증, AI 추천, 리포트 제품까지 연결한 작업들
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit rounded-md bg-white dark:bg-slate-950">
              <Link href="/portfolio">
                View all work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredCaseStudies.map((project) => {
              const Icon = project.icon
              return (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group min-w-0 overflow-hidden rounded-md border bg-white p-6 transition-colors hover:border-teal-700 dark:bg-slate-950 dark:hover:border-teal-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-teal-700 dark:text-teal-300">{project.eyebrow}</p>
                      <h3 className="mt-3 break-words text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
                    </div>
                    <Icon className="h-6 w-6 shrink-0 text-slate-500 transition-colors group-hover:text-teal-700 dark:text-slate-400 dark:group-hover:text-teal-300" />
                  </div>
                  <p className="mt-4 line-clamp-3 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
                  <div className="mt-5 flex min-w-0 flex-wrap gap-2 overflow-hidden">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="max-w-full rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Capability Map
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                <span className="block">AI 기능 구현을 넘어</span>
                <span className="block">데이터와 품질을 함께 설계하는</span>
                <span className="block">엔지니어</span>
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <article key={capability.title} className="min-w-0 overflow-hidden rounded-md border p-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                      <h3 className="font-semibold text-slate-950 dark:text-white">{capability.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                      {capability.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                          <span className="break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-[#f7f8f5] py-20 dark:bg-[#0d1117]">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Career Timeline
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                제품 개발에서 AI Data Product로 확장
              </h2>
            </div>
            <div className="space-y-4">
              {timeline.map((item) => (
                <article key={`${item.period}-${item.company}`} className="grid min-w-0 gap-4 overflow-hidden rounded-md border bg-white p-5 dark:bg-slate-950 md:grid-cols-[180px_1fr]">
                  <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                  <div>
                    <h3 className="break-words text-lg font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">{item.company}</p>
                    <p className="mt-3 break-words text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-md border bg-slate-950 p-8 text-white md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">Stack</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  <span className="block">Agent, 데이터,</span>
                  <span className="block">제품 운영을</span>
                  <span className="block">한 흐름으로 다룹니다.</span>
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {stackGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-amber-300">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
