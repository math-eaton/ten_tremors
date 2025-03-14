import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


// Artists
const artistsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artists" }),
  schema: z.object({
    name: z.string(),
    cover: image(),
    coverAlt: z.string(),
    discography: z.array(z.string()),
    website: z.string().optional(),
  }),
});

// Releases
const releasesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: z.object({
    title: z.string(),
    artistId: z.string().nullable(),
    catalogNo: z.string(),
    cover: image(),
    coverAlt: z.string(),
    releaseDate: z.date(),
    ffo: z.array(z.string()).optional(),
    streamingLinks: z.array(z.object({
      platform: z.string(),
      url: z.string(),
    })).optional(),
    // credits: z.array(z.object({
    //   music: z.string(),
    //   art: z.string(),
    //   mix: z.string(),
    // })),
  }),
});

// Artefacts
const artefactsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artefacts" }),
  schema: z.object({
    item: z.string(),
    catalogNo: z.string(), // Links to a release
    cover: image(),
    coverAlt: z.string(),
    format: z.string(),
    price: z.number(),
    stock: z.number().int(),
  }),
});

// Projects
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("ANONYMOUS"),
    cover: image(),
    coverAlt: z.string(),
    website: z.string(),
    // credits: z.array(z.object({
    //   a: z.string(),
    //   b: z.string(),
    //   c: z.string(),
    // })),
  }),
});

const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    event: z.string(),
    date: z.date(),
    location: z.string(),
    cover: image(),
    coverAlt: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  artists: artistsCollection,
  releases: releasesCollection,
  artefacts: artefactsCollection,
  projects: projectsCollection,
  events: eventsCollection,
};
