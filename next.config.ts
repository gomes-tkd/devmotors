import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
      qualities: [75, 100],
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'cdn.cosmicjs.com',
          },
      ]
  }
};

export default nextConfig;
