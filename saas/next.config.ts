import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizeCss: true
  },
  compiler: {
    // Optional: Remove unused CSS
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ["error", "warn"],
    } : undefined,
  },
  webpack: (config) => {
    // Optimize CSS loading strategy
    return config;
  },
};

export default nextConfig;
