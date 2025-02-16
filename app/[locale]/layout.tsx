import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config/navigation';
import '../globals.css';
import Navigation from './components/Navigation';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ 
    params 
}: { 
    params: Promise<{ locale: string }> 
}) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    
    return {
        title: {
            default: locale === 'ko' ? 
                '강태욱 | 시니어 플러터 개발자' : 
                'Taewook Kang | Senior Flutter Developer',
            template: '%s | Taewook Kang'
        },
        description: locale === 'ko' ? 
            '5년 이상의 경력을 가진 시니어 플러터 개발자입니다. 엔터프라이즈급 모바일 앱 개발, 성능 최적화, 클린 아키텍처 전문가' : 
            'Senior Flutter Developer with 5+ years of experience. Specializing in enterprise mobile apps, performance optimization, and clean architecture',
        keywords: [
            'Flutter', 'Mobile Development', 'iOS', 'Android',
            'Clean Architecture', 'Performance Optimization',
            'Enterprise Applications', 'Cross-platform Development',
            'Senior Developer', 'Technical Lead'
        ],
        authors: [{ name: 'Taewook Kang' }],
        creator: 'Taewook Kang',
        openGraph: {
            type: 'website',
            locale: locale,
            url: 'https://woogi.is-a.dev',
            siteName: locale === 'ko' ? '강태욱 포트폴리오' : 'Taewook Kang Portfolio',
            title: locale === 'ko' ? 
                '강태욱 | 시니어 플러터 개발자' : 
                'Taewook Kang | Senior Flutter Developer',
            description: locale === 'ko' ? 
                '5년 이상의 경력을 가진 시니어 플러터 개발자입니다. 엔터프라이즈급 모바일 앱 개발, 성능 최적화, 클린 아키텍처 전문가' : 
                'Senior Flutter Developer with 5+ years of experience. Specializing in enterprise mobile apps, performance optimization, and clean architecture',
            images: [{
                url: 'https://pktorvtrnyqsxgerdmtb.supabase.co/storage/v1/object/sign/portfolio/thumbnails/og.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vdGh1bWJuYWlscy9vZy5wbmciLCJpYXQiOjE3Mzk3Mjc2MTUsImV4cCI6MjYwMzcyNzYxNX0.UcVDg23wLLerDGzW-2_o6zZd8XCfX0xO1wWF3YNAsZk',
                width: 1200,
                height: 630,
                alt: 'Taewook Kang Portfolio'
            }],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Taewook Kang | Senior Flutter Developer',
            description: 'Senior Flutter Developer specializing in enterprise mobile applications',
            images: ['https://pktorvtrnyqsxgerdmtb.supabase.co/storage/v1/object/sign/portfolio/thumbnails/og.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vdGh1bWJuYWlscy9vZy5wbmciLCJpYXQiOjE3Mzk3Mjc2MTUsImV4cCI6MjYwMzcyNzYxNX0.UcVDg23wLLerDGzW-2_o6zZd8XCfX0xO1wWF3YNAsZk'],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'google-site-verification=chhEZbVIBMAPonbRORfRgqF2TIoIZjQqeBJP3yOS2FU',
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    
    if (!locales.includes(locale as any)) notFound();
    
    unstable_setRequestLocale(locale);
    const messages = (await import(`../../messages/${locale}.json`)).default;

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} bg-black text-white min-h-screen`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <div className="flex flex-col min-h-screen">
                        <Navigation />
                        {children}
                    </div>
                </NextIntlClientProvider>
                <Analytics />
            </body>
        </html>
    );
} 