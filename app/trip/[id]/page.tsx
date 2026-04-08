import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getSupabaseServer } from '../../../src/lib/supabase'
import type { TripWithActivities } from '../../../src/types/trip'
import TripSplitView from './_client'
import Navbar from '../../../src/components/Navbar'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const supabase = getSupabaseServer()
  const { data } = await supabase
    .from('trips')
    .select('name, destination, dates_start, dates_end')
    .eq('id', id)
    .maybeSingle()

  if (!data) return { title: 'Trip Not Found' }

  return {
    title: `${data.name} — FairwayPal`,
    description: `Golf trip to ${data.destination}, ${data.dates_start} to ${data.dates_end}. View the full itinerary and vote on activities.`,
    openGraph: {
      title: data.name,
      description: `Golf trip to ${data.destination}`,
      type: 'website',
    },
  }
}

export default async function TripPage({ params }: Props) {
  const { id } = await params
  const supabase = getSupabaseServer()

  const { data: trip } = await supabase
    .from('trips')
    .select('*, activities(*)')
    .eq('id', id)
    .order('day_index', { referencedTable: 'activities' })
    .order('sort_order', { referencedTable: 'activities' })
    .maybeSingle()

  if (!trip) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <TripSplitView trip={trip as TripWithActivities} />
      </main>
    </div>
  )
}
