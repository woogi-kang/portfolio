'use client';

import { useTranslations } from 'next-intl';
import Loading from '../shared/Loading';

export default function LoadingSection({ type }: { type: 'projects' | 'posts' }) {
    const t = useTranslations('common');
    return <Loading text={t(`loading.${type}`)} />;
} 