'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectDetailProps {
    project: Tables<'projects'>;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
    const locale = useLocale();
    const t = useTranslations('projects');

    return (
        <article className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 mt-12 sm:mt-16 md:mt-20">
            <Link 
                href="/projects" 
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {t('backToProjects')}
            </Link>

            <div className="space-y-12">
                {/* Header */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                            {locale === 'ko' ? project.title_ko : project.title}
                        </h1>
                        <div className="flex flex-wrap gap-x-8 gap-y-2 text-gray-400">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">{t('period')}:</span>
                                <span>{project.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">{t('role')}:</span>
                                <span>{locale === 'ko' ? project.role_ko : project.role}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-500">{t('company')}:</span>
                                <span>{locale === 'ko' ? project.company_ko : project.company}</span>
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-lg text-gray-300">
                        {locale === 'ko' ? project.summary_ko : project.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                        {project.live_url && (
                            <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 
                                    text-black px-6 py-2.5 rounded-lg font-medium transition-colors"
                            >
                                {t('viewLive')}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {project.github_url && (
                            <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 
                                    text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                        {project.image_urls.map((url, index) => (
                            <div key={index} 
                                className="relative flex-none w-[300px] h-auto rounded-lg overflow-hidden bg-white/5 
                                    hover:opacity-90 transition-opacity"
                            >
                                <Image
                                    src={url}
                                    alt={`${locale === 'ko' ? project.title_ko : project.title} - View ${index + 1}`}
                                    width={300}
                                    height={600}
                                    className="w-full h-auto"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Architecture & Features Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Architecture */}
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold">{t('architecture')}</h2>
                                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                                    <ul className="space-y-2">
                                        {(locale === 'ko' ? 
                                            project.architecture_ko : project.architecture)
                                            .split(',')
                                            .map((line, i) => (
                                                <li key={i} className="flex items-start text-sm text-gray-300">
                                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500/50" />
                                                    {line.trim()}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Key Features */}
                            <section className="space-y-4">
                                <h2 className="text-xl font-bold">{t('features')}</h2>
                                <div className="space-y-3">
                                    {project.key_features.map((feature, index) => (
                                        <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                            <ul className="space-y-2">
                                                {(locale === 'ko' ? feature.items_ko : feature.items).map((item, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500/50" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Technical Challenges Section */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">{t('challenges')}</h2>
                            <div className="space-y-4">
                                {project.technical_challenges.map((challenge, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <h3 className="font-medium text-green-400 mb-4">
                                            {locale === 'ko' ? challenge.title_ko : challenge.title}
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="p-3 rounded-md bg-black/30">
                                                <p className="text-sm text-red-400 mb-2">{t('problem')}:</p>
                                                <p className="text-sm text-gray-300">
                                                    {locale === 'ko' ? challenge.problem_ko : challenge.problem}
                                                </p>
                                            </div>
                                            <div className="p-3 rounded-md bg-black/30">
                                                <p className="text-sm text-green-400 mb-2">{t('solution')}:</p>
                                                <p className="text-sm text-gray-300">
                                                    {locale === 'ko' ? challenge.solution_ko : challenge.solution}
                                                </p>
                                            </div>
                                            <ul className="space-y-2">
                                                {(locale === 'ko' ? challenge.details_ko : challenge.details).map((detail, i) => (
                                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500/50" />
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">{t('techStack')}</h2>
                            <div className="space-y-4">
                                {project.tech_stack.map((tech, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <h3 className="text-sm font-medium text-gray-400 mb-3">{tech.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.items.map((item) => (
                                                <span 
                                                    key={item}
                                                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Libraries Used */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">{t('libraries')}</h2>
                            <div className="space-y-2">
                                {project.libraries_used.map((lib, index) => (
                                    <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                                        <h3 className="font-medium text-green-400 mb-2">{lib.name}</h3>
                                        <p className="text-sm text-gray-300">
                                            {locale === 'ko' ? lib.description_ko : lib.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
} 