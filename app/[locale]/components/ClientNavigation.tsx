'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/config/navigation';
import { Menu, Home, FileText, FolderGit2, BookText, X, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import LanguageToggle from './shared/LanguageToggle';
import { cn } from '@/lib/utils';

export default function ClientNavigation() {
    const t = useTranslations('navigation');
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { href: '/', label: t('home'), icon: <Home className="w-5 h-5" /> },
        { href: '/resume', label: t('resume'), icon: <FileText className="w-5 h-5" /> },
        { href: '/projects', label: t('projects'), icon: <FolderGit2 className="w-5 h-5" /> },
        // { href: '/blog', label: t('blog'), icon: <BookText className="w-5 h-5" /> },
        { href: '/contact', label: t('contact'), icon: <Mail className="w-5 h-5" /> }
    ];

    // Mobile drawer navigation
    const MobileNav = () => (
        <>
            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 right-4 z-50 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-md"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Drawer overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
            )}

            {/* Drawer content */}
            <div className={cn(
                "fixed right-0 top-0 h-full w-64 bg-black/95 border-l border-white/10 transform transition-transform duration-300 ease-in-out z-50",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2"
                    aria-label="Close menu"
                >
                    <X className="w-6 h-6" />
                </button>
                <nav className="flex flex-col gap-2 p-6 mt-16">
                    {navItems.map(({ href, label, icon }) => (
                        <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300",
                                pathname === href
                                    ? "bg-white/10 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {icon}
                            <span>{label}</span>
                        </Link>
                    ))}
                    <div className="mt-4 px-4">
                        <LanguageToggle />
                    </div>
                </nav>
            </div>
        </>
    );

    // Desktop navigation
    const DesktopNav = () => (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-2 p-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-lg shadow-black/20">
                {navItems.map(({ href, label, icon }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(
                            "flex items-center gap-2 py-3 px-5 rounded-full transition-all duration-300",
                            pathname === href
                                ? "bg-white/10 text-white"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <span className="hidden md:block">{label}</span>
                        <span className="md:hidden">{icon}</span>
                    </Link>
                ))}
                <div className="ml-2">
                    <LanguageToggle />
                </div>
            </nav>
        </div>
    );

    return isMobile ? <MobileNav /> : <DesktopNav />;
} 