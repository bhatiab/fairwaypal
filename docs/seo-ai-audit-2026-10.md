# SEO + AI readability audit (October 2026)

Scope: every URL in `lib/routes.json` (70 URLs, the same list the sitemap uses).
Method: source audit, `npm run seo:check`, and a production build served
locally and fetched with Googlebot and ChatGPT-User user agents. The live site
was not reachable from the audit sandbox, so the edge checks in "Still to
verify" must be run by hand.

## Site-wide results

| Check | Result |
|---|---|
| `noindex` on a sitemap URL | None |
| Canonical points elsewhere | None. All are `https://www.fairwaypal.com/<route>` and match the sitemap |
| www / non-www mismatch | None in code. Sitemap, canonicals, JSON-LD and IndexNow all use `www` |
| Trailing-slash mismatch | None. Next.js default (no trailing slash) matches the sitemap |
| Redirect chains | Only `/calendar` → `/` and `/index` → `/` (single hop, neither is in the sitemap) |
| 404s in the sitemap | None. Every route resolves to a `page.tsx` (enforced by `seo:check` and `routes.test.ts`) |
| Orphans (no internal links) | None. Every post is in the `/blog` index. The weakest are January, September, father-son and 40th/50th, linked from 2 pages each plus the index |
| Thin pages | None. Lowest is 1,035 words of body text (`/destinations/pinehurst`) |
| Near-duplicates | None. The highest 5-word-shingle overlap is 22% (Pinehurst vs Pebble ↔ Pinehurst vs Bandon). Monthly posts are at most 14% (March ↔ November) |
| Middleware / bot challenge in code | No `middleware.ts`. `vercel.json` only sets the framework. The site deploys to Cloudflare Workers (`wrangler.jsonc`), so any challenge would come from Cloudflare dashboard settings, not code |

## Issues per URL (all fixed in this PR unless marked)

| URL(s) | Issue | Status |
|---|---|---|
| All 54 blog posts, 10 destinations, `/blog`, `/status`, 404 page | `<title>` had the brand twice (`… \| FairwayPal \| FairwayPal`, or `— FairwayPal \| FairwayPal`) | Fixed: page titles drop the suffix and the root template adds it once |
| `/`, `/about` | Title already contains the brand | Fixed: uses `title.absolute` |
| 51 blog posts + 4 destinations (Algarve, Florida, Kiawah, Pebble) | Visible FAQ answers were shorter rewrites of the FAQPage JSON-LD answers, so schema did not match the page | Fixed: the visible FAQ now renders from the same `faqSchema` object |
| All 10 destinations | BreadcrumbList position 2 ("Destinations") linked to the page itself, not `/destinations` | Fixed |
| All 10 destinations | TouristDestination had no `geo`, and its `description` did not match the visible intro | Fixed: added GeoCoordinates and made the description the visible intro text |
| All 10 destinations | No answer-first cheat sheet | Fixed: added cost, best time, top courses and partner rows, using only facts already on each page |
| All 10 destinations | No visible "Updated" date | Fixed: driven by `lib/content-dates.ts` (the same value as the sitemap `<lastmod>`) |
| All 54 blog posts | "Last updated" was a hand-typed string, separate from `dateModified` | Fixed: the byline renders `Updated <time>` from `articleSchema.dateModified` |
| Footer (every page) | "How to Plan a Golf Trip" linked to `/blog/golf-trip-with-non-golfers` | Fixed: now `/blog/how-to-plan-a-golf-trip`, with the non-golfers guide added as its own link |
| `/destinations/kiawah-island` ↔ `/blog/kiawah-island-golf-trip`, `/destinations/pebble-beach` ↔ `/blog/pebble-beach-golf-trip` | Two pages target the same "X golf trip" query (cannibalisation risk). The Kiawah pair shares 17% of text | Fixed in follow-up: kept the destination pages, merged the blogs' booking, cost and itinerary sections into them, and 301'd the blog URLs. PostHog had too little data to choose (0 and 0 views for Kiawah, 1 and 0 for Pebble), so the destination series was kept for consistency |
| `/blog/best-golf-destinations-march` | Title said "2026" after March 2026 had passed | Fixed in follow-up: content refreshed for 2027 (event dates, spring break, prices), then title and `dateModified` updated. October and November left as is |
| `src/components/ui/calendar.tsx` | Not the shadcn calendar. It was an unrelated F1 page with a dead `/new-era` link and was not imported anywhere | Deleted |

## Answer-first coverage

Every destination page now has a cheat sheet. Most blog posts already open with
a gold summary box, under labels like "The cheat sheet", "Quick Verdict", "The
honest take" or "The simple rule".

**These 10 posts had no summary box** (all from the first May 2026 batch). The
follow-up added a cheat sheet to 9 of them, using only facts already in each
post. `golf-trip-group-size` already opens with "The Short Answer", so it was
left alone:

- /blog/best-bachelor-party-golf-destinations
- /blog/golf-trip-budget
- /blog/golf-trip-group-size
- /blog/golf-trip-packing-list
- /blog/golf-trip-weekend-schedule
- /blog/golf-trip-with-non-golfers
- /blog/how-to-plan-a-golf-trip
- /blog/kiawah-island-golf-trip (since merged into /destinations/kiawah-island)
- /blog/pebble-beach-golf-trip (since merged into /destinations/pebble-beach)
- /blog/what-to-do-on-golf-trip-non-golfer

## Monthly "best golf destinations" series

| Month | Status |
|---|---|
| January, February, March, April | Live |
| May, June, July, August | **Missing**: outlines in `docs/drafts/monthly-guides-may-to-august.md` |
| September, October, November | Live |
| December | Live (published in the follow-up; sources cited in PR #31) |

## Still to verify on the live site (could not reach it from the sandbox)

```bash
for ua in Googlebot ChatGPT-User GPTBot PerplexityBot ClaudeBot; do
  for p in / /robots.txt /llms.txt /blog/best-golf-destinations-november; do
    printf "%-14s %-42s " "$ua" "$p"
    curl -s -A "$ua" -o /dev/null -w "%{http_code} cf-mitigated=%header{cf-mitigated}\n" "https://www.fairwaypal.com$p"
  done
done
curl -sI https://fairwaypal.com/ | head -3          # expect one 301 to https://www.fairwaypal.com/
curl -sI https://www.fairwaypal.com/blog/ | head -3 # expect one 308 to /blog
```

Expect 200 with no `cf-mitigated: challenge` header. If an AI user agent gets a
403 or challenge, check Cloudflare → Security → Bots ("Block AI bots", Bot
Fight Mode) and Security → WAF custom rules. robots.txt cannot override those.
