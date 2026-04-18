import { NextRequest, NextResponse } from 'next/server'
import { pingIndexNow, ALL_URLS } from '../../../lib/indexnow'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret') ?? req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    await pingIndexNow(ALL_URLS)
    return NextResponse.json({ ok: true, submitted: ALL_URLS.length })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
