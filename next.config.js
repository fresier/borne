/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'monpsy.ulb.be',
        port: '',
        pathname: '/**',
      },
    ],
  },}

module.exports = nextConfig
