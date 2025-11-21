"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VelogPost } from "@/lib/velog"

interface RecentPostsProps {
    posts: VelogPost[]
}

export function RecentPosts({ posts }: RecentPostsProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Recent Posts
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Thoughts, tutorials, and insights from my blog
                    </p>
                </motion.div>

                {/* Posts Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {posts.slice(0, 3).map((post) => (
                        <motion.div key={post.id} variants={item}>
                            <Link
                                href={`https://velog.io/@woogi-dev/${post.url_slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="group h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-xl cursor-pointer">
                                    {/* Post Image */}
                                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                                        <Image
                                            src={post.thumbnail || "/project-placeholder.png"}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    </div>

                                    {/* Post Info */}
                                    <CardHeader>
                                        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <time dateTime={post.released_at}>
                                                {new Date(post.released_at).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </time>
                                        </div>
                                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <p className="line-clamp-3 text-sm text-muted-foreground mt-2">
                                            {post.short_description}
                                        </p>
                                    </CardHeader>

                                    {/* Tags */}
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {post.tags?.slice(0, 3).map((tag) => (
                                                <Badge key={tag} variant="secondary" className="text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <Button asChild size="lg" variant="outline" className="rounded-full">
                        <Link href="/posts">
                            Read More Posts <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
