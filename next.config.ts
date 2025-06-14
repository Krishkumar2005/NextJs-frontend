import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //configure images
  eslint: {
    // Ignore ESLint errors during builds (Vercel will succeed)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Still typecheck – don't disable this unless needed
    ignoreBuildErrors: false,
  },

  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"]
  }
};

export default nextConfig;
