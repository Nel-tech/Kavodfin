/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kavodfin.com.ng',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/details'),
  ],
};
