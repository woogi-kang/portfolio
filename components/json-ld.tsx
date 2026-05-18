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
                "jobTitle": "AI Automation Engineer / Agent Engineer",
                "description": "Product engineer based in Seoul building AI workflow automation, data pipelines, PromptOps workflows, and AI product operations.",
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
                "name": "Woogi AI Automation Portfolio",
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
