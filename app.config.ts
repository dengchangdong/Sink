export default defineAppConfig({
  title: 'Pin',
  email: 'dengchangdong@gmail.com',
  github: 'https://github.com/dengchangdong/Sink',
  telegram: 'https://t.me/dengchangdong',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
