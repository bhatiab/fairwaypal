'use client'

import { useState } from 'react'
import { useTripContext } from './TripContext'

export default function NameGate() {
  const { needsNameGate, joinTrip } = useTripContext()
  const [name, setName] = useState('')
  const [joining, setJoining] = useState(false)
  const [error, setError] = useState('')

  if (!needsNameGate) return null

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim()) return

    setJoining(true)
    setError('')
    try {
      await joinTrip(name.trim())
    } catch {
      setError('Could not join. Try again.')
    } finally {
      setJoining(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-sm rounded-xl border border-border-2 bg-bg-2 p-8">
        <p className="eyebrow text-gold">Join trip</p>
        <h2 className="mt-3 text-2xl font-display font-light text-ink">
          What&rsquo;s your name?
        </h2>
        <p className="mt-2 text-sm text-ink-2">
          So everyone knows who voted.
        </p>

        <form onSubmit={handleJoin} className="mt-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your first name"
            autoFocus
            maxLength={50}
            className="h-12 w-full rounded-sm border border-border-2 bg-bg-3 px-4 text-base text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none"
          />
          {error && (
            <p className="mt-2 text-sm text-red-400">{error}</p>
          )}
          <button
            type="submit"
            disabled={joining || !name.trim()}
            className="primary-link mt-4 w-full justify-center disabled:pointer-events-none disabled:opacity-40"
          >
            {joining ? 'Joining…' : "I'm in"}
          </button>
        </form>
      </div>
    </div>
  )
}
