import type { Metadata } from "next"

import { RoleDossierPage } from "@/components/role-dossier-page"

export const metadata: Metadata = {
  title: "The Founders FDE · AX 지원 역할 문서",
  description:
    "The Founders FDE · AX 역할에 맞춰 실제 수행 사례와 합류 후 검증할 가설을 분리한 지원 문서입니다.",
  alternates: { canonical: "/portfolio/thefounders-fde" },
  robots: { index: false, follow: false, nocache: true },
}

export default function TheFoundersRoleDossier() {
  return <RoleDossierPage slug="thefounders-fde" />
}
