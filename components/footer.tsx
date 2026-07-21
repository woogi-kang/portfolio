"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type FooterProfile = {
  nameEn: string
  role: string
  email: string
  github: string
  linkedin: string
}

export function Footer({ profile }: { profile: FooterProfile }) {
  const pathname = usePathname()

  if (pathname.startsWith("/admin") || pathname.startsWith("/login")) return null

  return (
    <footer className="border-t bg-surface">
      <div className="site-container grid gap-8 py-8 md:grid-cols-[1fr_auto] md:items-end md:py-10">
        <div>
          <p className="font-heading text-lg font-bold">{profile.nameEn}</p>
          <p className="mt-1 max-w-xl text-sm text-ink-muted">
            {profile.role}. AI 제품의 인프라·웹·서버와 업무 자동화까지 구현합니다.
          </p>
          <p className="mt-5 font-mono text-xs text-ink-muted">
            © {new Date().getFullYear()} Kang Taewook
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold" aria-label="외부 링크">
          <Link className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-action" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-action" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-action" href={`mailto:${profile.email}`}>
            Email
          </Link>
        </nav>
      </div>
    </footer>
  )
}
