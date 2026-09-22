/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 65, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs.ekaya-spaces.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/about-amora',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

