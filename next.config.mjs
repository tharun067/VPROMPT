/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: [
            'scontent.fhyd10-1.fna.fbcdn.net',
            'lh3.googleusercontent.com',
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config;
    },
};

export default nextConfig;
