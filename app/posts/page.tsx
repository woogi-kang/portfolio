import Link from "next/link"
import { getVelogPosts } from "@/lib/velog"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { Metadata } from "next"

export const revalidate = 60

export const metadata: Metadata = {
    title: "Blog",
    description: "Read my thoughts on software development, technology, and my journey as a developer.",
}

export default async function PostsPage() {
    const username = process.env.NEXT_PUBLIC_VELOG_USERNAME || 'velopert'
    const posts = await getVelogPosts(username)

    return (
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
            <div className="flex flex-col gap-12 md:gap-16">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                            Insights
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        Thoughts, tutorials, and updates on web development and technology.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {posts?.map((post) => (
                        <Link
                            key={post.id}
                            href={`https://velog.io/@${username}/${post.url_slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50">
                                <CardHeader>
                                    <div className="mb-2">
                                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-500 bg-emerald-500/10">
                                            Blog
                                        </Badge>
                                    </div>
                                    <CardTitle className="line-clamp-2 group-hover:text-emerald-500 transition-colors">
                                        {post.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {new Date(post.released_at).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="line-clamp-3 text-muted-foreground mb-4">
                                        {post.short_description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags?.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                    {(!posts || posts.length === 0) && (
                        <p className="col-span-full text-center text-lg text-muted-foreground">
                            No posts found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
