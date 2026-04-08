'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ParticipantRow, VoteRow, VoteDirection, VoteTally } from '@/types/trip'

type TripContextValue = {
  tripId: string
  organiserUuid: string
  // Participant identity
  participant: ParticipantRow | null
  participants: ParticipantRow[]
  isOrganiser: boolean
  needsNameGate: boolean
  joinTrip: (name: string, role?: 'golfer' | 'partner') => Promise<void>
  // Voting
  votes: VoteRow[]
  castVote: (activityId: string, direction: VoteDirection) => Promise<void>
  removeVote: (activityId: string) => Promise<void>
  getActivityTally: (activityId: string) => VoteTally
}

const TripContext = createContext<TripContextValue | null>(null)

export function useTripContext() {
  const ctx = useContext(TripContext)
  if (!ctx) throw new Error('useTripContext must be used within TripProvider')
  return ctx
}

function getDeviceUuid(): string {
  const key = 'fairwaypal_device_uuid'
  let uuid = localStorage.getItem(key)
  if (!uuid) {
    uuid = crypto.randomUUID()
    localStorage.setItem(key, uuid)
  }
  return uuid
}

export function TripProvider({
  tripId,
  organiserUuid,
  initialActivities,
  children,
}: {
  tripId: string
  organiserUuid: string
  initialActivities: { id: string }[]
  children: React.ReactNode
}) {
  const [participant, setParticipant] = useState<ParticipantRow | null>(null)
  const [participants, setParticipants] = useState<ParticipantRow[]>([])
  const [votes, setVotes] = useState<VoteRow[]>([])
  const [loaded, setLoaded] = useState(false)

  // On mount, check if device already has a participant
  useEffect(() => {
    const deviceUuid = getDeviceUuid()

    // Also check if this is the organiser — auto-connect with organiser UUID
    const organiserStoredUuid = localStorage.getItem('fairwaypal_organiser_uuid')
    const isOrg = organiserStoredUuid === organiserUuid

    async function init() {
      // Fetch participants
      const pRes = await fetch(`/api/trip/${tripId}/participants`)
      if (pRes.ok) {
        const { participants: list } = await pRes.json()
        setParticipants(list)

        // Find existing participant by device UUID
        const existing = list.find(
          (p: ParticipantRow) => p.device_uuid === deviceUuid,
        )
        if (existing) {
          setParticipant(existing)
        } else if (isOrg) {
          // Auto-join the organiser
          const joinRes = await fetch(`/api/trip/${tripId}/participants`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Organiser', deviceUuid, role: 'golfer' }),
          })
          if (joinRes.ok) {
            const { participant: p } = await joinRes.json()
            setParticipant(p)
            setParticipants((prev) => [...prev, p])
          }
        }
      }

      // Fetch all votes for this trip's activities
      const activityIds = initialActivities.map((a) => a.id)
      if (activityIds.length > 0) {
        const vRes = await fetch(
          `/api/trip/${tripId}/votes?activityIds=${activityIds.join(',')}`,
        )
        if (vRes.ok) {
          const { votes: v } = await vRes.json()
          setVotes(v)
        }
      }

      setLoaded(true)
    }

    init()
  }, [tripId, organiserUuid, initialActivities])

  const isOrganiser = useMemo(() => {
    if (!participant) return false
    return participant.role === 'organiser'
  }, [participant])

  const needsNameGate = loaded && !participant

  const joinTrip = useCallback(
    async (name: string, role?: 'golfer' | 'partner') => {
      const deviceUuid = getDeviceUuid()
      const res = await fetch(`/api/trip/${tripId}/participants`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, deviceUuid, role }),
      })
      if (!res.ok) throw new Error('Failed to join trip')
      const { participant: p } = await res.json()
      setParticipant(p)
      setParticipants((prev) =>
        prev.some((x) => x.id === p.id) ? prev : [...prev, p],
      )
    },
    [tripId],
  )

  const castVote = useCallback(
    async (activityId: string, direction: VoteDirection) => {
      if (!participant) return

      // Optimistic update
      const optimisticVote: VoteRow = {
        id: crypto.randomUUID(),
        activity_id: activityId,
        trip_id: tripId,
        participant_id: participant.id,
        direction,
        created_at: new Date().toISOString(),
      }
      setVotes((prev) => {
        const filtered = prev.filter(
          (v) =>
            !(
              v.activity_id === activityId &&
              v.participant_id === participant.id
            ),
        )
        return [...filtered, optimisticVote]
      })

      try {
        const res = await fetch('/api/vote', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            activityId,
            tripId,
            participantId: participant.id,
            direction,
          }),
        })
        if (!res.ok) throw new Error('Vote failed')
        const { vote } = await res.json()
        // Replace optimistic with real vote
        setVotes((prev) =>
          prev.map((v) => (v.id === optimisticVote.id ? vote : v)),
        )
      } catch {
        // Revert optimistic update
        setVotes((prev) => prev.filter((v) => v.id !== optimisticVote.id))
      }
    },
    [participant, tripId],
  )

  const removeVote = useCallback(
    async (activityId: string) => {
      if (!participant) return

      // Optimistic remove
      const removed = votes.find(
        (v) =>
          v.activity_id === activityId &&
          v.participant_id === participant.id,
      )
      setVotes((prev) =>
        prev.filter(
          (v) =>
            !(
              v.activity_id === activityId &&
              v.participant_id === participant.id
            ),
        ),
      )

      try {
        const res = await fetch('/api/vote', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            activityId,
            participantId: participant.id,
          }),
        })
        if (!res.ok) throw new Error('Delete vote failed')
      } catch {
        // Revert
        if (removed) setVotes((prev) => [...prev, removed])
      }
    },
    [participant, votes],
  )

  const getActivityTally = useCallback(
    (activityId: string): VoteTally => {
      const activityVotes = votes.filter((v) => v.activity_id === activityId)
      const myVote = participant
        ? activityVotes.find((v) => v.participant_id === participant.id)
            ?.direction ?? null
        : null
      return {
        up: activityVotes.filter((v) => v.direction === 'up').length,
        down: activityVotes.filter((v) => v.direction === 'down').length,
        myVote,
      }
    },
    [votes, participant],
  )

  const value = useMemo(
    () => ({
      tripId,
      organiserUuid,
      participant,
      participants,
      isOrganiser,
      needsNameGate,
      joinTrip,
      votes,
      castVote,
      removeVote,
      getActivityTally,
    }),
    [
      tripId,
      organiserUuid,
      participant,
      participants,
      isOrganiser,
      needsNameGate,
      joinTrip,
      votes,
      castVote,
      removeVote,
      getActivityTally,
    ],
  )

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>
}
