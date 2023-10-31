/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.neopets.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'items.jellyneo.net',
        port: '',
        pathname: '**',
      }
    ]
  }
}

module.exports = nextConfig
