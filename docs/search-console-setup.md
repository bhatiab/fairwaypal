# Google Search Console setup

**This is the highest-leverage task on the site, and it is the one thing no code
change can do.** Search Console needs a browser session on your Google account.

## Why this matters more than anything else right now

The site currently takes roughly 3x more traffic from Bing than from Google. That
ratio has a mechanical cause, not a mysterious one:

- IndexNow was wired up in #28. `npm run deploy:worker` pings it on every deploy,
  pushing all 66 URLs straight to **Bing, Yandex, Seznam and Naver**.
- **Google does not participate in IndexNow.** It never joined.
- Google also **retired its sitemap ping endpoint in 2023**. There is no longer any
  programmatic way to tell Google a sitemap exists.

So Bing receives a complete feed of the site on every single deploy, and Google
receives nothing. Search Console is now the only submission path that exists. Until
it is set up, the site is relying entirely on Google finding pages by crawling.

Google *has* indexed some pages already, so this is not a penalty or a block. The
site is indexed thinly and needs to be told about the rest.

## Setup, in order

### 1. Verify by DNS TXT, not the HTML meta tag

Use **Domain property**, not URL prefix. It covers apex + www and http + https in
one property, survives every deploy, and does not depend on a build-time variable.

1. https://search.google.com/search-console → Add property → **Domain**
2. Enter `fairwaypal.com` (no scheme, no www)
3. Copy the TXT record it gives you
4. Cloudflare dashboard → fairwaypal.com → DNS → Add record
   - Type `TXT`, Name `@`, Content: the `google-site-verification=...` string
5. Back in GSC, click Verify. DNS usually propagates in a minute or two on
   Cloudflare.

**Why not the meta tag:** the fallback path uses `NEXT_PUBLIC_GSC_VERIFY`, read in
`app/layout.tsx`. `NEXT_PUBLIC_*` variables are inlined by `next build`, not read at
runtime, so setting it as a Worker secret does nothing at all. It has to be a
build-time environment variable in the Cloudflare dashboard, followed by a rebuild
and redeploy. DNS avoids that trap entirely.

### 2. Submit the sitemap

GSC → Sitemaps → enter `sitemap.xml` → Submit.

The full URL is `https://www.fairwaypal.com/sitemap.xml`. It currently carries 70
URLs, each with a truthful per-page `<lastmod>` (see `app/sitemap.ts`).

### 3. Request indexing on the pages that matter

GSC → URL Inspection → paste URL → Request Indexing. This is the fastest route into
the index for a site without much authority yet. It is rate limited to roughly a
dozen a day, so spend them on:

- `https://www.fairwaypal.com/`
- `https://www.fairwaypal.com/plan`
- `https://www.fairwaypal.com/blog/best-golf-destinations-january`
- `https://www.fairwaypal.com/blog/best-golf-destinations-february`
- `https://www.fairwaypal.com/blog/best-golf-destinations-november`
- `https://www.fairwaypal.com/blog/best-golf-destinations-october`
- `https://www.fairwaypal.com/destinations/scottsdale`

January and February are the priority: their booking windows open in October and
November, and a new page needs 4 to 8 weeks to index and rank.

### 4. Read the Pages report after about 72 hours

GSC → Indexing → Pages. One number decides what to do next:

- **"Discovered – currently not indexed"** — Google knows about the page but has
  not crawled it. Usually resolves on its own once the sitemap is trusted.
- **"Crawled – currently not indexed"** — Google crawled it and chose not to index
  it. This is a content and authority judgement, not a technical fault. **No code
  change fixes this.** It means the pages need external links pointing at them and
  enough differentiation to be worth indexing.
- **"Indexed"** — working. Move to the Performance report and watch impressions.

This distinction is the whole point of setting GSC up. Right now there is no way to
know which of the two problems the site actually has, and they have completely
different fixes.

### 5. Bing Webmaster Tools

Once GSC exists, https://www.bing.com/webmasters → Import from GSC. One click,
carries the verification across. Worth doing to confirm the IndexNow key
(`public/fp8a3c2e9b7d41f5a6c0e2b4d8f7a3e91.txt`) is registered against the host and
that submissions are landing.

## Local preflight

Before any deploy:

```bash
npm run seo:check
```

Checks that every route resolves to a page, every page is declared in
`lib/routes.json`, every canonical points at the right host, the IndexNow key file
matches the declared key, and nothing is accidentally noindexed.

It cannot check anything on the Google side. That part is manual, and it is step 1.
