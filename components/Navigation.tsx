'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    const navItems = [
        { label: '⌂', path: '/' },
        { label: 'Resume', path: '/resume' },
        { label: 'Projects', path: '/projects' },
        { label: 'Blog', path: '/blog' },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-2 p-2 rounded-full backdrop-blur-md bg-black/30 border border-white/10 shadow-lg shadow-black/20">
                {navItems.map(({ label, path }) => (
                    <Link
                        key={path}
                        href={path}
                        className={`py-3 px-5 rounded-full capitalize transition-all duration-300 ${
                            isActive(path)
                                ? 'bg-white/10 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </nav>
        </div>
    );
} 