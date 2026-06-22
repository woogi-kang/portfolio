import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
import { Button } from "@/components/ui/button"
import { caseStudies, getCaseStudy } from "@/lib/portfolio-data"

const artifactBySlug: Record<string, { src: string; label: string; alt: string }> = {
  "llm-structured-extraction-catalog-pipeline": {
    src: "/company-os-dashboard-desktop.png",
    label: "Pipeline control surface",
    alt: "AI workflow dashboard with work queue and reference controls",
  },
  "evidence-gated-ai-recommendation-pipeline": {
    src: "/memoriz-natural-search-reuse.png",
    label: "Memory reuse surface",
    alt: "Memoriz natural search screen over saved records",
  },
  "internal-automation-agent-workflow": {
    src: "/company-os-worker-status-desktop.png",
    label: "Agent run status",
    alt: "Provider run status screen for agent operations",
  },
  "data-collection-verification-pipeline": {
    src: "/checkyourhospital-psf-validation-table.png",
    label: "Validation table",
    alt: "Validation table for AI search readiness diagnosis",
  },
  "ai-product-quality-report-automation": {
    src: "/checkyourhospital-psf-validation-table.png",
    label: "Evaluation report",
    alt: "Evaluation report table for AI search readiness",
  },
  "smart-glasses-platform-suite": {
    src: "/memoriz-ai-draft-review.png",
    label: "Mobile review surface",
    alt: "Mobile AI draft review screen",
  },
  "flutter-consulting-modernization": {
    src: "/project-placeholder.png",
    label: "Product engineering archive",
    alt: "Project placeholder image",
  },
  "self-improving-social-agents": {
    src: "/company-os-worker-status-desktop.png",
    label: "PromptOps control surface",
    alt: "Worker status panel for provider execution",
  },
}

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)

  if (!project) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getCaseStudy(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug)
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length]
  const Icon = project.icon
  const artifact = artifactBySlug[project.slug]

  return (
    <main className="bg-background">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
          <Button asChild variant="ghost" className="-ml-3 mb-10 text-[#f3f2e9] hover:bg-white/10 hover:text-white">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              전체 작업으로 돌아가기
            </Link>
          </Button>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <Reveal>
              <p className="font-mono text-xs text-[#f2d27b]">{project.period}</p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">{project.summary}</p>
            </Reveal>
            <Reveal delay={0.08} className="border border-white/10 bg-white/5 p-5">
              <Icon className="h-8 w-8 text-[#f2d27b]" />
              <p className="mt-5 text-sm text-[#dbe3dc]">{project.eyebrow}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 6).map((tech) => (
                  <span key={tech} className="border border-white/10 px-2 py-1 text-xs text-[#dbe3dc]">
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
          <Reveal>
            <p className="font-mono text-xs text-muted-foreground">IMPACT</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">이 사례에서 보여주는 것</h2>
          </Reveal>
          <div className="grid gap-px border bg-border">
            {project.impact.map((impact, index) => (
              <Reveal key={impact} delay={index * 0.04} className="grid gap-4 bg-card p-5 md:grid-cols-[56px_1fr]">
                <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-7 text-muted-foreground">{impact}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
            <p className="font-mono text-xs text-muted-foreground">ARTIFACT</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-normal">실제 화면과 운영 흐름</h2>
              {artifact && (
                <div className="mt-6 overflow-hidden border bg-card">
                  <Image
                    src={artifact.src}
                    alt={artifact.alt}
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full bg-white object-contain object-left-top"
                  />
                  <p className="border-t p-3 text-sm text-muted-foreground">{artifact.label}</p>
                </div>
              )}
            </Reveal>
          </aside>

          <div className="space-y-10">
            {project.sections.map((section, sectionIndex) => (
              <Reveal key={section.title} delay={sectionIndex * 0.04}>
                <article className="border-t pt-6">
                  <div className="grid gap-5 md:grid-cols-[160px_1fr]">
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{String(sectionIndex + 1).padStart(2, "0")}</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-normal">{section.title}</h2>
                    </div>
                    <div className="space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="max-w-3xl leading-8 text-muted-foreground">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-card py-12">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <p className="font-mono text-xs text-muted-foreground">NEXT CASE</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-normal">{nextProject.title}</h2>
          </div>
          <Button asChild className="w-fit">
            <Link href={`/portfolio/${nextProject.slug}`}>
              다음 사례 보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
