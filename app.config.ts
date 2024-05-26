export default defineAppConfig({
  title: 'Pin',
  description: 'A Simple / Speedy / Secrue Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://pin.ci/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
