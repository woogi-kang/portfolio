import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { caseStudies, getCaseStudy } from "@/lib/portfolio-data"

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

  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b bg-[#f7f8f5] dark:bg-[#0d1117]">
        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <Button asChild variant="ghost" className="-ml-3 mb-10 rounded-md">
            <Link href="/portfolio">
              <ArrowLeft className="h-4 w-4" />
              Back to case studies
            </Link>
          </Button>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                {project.eyebrow}
              </p>
              <h1 className="mt-4 max-w-4xl break-words text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl dark:text-white">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-slate-700 dark:text-slate-300">{project.summary}</p>
            </div>
            <div className="rounded-md border bg-white p-4 dark:bg-slate-950">
              <Icon className="h-8 w-8 text-teal-700 dark:text-teal-300" />
              <p className="mt-4 font-mono text-sm text-slate-500 dark:text-slate-400">{project.period}</p>
            </div>
          </div>

          <div className="mt-8 flex min-w-0 flex-wrap gap-2 overflow-hidden">
            {project.stack.map((tech) => (
              <span key={tech} className="max-w-full rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:px-8 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
              Impact
            </h2>
            <ul className="mt-5 space-y-4">
              {project.impact.map((impact) => (
                <li key={impact} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-6">
            {project.sections.map((section) => (
              <article key={section.title} className="min-w-0 overflow-hidden rounded-md border p-6">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="break-words leading-7 text-slate-700 dark:text-slate-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-[#f7f8f5] py-12 dark:bg-[#0d1117]">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Next case study</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950 dark:text-white">{nextProject.title}</h2>
          </div>
          <Button asChild className="w-fit rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
            <Link href={`/portfolio/${nextProject.slug}`}>
              Read next <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
