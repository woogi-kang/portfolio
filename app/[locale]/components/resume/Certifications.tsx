'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface QualificationsProps {
    certifications: Tables<'qualifications'>[];
}

export default function Qualifications({ certifications }: QualificationsProps) {
    const locale = useLocale();
    const t = useTranslations('resume.qualifications');

    if (!certifications?.length) {
        return (
            <EmptyState
                title={t('empty.title')}
                message={t('empty.message')}
            />
        );
    }

    return (
        <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                    <div 
                        key={cert.id} 
                        className="flex flex-col p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                    >
                        <div className="flex items-start gap-4">
                            {cert.logo_url && (
                                <div className="flex-shrink-0 w-12 h-12 relative rounded-md overflow-hidden bg-white/10">
                                    <Image
                                        src={cert.logo_url}
                                        alt={locale === 'ko' ? cert.name_ko : cert.name}
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                            )}
                            <div className="flex-1 space-y-2">
                                <h3 className="text-lg font-semibold text-green-400">
                                    {locale === 'ko' ? cert.name_ko : cert.name}
                                </h3>
                                <p className="text-sm text-gray-400">
                                    {locale === 'ko' ? cert.issuer_ko : cert.issuer} • {cert.date}
                                </p>
                                {(cert.description || cert.description_ko) && (
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        {locale === 'ko' ? cert.description_ko : cert.description}
                                    </p>
                                )}
                                {/* {cert.credential_url && (
                                    <a 
                                        href={cert.credential_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-xs text-green-400 hover:text-green-300 transition-colors mt-2"
                                    >
                                        <span>{t('viewCredential')}</span>
                                        <ExternalLink className="ml-1 w-3 h-3" />
                                    </a>
                                )} */}
                                {cert.credential_id && !cert.credential_url && (
                                    <p className="text-xs text-gray-500 mt-2">
                                        {t('credentialId')}: {cert.credential_id}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 