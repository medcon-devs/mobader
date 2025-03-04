import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // output:'standalone',
  // ignoreBuildErrors: true,
  // reactStrictMode: true,
  // swcMinify: true,
   trailingSlash: true,
  images: {
    unoptimized: true, // Disables image optimization (required for static export)
  },
  // basePath: '/mobader',
  // assetPrefix: '/mobader', 
  /* config options here */
  env: {
    baseURL: process.env.BASE_URL,
  },
   eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build
  },
};

export default nextConfig;
