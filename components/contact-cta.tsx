"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, ArrowRight, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactCTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-12 backdrop-blur-3xl">
                        {/* Background Effects */}
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />

                        <div className="relative text-center">
                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-4">
                                <Mail className="h-8 w-8 text-primary" />
                            </div>

                            {/* Heading */}
                            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Let's Work Together
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                                Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <Button asChild size="lg" className="h-12 rounded-full px-8 text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105">
                                    <Link href="/contact">
                                        Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-8 text-lg transition-all hover:scale-105">
                                    <Link href="mailto:woogi.dev@gmail.com">
                                        Email Me
                                    </Link>
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <span className="text-sm text-muted-foreground">Or find me on:</span>
                                <div className="flex gap-2">
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                                        <Link href="https://github.com" target="_blank" aria-label="GitHub">
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" asChild>
                                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                            <Linkedin className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
