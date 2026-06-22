export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://woogi.is-a.dev/#person",
                "name": "Kang Taewook",
                "alternateName": "Woogi",
                "url": "https://woogi.is-a.dev",
                "jobTitle": "AI Data Product Engineer / Product Engineer",
                "description": "Product engineer based in Seoul building LLM data pipelines, catalog data layers, grounded AI services, evaluation workflows, and practical AI product operations.",
                "sameAs": [
                    "https://github.com/woogi-kang",
                    "https://www.linkedin.com/in/taewook-kang/",
                    "https://velog.io/@woogi-dev"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://woogi.is-a.dev/#website",
                "url": "https://woogi.is-a.dev",
                "name": "Woogi AI Data Product Portfolio",
                "publisher": {
                    "@id": "https://woogi.is-a.dev/#person"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
