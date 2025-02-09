import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Artists Collection (Markdown-based)
const artistsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/artists" }),
  schema: z.object({
    name: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    website: z.string().optional(),
  }),
});

// Releases Collection (Markdown-based)
const releasesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/releases" }),
  schema: z.object({
    title: z.string(),
    artist: z.string(),
    releaseDate: z.string(), // Keeping as string; can convert to Date in Astro
    cover: z.string(),
    description: z.string(),
    streamingLinks: z.array(z.object({ platform: z.string(), url: z.string() })).optional(),
  }),
});

// artefacts Collection (Markdown-based)
const artefactsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/artefacts" }),
  schema: z.object({
    name: z.string(),
    price: z.string(),
    image: z.string(),
    description: z.string(),
    purchaseLink: z.string(),
  }),
});

// Export collections
export const collections = {
  artists: artistsCollection,
  releases: releasesCollection,
  artefacts: artefactsCollection,
};
