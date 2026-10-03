import { MetadataRoute } from 'next'

/**
 * Search and AI crawlers we explicitly want reading (and citing) the site.
 * `*` already allows everyone; naming them is belt-and-braces, because some
 * crawlers (and some CDN "AI bot" filters) treat an explicit Allow as the
 * site owner's stated intent.
 *
 * NB: robots.txt cannot override a block at the edge. Cloudflare's
 * "Block AI bots" / Bot Fight Mode settings act before this file is read.
 * See docs/search-console-setup.md.
 */
const ALLOWED_CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'PerplexityBot',
  'Perplexity-User',
  'ClaudeBot',
  'Claude-User',
  'Google-Extended',
  'Applebot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...ALLOWED_CRAWLERS.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.fairwaypal.com/sitemap.xml',
  }
}
