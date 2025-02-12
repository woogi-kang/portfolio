'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import EmptyState from '../shared/EmptyState';

interface EducationProps {
    education: Tables<'education'>[];
}

export default function Education({ education }: EducationProps) {
    const locale = useLocale();
    const t = useTranslations('resume.education');

    if (!education?.length) {
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
            <div className="space-y-6 md:space-y-8">
                {education.map((edu) => (
                    <div 
                        key={edu.id} 
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="space-y-2">
                            <h3 className="text-lg md:text-xl font-semibold">
                                {locale === 'ko' ? edu.degree_ko : edu.degree}
                            </h3>
                            <p className="text-green-400 text-sm md:text-base">{edu.institution}</p>
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                {locale === 'ko' ? edu.description_ko : edu.description}
                            </p>
                        </div>
                        <span className="text-gray-400 text-sm whitespace-nowrap">{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
} 