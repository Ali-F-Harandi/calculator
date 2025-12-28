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
  // basePath: '/calculator', // Uncomment if deploying to a subfolder | اگر در زیرپوشه استفر می‌شود، از حالت注释 خارج کنید
  // assetPrefix: '/calculator', // Uncomment if deploying to a subfolder | اگر در زیرپوشه استفر می‌شود، از حالت注释 خارج کنید
  images: {
    unoptimized: true, // Required for static export | برای خروجی استاتیک مورد نیاز است
  },
  trailingSlash: true, // Better for GitHub Pages | بهتر برای GitHub Pages
};

export default nextConfig;
