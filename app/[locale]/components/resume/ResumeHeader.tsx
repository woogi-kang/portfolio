'use client';

import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResumeHeader() {
    const t = useTranslations('resume');

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
                    onClick={() => window.open('/resume.pdf', '_blank')}
                >
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                    {t('downloadResume')}
                </Button>
                <Button 
                    className="group border-white/10 hover:border-white/20 backdrop-blur-sm"
                    onClick={() => window.open('/cover-letter.pdf', '_blank')}
                >
                    <Download className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
                    {t('downloadCoverLetter')}
                </Button>
            </div>
        </section>
    );
} 