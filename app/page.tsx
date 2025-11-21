import { HeroSection } from "@/components/hero-section"
import { RecentProjects } from "@/components/recent-projects"
import { SkillsSection } from "@/components/skills-section"
import { ContactCTA } from "@/components/contact-cta"
import { RecentPosts } from "@/components/recent-posts"
import { createClient } from "@/lib/supabase/server"
import { getVelogPosts } from "@/lib/velog"

import { Metadata } from "next"

export const revalidate = 0

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio. I am a Full Stack Developer passionate about building digital experiences.",
}

export default async function Home() {
  const supabase = await createClient()
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true })
    .limit(3)

  const username = process.env.NEXT_PUBLIC_VELOG_USERNAME || "woogi-dev"
  const posts = await getVelogPosts(username)

  return (
    <main>
      <HeroSection />
      <RecentProjects projects={projects || []} />
      <RecentPosts posts={posts || []} />
      <SkillsSection />
      <ContactCTA />
    </main>
  )
}
