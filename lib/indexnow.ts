const INDEXNOW_KEY = 'fp8a3c2e9b7d41f5a6c0e2b4d8f7a3e91'
const SITE_URL = 'https://fairwaypal.com'

export const ALL_URLS = [
  '/',
  '/plan',
  '/destinations/scottsdale',
  '/destinations/myrtle-beach',
  '/destinations/bandon-dunes',
  '/destinations/pinehurst',
  '/destinations/scotland',
  '/destinations/ireland',
  '/blog',
  '/blog/golf-trip-with-non-golfers',
  '/blog/best-bachelor-party-golf-destinations',
  '/blog/golf-trip-budget',
  '/blog/what-to-do-on-golf-trip-non-golfer',
  '/blog/golf-trip-packing-list',
  '/blog/scottsdale-vs-myrtle-beach-golf-trip',
].map((path) => `${SITE_URL}${path}`)

export async function pingIndexNow(urls: string[] = ALL_URLS): Promise<void> {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'fairwaypal.com',
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  })

  if (!res.ok && res.status !== 202) {
    throw new Error(`IndexNow returned ${res.status}`)
  }
}
