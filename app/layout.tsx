import type { Metadata } from "next";
import "./globals.css";
import { goormSans, nanumGothicCoding, pretendard } from "./fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL("https://woogi.is-a.dev"),
  title: {
    default: "Kang Taewook | Product Engineer — AI Systems & Automation",
    template: "%s | Woogi",
  },
  description:
    "외부 데이터를 검증된 레코드로 만들고 사람 승인 뒤 검색·추천·업무 실행에 연결하는 Product Engineer 강태욱의 포트폴리오입니다.",
  keywords: [
    "Product Engineer",
    "AI Systems",
    "AI Automation",
    "Product Full-stack",
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
    title: "Kang Taewook | Product Engineer — AI Systems & Automation",
    description:
      "데이터 수집, 제품 API, 승인형 AI 업무와 멀티플랫폼 디바이스 구현 사례를 정리했습니다.",
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
      "데이터와 AI 업무, 제품 전달과 멀티플랫폼 디바이스 구현 사례를 소개합니다.",
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
            <Footer />
          </div>
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
