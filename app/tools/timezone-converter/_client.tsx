'use client'

import { useState, useEffect, useCallback } from 'react'
import { Copy, Check, Clock } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { sessionSchedules, type RaceWeekendSchedule } from '@/data/sessionTimes'
import { races2026 } from '@/data/calendar2026'

// Common timezones for manual override
const COMMON_TIMEZONES = [
  { label: 'UTC / GMT',             value: 'UTC' },
  { label: 'London (GMT/BST)',       value: 'Europe/London' },
  { label: 'Paris / Berlin / Rome (CET)', value: 'Europe/Paris' },
  { label: 'Helsinki / Athens (EET)', value: 'Europe/Helsinki' },
  { label: 'Dubai (GST)',            value: 'Asia/Dubai' },
  { label: 'Mumbai (IST)',           value: 'Asia/Kolkata' },
  { label: 'Bangkok (ICT)',          value: 'Asia/Bangkok' },
  { label: 'Singapore / KL (SGT)',   value: 'Asia/Singapore' },
  { label: 'Tokyo (JST)',            value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST)',          value: 'Australia/Sydney' },
  { label: 'Auckland (NZST)',        value: 'Pacific/Auckland' },
  { label: 'New York (ET)',          value: 'America/New_York' },
  { label: 'Chicago (CT)',           value: 'America/Chicago' },
  { label: 'Denver (MT)',            value: 'America/Denver' },
  { label: 'Los Angeles (PT)',       value: 'America/Los_Angeles' },
  { label: 'São Paulo (BRT)',        value: 'America/Sao_Paulo' },
]

/** Map "Friday" / "Saturday" / "Sunday" to a day offset from the race Sunday */
const DAY_OFFSET: Record<string, number> = {
  Friday: -2,
  Saturday: -1,
  Sunday: 0,
}

/**
 * Convert a circuit-local session time to the user's timezone.
 * Uses the race's Sunday date to anchor the calculation.
 */
function convertSessionTime(
  session: RaceWeekendSchedule['sessions'][number],
  schedule: RaceWeekendSchedule,
  raceSundayDate: Date,
  userTimezone: string,
): string {
  // Get the actual calendar date for this session day
  const dayOffset = DAY_OFFSET[session.day] ?? 0
  const sessionDate = new Date(raceSundayDate)
  sessionDate.setDate(sessionDate.getDate() + dayOffset)

  const [hours, minutes] = session.localTime.split(':').map(Number)

  // Build an ISO-like string in the circuit's local timezone
  // We use Intl to find the UTC offset for that date/time in the circuit TZ
  const year = sessionDate.getFullYear()
  const month = String(sessionDate.getMonth() + 1).padStart(2, '0')
  const day = String(sessionDate.getDate()).padStart(2, '0')
  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')

  // Parse the datetime as if it's in the circuit timezone by constructing
  // a Date from a local-time string and shifting by the TZ offset
  const localDateStr = `${year}-${month}-${day}T${hh}:${mm}:00`

  // Use the circuit timezone to get the UTC offset at that moment
  const circuitFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: schedule.circuitTimezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  // Estimate UTC time by interpreting the local time in the circuit timezone.
  // We parse the local string naively first, then correct for TZ offset.
  const naiveUtc = new Date(`${localDateStr}Z`) // treat as UTC temporarily

  // Find actual UTC by binary-search: format naiveUtc in circuitTZ and compare
  // Since JS doesn't give us tz offset directly, we use a trick:
  // Format a reference UTC time in the circuit TZ to find the offset.
  const refParts = circuitFormatter.formatToParts(naiveUtc)
  const refH = Number(refParts.find(p => p.type === 'hour')?.value ?? 0)
  const refM = Number(refParts.find(p => p.type === 'minute')?.value ?? 0)

  // Difference in minutes between what the circuit TZ shows and our target local time
  const targetMinutes = hours * 60 + minutes
  const circuitMinutes = refH * 60 + refM
  let diffMinutes = targetMinutes - circuitMinutes

  // Handle midnight crossover
  if (diffMinutes > 12 * 60) diffMinutes -= 24 * 60
  if (diffMinutes < -12 * 60) diffMinutes += 24 * 60

  const utcMs = naiveUtc.getTime() - diffMinutes * 60000
  const utcDate = new Date(utcMs)

  // Format in the user's timezone
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: userTimezone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(utcDate)
}

/** Find the next upcoming race slug (first race with Sunday >= today) */
function findNextRaceSlug(): string {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const next = races2026.find(r => r.startDate >= today)
  if (!next) return sessionSchedules[sessionSchedules.length - 1].raceSlug
  const slug = sessionSchedules.find(
    s => s.raceName === next.name || s.raceSlug === next.name.toLowerCase()
  )
  // Map by position (same order as calendar)
  return sessionSchedules[next.id - 1]?.raceSlug ?? sessionSchedules[0].raceSlug
}

export default function TimezoneConverterClient() {
  const [selectedSlug, setSelectedSlug] = useState<string>('')
  const [userTimezone, setUserTimezone] = useState<string>('UTC')
  const [manualTz, setManualTz] = useState<string>('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Auto-detect user timezone on mount
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone
    setUserTimezone(detected)
    // Auto-select next upcoming race
    setSelectedSlug(findNextRaceSlug())
  }, [])

  const effectiveTz = manualTz || userTimezone

  const schedule = sessionSchedules.find(s => s.raceSlug === selectedSlug)
  const raceCalendar = races2026.find((_, i) =>
    sessionSchedules[i]?.raceSlug === selectedSlug
  )

  const rows = schedule && raceCalendar
    ? schedule.sessions.map(session => ({
        session,
        localTime: session.localTime,
        userTime: convertSessionTime(session, schedule, raceCalendar.startDate, effectiveTz),
      }))
    : []

  const handleCopy = useCallback(() => {
    if (!schedule || rows.length === 0) return
    const lines = [
      `${schedule.raceName} — Session Times`,
      `Your timezone: ${effectiveTz}`,
      '',
      'Session          | Circuit Local | Your Time',
      '-'.repeat(50),
      ...rows.map(r =>
        `${r.session.name.padEnd(16)} | ${r.session.day.substring(0, 3)} ${r.localTime}        | ${r.userTime}`
      ),
      '',
      'Times approximate — check motogp.com for confirmed schedule',
    ]
    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [schedule, rows, effectiveTz])

  const detectedTzLabel = userTimezone !== 'UTC'
    ? `Auto-detected: ${userTimezone}`
    : 'Auto-detected timezone'

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-3xl font-bold tracking-tight mb-2">
          MotoGP 2026 Session Times
        </h1>
        <p className="text-muted-foreground mb-8">
          Convert race weekend session times to your local timezone. All 22 rounds.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          {/* Race selector */}
          <div>
            <label className="block text-sm font-medium mb-1.5">Race weekend</label>
            <Select value={selectedSlug} onValueChange={setSelectedSlug}>
              <SelectTrigger>
                <SelectValue placeholder="Select a race…" />
              </SelectTrigger>
              <SelectContent>
                {sessionSchedules.map(s => (
                  <SelectItem key={s.raceSlug} value={s.raceSlug}>
                    {s.raceName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Timezone override */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Your timezone
            </label>
            <Select value={manualTz || '__auto'} onValueChange={v => setManualTz(v === '__auto' ? '' : v)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="__auto">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 opacity-60" />
                    {detectedTzLabel}
                  </span>
                </SelectItem>
                {COMMON_TIMEZONES.map(tz => (
                  <SelectItem key={tz.value} value={tz.value}>
                    {tz.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {schedule && rows.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="font-display text-xl font-semibold">{schedule.raceName}</h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Circuit timezone: {schedule.circuitTimezone}
                  {' · '}
                  Your timezone: {effectiveTz}
                </p>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-md border border-border hover:bg-card transition-colors"
                aria-label="Copy session times"
              >
                {copied ? (
                  <><Check className="h-3.5 w-3.5" /> Copied</>
                ) : (
                  <><Copy className="h-3.5 w-3.5" /> Copy times</>
                )}
              </button>
            </div>

            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Session</TableHead>
                    <TableHead>Day</TableHead>
                    <TableHead>Circuit local</TableHead>
                    <TableHead>Your time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rows.map(r => (
                    <TableRow key={r.session.name}>
                      <TableCell className="font-medium">{r.session.name}</TableCell>
                      <TableCell className="text-muted-foreground">{r.session.day}</TableCell>
                      <TableCell>{r.localTime}</TableCell>
                      <TableCell className="font-semibold">{r.userTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
              Times are approximate based on the typical MotoGP weekend format. Confirm with{' '}
              <a
                href="https://www.motogp.com/en/calendar"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                motogp.com
              </a>{' '}
              closer to race weekend.
            </p>
          </>
        )}

        {!schedule && selectedSlug && (
          <p className="text-muted-foreground">No schedule found for this race.</p>
        )}
      </div>
    </main>
  )
}
