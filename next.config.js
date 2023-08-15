/** @type {import('next').NextConfig} */
const { withGrafbase } = require("@grafbase/nextjs-plugin");

const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["graphql-request"],
  },

  withGrafbase: {
    reactStrictMode: true,
    swcMinify: true,
  },
};

module.exports = nextConfig;
