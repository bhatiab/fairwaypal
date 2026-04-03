# Skill: Creating a New SEO-Targeted Page

## When to use this
When creating any standalone page that exists primarily to rank in
search and convert visitors — e.g. `/mistakes`, `/f1-travel-from-uk`,
future pages like `/f1-races-near-london` or `/monaco-gp-first-timer`.

Not for race sub-pages (use `skills/new-subpage.md` instead).

## Read first
- `CLAUDE.md` (always)
- `skills/copy-and-tone.md` (tone rules apply to all copy on these pages)
- `/app/mistakes/page.tsx` — the reference pattern for standalone SEO pages

---

## File structure

```
/app/[slug]/
  page.tsx    ← server component with metadata + content
```

These pages are usually simple enough to not need a `_client.tsx` unless
they contain interactive elements or Lucide icons. If icons are needed,
use the `_client.tsx` pattern as usual.

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: '[Primary keyword phrase, naturally worded] | GrandPrixPal',
  description: '[150–160 chars, specific, answers "what will I learn"]',
  alternates: {
    canonical: 'https://www.grandprixpal.com/[slug]',
  },
  openGraph: {
    title: '[Same as title or slightly more conversational]',
    description: '[Same as description]',
    url: 'https://www.grandprixpal.com/[slug]',
  },
}
```

Title rules:
- Lead with the keyword, not the brand
- Natural language — not "Monaco GP Transport Guide Tips 2026"
- 50–60 characters before the pipe
- Always end with `| GrandPrixPal`

---

## URL structure

- Lowercase, hyphenated
- Descriptive and permanent — don't include the year unless the page
  will be updated annually (e.g. `/f1-travel-from-uk` not
  `/f1-travel-from-uk-2026`)
- Sub-pages of SEO pages: `/f1-travel-from-uk/silverstone` not
  `/uk/silverstone` (keeps the parent keyword in the path)

---

## Page structure for SEO

Every standalone SEO page should have:

1. **Hero section** — headline + subheadline that mirrors the search intent
2. **Body sections** with descriptive H2 headings (not "Section 1")
3. **Internal links** to relevant race pages and sub-pages (minimum 3–5)
4. **A "by race" or "related guides" section** at the bottom
5. **A closing line** (see copy-and-tone skill)

The hero headline should closely match the query the page targets:
- Target: "attending an F1 race from the UK"
- Headline: "Attending an F1 race from the UK"
Not: "Your ultimate guide to watching F1 as a UK fan"

---

## Internal linking strategy

These pages are hubs — their job is to rank AND send people to
deeper content. Every SEO page should link to:

- Relevant race hub pages (`/races/[slug]`)
- Relevant race sub-pages (`/races/[slug]/getting-there` etc.)
- The `/mistakes` hub page where relevant
- Other SEO pages where topically related

The mistakes hub page (`/mistakes`) is the highest-value internal
link target on the site — link to it from every SEO page where
it makes sense.

---

## SEO content rules

**Do:**
- Use the target phrase naturally in the first paragraph
- Use variations of the phrase in H2 headings
- Include specific facts (times, prices, distances) — these make
  content rankable and trustworthy
- Write for the reader, not the algorithm — Google rewards content
  that actually answers the question

**Do not:**
- Do not repeat the keyword phrase more than once per section
- Do not use keyword-stuffed H2s ("Best F1 Races UK Fans 2026 Tips")
- Do not write thin sections just to have more headings
- Do not add a section if you don't have real, specific content for it

---

## Schema / JSON-LD

For most standalone SEO pages, basic Article or WebPage schema is fine:

```tsx
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '[Page title without brand]',
  description: '[Meta description]',
  url: 'https://www.grandprixpal.com/[slug]',
  publisher: {
    '@type': 'Organization',
    name: 'GrandPrixPal',
    url: 'https://www.grandprixpal.com',
  },
}
```

For race-specific pages, use `SportsEvent` schema on the race hub
page — not on standalone SEO pages.

---

## The "by race" section (add to every SEO page)

At the bottom of every SEO page, add a grid or list linking to
related race pages. This:
- Creates crawlable internal links
- Gives the reader a clear next step
- Helps Google understand site structure

Only link to races that have relevant content (don't link to a
bare hub page from a transport-focused SEO page — link to the
getting-there sub-page instead).

---

## After building

1. Submit the URL to Google Search Console
2. Add the page to the `CLAUDE.md` "current pages" section
3. Add a link to it from the homepage if it's a primary SEO target
4. Add it to `docs/backlog.md` under ✅ Done
5. Consider if any existing pages should link to it
   (mistakes page, homepage "Start here" section, relevant race pages)

---

## Do not

- Do not create a year-specific URL for evergreen content
- Do not write generic intros — the first paragraph must be specific
  to the exact query this page targets
- Do not add sections without real content to fill them
- Do not link to race pages that don't have relevant sub-pages yet
- Do not add this page to race sub-page navigation — standalone SEO
  pages live separately from the race guide structure
