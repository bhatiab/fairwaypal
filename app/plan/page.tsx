import type { Metadata } from 'next'
import Navbar from '../../src/components/Navbar'
import Footer from '../../src/components/Footer'
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
      'Shape a golf trip in five steps and turn the early chaos into a clearer shared brief.',
    url: 'https://fairwaypal.com/plan',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plan Your Trip',
    description:
      'Shape a golf trip in five steps and turn the early chaos into a clearer shared brief.',
  },
}

export default function PlanPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <header className="mb-10 max-w-3xl">
          <p className="eyebrow">Five-Step Intake</p>
          <h1 className="mt-4 text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl">
            Build the trip frame before the group chat builds chaos.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Answer the core trip questions one at a time, lock the basic shape of the weekend, and produce a brief the organiser can use to move straight into itinerary building.
          </p>
        </header>

        <PlanClient />
      </main>
      <Footer />
    </div>
  )
}