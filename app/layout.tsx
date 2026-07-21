import type { Metadata } from "next";
import "./globals.css";
import { goormSans, nanumGothicCoding, pretendard } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/json-ld";
import { portfolioPublic } from "@/lib/public-content";

export const metadata: Metadata = {
  metadataBase: new URL("https://woogi.is-a.dev"),
  title: {
    default: "Kang Taewook | Product Engineer — AI Systems & Full-stack",
    template: "%s | Woogi",
  },
  description:
    "Grum과 TONE SEOUL의 인프라·웹·서버, RAG 기반 AI 제품과 업무 자동화를 구현한 Product Engineer 강태욱의 포트폴리오입니다.",
  keywords: [
    "Product Engineer",
    "AI Systems",
    "AI Automation",
    "Product Full-stack",
    "Cloud Infrastructure",
    "RAG",
    "Multi-platform Device",
    "LLM Data Pipeline",
    "Flutter",
    "Next.js",
    "FastAPI",
    "Kang Taewook",
    "Woogi",
    "Seoul",
  ],
  authors: [{ name: "Kang Taewook", url: "https://woogi.is-a.dev" }],
  creator: "Kang Taewook",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://woogi.is-a.dev",
    title: "Kang Taewook | Product Engineer — AI Systems & Full-stack",
    description:
      "Grum과 TONE SEOUL의 인프라·웹·서버, RAG 기반 AI 제품과 담당자가 검토하는 업무 자동화 사례를 정리했습니다.",
    siteName: "Woogi Product Systems Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 496,
        height: 638,
        alt: "Product Engineer 강태욱",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Kang Taewook | Product Engineer",
    description:
      "인프라·웹·서버 풀스택 개발과 RAG 기반 AI 제품, 멀티플랫폼 디바이스 구현 사례를 소개합니다.",
    images: ["/profile.jpg"],
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${pretendard.variable} ${goormSans.variable} ${nanumGothicCoding.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a className="skip-link" href="#main-content">
            본문으로 건너뛰기
          </a>
          <div className="relative flex min-h-[100dvh] flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer
              profile={{
                nameEn: portfolioPublic.profile.nameEn,
                role: portfolioPublic.profile.role,
                email: portfolioPublic.profile.email,
                github: portfolioPublic.profile.github,
                linkedin: portfolioPublic.profile.linkedin,
              }}
            />
          </div>
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
