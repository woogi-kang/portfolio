'use client';

import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';

export default function ResumeHeader() {
    const t = useTranslations('resume');
    const locale = useLocale();

    const coverLetterUrls = {
        en: process.env.NEXT_PUBLIC_COVER_LETTER_EN_URL,
        ko: process.env.NEXT_PUBLIC_COVER_LETTER_KO_URL
    };

    return (
        <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 space-y-6 sm:space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    {t('title')}
                </h1>
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
                    {t('subtitle')}
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                    className="group bg-green-500 hover:bg-green-600 text-white border-0"
                    onClick={() => window.open('https://pktorvtrnyqsxgerdmtb.supabase.co/storage/v1/object/sign/portfolio/resume/ko.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vcmVzdW1lL2tvLnBkZiIsImlhdCI6MTczOTcyNjc5NSwiZXhwIjoxMDM3OTcyNjc5NX0.h6SHXouO1eYdxhlivwWfwRcvRudpnfAjUxFov_4Fo9U', '_blank')}
                >
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                    {t('downloadResume')}
                </Button>
                <Button 
                    className="group border-white/10 hover:border-white/20 backdrop-blur-sm"
                    onClick={() => {
                        const url = coverLetterUrls[locale as keyof typeof coverLetterUrls];
                        if (url) window.open(url, '_blank');
                    }}
                >
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                    {t('downloadCoverLetter')}
                </Button>
            </div>
        </section>
    );
} 