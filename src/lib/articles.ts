import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categoryOrder, type CategorySlug } from './categories';

export type ArticleEntry = CollectionEntry<'articles'>;

export const articlePath = (article: ArticleEntry) => `/${article.data.category}/${article.id}/`;

export const sortByDate = (a: ArticleEntry, b: ArticleEntry) =>
  b.data.pubDate.valueOf() - a.data.pubDate.valueOf();

export async function getAllArticles() {
  const articles = await getCollection('articles');
  const publishedCategories = new Set<string>(categoryOrder);
  return articles
    .filter((article) => publishedCategories.has(article.data.category))
    .sort(sortByDate);
}

export async function getFeaturedArticles(limit = 3) {
  const articles = await getAllArticles();
  return articles.filter((article) => article.data.featured).slice(0, limit);
}

export async function getArticlesByCategory(category: CategorySlug) {
  const articles = await getAllArticles();
  return articles.filter((article) => article.data.category === category);
}

export async function getRelatedArticles(article: ArticleEntry, limit = 3) {
  const articles = await getArticlesByCategory(article.data.category);
  return articles.filter((item) => item.id !== article.id).slice(0, limit);
}

export function getCategoryFor(article: ArticleEntry) {
  return categories[article.data.category];
}
