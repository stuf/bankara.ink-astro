import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: image(),
      tags: z.array(z.string()).optional(),
      related: z.array(z.string()).optional(),
      tw: z.boolean().optional(),
      hideContent: z.boolean().optional(),
      hideEntry: z.boolean().optional(),
    }),
});

const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      flags: z
        .object({
          published: z.boolean(),
        })
        .partial()
        .optional(),
    }),
});

export const collections = { work, journal };
