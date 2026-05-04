import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Kang Taewook for AI agent, AX automation, RAG product, or Flutter multi-platform product work.",
}

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
            <ContactForm />
        </div>
    )
}
