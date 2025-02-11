/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'przybyslawice.diecezja.tarnow.pl',
        pathname: '/uploads/**',
      },
      // Dodaj drugi wzorzec dla wersji bez portu
      {
        protocol: 'https',
        hostname: 'przybyslawice.diecezja.tarnow.pl',
        pathname: '**', // Zezwól na dowolne ścieżki
      }
    ],
    // Dodaj te nowe opcje z Next.js 14
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 3600,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Nowa opcja eksperymentalna dla Next.js 14
  experimental: {
    optimizeCss: true,
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
