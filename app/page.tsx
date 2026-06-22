import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
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
    "Kang Taewook designs LLM data pipelines, catalog data layers, grounded AI services, and practical AI product workflows.",
}

const featuredCaseStudies = [
  "llm-structured-extraction-catalog-pipeline",
  "evidence-gated-ai-recommendation-pipeline",
  "ai-product-quality-report-automation",
  "data-collection-verification-pipeline",
]
  .map((slug) => caseStudies.find((project) => project.slug === slug))
  .filter((project): project is (typeof caseStudies)[number] => Boolean(project))

const artifactImages = [
  {
    title: "작업 흐름 관리",
    src: "/company-os-dashboard-desktop.png",
    alt: "AI workflow dashboard with work queue and reference controls",
  },
  {
    title: "사람이 검토하는 AI 초안",
    src: "/memoriz-ai-draft-review.png",
    alt: "Memoriz mobile AI draft review before saving a record",
  },
  {
    title: "품질 평가 리포트",
    src: "/checkyourhospital-psf-validation-table.png",
    alt: "AI search readiness evaluation report table",
  },
]

export default function Home() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden border-b bg-[#111812] text-[#f3f2e9]">
        <div className="absolute inset-0 evidence-grid text-white/35" />
        <div className="relative mx-auto grid min-h-[calc(100dvh-3.5rem)] max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-16">
          <Reveal className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-[#c9d5cb]">
              <span className="border border-white/15 px-3 py-1">6년차 Product Engineer</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {profile.location}
              </span>
            </div>
            <p className="font-mono text-xs text-[#f2d27b]">{profile.role}</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-normal sm:text-5xl lg:text-7xl">
              흩어진 데이터를 AI 제품에서 바로 쓸 수 있게 정리합니다.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#dbe3dc] md:text-lg">
              웹, 이미지, OCR, 위치, 리뷰 텍스트를 수집하고 검증해 RAG, 추천, 리포트, Agent UX에 필요한 데이터 흐름으로 정리합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-[#f3f2e9] text-[#111812] hover:bg-white">
                <Link href="/portfolio">
                  작업 살펴보기 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href="/portfolio/alwayz-shopport-ai-data">
                  맞춤 포트폴리오 <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href={`mailto:${profile.email}`}>
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Button asChild size="icon" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href={profile.github} target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="icon" variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href={profile.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="min-w-0">
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden border border-white/10 bg-[#1a211b] lg:mx-0 lg:justify-self-end">
              <div className="absolute inset-0 evidence-grid text-white/20" />
              <Image
                src="/profile.jpg"
                alt={`${profile.name} profile photo`}
                width={496}
                height={638}
                priority
                className="relative mx-auto h-[420px] w-auto object-contain object-bottom pt-8 sm:h-[520px] lg:h-[600px]"
              />
              <div className="relative border-t border-white/10 bg-[#111812]/95 p-5">
                <p className="font-mono text-xs text-[#f2d27b]">PROFILE</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal">{profile.name}</h2>
                <p className="mt-2 text-sm leading-6 text-[#c9d5cb]">{profile.headline}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-7xl border-x md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-b p-5 md:border-b-0 md:border-r md:p-6 last:md:border-r-0">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-normal">{metric.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">OPERATING THESIS</p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
              좋은 프롬프트보다 먼저 데이터, 실패 처리, 평가 루프를 설계합니다.
            </h2>
            <div className="mt-8 space-y-4">
              {operatingPrinciples.map((principle, index) => (
                <div key={principle} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t pt-4">
                  <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  <p className="leading-7 text-muted-foreground">{principle}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-px border bg-border sm:grid-cols-2">
            {focusAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Reveal key={area.title} delay={index * 0.04} className="bg-card p-5 md:p-6">
                  <Icon className="h-6 w-6 text-foreground" />
                  <h3 className="mt-5 text-xl font-semibold tracking-normal">{area.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{area.body}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-y bg-[#ece9dd] py-16 dark:bg-[#1d261f] md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs text-muted-foreground">SELECTED EVIDENCE</p>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
                실제 화면과 검증 흐름으로 남긴 작업들
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit bg-background">
              <Link href="/portfolio">
                전체 작업 보기 <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>

          <div className="mt-10 grid gap-px overflow-hidden border bg-border">
            {featuredCaseStudies.map((project, index) => {
              const Icon = project.icon
              return (
                <Reveal key={project.slug} delay={index * 0.04}>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group grid gap-5 bg-background p-5 transition-colors hover:bg-card md:grid-cols-[72px_1fr_190px] md:p-6"
                  >
                    <div className="flex items-center gap-3 md:block">
                      <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                      <Icon className="mt-0 h-5 w-5 text-foreground md:mt-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{project.eyebrow}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-normal">{project.title}</h3>
                      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">{project.summary}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4 md:flex-col md:items-start md:justify-center">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="border px-2 py-1 text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">ARTIFACTS</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              설명보다 화면과 운영 흐름으로 보여줍니다.
            </h2>
            <p className="mt-5 leading-7 text-muted-foreground">
              AI 기능은 데모에서 끝나지 않습니다. 실행 관리, 사람의 검토, 품질 리포트까지 이어져야 실제 제품에서 버틸 수 있습니다.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {artifactImages.map((artifact, index) => (
              <Reveal key={artifact.title} delay={index * 0.05} className="overflow-hidden border bg-card">
                <Image
                  src={artifact.src}
                  alt={artifact.alt}
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full bg-white object-contain object-left-top"
                />
                <div className="border-t p-4">
                  <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-semibold">{artifact.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-card py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">CAPABILITY MAP</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              AI 기능만이 아니라 데이터와 품질까지 함께 설계합니다.
            </h2>
          </Reveal>
          <div className="grid gap-px border bg-border md:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <Reveal key={capability.title} delay={index * 0.03} className="bg-background p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <h3 className="font-semibold">{capability.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[360px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">CAREER ARC</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              제품 개발 경험을 AI 데이터 제품으로 확장했습니다.
            </h2>
          </Reveal>
          <div className="border-t">
            {timeline.map((item, index) => (
              <Reveal key={`${item.period}-${item.company}`} delay={index * 0.04}>
                <article className="grid gap-4 border-b py-6 md:grid-cols-[190px_1fr]">
                  <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-normal">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111812] py-16 text-[#f3f2e9] md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs text-[#f2d27b]">STACK</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
              Agent, 데이터, 제품 운영을 한 흐름으로 다룹니다.
            </h2>
          </Reveal>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {stackGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.04} className="bg-[#111812] p-5">
                <h3 className="text-sm font-semibold text-[#f2d27b]">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="border border-white/10 px-2 py-1 text-xs text-[#dbe3dc]">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
