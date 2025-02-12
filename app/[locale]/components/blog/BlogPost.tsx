'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import Image from 'next/image';

interface BlogPostProps {
    post: Tables<'blog_posts'>;
}

export default function BlogPost({ post }: BlogPostProps) {
    const locale = useLocale();
    const t = useTranslations('blog');

    return (
        <article className="container mx-auto px-6 py-16">
            <div className="mb-8">
                <Link href="/blog" className="text-green-400 hover:text-green-300 mb-8 inline-block">
                    ← {t('backToBlog')}
                </Link>
                <h1 className="text-4xl font-bold mb-4">
                    {locale === 'ko' ? post.title_ko : post.title}
                </h1>
                <div className="flex items-center text-gray-400 mb-8">
                    <span>{post.read_time}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                </div>
                <Image
                    src={post.thumbnail_image_url}
                    alt={locale === 'ko' ? post.title_ko : post.title}
                    width={1200}
                    height={675}
                    className="w-full aspect-video object-cover rounded-lg mb-8"
                />
                <div className="prose prose-invert max-w-none">
                    {locale === 'ko' ? post.content_ko : post.content}
                </div>
            </div>
        </article>
    );
} 