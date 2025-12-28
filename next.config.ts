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
  // NO basePath or assetPrefix - deploy directly to root | بدون basePath یا assetPrefix - استقرار مستقیم به روت
  // Build output goes to out/ directory | خروجی build به پوشه out/
  // GitHub Pages automatically deploys from out/ | GitHub Pages خودکار از out/ استقرار می‌کنه
  images: {
    unoptimized: true, // Required for static export | برای خروجی استاتیک مورد نیاز است
  },
  trailingSlash: true, // Better for GitHub Pages | بهتر برای GitHub Pages
};

export default nextConfig;
