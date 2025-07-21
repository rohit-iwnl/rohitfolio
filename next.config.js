/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'tsx', 'ts', 'jsx', 'js'],
  images:{
    remotePatterns:[{
      protocol: 'https',
      hostname:"cdn.sanity.io",
      port:"",
    }]
  },
  // Exclude components directory from being treated as pages
  experimental: {
    externalDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Don't treat component files as pages
        {
          source: '/components/:path*',
          destination: '/404',
        },
      ],
    }
  },
}

module.exports = nextConfig
