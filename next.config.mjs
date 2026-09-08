/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs.ekaya-spaces.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

