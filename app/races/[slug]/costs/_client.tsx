'use client'

import { useParams } from 'next/navigation'
import { getCostsBySlug } from '@/data/raceCosts2026'
import { getRaceBySlug } from '@/data/races2026'
import CostBreakdownTemplate from '@/components/CostBreakdownTemplate'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CostsClient() {
  const { slug } = useParams<{ slug: string }>()
  const costData = getCostsBySlug(slug)
  const race = getRaceBySlug(slug)

  if (!costData || !race) {
    return (
      <main className="min-h-screen bg-background pt-24">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-muted-foreground">Cost data not yet available for this race.</p>
          {race && (
            <Link href={`/races/${slug}`} className="text-primary hover:underline mt-4 inline-block">
              Back to {race.name}
            </Link>
          )}
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <>
      <CostBreakdownTemplate data={costData} raceName={race.name} circuit={race.circuit} />
      <Footer />
    </>
  )
}
