'use client';

import { useTranslations } from 'next-intl';

export default function ContactHeader() {
    const t = useTranslations('contact');

    return (
        <section className="mb-16">
            <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
            <p className="text-gray-400 text-lg">
                {t('subtitle')}
            </p>
        </section>
    );
} 