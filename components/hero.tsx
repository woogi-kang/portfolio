"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
            <div className="space-y-4">
                <motion.h1
                    className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Building digital experiences <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                        that matter.
                    </span>
                </motion.h1>
                <motion.p
                    className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I&apos;m a Full Stack Developer passionate about creating beautiful, responsive, and user-friendly web applications.
                </motion.p>
            </div>
            <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link href="/portfolio">
                    <Button size="lg" className="h-12 px-8 text-lg">
                        View Portfolio
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </Link>
                <Link href="/resume">
                    <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                        View Resume
                    </Button>
                </Link>
            </motion.div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>
        </section>
    )
}
