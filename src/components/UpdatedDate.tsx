import { formatContentDate } from './BlogByline'

/** Visible "Updated <date>" for pages without Article JSON-LD (destination guides). */
export default function UpdatedDate({ date }: { date: string | undefined }) {
  if (!date) return null
  return (
    <p className="mt-2 text-xs text-ink-muted">
      Updated <time dateTime={date}>{formatContentDate(date)}</time>
    </p>
  )
}
