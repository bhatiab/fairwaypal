'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import type { ParticipantRow, TripRow } from '@/types/trip'
import { getDeviceUuid, getOrganiserUuid } from '@/lib/participant'

type TripParticipantContextValue = {
  participant: ParticipantRow | null
  isOrganiser: boolean
  loading: boolean
  setParticipant: (p: ParticipantRow) => void
}

const TripParticipantContext = createContext<TripParticipantContextValue>({
  participant: null,
  isOrganiser: false,
  loading: true,
  setParticipant: () => {},
})

export function useTripParticipant() {
  return useContext(TripParticipantContext)
}

export default function TripParticipantProvider({
  trip,
  children,
}: {
  trip: TripRow
  children: ReactNode
}) {
  const [participant, setParticipant] = useState<ParticipantRow | null>(null)
  const [loading, setLoading] = useState(true)
  const [isOrg, setIsOrg] = useState(false)

  useEffect(() => {
    async function resolve() {
      const organiserUuid = getOrganiserUuid()
      const isOrganiser = organiserUuid !== null && organiserUuid === trip.organiser_uuid
      setIsOrg(isOrganiser)

      const deviceUuid = isOrganiser ? organiserUuid : getDeviceUuid(trip.id)

      // Try to find existing participant
      const res = await fetch(
        `/api/participant?tripId=${trip.id}&deviceUuid=${deviceUuid}`,
      )

      if (res.ok) {
        const p = await res.json()
        setParticipant(p)
        setLoading(false)
        return
      }

      // Organiser auto-creates if not found
      if (isOrganiser) {
        const createRes = await fetch('/api/participant', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tripId: trip.id,
            name: 'Organiser',
            deviceUuid,
          }),
        })
        if (createRes.ok) {
          setParticipant(await createRes.json())
        }
        setLoading(false)
        return
      }

      // Non-organiser, not found → name gate will show
      setLoading(false)
    }

    resolve()
  }, [trip.id, trip.organiser_uuid])

  return (
    <TripParticipantContext.Provider
      value={{ participant, isOrganiser: isOrg, loading, setParticipant }}
    >
      {children}
    </TripParticipantContext.Provider>
  )
}
