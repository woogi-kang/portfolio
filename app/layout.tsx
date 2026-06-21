import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://woogi.is-a.dev"),
  title: {
    default: "Kang Taewook | AI Data Product Engineer",
    template: "%s | Woogi",
  },
  description:
    "AI Data Product Engineer and Product Engineer based in Seoul. I build LLM data pipelines, catalog-like data layers, grounded AI services, evaluation workflows, and full-stack AI product operations.",
  keywords: [
    "AI Data Product Engineer",
    "LLM Data Pipeline",
    "Catalog System",
    "Structured Output",
    "RAG",
    "Grounded AI",
    "AI Automation Engineer",
    "AI Agent Engineer",
    "PromptOps",
    "Data Pipeline",
    "LLM Evaluation",
    "MCP",
    "LangChain",
    "LangGraph",
    "Flutter",
    "Automation",
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
    title: "Kang Taewook | AI Data Product Engineer",
    description:
      "LLM data pipelines, catalog-like data layers, grounded AI services, evaluation workflows, and product operations.",
    siteName: "Woogi AI Data Product Portfolio",
    images: [
      {
        url: "/og-image.png", // We might need to generate this or use a placeholder
        width: 1200,
        height: 630,
        alt: "Kang Taewook AI Data Product Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kang Taewook | AI Data Product Engineer",
    description:
      "LLM data pipelines, catalog-like data layers, grounded AI services, evaluation workflows, and product operations.",
    images: ["/og-image.png"],
  },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
