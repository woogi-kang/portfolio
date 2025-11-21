import { createClient } from "@/lib/supabase/server"
import { ProjectCard } from "@/components/project-card"

import { Metadata } from "next"

export const revalidate = 0

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Check out my latest projects and case studies. I specialize in building modern web applications.",
}

export default async function PortfolioPage() {
    const supabase = await createClient()
    const { data: projects } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: true })

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col gap-12 md:gap-16">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        Featured <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                            Works
                        </span>
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                        A collection of projects that showcase my passion for building digital experiences.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                    {(!projects || projects.length === 0) && (
                        <p className="col-span-full text-center text-lg text-muted-foreground">
                            No projects found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
