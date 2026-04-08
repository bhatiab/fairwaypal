import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow } from '@/types/trip'
import Navbar from '../../../src/components/Navbar'
import TripClient from './_client'
import { TripProvider } from './components/TripContext'
import NameGate from './components/NameGate'

const getTrip = cache(async (id: string): Promise<TripRow | null> => {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('trips')
    .select('*')
    .eq('id', id)
    .single()
  return data as TripRow | null
})

const getActivities = cache(async (tripId: string): Promise<ActivityRow[]> => {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('activities')
    .select('*')
    .eq('trip_id', tripId)
    .order('day_index', { ascending: true })
    .order('sort_order', { ascending: true })
  return (data as ActivityRow[]) ?? []
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const trip = await getTrip(id)
  if (!trip) return { title: 'Trip not found' }

  return {
    title: trip.name,
    description: `${trip.destination} — ${trip.nights} nights, ${trip.golfers_count} golfers`,
    openGraph: {
      title: trip.name,
      description: `${trip.destination} — ${trip.nights} nights, ${trip.golfers_count} golfers`,
    },
  }
}

export default async function TripPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const trip = await getTrip(id)
  if (!trip) notFound()

  const activities = await getActivities(trip.id)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <h1 className="text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
          {trip.name}
        </h1>
        <TripProvider
          tripId={trip.id}
          organiserUuid={trip.organiser_uuid}
          initialActivities={activities.map((a) => ({ id: a.id }))}
        >
          <NameGate />
          <TripClient trip={trip} activities={activities} />
        </TripProvider>
      </main>
    </div>
  )
}
