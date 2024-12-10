/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            pathname: '/**', // Pozwala na wszystkie ścieżki z Cloudinary
          },
        ],
      },
};

export default nextConfig;
