# Deploy to Cloudflare Pages

The site is a fully static Astro build, so Cloudflare Pages serves `dist/` directly. No Workers, bindings or server runtime are required.

## Build settings

| Setting | Value |
| --- | --- |
| Production branch | `main` (or `feature_20261124` while testing) |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (from `.nvmrc`) |

`wrangler.toml` pins the project name and output directory, so the same settings apply to dashboard builds and `wrangler pages deploy`.

## First-time setup

1. Push this repository to GitHub.
2. In the Cloudflare dashboard open **Workers & Pages → Create → Pages → Connect to Git**.
3. Authorize GitHub, select the `hellovres/google-ads` repository, then pick the branch.
4. Confirm the build settings above. Leave the root directory as `/`.
5. Under **Environment variables (production)** add:

   | Variable | Value |
   | --- | --- |
   | `PUBLIC_SITE_URL` | `https://chongqingfieldguide.com` |
   | `PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID, when available |
   | `PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console token, when available |
   | `PUBLIC_BING_SITE_VERIFICATION` | Bing token, when available |
   | `PUBLIC_ADSENSE_CLIENT` | `ca-pub-...`, when AdSense is approved |

   Leave a variable empty to omit the related script or meta tag from the build.
6. Save and deploy. Every push to the production branch rebuilds the site; other branches and pull requests get preview URLs.

## Custom domain and DNS

1. Add `chongqingfieldguide.com` under **Custom domains** on the Pages project.
2. If the domain's DNS is already hosted in Cloudflare, the `CNAME` record is created automatically. Otherwise point `chongqingfieldguide.com` and `www` at the `*.pages.dev` hostname.
3. Keep `PUBLIC_SITE_URL` on the canonical host so `sitemap-index.xml`, `robots.txt`, `rss.xml` and canonical tags stay consistent.

## Caching and security headers

`public/_headers` is copied into the build and served by Cloudflare:

- `/_astro/*` is immutable for one year, which is safe because Astro fingerprints asset filenames.
- HTML revalidates on every request so content updates appear immediately.
- `/images/*` caches for seven days.

## Direct upload (optional)

Without GitHub integration, or to deploy from a local machine:

```bash
npm run build
npx wrangler pages deploy dist --project-name chongqing-field-guide
```

The first run opens a browser for `wrangler login`, or accepts `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` for non-interactive CI.

## GitHub Actions alternative

Use GitHub Actions only when Cloudflare's Git integration is not desired. Store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets and deploy the built `dist/` with `cloudflare/wrangler-action`. Do not enable both paths at once, or each push deploys twice.
