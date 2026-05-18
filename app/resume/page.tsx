import Link from "next/link"
import { ArrowDownToLine, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { capabilities, profile, stackGroups, timeline } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Resume",
  description: "Kang Taewook resume focused on AI automation, agent engineering, data pipelines, PromptOps, and product operations.",
}

const education = [
  "계명대학교 게임모바일콘텐츠학과 (2014.09 - 2021.08)",
  "Google Cloud Associate Cloud Engineer 취득 이력 (2020.03)",
  "Flutter Korea 2022 Google I/O Extended 발표: Dart 3.0 변경점",
  "경북 글로벌 이노베이션 스타트업 오디션 100인 선정 / 로컬크리에이터 1인 정부지원사업 선정 (2019.09)",
]

export default function ResumePage() {
  return (
    <main className="bg-white dark:bg-slate-950">
      <section className="border-b bg-[#f7f8f5] dark:bg-[#0d1117]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Resume
              </p>
              <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 md:text-6xl dark:text-white">
                <span className="block">AI Automation</span>
                <span className="block">Agent Engineering 중심의</span>
                <span className="block">경력 요약</span>
              </h1>
              <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-slate-700 dark:text-slate-300">
                2025년 Claude Code 공개 이후 Claude/Codex/Gemini CLI 기반 환경에서 누적 약 100억 토큰 규모의 실험과 실무 적용을 반복하며, AI가 개인 생산성 도구를 넘어 조직의 업무 방식 자체를 바꾸려면 어떤 실행 환경이 필요한지 설계해 온 Product Engineer입니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 xl:justify-end">
              <Button asChild className="rounded-md bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950">
                <Link href={profile.resumePdf}>
                  <ArrowDownToLine className="h-4 w-4" />
                  PDF Resume
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md bg-white dark:bg-slate-950">
                <Link href={profile.careerDescriptionPdf}>
                  <ArrowDownToLine className="h-4 w-4" />
                  Career PDF
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md bg-white dark:bg-slate-950">
                <Link href={profile.linkedin} target="_blank">
                  LinkedIn <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Contact
              </h2>
              <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <p>{profile.email}</p>
                <p>{profile.location}</p>
                <Link href={profile.github} target="_blank" className="inline-flex items-center gap-1 hover:text-teal-700 dark:hover:text-teal-300">
                  GitHub <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">
                Core Stack
              </h2>
              <div className="mt-4 space-y-5">
                {stackGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="max-w-full rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Experience</h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-6 space-y-4">
                {timeline.map((item) => (
                  <article key={`${item.period}-${item.company}`} className="min-w-0 overflow-hidden rounded-md border p-5">
                    <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{item.period}</p>
                    <h3 className="mt-3 break-words text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-teal-700 dark:text-teal-300">{item.company}</p>
                    <p className="mt-4 break-words leading-7 text-slate-700 dark:text-slate-300">{item.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Capabilities</h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
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
            </section>

            <section>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Education & Credentials</h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
                {education.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-700 dark:bg-teal-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
