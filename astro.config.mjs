import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The canonical site URL and base path are configurable so that no domain or
// sub-path is assumed in code. A GitHub project site, for example, is served
// under a base path such as "/website" rather than at the origin root.
//   SITE_URL  e.g. https://jenolaszlo-sketch.github.io
//   BASE_PATH e.g. /website   (default "/")
const site = process.env.SITE_URL ?? 'https://penghou.pages.dev';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
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
