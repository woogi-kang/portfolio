"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Globe } from "lucide-react"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Project {
    id: string
    title: string
    description: string
    cover_image?: string
    images: string[]
    tags: string[]
    demo_url?: string
    repo_url?: string
    slug: string
}

interface ProjectCardProps {
    project: Project
    index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
        >
            <Link href={`/portfolio/${project.slug}`}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:bg-card/80 hover:shadow-lg cursor-pointer">
                    <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                            src={project.cover_image || "/project-placeholder.png"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <Button size="sm" variant="secondary" className="h-9 pointer-events-none">
                                View Details →
                            </Button>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">
                            {project.description}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map((tag) => (
                                <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary/80">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div>
    )
}
