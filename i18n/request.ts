import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
  return {
    messages: (await import(`../messages/ko.json`)).default,
    timeZone: 'Asia/Seoul',
    now: new Date()
  };
}); 