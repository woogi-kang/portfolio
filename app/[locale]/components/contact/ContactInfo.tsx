'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
    const t = useTranslations('contact.info');

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/woogi-kang',
            icon: Github,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/taewook-kang/',
            icon: Linkedin,
        },
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {t('email.title')}
                    </h3>
                    <a 
                        href="mailto:woogi.dev@gmail.com" 
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                    >
                        <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
                        woogi.dev@gmail.com
                    </a>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {t('location.title')}
                    </h3>
                    <p className="inline-flex items-center gap-2 text-gray-400">
                        <MapPin className="w-4 h-4" />
                        Seoul, South Korea
                    </p>
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        {t('social.title')}
                    </h3>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors group"
                                aria-label={link.name}
                            >
                                <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 