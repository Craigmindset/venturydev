/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Since we're not deploying to a root domain, we need to ensure assets load correctly
  assetPrefix: "./",
  basePath: "",
}

module.exports = nextConfig

