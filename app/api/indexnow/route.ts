import { NextRequest, NextResponse } from 'next/server'
import { pingIndexNow, ALL_URLS } from '../../../lib/indexnow'

/**
 * Manual / programmatic IndexNow submission.
 *
 * The automated path is .github/workflows/indexnow.yml, which submits directly
 * from the runner and does not need this route or a secret. This stays as an
 * on-demand trigger that does not require a checkout.
 */
export async function POST(req: NextRequest) {
  const expected = process.env.CRON_SECRET
  if (!expected) {
    // Fail closed rather than comparing against undefined.
    return NextResponse.json({ error: 'CRON_SECRET is not configured' }, { status: 503 })
  }

  const secret = req.headers.get('x-cron-secret') ?? req.nextUrl.searchParams.get('secret')
  if (secret !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const result = await pingIndexNow(ALL_URLS)
    return NextResponse.json({ ok: true, ...result })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
