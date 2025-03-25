import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Your existing Next.js configuration
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
