import type { NextConfig } from "next";

const nextConfig: NextConfig = {  
  trailingSlash: true,
  reactStrictMode: false,
  // If you're using any dynamic routes or API routes, you might need to add:
  skipTrailingSlashRedirect: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
