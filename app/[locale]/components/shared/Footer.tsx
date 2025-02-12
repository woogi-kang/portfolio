'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';

export default function Footer() {
    const t = useTranslations('footer');
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-white/10 mt-32">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-bold mb-4">{t('about.title')}</h3>
                        <p className="text-gray-400">{t('about.description')}</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('links.title')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/projects" className="text-gray-400 hover:text-white">
                                    {t('links.projects')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white">
                                    {t('links.blog')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                    {t('links.contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">{t('social.title')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {year} {t('copyright')}</p>
                </div>
            </div>
        </footer>
    );
} 