# Next.js 16 GitHub Pages Configuration

This document explains the Next.js 16 specific configuration for deploying to GitHub Pages.

## Next.js 16 Specific Features Used

### 1. Static Export (`output: 'export'`)
Next.js 16 supports static export which is required for GitHub Pages:
```typescript
output: 'export'
```
This generates a fully static site in the `out` directory.

### 2. Base Path Configuration
Next.js 16 handles basePath for subdirectory deployments:
```typescript
basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
```
- Empty string (`''`) for custom domain (wwcaps.org)
- Repository name (`'/wwcaps.org'`) for GitHub Pages subdomain

### 3. Asset Prefix (Next.js 16)
For static exports with basePath, assetPrefix ensures fonts and images load correctly:
```typescript
...(basePath && { assetPrefix: basePath })
```
This ensures all static assets (fonts from `next/font/google`, images, etc.) use the correct path.

### 4. Image Optimization (Next.js 16)
Next.js 16 requires `unoptimized: true` for static export:
```typescript
images: {
  unoptimized: true, // required for static export in next.js 16
}
```
The Image component still works, but images are served as-is without optimization.

### 5. Fonts (Next.js 16)
Next.js 16's `next/font/google` automatically handles:
- Self-hosting fonts at build time
- CSS variable generation
- Base path resolution

```typescript
import { Lora, Lato, Merriweather } from "next/font/google";

const lora = Lora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
```

Fonts are automatically optimized and included in the static export.

## How It Works

1. **Build Time**: Next.js 16 builds the static site with all assets
2. **Fonts**: `next/font/google` downloads and self-hosts fonts in `out/_next/static/media/`
3. **Images**: Images from `/public/images/` are copied to `out/images/`
4. **Base Path**: All asset paths are prefixed with basePath automatically
5. **Deployment**: The `out` directory is deployed to GitHub Pages

## Troubleshooting

### Images Not Loading
- Verify `basePath` is set correctly in the workflow
- Check that images are in `/public/images/` directory
- Ensure image paths start with `/` (e.g., `/images/photo.jpg`)

### Fonts Not Loading
- Next.js 16's `next/font/google` should handle this automatically
- Check browser console for 404 errors on font files
- Verify `assetPrefix` matches `basePath` in `next.config.ts`

### Assets 404 Errors
- Ensure `.nojekyll` file exists in `public/` directory
- Verify `basePath` matches your repository name
- Check that GitHub Pages is using "GitHub Actions" as source

## Next.js 16 vs Previous Versions

| Feature | Next.js 16 | Previous Versions |
|---------|-----------|-------------------|
| Static Export | `output: 'export'` | `next export` command |
| Fonts | `next/font/google` (automatic) | Manual font loading |
| Image Optimization | `unoptimized: true` required | Optional |
| Base Path | Automatic asset handling | Manual configuration needed |

## References

- [Next.js 16 Static Export](https://nextjs.org/docs/app/getting-started/deploying/static-exports)
- [Next.js 16 Font Optimization](https://nextjs.org/docs/app/getting-started/optimizing/fonts)
- [Next.js 16 Image Component](https://nextjs.org/docs/app/getting-started/optimizing/images)

