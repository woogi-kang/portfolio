"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ResumeItemProps {
    role: string
    company: string
    startDate: string
    endDate?: string
    description: string
    skills: string[]
    type: "work" | "education"
    index?: number
}

export function ResumeItem({
    role,
    company,
    startDate,
    endDate,
    description,
    skills,
    index = 0,
}: ResumeItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-8 before:absolute before:left-2 before:top-2 before:h-full before:w-[2px] before:bg-border last:before:hidden"
        >
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
            <Card className="mb-8 border-none bg-transparent shadow-none">
                <CardHeader className="p-0 pb-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-xl">{role}</CardTitle>
                            <div className="text-base font-medium text-primary">
                                {company}
                            </div>
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                            {startDate} - {endDate || "Present"}
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="mb-4 whitespace-pre-wrap text-muted-foreground">
                        {description}
                    </div>
                    {skills && skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <Badge key={skill} variant="outline" className="bg-background/50">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}
