export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://woogi.is-a.dev/#person",
                "name": "Woogi",
                "url": "https://woogi.is-a.dev",
                "jobTitle": "Full Stack Developer",
                "description": "Full Stack Developer based in Seoul. I build accessible, pixel-perfect, and performant web experiences.",
                "sameAs": [
                    "https://github.com/woogi-dev", // Assuming this based on username
                    "https://velog.io/@woogi-dev"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://woogi.is-a.dev/#website",
                "url": "https://woogi.is-a.dev",
                "name": "Woogi Portfolio",
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
