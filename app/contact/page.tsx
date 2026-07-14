import type { Metadata } from "next"
import Link from "next/link"

import { ContactForm } from "@/components/contact-form"
import { portfolioPublic } from "@/lib/public-content"

export const metadata: Metadata = {
  title: "Contact — Hiring & Collaboration",
  description: "Product Engineer 강태욱에게 채용 또는 제품 협업 내용을 전달합니다.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <section className="page-intro">
      <div className="site-container site-grid gap-y-10">
        <div className="col-span-4 md:col-span-3 xl:col-span-6">
          <p className="eyebrow">Contact</p>
          <h1 className="section-title mt-5">채용 포지션이나 협업 과제를 알려주세요.</h1>
          <p className="lede mt-6 text-base md:text-lg">
            역할, 현재 해결하려는 문제와 참고할 사례를 남겨주시면 확인 후 답변드리겠습니다.
          </p>
          <div className="mt-8 border-y py-5 text-sm">
            <p className="text-ink-muted">Direct email</p>
            <Link className="break-anywhere mt-1 inline-flex min-h-11 items-center font-semibold hover:text-action" href={`mailto:${portfolioPublic.profile.email}`}>
              {portfolioPublic.profile.email}
            </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-5 xl:col-span-8 xl:col-start-9">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
