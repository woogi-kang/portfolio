'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';

interface RecentBlogsProps {
    posts: Tables<'blog_posts'>[];
}

export default function RecentBlogs({ posts }: RecentBlogsProps) {
    const locale = useLocale();
    const t = useTranslations('blog');

    if (!posts?.length) {
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
                <Link href="/blog" className="text-green-400 hover:text-green-300">
                    {t('recent.viewAll')}
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.slice(0, 4).map((post) => (
                    <Link key={post.id} href={`/blog/${post.id}`}>
                        <article className="group hover:bg-white/5 rounded-lg p-4 transition-colors">
                            <Image
                                src={post.thumbnail_image_url}
                                alt={locale === 'ko' ? post.title_ko : post.title}
                                width={800}
                                height={450}
                                className="w-full aspect-video object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                                {locale === 'ko' ? post.title_ko : post.title}
                            </h3>
                            <p className="text-gray-400 mb-4">
                                {locale === 'ko' ? post.description_ko : post.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                                <span>{post.read_time}</span>
                                <span className="mx-2">•</span>
                                <span>{post.category}</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
} 