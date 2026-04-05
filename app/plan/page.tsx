import type { Metadata } from 'next'
import Navbar from '../../src/components/Navbar'
import PlanClient from './_client'

export const metadata: Metadata = {
  title: 'Plan Your Trip',
  description:
    'Answer five questions to shape a FairwayPal golf trip with a golf itinerary and a partner itinerary.',
  alternates: {
    canonical: 'https://fairwaypal.com/plan',
  },
  openGraph: {
    title: 'Plan Your Trip',
    description:
      'Shape a golf trip in five steps — destination, dates, group, budget, vibe.',
    url: 'https://fairwaypal.com/plan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Your Trip',
    description:
      'Shape a golf trip in five steps — destination, dates, group, budget, vibe.',
  },
}

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <h1 className="sr-only">Plan Your Golf Trip</h1>
      <main className="pt-20">
        <PlanClient />
      </main>
    </div>
  )
}
