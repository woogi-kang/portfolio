'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import EmptyState from '../shared/EmptyState';

interface RecentProjectsProps {
    projects: Tables<'projects'>[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
    const locale = useLocale();
    const t = useTranslations('projects');

    if (!projects?.length) {
        return (
            <EmptyState
                title={t('empty.title')}
                message={t('empty.message')}
            />
        );
    }

    return (
        <section>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">{t('recent.title')}</h2>
                <Link href="/projects" className="text-green-400 hover:text-green-300">
                    {t('recent.viewAll')}
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(0, 4).map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-lg">
                        <img
                            src={project.image_urls[0]}
                            alt={locale === 'ko' ? project.title_ko : project.title}
                            className="w-full aspect-video object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="text-center p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {locale === 'ko' ? project.title_ko : project.title}
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    {locale === 'ko' ? project.description_ko : project.description}
                                </p>
                                <Link
                                    href={`/projects/${project.id}`}
                                    className="inline-block bg-green-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors"
                                >
                                    {t('viewProject')}
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 