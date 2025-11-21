import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Metadata } from "next"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params
    const supabase = await createClient()

    const { data: project } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single()

    if (!project) {
        return {
            title: "Project Not Found",
        }
    }

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [project.cover_image || "/project-placeholder.png"],
        },
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const supabase = await createClient()

    const { data: project } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single()

    if (!project) {
        notFound()
    }

    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            {/* Back Button */}
            <Link href="/portfolio">
                <Button variant="ghost" className="mb-8 -ml-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Portfolio
                </Button>
            </Link>

            {/* Header */}
            <div className="mb-8 space-y-4">
                <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                    {project.title}
                </h1>

                {project.description && (
                    <p className="text-xl text-muted-foreground">
                        {project.description}
                    </p>
                )}

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                    {project.demo_url && (
                        <Link href={project.demo_url} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </Button>
                        </Link>
                    )}
                    {project.repo_url && (
                        <Link href={project.repo_url} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Hero Image - Cover Image */}
            <div className="mb-12">
                <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
                    <Image
                        src={project.cover_image || "/project-placeholder.png"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Additional Images Gallery */}
            {project.images && project.images.length > 0 && (
                <div className="mb-12 space-y-4">
                    {project.images.map((image: string, index: number) => (
                        <div
                            key={index}
                            className="relative aspect-video overflow-hidden rounded-lg border bg-muted"
                        >
                            <Image
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            )}

            {/* Content */}
            {project.content && (
                <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    )
}
