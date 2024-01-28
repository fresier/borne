/** @type {import('next').NextConfig} */
const nextConfig = {images: {
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
