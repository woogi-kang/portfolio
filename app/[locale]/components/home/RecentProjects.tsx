'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import { ArrowRight } from 'lucide-react';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';

interface RecentProjectsProps {
    projects: Tables<'projects'>[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
    const locale = useLocale();
    const t = useTranslations('projects');

    if (!projects?.length) {
        return <EmptyState title={t('empty.title')} message={t('empty.message')} />;
    }

    return (
        <section className="space-y-6 sm:space-y-8">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-3xl font-bold">
                    {t('recent.title')}
                </h2>
                <Link 
                    href="/projects" 
                    className="group flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                >
                    {t('recent.viewAll')}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {projects.slice(0, 4).map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.id}`}
                        className="group relative block overflow-hidden rounded-xl bg-black/20 border border-white/10 
                            transition-all duration-300 hover:bg-black/40 hover:border-green-500/30"
                    >
                        {/* Image Section */}
                        <div className="relative aspect-[16/9]">
                            <Image
                                src={project.thumbnail_url || project.image_urls[0] || '/images/placeholder.jpg'}
                                alt={locale === 'ko' ? 
                                    `${project.title_ko} 프로젝트 이미지` : 
                                    `Project image for ${project.title}`
                                }
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 space-y-4">
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                                    {locale === 'ko' ? project.title_ko : project.title}
                                </h3>
                                <p className="text-sm text-gray-300 line-clamp-2">
                                    {locale === 'ko' ? project.summary_ko : project.summary}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.slice(0, 2).flatMap(tech => 
                                    tech.items.slice(0, 2).map(item => (
                                        <span 
                                            key={item} 
                                            className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300
                                                transition-colors group-hover:bg-green-500/20 group-hover:text-green-400"
                                        >
                                            {item}
                                        </span>
                                    ))
                                )}
                                {project.tech_stack.reduce((acc, tech) => acc + tech.items.length, 0) > 4 && (
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300
                                        transition-colors group-hover:bg-green-500/20 group-hover:text-green-400"
                                    >
                                        +{project.tech_stack.reduce((acc, tech) => acc + tech.items.length, 0) - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
} 