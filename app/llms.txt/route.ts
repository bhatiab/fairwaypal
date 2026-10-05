import { buildLlmsTxt } from '../../lib/llms'

// Built once at build time from lib/llms.ts, so it can never list a page that
// does not exist or miss one that does (see src/test/llms.test.ts).
export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
