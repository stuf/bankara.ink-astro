import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// const blog = defineCollection({
//   // Load Markdown and MDX files in the `src/content/blog/` directory.
//   loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
//   // Type-check frontmatter using a schema
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     // Transform string to Date object
//     pubDate: z.coerce.date(),
//     updatedDate: z.coerce.date().optional(),
//     heroImage: z.string().optional(),
//   }),
// });

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
    }),
});

export const collections = { work };
