import { STATIC_ROUTES, SITE_URL, absoluteUrl } from './routes'

/**
 * IndexNow key. Deliberately not a secret: the protocol requires the same value
 * to be publicly readable at keyLocation so search engines can verify that
 * whoever submitted the URLs controls the host.
 *
 * Must stay byte-identical to the contents of public/<key>.txt.
 * src/test/indexnow.test.ts asserts that.
 */
export const INDEXNOW_KEY = 'fp8a3c2e9b7d41f5a6c0e2b4d8f7a3e91'

export const INDEXNOW_HOST = new URL(SITE_URL).host

export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`

/** api.indexnow.org fans a submission out to every participating engine (Bing, Yandex, Seznam, Naver). */
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

/**
 * Every indexable URL, derived from the same route list app/sitemap.ts uses.
 * Previously this was a second hand-written list that had drifted to 15 of 66
 * URLs, so most of the site was never submitted.
 */
export const ALL_URLS: readonly string[] = STATIC_ROUTES.map(absoluteUrl)

/** IndexNow rejects a submission whose urlList exceeds 10,000 entries. */
export const MAX_URLS_PER_REQUEST = 10_000

export type IndexNowPayload = {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

export function buildPayload(urls: readonly string[] = ALL_URLS): IndexNowPayload {
  const urlList = [...new Set(urls)]

  if (urlList.length === 0) {
    throw new Error('IndexNow: refusing to submit an empty urlList')
  }
  if (urlList.length > MAX_URLS_PER_REQUEST) {
    throw new Error(`IndexNow: urlList has ${urlList.length} URLs, limit is ${MAX_URLS_PER_REQUEST}`)
  }

  // Every URL must be on the host being claimed, or the whole submission is
  // rejected with 422.
  const foreign = urlList.filter((url) => {
    try {
      return new URL(url).host !== INDEXNOW_HOST
    } catch {
      return true
    }
  })
  if (foreign.length > 0) {
    throw new Error(`IndexNow: ${foreign.length} URL(s) are not on ${INDEXNOW_HOST}: ${foreign.slice(0, 3).join(', ')}`)
  }

  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  }
}

export type PingResult = {
  submitted: number
  status: number
  endpoint: string
}

/**
 * Submits URLs to IndexNow. 200 and 202 both mean accepted; 202 additionally
 * means the key is still being validated, which is normal on a first submission
 * and not an error.
 */
export async function pingIndexNow(
  urls: readonly string[] = ALL_URLS,
  { endpoint = INDEXNOW_ENDPOINT }: { endpoint?: string } = {},
): Promise<PingResult> {
  const payload = buildPayload(urls)

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  if (res.status !== 200 && res.status !== 202) {
    const detail = await res.text().catch(() => '')
    throw new Error(
      `IndexNow returned ${res.status}${detail ? `: ${detail.slice(0, 200)}` : ''}`,
    )
  }

  return { submitted: payload.urlList.length, status: res.status, endpoint }
}
