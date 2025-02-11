import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

// Load artists.json
const artistsCollection = defineCollection({
  loader: file("src/content/collections/artists.json"),
});

// Load releases.json
const releasesCollection = defineCollection({
  loader: file("src/content/collections/releases.json"),
});

// Load artefacts.json
const artefactsCollection = defineCollection({
  loader: file("src/content/collections/artefacts.json"),
});


export const collections = {
  artists: artistsCollection,
  releases: releasesCollection,
  artefacts: artefactsCollection,
};
