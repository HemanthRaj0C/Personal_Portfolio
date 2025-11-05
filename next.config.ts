import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // Allow builds to succeed even when TypeScript reports errors.
  // WARNING: this will let invalid/unsafe code ship to production — use only when necessary.
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint failing the production build. Lint during dev/CI instead.
  eslint: {
    ignoreDuringBuilds: true,
  },
} as NextConfig;

export default nextConfig;
