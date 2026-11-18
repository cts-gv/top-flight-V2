// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH are set automatically by the GitHub Actions workflow
// (.github/workflows/deploy.yml). Locally they fall back to the dev defaults below.
//
//   Project site  (https://USER.github.io/REPO/)  -> BASE_PATH=/REPO
//   Custom domain (https://example.com/)          -> SITE_URL=https://example.com  BASE_PATH=/
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: {
    // Keep scripts in their own .js file instead of inlining them into the HTML
    build: { assetsInlineLimit: 0 },
  },
});
