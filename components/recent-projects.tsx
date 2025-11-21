"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"

interface Project {
    id: string
    title: string
    description: string
    cover_image?: string
    images?: string[]
    tags: string[]
    slug: string
    demo_url?: string
    repo_url?: string
}

interface RecentProjectsProps {
    projects: Project[]
}

export function RecentProjects({ projects }: RecentProjectsProps) {
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
        <section className="py-24">
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
                        Recent Projects
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Check out some of my latest work
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={{
                                ...project,
                                images: project.images || []
                            }}
                            index={index}
                        />
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
                        <Link href="/portfolio">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
