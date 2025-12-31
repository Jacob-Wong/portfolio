import { defineCollection, z } from 'astro:content';

/**
 * Project types determine the layout and tone:
 * - side-project: Casual, personal projects (default) - uses ProjectLayout
 * - case-study: Detailed technical deep-dives - uses CaseStudyLayout
 * - experiment: Quick prototypes or learning exercises - uses ProjectLayout
 */
const projectTypeEnum = z.enum(['side-project', 'case-study', 'experiment']).default('side-project');

/**
 * Project status for transparency:
 * - completed: Done and working
 * - wip: Work in progress
 * - archived: No longer maintained
 * - experiment: Just playing around
 */
const statusEnum = z.enum(['completed', 'wip', 'archived', 'experiment']).optional();

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),

      // Project classification
      projectType: projectTypeEnum,
      status: statusEnum,
      timeSpent: z.string().optional(), // e.g., "A weekend", "2 months", "Ongoing"

      // Links
      repoUrl: z.string().url().optional(),
      liveUrl: z.string().url().optional(),

      // Case study specific (optional for side-projects)
      role: z.string().optional(),
      highlights: z.array(z.string()).optional(),

      // Image optimization
      cover: image().optional(),
      ogImage: image().optional(),
    }),
});

export const collections = {
  projects,
};

