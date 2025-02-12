'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';

interface ProjectGridProps {
    projects: Tables<'projects'>[];
}

type ProjectCategory = 'all' | 'professional' | 'freelance' | 'personal';

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const locale = useLocale();
    const t = useTranslations('projects');
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

    const filteredProjects = projects.filter(project => 
        activeCategory === 'all' || project.category === activeCategory
    );

    const categories: ProjectCategory[] = ['all', 'professional', 'freelance', 'personal'];

    if (!projects?.length) {
        return <EmptyState title={t('empty.title')} message={t('empty.message')} />;
    }

    return (
        <div className="space-y-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${activeCategory === category 
                                ? 'bg-white/20 text-white' 
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                    >
                        {t(`filters.${category}`)}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {filteredProjects.map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.id}`}
                        className="group relative block overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10"
                    >
                        <div className="aspect-video relative">
                            <Image
                                src={project.image_urls[0] || '/images/placeholder.jpg'}
                                alt={locale === 'ko' ? 
                                    `${project.title_ko} 프로젝트 이미지` : 
                                    `Project image for ${project.title}`
                                }
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                        <div className="p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-1">
                                {locale === 'ko' ? project.title_ko : project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-300 mb-4 line-clamp-2">
                                {locale === 'ko' ? project.description_ko : project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                    <span 
                                        key={tag} 
                                        className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {project.tags.length > 3 && (
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300">
                                        +{project.tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
} 