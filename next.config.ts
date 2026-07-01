import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public are always allowed
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ]
  },
};

export default nextConfig;
