'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectDetailProps {
    project: Tables<'projects'>;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const locale = useLocale();
    const t = useTranslations('projects');

    return (
        <article className="container max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <Link 
                href="/projects" 
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {t('backToProjects')}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                    {project.image_urls.map((url, index) => (
                        <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
                            <Image
                                src={url || '/images/placeholder.jpg'}
                                alt={locale === 'ko' ? 
                                    `${project.title_ko} 프로젝트 이미지 ${index + 1}` : 
                                    `Project image ${index + 1} for ${project.title}`
                                }
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            {locale === 'ko' ? project.title_ko : project.title}
                        </h1>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                            {locale === 'ko' ? project.description_ko : project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span 
                                key={tag} 
                                className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black px-6 py-2.5 rounded-lg font-medium transition-colors"
                        >
                            {t('viewLive')}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
} 