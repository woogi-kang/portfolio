import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ko'] as const;
export const defaultLocale = 'ko' as const;

export const { Link, useRouter, usePathname, redirect } = createSharedPathnamesNavigation({
    locales
}); 