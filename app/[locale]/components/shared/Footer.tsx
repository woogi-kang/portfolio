'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/config/navigation';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('footer');
    const year = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/yourusername',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/yourusername',
            icon: Linkedin,
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/yourusername',
            icon: Twitter,
        },
        {
            name: 'Email',
            href: 'mailto:your.email@example.com',
            icon: Mail,
        },
    ];

    const quickLinks = [
        { name: t('links.resume'), href: '/resume' },
        { name: t('links.projects'), href: '/projects' },
        { name: t('links.blog'), href: '/blog' },
        { name: t('links.contact'), href: '/contact' },
    ];

    const techStack = [
        { name: 'Flutter', href: 'https://flutter.dev' },
        { name: 'Next.js', href: 'https://nextjs.org' },
        { name: 'Nest.js', href: 'https://nestjs.com' },
        { name: 'Supabase', href: 'https://supabase.com' },
    ];

    return (
        <footer className="border-t border-white/10 mt-32 bg-black/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            {t('links.title')}
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            {t('tech.title')}
                        </h3>
                        <ul className="space-y-2">
                            {techStack.map((tech) => (
                                <li key={tech.name}>
                                    <a
                                        href={tech.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                                    >
                                        {tech.name}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            {t('contact.title')}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-400">
                            <p className="hover:text-white transition-colors">
                                <a href="mailto:woogi.dev@gmail.com">
                                    woogi.dev@gmail.com
                                </a>
                            </p>
                            <p>{t('contact.location')}</p>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; {year} {t('copyright')} •{' '}
                        <span className="text-gray-500">{t('rights')}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
} 