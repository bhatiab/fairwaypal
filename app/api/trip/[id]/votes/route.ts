import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'

// GET — fetch all votes for a trip (or specific activities)
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params
  const supabase = createServerSupabase()

  const { data: votes, error } = await supabase
    .from('votes')
    .select('*')
    .eq('trip_id', tripId)

  if (error) {
    console.error('Votes fetch failed:', error)
    return NextResponse.json({ error: 'fetch_failed' }, { status: 500 })
  }

  return NextResponse.json({ votes: votes ?? [] })
}
