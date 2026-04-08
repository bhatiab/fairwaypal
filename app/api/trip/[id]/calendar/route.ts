import { NextResponse } from 'next/server'
import { createServerSupabase } from '@/lib/supabase'
import type { TripRow, ActivityRow } from '@/types/trip'

function escapeICS(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

function formatICSDate(dateStr: string, timeStr: string): string {
  // Parse date (YYYY-MM-DD) and time (e.g. "7:00 AM", "2:30 PM")
  const [year, month, day] = dateStr.split('-').map(Number)

  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  if (!timeMatch) {
    // Default to 9 AM if time can't be parsed
    return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}T090000`
  }

  let hours = parseInt(timeMatch[1], 10)
  const minutes = parseInt(timeMatch[2], 10)
  const period = timeMatch[3].toUpperCase()

  if (period === 'PM' && hours !== 12) hours += 12
  if (period === 'AM' && hours === 12) hours = 0

  return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}T${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}00`
}

function getTripDate(tripStart: string, dayIndex: number): string {
  const start = new Date(tripStart)
  start.setDate(start.getDate() + dayIndex)
  return start.toISOString().split('T')[0]
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id: tripId } = await params
  const supabase = createServerSupabase()

  const { data: trip } = await supabase
    .from('trips')
    .select('*')
    .eq('id', tripId)
    .single()

  if (!trip) {
    return NextResponse.json({ error: 'trip_not_found' }, { status: 404 })
  }

  const typedTrip = trip as TripRow

  const { data: activities } = await supabase
    .from('activities')
    .select('*')
    .eq('trip_id', tripId)
    .not('status', 'in', '("cancelled","removed")')
    .order('day_index', { ascending: true })
    .order('sort_order', { ascending: true })

  const typedActivities = (activities as ActivityRow[]) ?? []

  // Build ICS
  const lines: string[] = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//FairwayPal//Trip Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeICS(typedTrip.name)}`,
  ]

  for (const activity of typedActivities) {
    const dateStr = getTripDate(typedTrip.dates_start, activity.day_index)
    const dtStart = formatICSDate(dateStr, activity.time_of_day || '9:00 AM')
    // Assume 2-hour duration for each activity
    const startHour = parseInt(dtStart.slice(9, 11), 10)
    const endHour = startHour + 2
    const dtEnd = dtStart.slice(0, 9) + String(endHour).padStart(2, '0') + dtStart.slice(11)

    const sideLabel = activity.side === 'golf' ? 'Golf' : activity.side === 'partner' ? 'Partners' : 'Everyone'
    const description = [
      activity.detail || '',
      activity.ai_rationale ? `Why: ${activity.ai_rationale}` : '',
      activity.booking_ref ? `Booking ref: ${activity.booking_ref}` : '',
    ].filter(Boolean).join('\\n')

    lines.push(
      'BEGIN:VEVENT',
      `UID:${activity.id}@fairwaypal.com`,
      `DTSTART:${dtStart}`,
      `DTEND:${dtEnd}`,
      `SUMMARY:${escapeICS(`[${sideLabel}] ${activity.name}`)}`,
      `DESCRIPTION:${escapeICS(description)}`,
      `LOCATION:${escapeICS(typedTrip.destination)}`,
      `CATEGORIES:${sideLabel}`,
      'END:VEVENT',
    )
  }

  lines.push('END:VCALENDAR')

  const icsContent = lines.join('\r\n')

  return new Response(icsContent, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${typedTrip.slug}.ics"`,
    },
  })
}
