/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
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
  }
}

module.exports = nextConfig
