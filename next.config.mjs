/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'przybyslawice.diecezja.tarnow.pl',
      },
    ],
  },
};

export default nextConfig;
