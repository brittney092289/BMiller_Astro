// Content configuration for Astro
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
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

export const collections = {
  observations,
  projects,
  talks,
};