import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { cache } from 'react'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow, ParticipantRow } from '@/types/trip'
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
    description: `${trip.destination} — ${trip.nights} nights. Trip confirmed.`,
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
  if (trip.status !== 'locked' && trip.status !== 'completed') {
    redirect(`/trip/${id}`)
  }

  const supabase = createServerSupabase()
  const [activitiesRes, participantsRes] = await Promise.all([
    supabase
      .from('activities')
      .select('*')
      .eq('trip_id', id)
      .in('status', ['confirmed', 'booked'])
      .order('day_index')
      .order('sort_order'),
    supabase
      .from('participants')
      .select('*')
      .eq('trip_id', id)
      .order('created_at'),
  ])

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <h1 className="text-5xl font-display font-light italic leading-tight text-ink sm:text-6xl">
          {trip.name}
        </h1>
        <ConfirmedClient
          trip={trip}
          activities={(activitiesRes.data ?? []) as ActivityRow[]}
          participants={(participantsRes.data ?? []) as ParticipantRow[]}
        />
      </main>
    </div>
  )
}
