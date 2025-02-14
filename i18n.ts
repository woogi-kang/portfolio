import {getRequestConfig} from 'next-intl/server';
import {locales} from './config/navigation';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) {
    locale = 'ko'; // Default to Korean if invalid
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
    locale: locale,
    timeZone: 'Asia/Seoul',
    now: new Date()
  };
}); 