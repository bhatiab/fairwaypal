'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { Link2, MessageCircle, X } from 'lucide-react'
import type { TripRow } from '@/types/trip'
import { getOrganiserUuid } from '@/lib/participant'
import { useTripParticipant } from './TripParticipantProvider'

export default function ShareButton({ trip }: { trip: TripRow }) {
  const { isOrganiser } = useTripParticipant()
  const [open, setOpen] = useState(false)

  if (!isOrganiser) return null

  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/trip/${trip.id}`
      : ''

  const whatsappMessage = `Check out our trip: ${trip.name}\n${url}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`

  async function handleOpen() {
    setOpen(true)
    // Set trip status to voting if still draft
    if (trip.status === 'draft') {
      const organiserUuid = getOrganiserUuid()
      if (organiserUuid) {
        await fetch(`/api/trip/${trip.id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'voting', organiserUuid }),
        })
      }
    }
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(url)
    toast.success('Link copied!')
  }

  return (
    <>
      <button type="button" onClick={handleOpen} className="btn-primary">
        <Link2 className="mr-2 h-4 w-4" />
        Share
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-bg/90 backdrop-blur-sm">
          <div className="mx-5 w-full max-w-md rounded-sm border border-border-2 bg-bg-2 p-6">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Share this trip</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-ink-muted hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm text-ink-2">
              Send this link to the group. They&apos;ll enter their name and start voting.
            </p>

            <div className="mt-4 flex gap-2">
              <input
                type="text"
                readOnly
                value={url}
                className="h-10 flex-1 rounded-sm border border-border bg-bg-3 px-3 text-sm text-ink"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="btn-secondary h-10 px-4"
              >
                Copy
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary mt-3 flex w-full items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              Share on WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}
