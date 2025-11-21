import { MetadataRoute } from "next";
import { createClient } from "@/lib/supabase/server";
import { getVelogPosts } from "@/lib/velog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://woogi.is-a.dev";

    // Static routes
    const routes = [
        "",
        "/portfolio",
        "/posts",
        "/resume",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic Project Routes
    const supabase = await createClient();
    const { data: projects } = await supabase.from("projects").select("slug, updated_at");

    const projectRoutes = projects?.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(project.updated_at),
        changeFrequency: "weekly" as const,
        priority: 0.7,
    })) || [];

    // Dynamic Blog Routes (Velog)
    // Since we link externally to Velog, we might NOT want to include them in our sitemap 
    // as they are not pages on our site. 
    // However, if we had local detail pages, we would add them here.
    // Given the user switched to external links, we should NOT add blog post routes here.

    return [...routes, ...projectRoutes];
}
