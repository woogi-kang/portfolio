import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/config/navigation';
import '../globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!locales.includes(locale as any)) notFound();
    
    unstable_setRequestLocale(locale);

    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${inter.className} bg-black text-white min-h-screen`}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <div className="flex flex-col min-h-screen">
                        <Navigation />
                        {children}
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Flutter Developer Portfolio',
    description: 'Portfolio showcasing Flutter and mobile development projects',
}; 