"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 animate-gradient-xy" />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                <div className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl animate-pulse" />
                <div className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                        </span>
                        <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                            Available for work
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                            Woogi
                        </span>
                    </h1>

                    {/* Typing Animation */}
                    <div className="mb-8 text-2xl font-light text-muted-foreground sm:text-3xl md:text-4xl">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "UI/UX Enthusiast",
                                2000,
                                "Problem Solver",
                                2000,
                                "Creative Thinker",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
                    >
                        Based in Seoul, I build accessible, pixel-perfect, and performant web
                        experiences that users love.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Button asChild size="lg" className="h-12 rounded-full px-8 text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105">
                            <Link href="/portfolio">View My Work</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-8 text-lg transition-all hover:scale-105">
                            <Link href="/contact">Get In Touch</Link>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 flex items-center justify-center gap-4"
                    >
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" asChild>
                            <Link href="https://github.com" target="_blank" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" asChild>
                            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" asChild>
                            <Link href="mailto:woogi.dev@gmail.com" aria-label="Email">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="h-6 w-6 animate-bounce text-muted-foreground" />
            </motion.div>
        </section>
    )
}
