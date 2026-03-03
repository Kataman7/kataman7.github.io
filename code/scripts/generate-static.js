/**
 * Post-build SSG script
 * For each route defined in ssg-routes.js, copies dist/index.html into
 * dist/<route>/index.html so every URL has its own HTML file.
 * This lets GitHub Pages (and nginx) serve any route directly without 404.
 */

import { readFileSync, mkdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const sourceHtml = join(distDir, 'index.html');

// Import routes from ssg-routes.js
const { routes } = await import('../ssg-routes.js');

console.log(`\n🔧 SSG: generating static files for ${routes.length} routes...\n`);

for (const route of routes) {
  // Skip root, it's already index.html
  if (route === '/') continue;

  const routeDir = join(distDir, route);
  const destHtml = join(routeDir, 'index.html');

  mkdirSync(routeDir, { recursive: true });
  copyFileSync(sourceHtml, destHtml);
  console.log(`  ✔ ${route}/index.html`);
}

console.log('\n✅ SSG complete.\n');
