import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "MOAIS AI · LLM 맞춤 역할 문서",
  description: "MOAIS AI · LLM 역할 맥락을 위해 수행 증거와 입사 후 제안을 분리한 맞춤 문서입니다.",
  alternates: { canonical: "/portfolio/moais-ai-llm" },
  robots: { index: false, follow: false, nocache: true },
}

export default function MoaisRoleDossier() {
  return <RoleDossierPage slug="moais-ai-llm" />
}
