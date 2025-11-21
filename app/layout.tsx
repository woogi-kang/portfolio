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
    default: "Woogi | Full Stack Developer",
    template: "%s | Woogi",
  },
  description: "Full Stack Developer based in Seoul. I build accessible, pixel-perfect, and performant web experiences.",
  keywords: ["Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Woogi", "Seoul"],
  authors: [{ name: "Woogi", url: "https://woogi.is-a.dev" }],
  creator: "Woogi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://woogi.is-a.dev",
    title: "Woogi | Full Stack Developer",
    description: "Full Stack Developer based in Seoul. I build accessible, pixel-perfect, and performant web experiences.",
    siteName: "Woogi Portfolio",
    images: [
      {
        url: "/og-image.png", // We might need to generate this or use a placeholder
        width: 1200,
        height: 630,
        alt: "Woogi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Woogi | Full Stack Developer",
    description: "Full Stack Developer based in Seoul. I build accessible, pixel-perfect, and performant web experiences.",
    creator: "@woogi", // Update if user has a twitter handle, using generic for now
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
    <html lang="en" suppressHydrationWarning>
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
