import type { MetadataRoute } from "next"

import { portfolioPublic } from "@/lib/public-content"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://woogi.is-a.dev"
  const lastModified = new Date(portfolioPublic.reviewedAt)
  const routes = ["", "/portfolio", "/resume", "/posts", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
  const caseRoutes = portfolioPublic.cases
    .filter((item) => item.seo.index)
    .map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...routes, ...caseRoutes]
}
