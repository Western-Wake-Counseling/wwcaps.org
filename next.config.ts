import type { NextConfig } from "next";

// next.js 16 configuration for github pages static export
// for github pages: if using custom domain (wwcaps.org), leave NEXT_PUBLIC_BASE_PATH empty
// if using github.io subdomain, set NEXT_PUBLIC_BASE_PATH to '/your-repo-name' (e.g. '/wwcaps.org')
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  // next.js 16: static export for github pages
  output: 'export',
  
  // next.js 16: basePath for github pages subdirectory
  // this automatically handles all asset paths including images and fonts
  basePath: basePath,

  // ensure static assets (including fonts) use the same base path when exported
  ...(basePath && { assetPrefix: basePath }),
  
  // next.js 16: image optimization disabled for static export
  images: {
    unoptimized: true, // required for static export in next.js 16
    // basePath is automatically handled by Next.js Image component
    // but we need to ensure NEXT_PUBLIC_BASE_PATH is available at build time
  },
  
  compress: true,
  poweredByHeader: false,
  
  // next.js 16: headers() and redirects() don't work with static export
  // headers must be configured at the hosting level (github pages doesn't support custom headers)
  // redirects can be handled via _redirects file or client-side redirects
};

export default nextConfig;

