import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import type { VelogPost } from "@/lib/velog"

export type WritingCategory = "AI" | "Product" | "Device"

export function WritingIndex({
  sections,
  username,
}: {
  sections: Array<{ category: WritingCategory; posts: VelogPost[] }>
  username: string
}) {
  return (
    <div className="border-t">
      {sections.map((section) => (
        <section key={section.category} className="grid border-b md:grid-cols-[10rem_minmax(0,1fr)]" aria-labelledby={`writing-${section.category}`}>
          <div className="border-b p-4 md:border-b-0 md:border-r md:p-5">
            <h3 id={`writing-${section.category}`} className="font-mono text-xs font-bold text-action">
              {section.category}
            </h3>
            <p className="mt-1 font-mono text-[11px] text-ink-muted">{section.posts.length}개 글</p>
          </div>
          <ol>
            {section.posts.length > 0 ? section.posts.map((post) => (
              <li key={post.id} className="border-b last:border-b-0">
                <Link
                  href={`https://velog.io/@${username}/${post.url_slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid min-h-20 gap-2 rounded-none px-4 py-4 transition-[background-color] duration-150 hover:bg-muted sm:grid-cols-[7rem_minmax(0,1fr)_1.5rem] sm:items-center md:px-5"
                >
                  <time className="font-mono text-xs text-ink-muted" dateTime={post.released_at}>
                    {new Date(post.released_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </time>
                  <span className="font-semibold">{post.title}</span>
                  <ArrowUpRight className="size-4 text-action transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            )) : (
              <li className="px-4 py-5 text-sm text-ink-muted md:px-5">이 관점으로 분류된 공개 글이 아직 없습니다.</li>
            )}
          </ol>
        </section>
      ))}
    </div>
  )
}
