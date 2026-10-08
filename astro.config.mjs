import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical site URL is configurable so no domain is assumed in code.
// Set SITE_URL in the build environment (Cloudflare Pages, CI, or locally).
const site = process.env.SITE_URL ?? 'https://penghou.pages.dev';

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
