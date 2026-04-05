import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow, ParticipantRow } from '@/types/trip'
import Navbar from '../../../src/components/Navbar'
import OrgClient from './_client'

const getTrip = cache(async (id: string): Promise<TripRow | null> => {
  const supabase = createServerSupabase()
  const { data } = await supabase
    .from('trips')
    .select('*')
    .eq('id', id)
    .single()
  return data as TripRow | null
})

async function getTripData(tripId: string) {
  const supabase = createServerSupabase()
  const [activitiesRes, participantsRes, votesRes] = await Promise.all([
    supabase
      .from('activities')
      .select('*')
      .eq('trip_id', tripId)
      .order('day_index')
      .order('sort_order'),
    supabase
      .from('participants')
      .select('*')
      .eq('trip_id', tripId)
      .order('created_at'),
    supabase.from('votes').select('*').eq('trip_id', tripId),
  ])
  return {
    activities: (activitiesRes.data ?? []) as ActivityRow[],
    participants: (participantsRes.data ?? []) as ParticipantRow[],
    votes: votesRes.data ?? [],
  }
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
    title: `Dashboard — ${trip.name}`,
    description: `Manage ${trip.name}: track votes, resolve conflicts, lock the trip.`,
  }
}

export default async function OrganiserPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const trip = await getTrip(id)
  if (!trip) notFound()

  const { activities, participants, votes } = await getTripData(id)

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <h1 className="sr-only">Dashboard for {trip.name}</h1>
        <OrgClient
          trip={trip}
          initialActivities={activities}
          initialParticipants={participants}
          initialVotes={votes}
        />
      </main>
    </div>
  )
}
