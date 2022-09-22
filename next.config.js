/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ar.rdcpix.com", "ap.rdcpix.com"],
  },
};

module.exports = nextConfig;
