import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const phraseSchema = z.object({
  chinese: z.string(),
  pinyin: z.string(),
  meaning: z.string(),
});

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['guides', 'attractions', 'food', 'itineraries', 'practical']),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  readingTime: z.number().int().positive(),
  heroImage: z.string(),
  heroAlt: z.string(),
  featured: z.boolean().default(false),
  quickFacts: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
  phrases: z.array(phraseSchema).optional(),
  photoSpots: z.array(z.object({ name: z.string(), note: z.string() })).default([]),
  faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  keywords: z.array(z.string()).default([]),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: articleSchema,
});

export const collections = { articles };

export type Article = z.infer<typeof articleSchema>;
export type Phrase = z.infer<typeof phraseSchema>;
