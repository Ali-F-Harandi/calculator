import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // GitHub Pages configuration | تنظیمات GitHub Pages
  // basePath: '/calculator',
  // assetPrefix: '/calculator',
  images: {
    unoptimized: true, // Required for static export | برای خروجی استاتیک مورد نیاز است
  },
  trailingSlash: true, // Better for GitHub Pages | بهتر برای GitHub Pages
  // Build to /calculator subdirectory | ساخت در زیرپوشه /calculator
};

export default nextConfig;
