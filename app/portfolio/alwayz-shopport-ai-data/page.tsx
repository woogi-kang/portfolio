import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "Alwayz Product Engineer 맞춤 역할 문서",
  description: "Alwayz Product Engineer 지원 맥락을 위해 수행 증거와 입사 후 제안을 분리한 맞춤 문서입니다.",
  alternates: { canonical: "/portfolio/alwayz-shopport-ai-data" },
  robots: { index: false, follow: false, nocache: true },
}

export default function AlwayzRoleDossier() {
  return <RoleDossierPage slug="alwayz-shopport-ai-data" />
}
