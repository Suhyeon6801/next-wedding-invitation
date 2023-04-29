require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  compiler: {
    emotion: true
  },
  env: {
    KAKAO_API_KEY: process.env.KAKAO_API_KEY,
  },
}
