'use client';

import { useTranslations } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import EmptyState from '../shared/EmptyState';

interface SkillsProps {
    skills: Tables<'skills'>[];
}

export default function Skills({ skills }: SkillsProps) {
    const t = useTranslations('resume.skills');

    if (!skills?.length) {
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <div 
                        key={skill.id} 
                        className="bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm"
                    >
                        <h3 className="font-semibold mb-3 text-green-400">{skill.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span 
                                    key={item} 
                                    className="bg-white/10 px-3 py-1.5 rounded-full text-sm text-gray-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 