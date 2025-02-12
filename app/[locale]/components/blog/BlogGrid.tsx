'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Tables } from '@/lib/supabase/types';
import { Link } from '@/config/navigation';
import EmptyState from '../shared/EmptyState';
import Image from 'next/image';
import { Clock, Tag } from 'lucide-react';

interface BlogGridProps {
    posts: Tables<'blog_posts'>[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    const locale = useLocale();
    const t = useTranslations('blog');

    if (!posts?.length) {
        return <EmptyState title={t('empty.title')} message={t('empty.message')} />;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {posts.map((post) => (
                <Link 
                    key={post.id} 
                    href={`/blog/${post.id}`}
                    className="group block overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                    <div className="aspect-video relative">
                        <Image
                            src={post.thumbnail_image_url || '/images/placeholder.jpg'}
                            alt={locale === 'ko' ? 
                                `${post.title_ko} 블로그 포스트 썸네일` : 
                                `Blog post thumbnail for ${post.title}`
                            }
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                            {locale === 'ko' ? post.title_ko : post.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mb-4 line-clamp-2">
                            {locale === 'ko' ? post.description_ko : post.description}
                        </p>
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
                    </div>
                </Link>
            ))}
        </div>
    );
} 