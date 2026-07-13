import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "OVERDARE AI Agent 맞춤 역할 문서",
  description: "OVERDARE AI Agent 역할 맥락을 위해 Woogi Harness 수행 증거와 입사 후 제안을 분리한 맞춤 문서입니다.",
  alternates: { canonical: "/portfolio/overdare-ai-agent" },
  robots: { index: false, follow: false, nocache: true },
}

export default function OverdareRoleDossier() {
  return <RoleDossierPage slug="overdare-ai-agent" />
}
