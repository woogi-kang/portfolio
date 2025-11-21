"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Terminal, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
    id: string
    title: string
    description: string
    images: string[]
    tags: string[]
    slug: string
}

interface BentoGridProps {
    featuredProject?: Project | null
}

export function BentoGrid({ featuredProject }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-6 lg:h-[600px]">
            {/* Profile Card - Large (Left) */}
            <motion.div
                className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="relative flex h-full flex-col justify-between overflow-hidden border-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 md:p-12 backdrop-blur-3xl transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl transition-all duration-500 group-hover:bg-purple-500/40" />

                    <div className="relative space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </div>
                            <span className="font-medium text-sm text-muted-foreground tracking-wide uppercase">Available for work</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl leading-tight">
                                Hello, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                                    Woogi.
                                </span>
                            </h1>
                            <p className="max-w-lg text-xl text-muted-foreground md:text-2xl font-light leading-relaxed">
                                Full Stack Developer based in Seoul. <br />
                                I build accessible, pixel-perfect, and performant web experiences.
                            </p>
                        </div>
                    </div>

                    <div className="relative mt-8 flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full h-12 px-8 text-lg bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                            <Link href="/portfolio">
                                View Projects <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-lg border-2 hover:bg-secondary/50 transition-all hover:scale-105">
                            <Link href="/resume">Resume</Link>
                        </Button>
                    </div>
                </Card>
            </motion.div>

            {/* Right Column Container */}
            <div className="col-span-1 md:col-span-1 md:row-span-2 flex flex-col gap-4 lg:gap-6">

                {/* Socials & Stack Combined */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Card className="h-full flex flex-col justify-center gap-6 border-0 bg-card/30 p-6 backdrop-blur-md transition-all hover:bg-card/50 hover:shadow-xl">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                                <Terminal className="h-4 w-4" /> Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TS", "Tailwind", "Supabase"].map((tech) => (
                                    <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 transition-colors">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="h-px bg-border/50" />
                        <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="h-14 justify-start gap-3 border bg-background/50 hover:bg-background hover:border-foreground/20 transition-all" asChild>
                                <Link href="https://github.com" target="_blank">
                                    <Github className="h-5 w-5" />
                                    GitHub
                                </Link>
                            </Button>
                            <Button variant="outline" className="h-14 justify-start gap-3 border bg-background/50 hover:bg-background hover:border-blue-500/20 hover:text-blue-500 transition-all" asChild>
                                <Link href="https://linkedin.com" target="_blank">
                                    <Linkedin className="h-5 w-5" />
                                    LinkedIn
                                </Link>
                            </Button>
                        </div>
                    </Card>
                </motion.div>

                {/* Featured Project Card (Mini) */}
                <motion.div
                    className="flex-[1.5] group cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link href={featuredProject ? `/portfolio` : '#'} className="block h-full">
                        <Card className="relative h-full overflow-hidden border-0 bg-black p-0 transition-all hover:scale-[1.02] hover:shadow-2xl">
                            {featuredProject?.images?.[0] ? (
                                <Image
                                    src={featuredProject.images[0]}
                                    alt={featuredProject.title}
                                    fill
                                    className="object-cover opacity-60 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 opacity-80" />
                            )}

                            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md">
                                            Featured Project
                                        </Badge>
                                        <ArrowUpRight className="text-white h-5 w-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-1">
                                        {featuredProject?.title || "Project Showcase"}
                                    </h3>
                                    <p className="text-white/70 line-clamp-1 text-sm">
                                        {featuredProject?.description || "Check out my latest work."}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Link>
                </motion.div>
            </div>
        </div>
    )
}

