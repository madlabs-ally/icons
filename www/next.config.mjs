const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/icons' : '',
  assetPrefix: isProduction ? '/icons/' : '',
  images: {
    unoptimized: true,
  },
}
