/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mafac.ulb.be",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
