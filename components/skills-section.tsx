"use client"

import { motion } from "framer-motion"
import { Code2, Database, Wrench, Sparkles } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
    frontend: {
        icon: Code2,
        title: "Frontend",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    backend: {
        icon: Database,
        title: "Backend",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
        skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Authentication"],
    },
    tools: {
        icon: Wrench,
        title: "Tools & Others",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    },
}

export function SkillsSection() {
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
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Skills & Technologies</span>
                    </div>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                        My Tech Stack
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {Object.entries(skills).map(([key, category]) => {
                        const Icon = category.icon
                        return (
                            <motion.div key={key} variants={item}>
                                <Card className="group h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:bg-card/80 hover:shadow-xl">
                                    <CardContent className="p-6">
                                        {/* Icon */}
                                        <div className={`mb-4 inline-flex rounded-lg ${category.bgColor} p-3`}>
                                            <Icon className={`h-6 w-6 ${category.color}`} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-4 text-xl font-semibold">{category.title}</h3>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="bg-secondary/50 hover:bg-secondary transition-colors"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
