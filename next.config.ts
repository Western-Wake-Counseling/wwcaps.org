import type { NextConfig } from "next";

// next.js 16 configuration for github pages static export
// for github pages: if using custom domain, set to '' or '/'
// if using github.io subdomain, set to '/your-repo-name'
// example: if repo is 'username/wwcaps.org', set to '/wwcaps.org'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // next.js 16: static export for github pages
  output: 'export',
  
  // next.js 16: basePath for github pages subdirectory
  basePath: basePath,
  
  // next.js 16: assetPrefix matches basePath for static assets (images, fonts, etc.)
  // only set if basePath is not empty to ensure proper asset loading
  ...(basePath && { assetPrefix: basePath }),
  
  // next.js 16: image optimization disabled for static export
  images: {
    unoptimized: true, // required for static export in next.js 16
    // formats and sizes are ignored when unoptimized: true, but kept for reference
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  compress: true,
  poweredByHeader: false,
  
  // next.js 16: headers() and redirects() don't work with static export
  // headers must be configured at the hosting level (github pages doesn't support custom headers)
  // redirects can be handled via _redirects file or client-side redirects
};

export default nextConfig;

