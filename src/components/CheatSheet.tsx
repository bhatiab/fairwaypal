/**
 * Answer-first summary box shown directly under a page's intro. Server
 * component, so the text is in the initial HTML for crawlers and AI agents.
 * Visual pattern from /blog/best-golf-destinations-november.
 */
export type CheatSheetRow = { label: string; value: string }

export default function CheatSheet({ rows, title = 'The cheat sheet' }: { rows: CheatSheetRow[]; title?: string }) {
  return (
    <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{title}</p>
      <dl className="mt-3 space-y-2 text-base leading-8 text-muted-foreground">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="inline font-semibold text-foreground">{row.label}:</dt>{' '}
            <dd className="inline">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
