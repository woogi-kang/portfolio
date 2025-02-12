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
                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.slice(0, 4).map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.id}`}
                        className="group relative block overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm 
                            transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl 
                            hover:shadow-green-500/10 hover:-translate-y-1"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <Image
                                src={project.image_urls[0]}
                                alt={locale === 'ko' ? project.title_ko : project.title}
                                fill
                                className="object-cover transition-all duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                opacity-60 group-hover:opacity-80 transition-opacity duration-300" 
                            />
                            <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 mix-blend-overlay" 
                            />
                        </div>
                        <div className="relative p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1 text-white 
                                transition-colors duration-300 group-hover:text-green-400"
                            >
                                {locale === 'ko' ? project.title_ko : project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2 
                                transition-colors duration-300 group-hover:text-gray-300"
                            >
                                {locale === 'ko' ? project.description_ko : project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300
                                            transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300
                                        transition-all duration-300 group-hover:bg-white/20 group-hover:text-white"
                                    >
                                        +{project.tags.length - 3}
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