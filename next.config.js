const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            // Add your image domains here
            'example.com',
            'your-image-host.com'
        ],
    },
};

module.exports = withNextIntl(nextConfig); 