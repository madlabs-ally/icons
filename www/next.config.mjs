/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/icons',       
  assetPrefix: '/icons/', 
};

export default nextConfig;
