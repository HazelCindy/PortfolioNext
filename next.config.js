/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/scss")],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};

module.exports = nextConfig;
