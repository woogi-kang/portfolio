/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
    images: {
        domains: [
            // Add your image domains here
            'example.com',
            'your-image-host.com'
        ],
    },
}); 