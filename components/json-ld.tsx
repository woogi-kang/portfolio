import { portfolioPublic } from "@/lib/public-content"

export default function JsonLd() {
  const { profile } = portfolioPublic
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://woogi.is-a.dev/#person",
        name: profile.nameEn,
        alternateName: "Woogi",
        url: "https://woogi.is-a.dev",
        jobTitle: profile.role,
        description: profile.summary,
        sameAs: [profile.github, profile.linkedin, "https://velog.io/@woogi-dev"],
        knowsAbout: [
          "AI systems",
          "Full-stack product development",
          "Cloud infrastructure",
          "RAG",
          "Flutter",
          "Multi-platform device systems",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://woogi.is-a.dev/#website",
        url: "https://woogi.is-a.dev",
        name: "Woogi Product Systems Portfolio",
        inLanguage: "ko-KR",
        publisher: { "@id": "https://woogi.is-a.dev/#person" },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
