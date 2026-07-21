// Content configuration for Astro
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const observations = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/observations",
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
});

export const collections = {
  observations,
  projects,
};