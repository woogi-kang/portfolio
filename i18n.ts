import {getRequestConfig} from 'next-intl/server';
import {locales} from './config/navigation';

export default getRequestConfig(async ({locale}) => {
  // Ensure locale is always defined
  const resolvedLocale = locale || 'ko';

  return {
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
    locale: resolvedLocale, // Explicitly return the locale
    timeZone: 'Asia/Seoul',
    now: new Date()
  };
}); 