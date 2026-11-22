import type { APIRoute } from 'astro';
import { getAllArticles, articlePath } from '../lib/articles';
import { site } from '../lib/site';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const items = articles
    .map((article) => {
      const url = new URL(articlePath(article), site.url).toString();
      return `<item>
  <title>${escapeXml(article.data.title)}</title>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <description>${escapeXml(article.data.description)}</description>
  <pubDate>${article.data.pubDate.toUTCString()}</pubDate>
</item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(site.name)}</title>
  <link>${site.url}</link>
  <description>${escapeXml(site.description)}</description>
  <language>en</language>
  <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
