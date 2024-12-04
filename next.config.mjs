/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/**', // Pozwala na wszystkie ścieżki z Cloudinary
          },
        ],
      },
};

export default nextConfig;
