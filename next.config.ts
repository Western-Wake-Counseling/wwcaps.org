import type { NextConfig } from "next";

// for github pages: if using custom domain, set to '' or '/'
// if using github.io subdomain, set to '/your-repo-name'
// example: if repo is 'username/wwcaps.org', set to '/wwcaps.org'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  images: {
    unoptimized: true, // required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  // note: headers() and redirects() don't work with static export
  // headers must be configured at the hosting level (github pages doesn't support custom headers)
  // redirects can be handled via _redirects file or client-side redirects
};

export default nextConfig;

