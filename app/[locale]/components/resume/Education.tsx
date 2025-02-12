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
        <section>
            <h2 className="text-2xl font-bold mb-8">{t('title')}</h2>
            <div className="space-y-8">
                {education.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-start">
                        <div>
                            <h3 className="text-xl font-semibold">
                                {locale === 'ko' ? edu.degree_ko : edu.degree}
                            </h3>
                            <p className="text-green-400">{edu.institution}</p>
                            <p className="text-gray-400">
                                {locale === 'ko' ? edu.description_ko : edu.description}
                            </p>
                        </div>
                        <span className="text-gray-400">{edu.period}</span>
                    </div>
                ))}
            </div>
        </section>
    );
} 