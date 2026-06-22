import { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
    title: "Contact",
    description: "Contact Kang Taewook for AI agent systems, data pipelines, PromptOps, automation, or product operations work.",
}

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <ContactForm />
        </div>
    )
}
