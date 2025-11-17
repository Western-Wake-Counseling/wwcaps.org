# Deployment Checklist for wwcaps.org

## Pre-Deployment Tasks

### 1. Generate Favicon and Icon Assets

You need to create the following image files in the `/public` directory:

#### Required Favicon Files:
- **favicon.ico** (32x32 or multiple sizes)
- **favicon-16x16.png** (16x16)
- **favicon-32x32.png** (32x32)
- **apple-touch-icon.png** (180x180)
- **android-chrome-192x192.png** (192x192)
- **android-chrome-512x512.png** (512x512)
- **safari-pinned-tab.svg** (SVG monochrome icon)

#### How to Generate:
1. Use a tool like [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo or a professional image (use sunflower.jpg or create a WWCAPS logo)
3. Download the generated package
4. Place all files in the `/public` directory

### 2. Create Open Graph Image

Create **`/public/images/og-image.jpg`** (1200x630px):
- This image will be used when sharing your site on social media
- Should include your logo/name and a professional photo (Dr. Tammie or the office)
- Optimal size: 1200x630 pixels
- Include text overlay: "Western Wake Counseling - Dr. Tammie Moore, Licensed Psychologist"

You can use tools like:
- [Canva](https://www.canva.com/) (free templates for social media)
- Photoshop/GIMP
- [OGImage.xyz](https://www.ogimage.xyz/)

### 3. Create Logo Image

Create **`/public/images/logo.png`** (recommended: 400x400px or similar):
- Square or horizontal logo for the practice
- PNG format with transparency
- Will be used in schema markup and various places

### 4. Update Google Search Console Verification

In `app/layout.tsx`, line 100, replace:
```typescript
google: "add-your-google-verification-code-here",
```

With your actual Google Search Console verification code:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `https://wwcaps.org`
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag
5. Paste it in the layout.tsx file

### 5. Build and Test Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Test production build locally
npm start
```

### 6. Verify SEO Elements

Check the following with browser dev tools:
- [ ] All meta tags are present in `<head>`
- [ ] Structured data validates at [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Lighthouse SEO score is 90+
- [ ] All images have alt text
- [ ] Favicon appears in browser tab
- [ ] Open Graph image preview works on [OpenGraph.xyz](https://www.opengraph.xyz/)

### 7. Test sitemap.xml

After building:
```bash
# Generate sitemap
npm run postbuild
```

Verify `public/sitemap.xml` is created and contains all pages.

## Post-Deployment Tasks

### 1. Submit to Search Engines

#### Google:
1. [Google Search Console](https://search.google.com/search-console)
   - Add property for `https://wwcaps.org`
   - Submit sitemap: `https://wwcaps.org/sitemap.xml`
   - Request indexing for main pages

2. [Google Business Profile](https://www.google.com/business/)
   - Update business listing with new website URL
   - Verify the new domain

#### Bing:
1. [Bing Webmaster Tools](https://www.bing.com/webmasters)
   - Add site
   - Submit sitemap
   - Request indexing

### 2. Update Social Media Profiles

Update the website URL on:
- [ ] Facebook: https://www.facebook.com/DrTammieMoore/
- [ ] Instagram: https://www.instagram.com/westernwakecounseling/
- [ ] LinkedIn: https://www.linkedin.com/in/dr-tammie-moore-3bb3529/
- [ ] Twitter: https://twitter.com/drtammie45
- [ ] Psychology Today listing (if applicable)
- [ ] Insurance provider directories
- [ ] Any other professional directories

### 3. Set Up Analytics

#### Google Analytics 4:
1. Create GA4 property for wwcaps.org
2. Add tracking code to `app/layout.tsx` (or use Google Tag Manager)

#### Example Analytics Integration:
```typescript
// Add to app/layout.tsx in <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 4. Set Up Domain Monitoring

To protect against future hacking attempts:
- [ ] Enable 2FA on domain registrar
- [ ] Set up SSL certificate monitoring
- [ ] Enable DNSSEC if available
- [ ] Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
- [ ] Configure security headers (already done in next.config.ts)
- [ ] Set up Google Search Console alerts for security issues

### 5. Create 301 Redirects (if needed)

If you need to redirect specific pages from the old hacked site:

Add to `next.config.ts` redirects array:
```typescript
{
  source: '/old-page-path',
  destination: '/new-page-path',
  permanent: true,
},
```

### 6. Request Removal of Hacked Site from Search Results

1. **Google Search Console** (if you still have access to old domain):
   - Go to Security Issues
   - Request review after fixing or taking down the hacked site

2. **Report Phishing/Malware**:
   - [Google Safe Browsing Report](https://safebrowsing.google.com/safebrowsing/report_phish/)
   - Report the hacked westernwakecounseling.com site

3. **Legal/DMCA**:
   - If content was stolen, consider filing DMCA takedown notices
   - Contact hosting provider of hacked site

### 7. Build Brand Signals for wwcaps.org

To help wwcaps.org rank higher:
- [ ] Update all citations (NAP - Name, Address, Phone) across the web
- [ ] Get backlinks from reputable health/psychology directories
- [ ] Encourage patient reviews mentioning wwcaps.org
- [ ] Create content regularly (consider adding a blog)
- [ ] Register with health-specific directories (Psychology Today, Therapy Den, etc.)
- [ ] Local citations (Yelp, Yellow Pages, Chamber of Commerce)

## SEO Optimization Checklist

### Technical SEO ✅
- [x] Robots.txt configured
- [x] Sitemap.xml generated
- [x] Schema markup implemented (Organization, LocalBusiness, WebSite, Breadcrumb)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] Security headers (HSTS, X-Frame-Options, etc.)
- [x] SSL/HTTPS (ensure on hosting platform)
- [x] Mobile responsive design
- [x] Fast page load times
- [x] Image optimization (WebP, AVIF)
- [ ] Create favicon and icons (manual task)
- [ ] Create OG image (manual task)
- [ ] Add Google Search Console verification code

### On-Page SEO ✅
- [x] Descriptive page titles with keywords
- [x] Meta descriptions for all pages
- [x] Header hierarchy (H1, H2, H3)
- [x] Alt text for all images
- [x] Internal linking structure
- [x] Semantic HTML
- [x] Keyword optimization (counseling, psychologist, Cary, Apex, etc.)

### Local SEO ✅
- [x] NAP (Name, Address, Phone) consistency
- [x] Local keywords (Cary, Apex, Triangle area)
- [x] Google Maps embed
- [x] Schema markup with geo-coordinates
- [x] Area served markup
- [ ] Update Google Business Profile (manual task)
- [ ] Get local directory listings (manual task)

## Performance Checklist

Run these checks before deployment:

```bash
# Lighthouse test
npm run build
npx lighthouse https://localhost:3000 --view

# Check bundle size
npm run build
# Review .next/static output

# Test all pages
npm start
# Manually test: /, /about, /services, /forms, /schedule, /payment, /contact
```

Target Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Maintenance Tasks

### Weekly:
- [ ] Monitor Google Search Console for errors
- [ ] Check uptime monitoring reports
- [ ] Review analytics for traffic patterns

### Monthly:
- [ ] Review and respond to online reviews
- [ ] Update content if needed
- [ ] Check for broken links
- [ ] Review security alerts

### Quarterly:
- [ ] Run full SEO audit
- [ ] Update contact information if changed
- [ ] Review and update service descriptions
- [ ] Analyze competitor SEO strategies

## Emergency Contact

If the site gets compromised:
1. Immediately change all passwords
2. Review hosting security logs
3. Enable additional security measures
4. Contact hosting provider
5. Restore from backup if necessary
6. Report to Google Search Console

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev Lighthouse](https://web.dev/measure/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Structured Data Testing Tool](https://validator.schema.org/)

## Notes

- The old domain (westernwakecounseling.com) was hacked - ensure all references point to wwcaps.org
- Focus on building trust signals (reviews, citations, backlinks) for the new domain
- Monitor for any copycats or unauthorized use of Dr. Moore's name/credentials
- Consider setting up Google Alerts for "Western Wake Counseling" and "Dr. Tammie Moore"

