import type { APIRoute } from 'astro';
import { getAllArticles, articlePath } from '../lib/articles';
import { getCategoryFor } from '../lib/articles';

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const body = articles.map((article) => ({
    title: article.data.title,
    description: article.data.description,
    categoryName: getCategoryFor(article).name,
    url: articlePath(article),
    keywords: article.data.keywords,
  }));

  return new Response(JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
