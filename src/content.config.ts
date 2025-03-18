import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


// Artists
const artistsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artists" }),
  schema: z.object({
    name: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    discography: z.array(z.string()),
    website: z.string().optional(),
  }),
});

// Releases
const releasesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/releases" }),
  schema: ({ image }) => z.object({
    id: z.string().default(""), // computed
    title: z.string(),
    artistId: z.string().nullable(),
    catalogNo: z.string(),
    cover: image().optional(), // Astro’s native helper!
    coverAlt: z.string().optional(),
    releaseDate: z.date(),
    ffo: z.array(z.string()).optional(),
    streamingLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string(),
      })
    ).optional(),
  }).transform((entry) => ({
    ...entry,
    id: entry.id || entry.catalogNo,
    cover: entry.cover || `./${entry.catalogNo}.png`,
  })),
});

// Artefacts
const artefactsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artefacts" }),
  schema: z.object({
    item: z.string(),
    catalogNo: z.string(), // Links to a release
    cover: z.string(),
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
    cover: z.string(),
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
    cover: z.string(),
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
