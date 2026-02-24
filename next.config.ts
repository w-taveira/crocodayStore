import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["github.com"],
  },

  reactCompiler: true,
};

export default nextConfig;
