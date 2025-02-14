'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { cn } from '@/lib/utils';
import EmptyState from '../shared/EmptyState';

interface ExperienceProps {
    experiences: Tables<'experience'>[];
}

export default function Experience({ experiences }: ExperienceProps) {
    const t = useTranslations('resume');
    const locale = useLocale();

    if (!experiences?.length) {
        return (
            <EmptyState
                title={t('experience.empty.title')}
                message={t('experience.empty.message')}
            />
        );
    }

    return (
        <section className="space-y-8">
            <h2 className="text-2xl font-bold">{t('experience')}</h2>
            
            <div className="space-y-12">
                {experiences.map((exp) => (
                    <ExperienceItem 
                        key={exp.id} 
                        experience={exp} 
                        locale={locale} 
                    />
                ))}
            </div>
        </section>
    );
}

interface ExperienceItemProps {
    experience: Tables<'experience'>;
    locale: string;
}

function ExperienceItem({ experience, locale }: ExperienceItemProps) {
    const isKorean = locale === 'ko';

    return (
        <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-16px)] before:w-[2px] before:bg-gray-800">
            <div className="absolute left-0 top-2 -translate-x-[9px] h-5 w-5">
                <div className={cn(
                    "h-5 w-5 rounded-full border-2 border-gray-800 bg-black",
                    experience.is_current && "bg-green-500"
                )} />
            </div>

            <div className="space-y-6">
                {/* Header - Clean and simple */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">
                            {isKorean ? experience.company_ko : experience.company}
                        </h3>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10">
                            {experience.period}
                        </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 space-x-2">
                        <span className="font-medium">{isKorean ? experience.department_ko : experience.department}</span>
                        <span>•</span>
                        <span className="font-medium">{isKorean ? experience.position_ko : experience.position}</span>
                    </div>
                </div>

                {/* Role & Description - Highlight achievements */}
                <div className="space-y-4">
                    <p className="font-medium text-green-400">
                        {isKorean ? experience.role_ko : experience.role}
                    </p>
                    <div className="p-4 rounded-lg bg-emerald-950/30 border border-emerald-500/10 
                        hover:border-emerald-500/30 hover:bg-emerald-950/40 transition-all duration-300"
                    >
                        <h4 className="text-sm font-medium text-emerald-400 mb-3">
                            {isKorean ? "주요 책임" : "Key Responsibilities"}
                        </h4>
                        <ul className="space-y-2">
                            {(isKorean ? experience.description_ko : experience.description)
                                .split('\\n')
                                .map((line, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-300 group">
                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/50 
                                            group-hover:bg-emerald-400 transition-colors duration-300 flex-shrink-0"
                                        />
                                        <span className="leading-relaxed">{line}</span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>

                {/* Technical Achievements - Card-based layout */}
                {experience.technical_achievements.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                        {experience.technical_achievements.map((achievement, index) => (
                            <div key={index} 
                                className="p-4 rounded-lg bg-indigo-950/30 border border-indigo-500/10 
                                    hover:border-indigo-500/30 hover:bg-indigo-950/40 transition-all duration-300"
                            >
                                <h4 className="font-medium text-indigo-400 mb-3">
                                    {isKorean ? achievement.title_ko : achievement.title}
                                </h4>
                                <ul className="space-y-2">
                                    {(isKorean ? achievement.items_ko : achievement.items).map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300 group">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500/50 
                                                group-hover:bg-indigo-400 transition-colors duration-300"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}

                {/* Leadership - Similar card style but different accent */}
                {experience.leadership.length > 0 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                        {experience.leadership.map((leadership, index) => (
                            <div key={index} 
                                className="p-4 rounded-lg bg-black/50 border border-white/10 
                                    hover:border-blue-500/30 transition-colors duration-300"
                            >
                                <h4 className="font-medium text-blue-400 mb-3">
                                    {isKorean ? leadership.title_ko : leadership.title}
                                </h4>
                                <ul className="space-y-2">
                                    {(isKorean ? leadership.items_ko : leadership.items).map((item, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300 group">
                                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500/50 
                                                group-hover:bg-blue-500 transition-colors duration-300"
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 