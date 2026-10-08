import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const evidenceLink = z.object({
  label: z.string(),
  url: z.string().url(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    slug: z.string().optional(),
    tagline: z.string().max(120),
    summary: z.string().max(280),
    status: z.enum([
      'experimental',
      'prototype',
      'preview',
      'stable',
      'parked',
    ]),
    category: z.enum([
      'core-execution',
      'planning',
      'authority-sandbox',
      'model-access',
      'evidence-memory',
      'supporting',
      'parked',
    ]),
    repository: z.string().url().optional(),
    packages: z.array(z.string()).default([]),
    version: z.string().optional(),
    evidence: z.array(evidenceLink).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    projects: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    evidence: z.array(evidenceLink).default([]),
    draft: z.boolean().default(false),
  }),
});

const milestones = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/milestones' }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    summary: z.string().optional(),
    projects: z.array(z.string()).default([]),
    category: z.string().optional(),
    evidence: z.array(evidenceLink).default([]),
    draft: z.boolean().default(false),
  }),
});

const philosophy = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/philosophy' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const evidence = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/evidence' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['released', 'demonstrated', 'validated', 'planned']),
    category: z.string().optional(),
    summary: z.string(),
    projects: z.array(z.string()).default([]),
    links: z.array(evidenceLink).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  journal,
  milestones,
  philosophy,
  evidence,
};
