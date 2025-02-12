'use client';

import { useTranslations } from 'next-intl';

interface LoadingProps {
    text?: string;
}

export default function Loading({ text }: LoadingProps) {
    const t = useTranslations('common');
    
    return (
        <div className="flex flex-col items-center justify-center py-12 space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
            <p className="text-gray-400">{text || t('loading')}</p>
        </div>
    );
} 