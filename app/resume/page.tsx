import Link from "next/link"
import { ArrowDownToLine, ExternalLink } from "lucide-react"
import type { Metadata } from "next"

import { Reveal } from "@/components/motion-reveal"
import { Button } from "@/components/ui/button"
import { capabilities, profile, stackGroups, timeline } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: "Resume",
  description: "Kang Taewook resume focused on AI data product engineering, LLM pipelines, catalog data layers, grounded AI services, and product operations.",
}

const education = [
  "계명대학교 게임모바일콘텐츠학과 (2014.09 - 2021.08)",
  "Google Cloud Associate Cloud Engineer 취득 이력 (2020.03)",
  "Flutter Korea 2022 Google I/O Extended 발표: Dart 3.0 변경점",
  "경북 글로벌 이노베이션 스타트업 오디션 100인 선정 / 로컬크리에이터 1인 정부지원사업 선정 (2019.09)",
]

export default function ResumePage() {
  return (
    <main className="bg-background">
      <section className="border-b bg-[#111812] text-[#f3f2e9]">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Reveal className="flex flex-col justify-between gap-8 xl:flex-row xl:items-end">
            <div>
              <p className="font-mono text-xs text-[#f2d27b]">RESUME</p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
                AI Data Product와 LLM Pipeline 중심의 경력
              </h1>
              <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-[#dbe3dc]">
                비정형 도메인 데이터를 수집하고 검증해 RAG, Vector DB, Tool Calling, PromptOps, 평가 하네스, AI 상담·검색·추천 서비스에 연결해 온 Product Engineer입니다.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 xl:justify-end">
              <Button asChild className="bg-[#f3f2e9] text-[#111812] hover:bg-white">
                <Link href={profile.resumePdf}>
                  <ArrowDownToLine className="h-4 w-4" />
                  PDF Resume
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href={profile.careerDescriptionPdf}>
                  <ArrowDownToLine className="h-4 w-4" />
                  Base Resume
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/20 bg-transparent text-[#f3f2e9] hover:bg-white/10 hover:text-white">
                <Link href={profile.linkedin} target="_blank">
                  LinkedIn <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">CONTACT</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>{profile.email}</p>
                <p>{profile.location}</p>
                <Link href={profile.github} target="_blank" className="inline-flex items-center gap-1 hover:text-foreground">
                  GitHub <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>

            <Reveal>
              <p className="font-mono text-xs text-muted-foreground">CORE STACK</p>
              <div className="mt-4 space-y-5">
                {stackGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold">{group.title}</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="max-w-full border px-2 py-1 text-xs text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </aside>

          <div className="space-y-14">
            <section>
              <Reveal>
                <p className="font-mono text-xs text-muted-foreground">EXPERIENCE</p>
              </Reveal>
              <div className="mt-6 border-t">
                {timeline.map((item, index) => (
                  <Reveal key={`${item.period}-${item.company}`} delay={index * 0.04}>
                    <article className="grid gap-4 border-b py-6 md:grid-cols-[170px_1fr]">
                      <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                      <div>
                        <h3 className="break-words text-xl font-semibold tracking-normal">{item.role}</h3>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                        <p className="mt-4 break-words leading-7 text-muted-foreground">{item.body}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>

            <section>
              <Reveal>
                <p className="font-mono text-xs text-muted-foreground">CAPABILITIES</p>
              </Reveal>
              <div className="mt-6 grid gap-px border bg-border md:grid-cols-2">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon
                  return (
                    <Reveal key={capability.title} delay={index * 0.03} className="bg-card p-5">
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
            </section>

            <section>
              <Reveal>
                <p className="font-mono text-xs text-muted-foreground">EDUCATION & CREDENTIALS</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  {education.map((item, index) => (
                    <li key={item} className="grid grid-cols-[2rem_1fr] gap-3">
                      <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
