'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';

export default function NotFound() {
    const t = useTranslations('notFound');

    return (
        <main className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">404</h1>
                <p className="text-xl text-gray-400 mb-8">{t('message')}</p>
                <Link
                    href="/"
                    className="bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors"
                >
                    {t('backHome')}
                </Link>
            </div>
        </main>
    );
} 