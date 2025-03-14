import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/navigation';

export const getLocale = () => defaultLocale;

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'always',
  localeDetection: false,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 