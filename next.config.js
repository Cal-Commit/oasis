/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  async redirects() {
    return [
      {
        source: '/submission',
        destination: 'https://forms.gle/FVJZxKM79Y2RaNzT7',
        permanent: true,
      },
    ]
  }
}
