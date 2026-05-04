import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/portfolio-data";

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

    const projectRoutes = caseStudies.map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...routes, ...projectRoutes];
}
