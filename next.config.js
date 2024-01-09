/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images:{
    remotePatterns:[{
      protocol: 'https',
      hostname:"cdn.sanity.io",
      port:"",
    }]
  }
}

module.exports = nextConfig
