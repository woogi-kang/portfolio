'use client';

import { useTranslations } from 'next-intl';

export default function ProjectsHeader() {
    const t = useTranslations('projects');

    return (
        <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                {t('title')}
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
                {t('subtitle')}
            </p>
        </section>
    );
} 