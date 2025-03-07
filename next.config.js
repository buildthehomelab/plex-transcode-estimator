/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // GitHub Pages needs a custom domain or we need to use a basename
  // In the format: '/repository-name'
  // Remove this if you're using a custom domain
  basePath: process.env.EXPORT_MODE ? '/plex-transcode-estimator' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
