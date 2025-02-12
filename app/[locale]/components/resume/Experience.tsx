'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import EmptyState from '../shared/EmptyState';

interface ExperienceProps {
    experiences: Tables<'experience'>[];
}

export default function Experience({ experiences }: ExperienceProps) {
    const locale = useLocale();
    const t = useTranslations('resume.experience');

    if (!experiences?.length) {
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
            <div className="space-y-12">
                {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-4">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-semibold">
                                    {locale === 'ko' ? exp.position_ko || exp.position : exp.position}
                                </h3>
                                <p className="text-green-400">{exp.company}</p>
                            </div>
                            <span className="text-gray-400">{exp.period}</span>
                        </div>
                        <p className="text-gray-400">
                            {locale === 'ko' ? exp.description_ko || exp.description : exp.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300">
                            {((locale === 'ko' ? exp.achievements_ko : exp.achievements) || []).map((achievement) => (
                                <li key={achievement}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
} 