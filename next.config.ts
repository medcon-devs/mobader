import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  /* config options here */
  env: {
    baseURL: process.env.BASE_URL,
  },
};

export default nextConfig;
