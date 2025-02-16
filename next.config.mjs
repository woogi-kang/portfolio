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
    },
    // Add performance optimizations
    poweredByHeader: false,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    // Cache optimization
    onDemandEntries: {
        maxInactiveAge: 25 * 1000,
        pagesBufferLength: 2,
    },
};

export default withNextIntl(nextConfig);
