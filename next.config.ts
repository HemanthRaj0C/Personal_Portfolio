import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // Allow builds to succeed even when TypeScript reports errors.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
