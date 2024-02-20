/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Added to make Image/next accepts direct links
  images: {
    domains: ["image.tmdb.org"],
  },
  experimental: {
    serverActions: true,
  },
};

const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");

module.exports = withNextIntl(nextConfig);
