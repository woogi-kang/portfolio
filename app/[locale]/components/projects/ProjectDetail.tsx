'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';

interface ProjectDetailProps {
    project: Tables<'projects'>;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const locale = useLocale();
    const t = useTranslations('projects');

    return (
        <article className="max-w-4xl mx-auto px-6 py-16">
            <div className="mb-8">
                <Link href="/projects" className="text-green-400 hover:text-green-300 mb-8 inline-block">
                    ← {t('backToProjects')}
                </Link>
                <h1 className="text-4xl font-bold mb-4">
                    {locale === 'ko' ? project.title_ko : project.title}
                </h1>
                <p className="text-gray-400 text-lg mb-8">
                    {locale === 'ko' ? project.description_ko : project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                        <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-green-400 transition-colors inline-block"
                    >
                        {t('viewLive')}
                    </a>
                )}
            </div>
            <div className="grid grid-cols-1 gap-6">
                {project.image_urls.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`${locale === 'ko' ? project.title_ko : project.title} - ${index + 1}`}
                        className="w-full rounded-lg"
                    />
                ))}
            </div>
        </article>
    );
} 