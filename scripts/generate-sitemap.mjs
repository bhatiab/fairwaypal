/**
 * generate-sitemap.mjs
 *
 * Auto-generates public/sitemap.xml from the route registry below.
 * Run via:  node scripts/generate-sitemap.mjs
 *
 * HOW TO ADD A NEW PAGE:
 *   1. Add your <Route> in src/App.tsx
 *   2. Add an entry to the ROUTES array below
 *   3. Run `npm run sitemap` (or it runs automatically on `npm run build`)
 *
 * Routes with `sitemap: false` or dynamic params (e.g. /go/:slug) are excluded.
 */

import { writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SITEMAP_PATH = resolve(ROOT, "public", "sitemap.xml");
const SITE = "https://grandprixpal.com";

// ─── Generate XML ──────────────────────────────────────────

function buildSitemap(routes) {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

// ─── Main ──────────────────────────────────────────────────

const xml = buildSitemap(ROUTES);
await writeFile(SITEMAP_PATH, xml, "utf-8");

const count = ROUTES.length;
console.log(`✅ Sitemap generated: ${count} URLs → public/sitemap.xml`);
