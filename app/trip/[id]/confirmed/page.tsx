import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { cache } from 'react'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow } from '@/types/trip'
import Navbar from '../../../../src/components/Navbar'
import ConfirmedClient from './_client'

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
    .not('status', 'in', '("cancelled","removed")')
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
    title: `${trip.name} — Confirmed`,
    description: `${trip.destination} — ${trip.nights} nights, ${trip.golfers_count} golfers. Trip confirmed!`,
    openGraph: {
      title: `${trip.name} — Confirmed`,
      description: `${trip.destination} — ${trip.nights} nights. Trip confirmed!`,
    },
  }
}

export default async function ConfirmedPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const trip = await getTrip(id)
  if (!trip) notFound()

  // If trip isn't locked, redirect to the voting view
  if (trip.status !== 'locked' && trip.status !== 'completed') {
    redirect(`/trip/${id}`)
  }

  const activities = await getActivities(trip.id)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <div className="flex items-center gap-3">
          <h1 className="text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
            {trip.name}
          </h1>
          <span className="rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-xs font-medium uppercase tracking-[0.1em] text-emerald-400">
            Confirmed
          </span>
        </div>
        <ConfirmedClient trip={trip} activities={activities} />
      </main>
    </div>
  )
}
