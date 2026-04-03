/**
 * generate-rss.mjs — Builds /public/blog/feed.xml from blogPosts data.
 *
 * The script reads the blog post metadata (slugs, titles, descriptions,
 * dates) from the TypeScript source via a lightweight regex parser
 * (avoids needing ts-node or a build step).
 *
 * Run via:  node scripts/generate-rss.mjs
 * Or:       npm run rss
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const BLOG_DIR = resolve(ROOT, "public", "blog");
const FEED_PATH = resolve(BLOG_DIR, "feed.xml");
const POSTS_FILE = resolve(ROOT, "src", "data", "blogPosts.ts");
const SITE = "https://grandprixpal.com";

// ─── Extract posts from TS source ──────────────────────────

/**
 * Quick-n-dirty extractor: pulls slug, title, description, publishedAt,
 * and author from the blogPosts array without compiling TypeScript.
 */
async function extractPosts() {
  const src = await readFile(POSTS_FILE, "utf-8");

  const posts = [];
  // Match each object literal that has a slug field
  const slugRe = /slug:\s*"([^"]+)"/g;
  let m;
  while ((m = slugRe.exec(src)) !== null) {
    const pos = m.index;
    // Find the enclosing object start
    const blockStart = src.lastIndexOf("{", pos);
    // Find enough of the block to extract fields (next 1500 chars is plenty)
    const block = src.slice(blockStart, blockStart + 2000);

    const field = (name) => {
      const re = new RegExp(`${name}:\\s*"([^"]+)"`);
      return re.exec(block)?.[1] ?? "";
    };

    posts.push({
      slug: m[1],
      title: field("title"),
      description: field("description"),
      publishedAt: field("publishedAt"),
      author: field("author"),
    });
  }

  // Sort newest first
  posts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return posts;
}

// ─── Build RSS XML ─────────────────────────────────────────

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildRss(posts) {
  // Use the most recent post date instead of wall-clock time so the output
  // is deterministic — prevents merge conflicts when branches both regenerate.
  const now = posts.length > 0
    ? new Date(posts[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map(
      (p) => `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <description>${escapeXml(p.description)}</description>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <author>${escapeXml(p.author)}</author>
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Grand Prix Pal — Blog</title>
    <link>${SITE}/blog</link>
    <description>F1 2026 articles, analysis, travel tips, and fan guides from Grand Prix Pal.</description>
    <language>en</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;
}

// ─── Main ──────────────────────────────────────────────────

const posts = await extractPosts();
if (posts.length === 0) {
  console.log("⚠️  No blog posts found — skipping RSS feed generation");
  process.exit(0);
}

await mkdir(BLOG_DIR, { recursive: true });
await writeFile(FEED_PATH, buildRss(posts), "utf-8");
console.log(`✅ RSS feed generated: ${posts.length} posts → public/blog/feed.xml`);
