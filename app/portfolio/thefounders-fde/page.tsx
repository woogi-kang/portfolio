import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "더파운더즈 FDE · AX 역할 맞춤 자료",
  description:
    "플레드의 병원 이벤트 수집 자동화 성과와 기준 리뷰 103,399건으로 구성한 VOC Insight 지원용 POC를 더파운더즈 FDE 역할에 맞춰 정리했습니다.",
  alternates: { canonical: "/portfolio/thefounders-fde" },
  robots: { index: false, follow: false, nocache: true },
}

export default function TheFoundersRoleDossier() {
  return <RoleDossierPage slug="thefounders-fde" />
}
