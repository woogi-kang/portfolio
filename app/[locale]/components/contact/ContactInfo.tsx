'use client';

import { useTranslations } from 'next-intl';

export default function ContactInfo() {
    const t = useTranslations('contact.info');

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-xl font-semibold mb-2">{t('email.title')}</h3>
                <a href="mailto:contact@example.com" className="text-green-400 hover:text-green-300">
                    contact@example.com
                </a>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">{t('social.title')}</h3>
                <div className="space-y-2">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-400 hover:text-white"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-400 hover:text-white"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
} 