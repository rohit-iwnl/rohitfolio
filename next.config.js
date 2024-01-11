/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
