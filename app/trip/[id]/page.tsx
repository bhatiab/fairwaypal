import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow, ParticipantRow } from '@/types/trip'
import Navbar from '../../../src/components/Navbar'
import TripClient from './_client'

const getTrip = cache(async (id: string): Promise<TripRow | null> => {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('trips')
    .select('*')
    .eq('id', id)
    .single()
  return data as TripRow | null
})

async function getTripActivities(tripId: string): Promise<ActivityRow[]> {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('activities')
    .select('*')
    .eq('trip_id', tripId)
    .order('day_index')
    .order('sort_order')
  return (data ?? []) as ActivityRow[]
}

async function getTripParticipants(tripId: string): Promise<ParticipantRow[]> {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('participants')
    .select('*')
    .eq('trip_id', tripId)
    .order('created_at')
  return (data ?? []) as ParticipantRow[]
}

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

  const [activities, participants] = await Promise.all([
    getTripActivities(id),
    getTripParticipants(id),
  ])

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <h1 className="text-5xl font-display font-light italic leading-tight text-ink sm:text-6xl">
          {trip.name}
        </h1>
        <TripClient
          trip={trip}
          initialActivities={activities}
          initialParticipants={participants}
        />
      </main>
    </div>
  )
}
