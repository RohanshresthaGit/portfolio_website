/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
