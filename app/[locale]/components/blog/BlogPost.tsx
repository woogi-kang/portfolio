'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import Image from 'next/image';

interface BlogPostProps {
    post: Tables<'blog_posts'>;
}

export default function BlogPost({ post }: BlogPostProps) {
    const locale = useLocale();
    const t = useTranslations('blog');

    return (
        <article className="container max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
            <Link 
                href="/blog" 
                className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {t('backToBlog')}
            </Link>

            <div className="space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {locale === 'ko' ? post.title_ko : post.title}
                </h1>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Tag className="w-4 h-4" />
                        <span>{post.category}</span>
                    </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
                    <Image
                        src={post.thumbnail_image_url}
                        alt={locale === 'ko' ? post.title_ko : post.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none">
                    {locale === 'ko' ? post.content_ko : post.content}
                </div>
            </div>
        </article>
    );
} 