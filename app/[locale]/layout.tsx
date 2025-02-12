import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { locales } from '@/config/navigation';
import '../globals.css';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'ko' }];
}

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!locales.includes(locale as any)) notFound();

    const messages = useMessages();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <Navigation />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export const metadata = {
    title: 'Flutter Developer Portfolio',
    description: 'Portfolio showcasing Flutter and mobile development projects',
}; 