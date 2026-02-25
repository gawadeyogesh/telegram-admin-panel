/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: false, // ← Disable Turbopack – uses stable Webpack
  },
};

export default nextConfig;