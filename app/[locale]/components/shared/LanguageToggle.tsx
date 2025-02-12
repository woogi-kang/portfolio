'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/config/navigation';

export default function LanguageToggle() {
    const locale = useLocale();
    const nextLocale = locale === 'en' ? 'ko' : 'en';

    return (
        <Link
            href="/"
            locale={nextLocale}
            className="py-3 px-5 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
        >
            {nextLocale.toUpperCase()}
        </Link>
    );
} 