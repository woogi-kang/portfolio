import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false, nocache: true },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-[100dvh] bg-background">{children}</div>
}
