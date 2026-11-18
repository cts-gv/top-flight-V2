# Top Flight Security

Static site built with [Astro](https://astro.build), deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run check     # type-check .astro + .ts files
```

Requires Node 22.23.4 or newer.

## Deploy to GitHub Pages

1. Push this project to the `main` branch of your GitHub repo.
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push (or run the workflow manually). The site goes live at `https://<user>.github.io/<repo>/`.

`SITE_URL` and `BASE_PATH` are filled in automatically by `.github/workflows/deploy.yml`, and drive
the canonical URL, Open Graph URLs, sitemap, robots.txt and all asset paths.

**Custom domain** (or a repo named `<user>.github.io`): add two repository *variables*
(Settings → Secrets and variables → Actions → Variables):

| Name        | Value                    |
| ----------- | ------------------------ |
| `SITE_URL`  | `https://yourdomain.com` |
| `BASE_PATH` | `/`                      |

Then set the domain under Settings → Pages.

## Changing phone / email

They are stored base64-encoded in `src/data/contact.ts` and only decoded when a visitor clicks.
In any browser console run `btoa("new value")` and paste the result. Don't add them in plain text
anywhere else (including structured data), or the click-to-reveal protection is defeated.

## Content

- Text, services, team, images: `src/data/siteConfig.ts`
- Section markup: `src/components/`
- Styles: `src/styles/global.css`
- Page-level SEO (title, description, Open Graph, JSON-LD): `src/layouts/Layout.astro`
- Social share image: `public/og-image.jpg` (1200×630)
- Hero video: `public/video.mp4`
- `src/assets/unused/` holds original artwork that isn't referenced by the site.
