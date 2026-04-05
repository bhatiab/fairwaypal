'use client'

export default function VoteTally({ up, down }: { up: number; down: number }) {
  const total = up + down
  if (total === 0) return null

  const greenPct = (up / total) * 100

  return (
    <div className="mt-2 flex h-[2px] w-full overflow-hidden rounded-full bg-border">
      <div
        className="h-full bg-fairway transition-all duration-300"
        style={{ width: `${greenPct}%` }}
      />
      <div className="h-full flex-1 bg-destructive" />
    </div>
  )
}
