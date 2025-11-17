# SEO Setup Guide for wwcaps.org

## Overview

This site has been optimized for search engines with a focus on ranking higher than the compromised westernwakecounseling.com site. The SEO strategy emphasizes:

1. **Technical Excellence**: Fast loading, secure, mobile-first
2. **Content Quality**: Comprehensive, keyword-rich, user-focused
3. **Local SEO**: Strong emphasis on Cary, Apex, and Triangle area
4. **Trust Signals**: Schema markup, security headers, professional credentials

## What's Already Implemented

### ✅ Technical SEO

1. **Metadata System**
   - Comprehensive meta tags in `app/layout.tsx`
   - Page-specific metadata in each route's `layout.tsx`
   - Keywords targeting local area and services
   - Open Graph and Twitter Card support

2. **Schema Markup** (`components/SEO.tsx`)
   - MedicalBusiness schema
   - LocalBusiness schema
   - Breadcrumb navigation schema
   - WebSite schema with SearchAction
   - All schemas include detailed location and service information

3. **Security & Performance** (`next.config.ts`)
   - Security headers (HSTS, X-Frame-Options, CSP-related)
   - Image optimization (WebP, AVIF)
   - Compression enabled
   - Removed "Powered by Next.js" header

4. **Sitemap & Robots**
   - Dynamic sitemap generation with priorities
   - robots.txt with proper directives
   - Custom priority for key pages (Home: 1.0, Services/About: 0.9)

5. **Mobile-First Design**
   - Responsive breakpoints
   - Touch-friendly buttons (min 44px)
   - Mobile-optimized navigation

6. **Accessibility**
   - Semantic HTML
   - ARIA labels
   - Skip-to-content link
   - Proper heading hierarchy
   - Alt text for all images

## What You Need to Do

### 🔴 Critical (Do Before Launch)

1. **Generate Favicons**
   - Use [RealFaviconGenerator](https://realfavicongenerator.net/)
   - Required files listed in DEPLOYMENT-CHECKLIST.md
   - Place in `/public` directory

2. **Create Open Graph Image**
   - Create `/public/images/og-image.jpg` (1200x630px)
   - Should include logo/branding and Dr. Moore's photo
   - Will appear when sharing on social media

3. **Add Google Search Console Verification**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property for wwcaps.org
   - Copy verification code
   - Update line 100 in `app/layout.tsx`

4. **Build and Test**
   ```bash
   npm run build
   npm start
   ```
   - Test all pages load correctly
   - Check browser console for errors
   - Verify favicon appears

### 🟡 Important (Do Within First Week)

1. **Submit to Search Engines**
   - Google Search Console: Submit sitemap
   - Bing Webmaster Tools: Add site and sitemap
   - Request indexing for main pages

2. **Update All Online Profiles**
   - Facebook, Instagram, LinkedIn, Twitter
   - Google Business Profile
   - Psychology Today listing
   - Insurance provider directories
   - Any other directories

3. **Set Up Analytics**
   - Google Analytics 4
   - Google Tag Manager (optional)
   - Set up conversion tracking

4. **Report Hacked Site**
   - [Google Safe Browsing](https://safebrowsing.google.com/safebrowsing/report_phish/)
   - Report westernwakecounseling.com as compromised

### 🟢 Ongoing (For Long-term Success)

1. **Build Local Citations**
   - Yelp for Business
   - Yellow Pages
   - Chamber of Commerce
   - Local health directories
   - Ensure NAP (Name, Address, Phone) consistency

2. **Get Quality Backlinks**
   - Professional associations
   - Health/psychology blogs
   - Local news features
   - Guest posts on reputable sites

3. **Encourage Reviews**
   - Google Business reviews
   - Facebook recommendations
   - Psychology Today reviews
   - Include review requests in follow-up emails

4. **Create Fresh Content**
   - Consider adding a blog
   - Mental health tips
   - Announcement of new services
   - Community involvement updates

## Keyword Strategy

### Primary Keywords (High Priority)
- `counseling cary nc`
- `psychologist apex nc`
- `therapy cary nc`
- `dr tammie moore`
- `western wake counseling`

### Secondary Keywords
- `anxiety therapy cary`
- `depression counseling apex`
- `couples therapy triangle area`
- `family counseling nc`
- `adhd testing cary`
- `trauma therapy north carolina`

### Long-tail Keywords
- `licensed psychologist cary north carolina`
- `marriage counseling apex nc`
- `child therapy triangle area`
- `anxiety treatment cary nc`

## Competitive Analysis

### The Challenge
- Old domain (westernwakecounseling.com) was compromised
- May have existing backlinks and domain authority
- Need to establish wwcaps.org as the legitimate site

### Strategy to Outrank
1. **Brand Signals**: Consistently use wwcaps.org everywhere
2. **Trust Building**: Schema markup, security, reviews
3. **Content Quality**: More comprehensive than competitor sites
4. **Technical Excellence**: Faster, more secure, better UX
5. **Local Dominance**: Strong local SEO signals

## Monitoring & Maintenance

### Weekly Checks
- Google Search Console for errors
- Uptime monitoring status
- Search rankings for primary keywords

### Monthly Tasks
- Review analytics
- Check for new reviews
- Update content if needed
- Monitor competitor sites

### Tools to Use
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Expected Timeline

### Week 1-2: Indexing
- Submit sitemap
- Request indexing
- Site appears in search results

### Month 1-3: Building Authority
- Get initial reviews
- Build local citations
- Update all profiles
- Start ranking for branded terms

### Month 3-6: Competitive Rankings
- Rank for local keywords
- Outrank compromised site
- Build backlink profile
- Establish domain authority

### Month 6-12: Market Leadership
- Top 3 for primary keywords
- Strong local pack presence
- Consistent review stream
- High conversion rate

## Technical Validation

Before going live, validate:

1. **Schema Markup**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Should show: Organization, LocalBusiness, WebSite

2. **Mobile Usability**
   - [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - Should pass with no issues

3. **Page Speed**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ on all metrics

4. **Security**
   - [Security Headers](https://securityheaders.com/)
   - Should get A or A+ rating

5. **Accessibility**
   - [WAVE Tool](https://wave.webaim.org/)
   - Should have no errors

## Contact & Support

For SEO questions or technical issues, refer to:
- Next.js documentation: https://nextjs.org/docs
- Google Search Central: https://developers.google.com/search
- Web.dev: https://web.dev/

## Notes

- The comprehensive schema markup helps Google understand the business
- Local keywords are emphasized throughout the site
- Security headers protect against future hacking attempts
- Mobile-first approach ensures good rankings in mobile search
- Fast loading times improve user experience and SEO
- Structured data helps with rich snippets in search results

