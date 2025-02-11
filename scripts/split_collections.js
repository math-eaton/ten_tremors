import fs from 'fs';
import path from 'path';

// Read the JSON master lists
const artists = JSON.parse(fs.readFileSync('./src/content/artists.json', 'utf-8'));
const releases = JSON.parse(fs.readFileSync('./src/content/releases.json', 'utf-8'));

// Define output directories
const artistsDir = './src/content/collections/artists';
const releasesDir = './src/content/collections/releases';

// Ensure directories exist
fs.mkdirSync(artistsDir, { recursive: true });
fs.mkdirSync(releasesDir, { recursive: true });

// Write individual JSON files for artists
artists.forEach(artist => {
  fs.writeFileSync(
    path.join(artistsDir, `${artist.slug}.json`),
    JSON.stringify(artist, null, 2)
  );
});

// Write individual JSON files for releases
releases.forEach(release => {
  fs.writeFileSync(
    path.join(releasesDir, `${release.slug}.json`),
    JSON.stringify(release, null, 2)
  );
});

console.log('✅ Content preprocessing complete!');
