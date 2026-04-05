'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { TripLiveData } from '@/types/trip'

const POLL_INTERVAL = 30_000

export function useTripPolling(
  tripId: string,
  participantId: string | null,
) {
  const [data, setData] = useState<TripLiveData | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const fetchLive = useCallback(async () => {
    const qs = participantId ? `?participantId=${participantId}` : ''
    const res = await fetch(`/api/trip/${tripId}/live${qs}`)
    if (res.ok) {
      const json = await res.json()
      setData(json)
    }
  }, [tripId, participantId])

  useEffect(() => {
    // Initial fetch via microtask to avoid sync setState in effect
    const controller = new AbortController()
    const doFetch = async () => {
      const qs = participantId ? `?participantId=${participantId}` : ''
      const res = await fetch(`/api/trip/${tripId}/live${qs}`, {
        signal: controller.signal,
      })
      if (res.ok) {
        const json = await res.json()
        setData(json)
      }
    }
    doFetch().catch(() => {})

    // Poll every 30s
    intervalRef.current = setInterval(() => {
      fetchLive()
    }, POLL_INTERVAL)

    return () => {
      controller.abort()
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [tripId, participantId, fetchLive])

  return { data, refetch: fetchLive }
}
