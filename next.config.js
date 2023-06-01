/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/productos",
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig
