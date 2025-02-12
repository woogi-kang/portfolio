'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/config/navigation';  // Import from your navigation config
import ClientNavigation from './ClientNavigation';

export default function Navigation() {
    return <ClientNavigation />;
} 