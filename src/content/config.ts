import { defineCollection, z } from 'astro:content';

/**
 * PROJECT TYPE - Determines layout and expected content depth
 *
 * "side-project" (default)
 *   → Uses casual ProjectLayout (no TOC)
 *   → For: Personal projects, tools you built, apps, libraries
 *   → Tone: "Here's a thing I made"
 *   → Example: A CLI tool, a browser extension, a personal app
 *
 * "case-study"
 *   → Uses formal CaseStudyLayout (with TOC)
 *   → For: Deep technical write-ups, professional work (if shareable)
 *   → Tone: "Here's how we solved a complex problem"
 *   → Example: System design, architecture decisions, scaling challenges
 *
 * "experiment"
 *   → Uses casual ProjectLayout (no TOC)
 *   → For: Learning projects, prototypes, "I wanted to try X"
 *   → Tone: "I was curious about X, here's what I learned"
 *   → Example: Playing with a new framework, exploring an API, weekend hack
 */
const projectTypeEnum = z.enum(['side-project', 'case-study', 'experiment']).default('side-project');

/**
 * STATUS - Current state of the project (optional, shown as badge)
 *
 * "completed" → Done and working (green badge: ✓)
 * "wip"       → Work in progress, actively building (yellow badge)
 * "archived"  → No longer maintained, but still exists (gray badge)
 *
 * Leave empty if you don't want a status badge displayed.
 */
const statusEnum = z.enum(['completed', 'wip', 'archived']).optional();

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

