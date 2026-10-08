/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // 👇 Very important: must be empty for root hosting
  basePath: "",
  assetPrefix: "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config, { dev }) {
    if (dev) {
      config.ignoreWarnings = [
        (warning) => warning.message.includes("Invalid DOM property"),
      ];
    }
    return config;
  },
};

module.exports = nextConfig;
