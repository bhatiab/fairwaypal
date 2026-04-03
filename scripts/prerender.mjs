/**
 * prerender.mjs — Static pre-rendering for SEO
 *
 * Renders every public route with a headless browser so non-JS crawlers
 * receive fully-populated HTML instead of an empty SPA shell.
 *
 * Run via:  npm run prerender          (after `npm run build`)
 * Or:       npm run build:production   (builds ▸ sitemap ▸ AMP ▸ prerender)
 */

import puppeteer from "puppeteer";
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "./routes.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");
const PORT = 45678;
const CONCURRENCY = 5;

// ─── Lightweight static file server (SPA fallback) ─────────

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

async function startServer(spaHtml) {
  return new Promise((res) => {
    const server = createServer(async (req, reply) => {
      const url = new URL(req.url, `http://localhost:${PORT}`);
      const filePath = join(DIST, decodeURIComponent(url.pathname));

      // Try to serve the exact static file first
      const ext = extname(filePath);
      if (ext && ext !== ".html") {
        try {
          const data = await readFile(filePath);
          reply.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
          reply.end(data);
          return;
        } catch {
          // fall through to SPA fallback
        }
      }

      // SPA fallback – always serve the *original* index.html shell
      reply.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      reply.end(spaHtml);
    });

    server.listen(PORT, "127.0.0.1", () => res(server));
  });
}

// ─── Prerender one route ───────────────────────────────────

async function renderRoute(browser, route) {
  const page = await browser.newPage();

  // Block heavy resources that don't affect HTML content
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const type = req.resourceType();
    if (["image", "media", "font"].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  await page.goto(`http://127.0.0.1:${PORT}${route}`, {
    waitUntil: "networkidle0",
    timeout: 30_000,
  });

  // Give React one extra tick to settle (setTimeout/rAF callbacks)
  await page.evaluate(() => new Promise((r) => setTimeout(r, 200)));

  const html = await page.content();
  await page.close();

  // Write to dist/<route>/index.html  (root → dist/index.html)
  const outDir = route === "/" ? DIST : join(DIST, ...route.slice(1).split("/"));
  await mkdir(outDir, { recursive: true });
  await writeFile(join(outDir, "index.html"), html, "utf-8");
}

// ─── Concurrent runner ─────────────────────────────────────

async function runBatch(browser, routes) {
  let idx = 0;
  let success = 0;
  let failed = 0;

  async function next() {
    while (idx < routes.length) {
      const route = routes[idx++];
      try {
        await renderRoute(browser, route);
        success++;
        console.log(`  ✅  ${route}`);
      } catch (err) {
        failed++;
        console.error(`  ❌  ${route} — ${err.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => next()));
  return { success, failed };
}

// ─── Main ──────────────────────────────────────────────────

async function main() {
  console.log("🔍 Pre-rendering routes…\n");

  // Read the original SPA shell before we start overwriting files
  const spaHtml = await readFile(join(DIST, "index.html"), "utf-8");

  const server = await startServer(spaHtml);
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const paths = ROUTES.map((r) => r.path);
  const { success, failed } = await runBatch(browser, paths);

  await browser.close();
  server.close();

  console.log(`\n🏁 Pre-render complete: ${success} OK, ${failed} failed (${paths.length} total)`);
  if (failed > 0) process.exit(1);
}

main();
