import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public are always allowed
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
