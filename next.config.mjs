/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'przybyslawice.diecezja.tarnow.pl',
        port: '4242',
        pathname: '/uploads/**'
      },
    ],
  },
};

export default nextConfig;
