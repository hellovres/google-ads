# Deploy to Cloudflare Workers Static Assets

The site is a fully static Astro build, so Cloudflare Workers serves `dist/` as static assets. No Worker entry script, bindings or server runtime are required.

## Build settings

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node version | `22` (from `.nvmrc`) |

`wrangler.toml` declares `./dist` as the Workers assets directory. Do not also configure this repository as a Cloudflare Pages project, or each Git push can trigger two deployments.

If the build log reports `Missing entry-point to Worker script or to assets directory`, confirm that the Cloudflare project's deploy command is `npx wrangler deploy` and that the committed `wrangler.toml` contains the `[assets]` section shown above.

## First-time setup

1. Push this repository to GitHub.
2. In the Cloudflare dashboard open **Workers & Pages → Create → Worker → Connect to Git**.
3. Authorize GitHub, select the `hellovres/google-ads` repository, then choose the `main` branch.
4. Confirm the build settings above. Leave the root directory as `/`.
5. Under **Variables and Secrets** add:

   | Variable | Value |
   | --- | --- |
   | `PUBLIC_SITE_URL` | `https://chongqingfieldguide.com` |
   | `PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID, when available |
   | `PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console token, when available |
   | `PUBLIC_BING_SITE_VERIFICATION` | Bing token, when available |
   | `PUBLIC_ADSENSE_CLIENT` | `ca-pub-...`, when AdSense is approved |

   Leave a variable empty to omit the related script or meta tag from the build.
6. Save and deploy. Every push to `main` rebuilds the site.

## Custom domain and DNS

1. Add `chongqingfieldguide.com` under **Settings → Domains & Routes** on the Worker.
2. If the domain's DNS is already hosted in Cloudflare, the route can be attached from the same panel. Otherwise move the domain's nameservers to Cloudflare before adding a custom domain.
3. Keep `PUBLIC_SITE_URL` on the canonical host so `sitemap-index.xml`, `robots.txt`, `rss.xml` and canonical tags stay consistent.

## Caching and security headers

`public/_headers` is copied into the build and served by Cloudflare:

- `/_astro/*` is immutable for one year, which is safe because Astro fingerprints asset filenames.
- HTML revalidates on every request so content updates appear immediately.
- `/images/*` caches for seven days.

## Direct upload (optional)

Without Git integration, or to deploy from a local machine:

```bash
npm run build
npx wrangler deploy
```

The first run opens a browser for `wrangler login`, or accepts `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` for non-interactive CI.

## GitHub Actions alternative

Use GitHub Actions only when Cloudflare's Git integration is not desired. Store `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets and deploy with `cloudflare/wrangler-action` using `npx wrangler deploy`. Do not enable both paths at once, or each push deploys twice.
