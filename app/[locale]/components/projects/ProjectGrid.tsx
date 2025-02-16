'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';
import { Code2, Briefcase, CodeSquare, Layout } from 'lucide-react';

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

    return (
        <div className="space-y-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
                {[
                    { id: 'all', icon: Layout },
                    { id: 'professional', icon: Briefcase },
                    { id: 'freelance', icon: Code2 },
                    { id: 'personal', icon: CodeSquare }
                ].map(({ id, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActiveCategory(id as ProjectCategory)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2
                            ${activeCategory === id 
                                ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
                    >
                        <Icon className="w-4 h-4" />
                        {t(`filters.${id}`)}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <Link 
                        key={project.id} 
                        href={`/projects/${project.id}`}
                        className="group relative block overflow-hidden rounded-xl bg-black/20 border border-white/10 
                            transition-all duration-300 hover:bg-black/40 hover:border-green-500/30"
                    >
                        <div className="aspect-video relative">
                            <Image
                                src={project.thumbnail_url || project.image_urls[0] || '/images/placeholder.jpg'}
                                alt={locale === 'ko' ? 
                                    `${project.title_ko} 프로젝트 이미지` : 
                                    `Project image for ${project.title}`
                                }
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                        </div>

                        <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <div className="space-y-4">
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
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
} 