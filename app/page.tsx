import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { FlightCTA } from '../src/components/FlightCTA'

export const metadata: Metadata = {
  title: 'FairwayPal',
  description:
    'Plan a golf trip without turning one person into the travel secretary. FairwayPal builds golf and partner itineraries from a five-step intake.',
  alternates: {
    canonical: 'https://fairwaypal.com/',
  },
  openGraph: {
    title: 'FairwayPal',
    description:
      'Golf trip sorted. Partners happy.',
    url: 'https://fairwaypal.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairwayPal',
    description:
      'Golf trip sorted. Partners happy.',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden pt-24">
        <section className="hero-glow relative border-b border-border/60">
          <div className="ambient-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="page-shell relative py-20 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-7">
                <p className="eyebrow">Golf Trips, Minus the Admin</p>
                <h1 className="max-w-4xl text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl lg:text-7xl">
                  Golf trip sorted. Partners happy.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                  FairwayPal turns a messy group trip into one shareable plan. Answer five questions, generate a golf itinerary and a parallel partner itinerary, then let the group react before anyone starts chasing in WhatsApp.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link className="primary-link" href="/plan">Start Planning</Link>
                  <Link className="secondary-link" href="/about">See The Product Shape</Link>
                </div>
                <div className="grid max-w-3xl gap-4 pt-6 sm:grid-cols-4">
                  <div className="rounded-3xl border border-border bg-card/60 p-4">
                    <p className="eyebrow">5</p>
                    <p className="mt-3 text-sm text-muted-foreground">questions to get the trip framed</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card/60 p-4">
                    <p className="eyebrow">2</p>
                    <p className="mt-3 text-sm text-muted-foreground">parallel itineraries in one link</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card/60 p-4">
                    <p className="eyebrow">1</p>
                    <p className="mt-3 text-sm text-muted-foreground">organiser who does not get buried</p>
                  </div>
                  <div className="rounded-3xl border border-border bg-card/60 p-4">
                    <p className="eyebrow">0</p>
                    <p className="mt-3 text-sm text-muted-foreground">reason for partners to feel ignored</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-border bg-card/70 p-6 backdrop-blur-xl">
                <div className="grid gap-4 md:grid-cols-2">
                  <article className="rounded-[1.5rem] border border-primary/30 bg-primary/10 p-5">
                    <p className="eyebrow text-primary-foreground/80">Golf Side</p>
                    <h2 className="mt-3 text-2xl font-display font-light text-foreground">Friday</h2>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                      <li>7:10 AM tee time at Troon North</li>
                      <li>Lunch and range reset</li>
                      <li>Late-afternoon skins game</li>
                    </ul>
                  </article>
                  <article className="rounded-[1.5rem] border border-[hsl(338_34%_34%)] bg-[hsl(338_34%_14%/.45)] p-5">
                    <p className="eyebrow text-[hsl(338_65%_70%)]">Partner Side</p>
                    <h2 className="mt-3 text-2xl font-display font-light text-foreground">Friday</h2>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                      <li>Spa morning and brunch booking</li>
                      <li>Old Town shopping window</li>
                      <li>Rooftop cocktails before dinner</li>
                    </ul>
                  </article>
                </div>
                <div className="mt-4 rounded-[1.5rem] border border-[hsl(46_62%_60%/.28)] bg-[hsl(46_62%_60%/.08)] p-5">
                  <p className="eyebrow text-[hsl(46_62%_60%)]">Shared Moment</p>
                  <p className="mt-3 text-lg font-display font-light text-foreground">Saturday dinner gets surfaced as the anchor instead of becoming an afterthought.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-shell py-20">
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-border bg-card/60 p-6">
              <p className="eyebrow">The Problem</p>
              <h2 className="mt-3 text-2xl font-display font-light text-foreground">One person becomes the organiser by accident.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Group golf trips usually run through six tabs, a spreadsheet, and a chat thread. The organiser owns every decision until everyone else has opinions.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-card/60 p-6">
              <p className="eyebrow">The Miss</p>
              <h2 className="mt-3 text-2xl font-display font-light text-foreground">Partners get bolted on late.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Golf plans get made first. Everyone else is expected to improvise around tee times. That is where trips start to feel selfish or fragile.
              </p>
            </article>
            <article className="rounded-3xl border border-border bg-card/60 p-6">
              <p className="eyebrow">The Fix</p>
              <h2 className="mt-3 text-2xl font-display font-light text-foreground">Build both sides of the trip up front.</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                FairwayPal generates both columns together, then turns the result into something the group can vote on without the organiser rewriting the plan from scratch.
              </p>
            </article>
          </div>
        </section>

        <section className="page-shell pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-border bg-card/60 p-7">
              <p className="eyebrow">How It Works</p>
              <ol className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground">
                <li>
                  <span className="block text-lg font-display text-foreground">1. Tell it where, when, and what kind of trip this is.</span>
                  Five steps frame the destination, dates, group size, budget, and vibe.
                </li>
                <li>
                  <span className="block text-lg font-display text-foreground">2. Generate a split itinerary.</span>
                  Golf is on one side, partner activity options on the other, with one obvious shared moment.
                </li>
                <li>
                  <span className="block text-lg font-display text-foreground">3. Share one link and resolve friction before booking.</span>
                  Participants vote, comment, and push back on bad fits before money gets committed.
                </li>
              </ol>
            </div>

            <div className="rounded-[2rem] border border-border bg-card/60 p-7">
              <p className="eyebrow">Preserved Commercial Surface</p>
              <div className="mt-6 space-y-4">
                <FlightCTA
                  destination="Phoenix"
                  airport="PHX"
                  dateLabel="Example travel search"
                  href="https://www.expedia.com/Flights"
                  ctaLabel="Search Expedia"
                />
                <div className="rounded-3xl border border-border/80 bg-background/70 p-5">
                  <p className="text-sm font-semibold text-foreground">GetYourGuide widget support is still wired.</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    The repo still contains the reusable GetYourGuide availability widget and offer helpers, ready to be attached to partner activity recommendations when live destinations are added.
                  </p>
                  <div className="mt-4">
                    <Link className="secondary-link" href="/affiliate-disclosure">Review Affiliate Notes</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border/60 bg-card/30">
          <div className="page-shell py-16 text-center">
            <p className="eyebrow">Start Here</p>
            <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
              Stop planning. Start playing.
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The first working product route is live now. It is a local intake flow for shaping the trip before wiring generation and persistence.
            </p>
            <div className="mt-8 flex justify-center">
              <Link className="primary-link" href="/plan">Open The 5-Step Planner</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
