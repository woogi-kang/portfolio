import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Flutter Developer Portfolio',
    description: 'Portfolio site showcasing Flutter development work and expertise',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-black text-white`}>
                <Navigation />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
