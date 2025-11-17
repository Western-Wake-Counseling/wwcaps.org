/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wwcaps.org',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // custom priority and changefreq for specific pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/about': { priority: 0.9, changefreq: 'monthly' },
      '/services': { priority: 0.9, changefreq: 'monthly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' },
      '/schedule': { priority: 0.8, changefreq: 'monthly' },
      '/forms': { priority: 0.7, changefreq: 'monthly' },
      '/payment': { priority: 0.7, changefreq: 'monthly' },
    };

    return {
      loc: path,
      changefreq: customConfig[path]?.changefreq || config.changefreq,
      priority: customConfig[path]?.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
};

