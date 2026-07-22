// src/content.config.js

import { defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const observations = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/observations",
  }),

  schema: z.object({
    title: z.string(),
    date: z.string(),
    type: z.string(),
    summary: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.string(),
      date: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()),
      featured: z.boolean().optional(),
      github: z.string().url().nullable().optional(),
      website: z.string().url().optional(),
      cover: image(),
    }),
});

const talks = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/talks",
  }),

  schema: z.object({
    title: z.string(),
    date: z.string(),
    venue: z.string(),
    location: z.string(),
    audience: z.string(),
    summary: z.string(),
    slides: z.string().optional(),
  }),
});

const site = defineCollection({
  loader: file("src/content/site.json"),

  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),

    navigation: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
      }),
    ),

    socialLinks: z.array(
      z.object({
        label: z.string(),
        href: z.string(),
        icon: z.enum([
          "github",
          "linkedin",
          "instagram",
          "email",
        ]),
      }),
    ),
  }),
});

export const collections = {
  observations,
  projects,
  talks,
  site,
};