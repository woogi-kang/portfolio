import path from 'path';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        serverActions: true
    },
    images: {
        domains: ['your-image-domain.com'], // Add your image domain here
    }
};

export default withNextIntl(nextConfig);
