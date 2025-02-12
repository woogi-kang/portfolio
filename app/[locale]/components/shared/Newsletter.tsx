'use client';

import { useTranslations } from 'next-intl';

export default function Newsletter() {
    const t = useTranslations('newsletter');

    return (
        <section className="text-center">
            <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                {t('description')}
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder={t('placeholder')}
                    className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-green-500"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors"
                >
                    {t('subscribe')}
                </button>
            </form>
        </section>
    );
} 