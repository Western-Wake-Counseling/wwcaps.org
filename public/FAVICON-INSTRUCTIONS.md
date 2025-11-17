# How to Generate Your Professional Favicon

## Current Status
I've created a temporary placeholder favicon (a gold "W" on black background) so you don't see the Next.js icon anymore.

## To Create Professional Favicons:

### Option 1: Use the Sunflower Image (Recommended)
1. Go to **[RealFaviconGenerator.net](https://realfavicongenerator.net/)**
2. Upload `/public/images/sunflower.jpg`
3. Configure the settings:
   - **iOS**: Keep sunflower as-is
   - **Android**: Add background color `#1a1a1a` or keep as-is
   - **Windows**: Choose a solid color or keep image
   - **macOS Safari**: Use solid color `#1a1a1a`
4. Click "Generate your Favicons and HTML code"
5. Download the favicon package
6. Extract ALL files to your `/public` folder (will overwrite favicon.svg)
7. The site will automatically use them

### Option 2: Create a Custom Logo First
If you want a text-based logo instead:

1. **Design a simple logo** (400x400px recommended):
   - Text: "WWCAPS" or "WWC" or just "W"
   - Colors: Gold (#d4a574) on Black (#1a1a1a) background
   - Font: Clean, professional (Lora or similar)
   - Tool: Canva, Figma, or even PowerPoint

2. **Export as PNG** (transparent or with background)

3. **Upload to [RealFaviconGenerator.net](https://realfavicongenerator.net/)**

4. **Download and extract** to `/public` folder

### Files You'll Get:
- `favicon.ico` (for browsers)
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png` (for iOS)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`
- `safari-pinned-tab.svg` (for Safari)
- `site.webmanifest` (can ignore, we have manifest.json)

### After Generating:
1. Place all files in `/public` folder
2. Delete this instruction file
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
4. The professional favicon will appear!

## Quick Fixes if Favicon Doesn't Update:
- Hard refresh: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
- Clear browser cache
- Try incognito/private window
- Restart dev server: `npm run dev`

