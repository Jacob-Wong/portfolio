import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      tags: z.array(z.string()),
      role: z.string().optional(),
      repoUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),
      highlights: z.array(z.string()).optional(),
      draft: z.boolean().default(false),
      // Image optimization: use Astro's image() helper for automatic optimization
      cover: image().optional(),
      ogImage: image().optional(),
    }),
});

export const collections = {
  projects,
};

