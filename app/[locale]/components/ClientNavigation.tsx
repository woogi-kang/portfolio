'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/config/navigation';
import LanguageToggle from './shared/LanguageToggle';

export default function ClientNavigation() {
    const t = useTranslations('navigation');
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: '⌂' },
        { href: '/resume', label: t('resume') },
        { href: '/projects', label: t('projects') },
        { href: '/blog', label: t('blog') }
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-2 p-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-lg shadow-black/20">
                {navItems.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={`py-3 px-5 rounded-full capitalize transition-all duration-300 ${
                            pathname === href 
                                ? 'bg-white/10 text-white' 
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {label}
                    </Link>
                ))}
                <div className="ml-2">
                    <LanguageToggle />
                </div>
            </nav>
        </div>
    );
} 