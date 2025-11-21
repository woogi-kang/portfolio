import { createClient } from "@/lib/supabase/server"
import { ResumeItem } from "@/components/resume-item"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Resume",
    description: "View my professional experience, education, and skills. Download my resume.",
}

export const revalidate = 0

export default async function ResumePage() {
    const supabase = await createClient()
    const { data: resumeItems } = await supabase
        .from("resume")
        .select("*")
        .order("start_date", { ascending: false })

    const workExperience = resumeItems?.filter((item) => item.type === "work")
    const education = resumeItems?.filter((item) => item.type === "education")

    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Journey</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
                        A timeline of my professional experience and education.
                    </p>
                </div>

                {workExperience && workExperience.length > 0 && (
                    <div className="relative flex flex-col gap-10">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <h2 className="text-2xl font-bold tracking-tight text-primary">Work Experience</h2>
                            <div className="h-px flex-1 bg-border" />
                        </div>
                        <div className="relative border-l-2 border-muted pl-8 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:space-y-10">
                            {/* Vertical line for desktop */}
                            <div className="hidden md:absolute md:left-1/2 md:top-0 md:bottom-0 md:-ml-[1px] md:block md:w-[2px] md:bg-muted" />

                            {workExperience.map((item, index) => (
                                <div key={item.id} className={`relative md:flex md:justify-between md:gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-[10px]" />

                                    <div className="md:w-[45%]">
                                        <ResumeItem
                                            role={item.role}
                                            company={item.company}
                                            startDate={new Date(item.start_date).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })}
                                            endDate={
                                                item.end_date
                                                    ? new Date(item.end_date).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        year: "numeric",
                                                    })
                                                    : undefined
                                            }
                                            description={item.description}
                                            skills={item.skills}
                                            type="work"
                                        />
                                    </div>
                                    <div className="hidden md:block md:w-[45%]" /> {/* Spacer */}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {education && education.length > 0 && (
                    <div className="relative flex flex-col gap-10">
                        <div className="flex items-center gap-4">
                            <div className="h-px flex-1 bg-border" />
                            <h2 className="text-2xl font-bold tracking-tight text-primary">Education</h2>
                            <div className="h-px flex-1 bg-border" />
                        </div>
                        <div className="grid gap-6 md:grid-cols-2">
                            {education.map((item) => (
                                <ResumeItem
                                    key={item.id}
                                    role={item.role}
                                    company={item.company}
                                    startDate={new Date(item.start_date).toLocaleDateString("en-US", {
                                        month: "short",
                                        year: "numeric",
                                    })}
                                    endDate={
                                        item.end_date
                                            ? new Date(item.end_date).toLocaleDateString("en-US", {
                                                month: "short",
                                                year: "numeric",
                                            })
                                            : undefined
                                    }
                                    description={item.description}
                                    skills={item.skills}
                                    type="education"
                                />
                            ))}
                        </div>
                    </div>
                )}

                {(!resumeItems || resumeItems.length === 0) && (
                    <p className="text-center text-muted-foreground">No resume items found.</p>
                )}
            </div>
        </div>
    )
}
