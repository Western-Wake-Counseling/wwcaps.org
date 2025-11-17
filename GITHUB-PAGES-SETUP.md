# GitHub Pages Deployment Setup

This guide will help you deploy your Next.js 16 app to GitHub Pages.

<!-- Updated workflow to use yarn instead of npm -->

## Prerequisites

- Your code is pushed to a GitHub repository
- You have admin access to the repository

## Setup Steps

### 1. Configure Base Path

The `basePath` setting depends on how you're hosting:

#### Option A: Using GitHub Pages Subdomain (username.github.io/repo-name)
- The workflow automatically sets the basePath to your repository name
- No additional configuration needed
- Your site will be available at: `https://western-wake-counseling.github.io/wwcaps.org/`
- The basePath is automatically set to `/wwcaps.org` during build

#### Option B: Using Custom Domain (wwcaps.org)
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `NEXT_PUBLIC_BASE_PATH`
5. Value: (leave empty or set to `/`)
6. Click **Add secret**

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Push Your Code

The deployment will automatically trigger when you push to the `main` or `master` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy Next.js to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-5 minutes)
4. Once complete, your site will be live!

## Custom Domain Setup (Optional)

If you want to use your custom domain (wwcaps.org):

1. **Set up the basePath secret** (see Option B above)
2. **Add CNAME file** to your `public` directory:
   ```
   wwcaps.org
   ```
3. **Configure DNS**:
   - Add a CNAME record pointing to `your-username.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
4. **Enable custom domain in GitHub**:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter `wwcaps.org`
   - Check **Enforce HTTPS**

## Important Notes

### Static Export Limitations

Since GitHub Pages only serves static files:

- ✅ All pages are pre-rendered at build time
- ✅ Client-side features work normally
- ❌ API routes won't work (you don't have any, so this is fine)
- ❌ Server-side rendering at request time won't work
- ❌ Custom HTTP headers won't work (GitHub Pages doesn't support them)
- ❌ Server-side redirects won't work (use client-side redirects or `_redirects` file)

### Image Optimization

Images are set to `unoptimized: true` for static export. This means:
- Images won't be automatically optimized by Next.js
- Consider optimizing images manually before adding them to the project
- The site will still work fine, just with larger image files

### Build Output

The build creates an `out` directory with all static files. This is automatically deployed to GitHub Pages.

## Troubleshooting

### Build Fails

1. Check the **Actions** tab for error messages
2. Ensure all dependencies are in `package.json`
3. Try building locally: `npm run build`

### Site Shows 404 or Blank Page

1. Check that the `basePath` is set correctly
2. Verify GitHub Pages is enabled and using GitHub Actions as the source
3. Check the deployment logs in the Actions tab

### Assets Not Loading

1. Ensure `basePath` matches your repository name (if using subdomain)
2. Check browser console for 404 errors
3. Verify `.nojekyll` file exists in `public` directory

### Custom Domain Not Working

1. Wait 24-48 hours for DNS propagation
2. Verify DNS records are correct
3. Check that CNAME file is in the `public` directory
4. Ensure custom domain is enabled in GitHub Pages settings

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# set basePath if needed
export NEXT_PUBLIC_BASE_PATH="/your-repo-name"

# build the site
npm run build

# the output will be in the 'out' directory
# you can then push the 'out' directory to the gh-pages branch
```

## Next Steps

After deployment:

1. ✅ Test all pages on the live site
2. ✅ Verify images load correctly
3. ✅ Check mobile responsiveness
4. ✅ Test forms and interactive features
5. ✅ Submit sitemap to search engines (see DEPLOYMENT-CHECKLIST.md)

## Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/getting-started/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

