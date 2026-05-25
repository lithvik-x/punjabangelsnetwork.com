import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/events' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.string().optional(),
    location: z.string().optional(),
    category: z.string().optional(),
    breadcrumb: z.string().optional(),
    image: z.string().optional(),
    status: z.string().optional(),
    venue: z.string().optional(),
  }),
});

const main = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { events, main };
