import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { WritingIndex, type WritingCategory } from "@/components/writing-index"
import { getVelogPosts, type VelogPost } from "@/lib/velog"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Writing — AI, Product, Device",
  description:
    "AI 시스템, 제품 전달, 멀티플랫폼 디바이스를 구현하며 남긴 Product Engineer 강태욱의 기술 기록입니다.",
  alternates: { canonical: "/posts" },
}

function categorize(post: VelogPost): WritingCategory {
  const haystack = `${post.title} ${post.short_description} ${post.tags.join(" ")}`.toLowerCase()
  if (/flutter|dart|android|ios|mobile|device|ble|websocket/.test(haystack)) return "Device"
  if (/\bai\b|llm|rag|agent|prompt|gemini|claude|gpt|automation/.test(haystack)) return "AI"
  return "Product"
}

export default async function PostsPage() {
  const username = process.env.NEXT_PUBLIC_VELOG_USERNAME || "woogi-dev"
  const { posts, error } = await getVelogPosts(username)
  const latest = posts.slice(0, 3)
  const sections = (["AI", "Product", "Device"] as const).map((category) => ({
    category,
    posts: posts.filter((post) => categorize(post) === category),
  }))

  return (
    <>
      <header className="page-intro">
        <div className="site-container site-grid gap-y-8">
          <div className="col-span-4 md:col-span-5 xl:col-span-9">
            <p className="eyebrow">Writing</p>
            <h1 className="display-title mt-5">구현 중에 남긴 기술 기록</h1>
          </div>
          <div className="col-span-4 self-end md:col-span-3 xl:col-span-5 xl:col-start-11">
            <p className="lede text-base md:text-lg">
              현재 공개 글은 Flutter·디바이스 구현 기록이 중심입니다. AI·Product 글은 공개되는 대로 같은 인덱스에 추가합니다.
            </p>
          </div>
        </div>
      </header>

      <section className="page-section pt-10" aria-labelledby="latest-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">최근 글</p>
              <h2 id="latest-title" className="section-title mt-3">최근 기록</h2>
            </div>
          </div>

          {error ? (
            <aside className="structural-panel grid gap-4 p-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-6" role="status">
              <div>
                <h3 className="text-xl">글 목록을 지금 불러올 수 없습니다.</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  사이트의 다른 문서는 정상적으로 볼 수 있습니다. 전체 글은 Velog에서 직접 확인해 주세요.
                </p>
              </div>
              <Link className="link-arrow" href={`https://velog.io/@${username}`} target="_blank" rel="noreferrer">
                Velog 열기 <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </aside>
          ) : latest.length === 0 ? (
            <aside className="structural-panel p-5 md:p-6" role="status">
              <h3 className="text-xl">공개된 글이 아직 없습니다.</h3>
              <p className="mt-2 text-sm text-ink-muted">새 글이 게시되면 이 인덱스에 자동으로 반영됩니다.</p>
            </aside>
          ) : (
            <div className="grid border-t md:grid-cols-2 lg:grid-cols-3">
              {latest.map((post) => (
                <Link
                  key={post.id}
                  href={`https://velog.io/@${username}/${post.url_slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group min-h-64 border-b p-5 transition-[background-color] duration-150 hover:bg-muted md:border-r md:p-6 md:even:border-r-0 lg:even:border-r lg:last:border-r-0"
                >
                  <span className="flex items-center justify-between font-mono text-xs text-ink-muted">
                    {categorize(post)}
                    <ArrowUpRight className="size-4 text-action transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-10 text-xl md:text-2xl">{post.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm text-ink-muted">{post.short_description}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="page-section" aria-labelledby="index-title">
        <div className="site-container">
          <div className="site-grid mb-8 gap-y-4">
            <div className="col-span-4 md:col-span-4 xl:col-span-7">
              <p className="eyebrow">전체 글</p>
              <h2 id="index-title" className="section-title mt-3">관점별 전체 글</h2>
            </div>
            <p className="col-span-4 self-end text-sm text-ink-muted md:col-span-4 xl:col-span-5 xl:col-start-11">
              현재 공개 글은 Device 현장 기록에 집중되어 있습니다. AI·Product 분류는 검증 가능한 공개 글이 생길 때 채우며, 분류는 제목·요약·태그를 기준으로 합니다.
            </p>
          </div>
          {posts.length > 0 ? <WritingIndex sections={sections} username={username} /> : null}
        </div>
      </section>
    </>
  )
}
