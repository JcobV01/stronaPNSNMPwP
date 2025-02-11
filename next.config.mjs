/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'przybyslawice.diecezja.tarnow.pl',
        // USUŃ PORT Z KONFIGURACJI
        pathname: '/uploads/**',
      },
    ],
    // Dodaj to dla Next.js 14
    loader: 'default',
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
