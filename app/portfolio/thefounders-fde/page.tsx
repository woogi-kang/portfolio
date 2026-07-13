import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "더파운더즈 FDE · AX 역할 맞춤 자료",
  description:
    "약 4,000개 병원 데이터 수집 자동화와 AX·풀스택 경험을 더파운더즈 FDE 역할에 맞춰 정리한 자료입니다.",
  alternates: { canonical: "/portfolio/thefounders-fde" },
  robots: { index: false, follow: false, nocache: true },
}

export default function TheFoundersRoleDossier() {
  return <RoleDossierPage slug="thefounders-fde" />
}
