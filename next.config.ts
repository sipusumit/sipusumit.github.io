import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // <=== Enables static export
  images: {
    unoptimized: true, // <=== Required for GitHub Pages
  },
};

export default nextConfig;
