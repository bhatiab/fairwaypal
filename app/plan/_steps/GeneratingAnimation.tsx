'use client'

import { useEffect, useState } from 'react'

const messages = [
  'Scouting the best courses…',
  'Planning partner activities…',
  'Slotting shared dinners…',
  'Calculating budgets…',
  'Polishing the itinerary…',
]

export default function GeneratingAnimation({
  destination,
}: {
  destination: string
}) {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="eyebrow">Building your trip</p>
      <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
        {destination || 'Your trip'} is coming together…
      </h2>

      <div className="mt-8 flex items-center gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-primary" />
      </div>

      <p className="mt-6 text-sm text-muted-foreground transition-opacity duration-500">
        {messages[msgIndex]}
      </p>
    </div>
  )
}
