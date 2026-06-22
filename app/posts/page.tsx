import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getVelogPosts } from "@/lib/velog"
import { Reveal } from "@/components/motion-reveal"

import { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
    title: "Writing",
    description: "Writing about Flutter, product engineering, AI agents, and automation.",
}

function normalizeTags(tags: string[]) {
    return Array.from(
        new Set(
            tags
                .flatMap((tag) => tag.split(","))
                .map((tag) => tag.trim())
                .filter(Boolean)
        )
    ).slice(0, 6)
}

export default async function PostsPage() {
    const username = process.env.NEXT_PUBLIC_VELOG_USERNAME || "woogi-dev"
    const posts = await getVelogPosts(username)
    const featured = posts?.slice(0, 3) ?? []
    const rest = posts?.slice(3) ?? []

    return (
        <main className="bg-background">
            <section className="border-b bg-[#111812] text-[#f3f2e9]">
                <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
                    <Reveal>
                        <p className="font-mono text-xs text-[#f2d27b]">WRITING</p>
                        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
                            Flutter, 제품 개발, AI Agent 운영에 대한 기록
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#dbe3dc]">
                            Velog에 남긴 기술 글을 최신 글과 전체 목록으로 나누어 정리했습니다.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-6xl px-5 md:px-8">
                    {featured.length > 0 && (
                        <div className="grid gap-px border bg-border md:grid-cols-3">
                            {featured.map((post, index) => (
                                <Reveal key={post.id} delay={index * 0.04} className="bg-card">
                                    <Link
                                        href={`https://velog.io/@${username}/${post.url_slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block min-h-full p-5 transition-colors hover:bg-background"
                                    >
                                        <p className="font-mono text-xs text-muted-foreground">
                                            {new Date(post.released_at).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}
                                        </p>
                                        <h2 className="mt-4 line-clamp-3 text-2xl font-semibold tracking-normal">
                                            {post.title}
                                        </h2>
                                        <p className="mt-4 line-clamp-4 text-sm leading-7 text-muted-foreground">
                                            {post.short_description}
                                        </p>
                                        <div className="mt-5 flex items-center gap-2 text-sm font-medium">
                                            Velog에서 읽기 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </Link>
                                </Reveal>
                            ))}
                        </div>
                    )}

                    <div className="mt-12 border-t">
                        {rest.map((post, index) => (
                            <Reveal key={post.id} delay={index * 0.02}>
                                <Link
                                    href={`https://velog.io/@${username}/${post.url_slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group grid gap-4 border-b py-5 transition-colors hover:bg-card md:grid-cols-[150px_1fr_220px] md:px-4"
                                >
                                    <p className="font-mono text-sm text-muted-foreground">
                                        {new Date(post.released_at).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </p>
                                    <div>
                                        <h2 className="text-xl font-semibold tracking-normal">{post.title}</h2>
                                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">{post.short_description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 md:justify-end">
                                        {normalizeTags(post.tags ?? []).slice(0, 3).map((tag) => (
                                            <span key={tag} title={tag} className="h-fit max-w-[8rem] border px-2 py-1 text-xs text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                        {(!posts || posts.length === 0) && (
                            <p className="py-16 text-center text-lg text-muted-foreground">
                                No posts found.
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
