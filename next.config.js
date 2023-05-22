/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["fakestoreapi.com"],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
            port: '',
            pathname: '*',
          },
        ],
    }
}

module.exports = nextConfig
