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
        <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">{t('title')}</h2>
            <div className="space-y-8 md:space-y-12">
                {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">
                                    {locale === 'ko' ? exp.position_ko || exp.position : exp.position}
                                </h3>
                                <p className="text-green-400 text-sm md:text-base">{exp.company}</p>
                            </div>
                            <span className="text-gray-400 text-sm whitespace-nowrap">{exp.period}</span>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {locale === 'ko' ? exp.description_ko || exp.description : exp.description}
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base pl-4">
                            {((locale === 'ko' ? exp.achievements_ko : exp.achievements) || []).map((achievement) => (
                                <li key={achievement} className="leading-relaxed">{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
} 