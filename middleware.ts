import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/navigation';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
});

// only match routes that don't start with: api, _next, _vercel, static files like favicon.ico, etc.
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 