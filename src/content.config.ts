import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

// Load artists.json
const artistsCollection = defineCollection({
  loader: file("src/content/artists.json"),
});

// Load releases.json
const releasesCollection = defineCollection({
  loader: file("src/content/releases.json"),
});

export const collections = {
  artists: artistsCollection,
  releases: releasesCollection,
};
