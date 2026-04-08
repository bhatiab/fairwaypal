import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'

export const metadata: Metadata = {
  title: 'FairwayPal — Golf trip sorted. Partners happy.',
  description:
    'Answer 5 questions. Get a dual itinerary — golf on the left, partner activities on the right. Share one link. Everyone votes. Trip locked.',
  alternates: {
    canonical: 'https://fairwaypal.com/',
  },
  openGraph: {
    title: 'FairwayPal — Golf trip sorted. Partners happy.',
    description:
      'Answer 5 questions. Get a dual itinerary. Share one link. Everyone votes. Done.',
    url: 'https://fairwaypal.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FairwayPal',
    description: 'Golf trip sorted. Partners happy.',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* ------------------------------------------------------------ */}
        {/*  Hero                                                         */}
        {/* ------------------------------------------------------------ */}
        <section className="hero-glow relative border-b border-border/60">
          <div className="ambient-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="page-shell relative py-20 sm:py-28">
            <div className="max-w-3xl space-y-7">
              <p className="eyebrow">Golf Trips, Minus the Admin</p>
              <h1 className="text-5xl font-display font-light italic leading-tight text-foreground sm:text-6xl lg:text-7xl">
                Golf trip sorted.<br />Partners happy.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                One person answers 5 questions. AI generates a dual itinerary — golf on the left, partner activities on the right. One shareable link goes to the group. Everyone votes. Conflicts resolved. Trip locked. Done in under 5 minutes of active work.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link className="primary-link" href="/plan">
                  Plan Your Trip
                </Link>
                <Link className="secondary-link" href="#how-it-works">
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  Proof Strip                                                  */}
        {/* ------------------------------------------------------------ */}
        <section className="border-b border-border/60 bg-bg-2">
          <div className="page-shell py-10">
            <div className="grid gap-4 sm:grid-cols-4">
              <ProofCard number="2" unit="min" label="of actual organiser work" />
              <ProofCard number="5" unit="questions" label="to frame the whole trip" />
              <ProofCard number="2" unit="itineraries" label="golf + partners, one link" />
              <ProofCard number="0" unit="WhatsApp" label="arguments about the plan" />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  Pain Section                                                 */}
        {/* ------------------------------------------------------------ */}
        <section className="page-shell py-20">
          <p className="eyebrow text-center">Why This Exists</p>
          <h2 className="mt-4 text-center text-3xl font-display font-light italic text-foreground sm:text-4xl">
            Three problems nobody talks about
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <PainCard
              eyebrow="The Tab Problem"
              title="Six browser tabs, one tired organiser."
              body="GolfNow for tee times, Expedia for hotels, Google Maps for distances, a spreadsheet for costs, WhatsApp for opinions, and a Notes app for the actual plan. Dave does all of it."
            />
            <PainCard
              eyebrow="The Group Chat Problem"
              title="10 people, 10 opinions, zero decisions."
              body="Someone says 'thoughts?' and the thread splits into golf debates, budget concerns, and that one person who hasn't even opened the link. Dave chases everyone individually."
            />
            <PainCard
              eyebrow="The Partner Problem"
              title="Partners are an afterthought."
              body="Golf plans get locked first. Partners are told to 'figure something out' around tee times. Trips get vetoed before they start because half the group feels excluded."
            />
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  How It Works                                                 */}
        {/* ------------------------------------------------------------ */}
        <section id="how-it-works" className="border-t border-border/60 bg-bg-2">
          <div className="page-shell py-20">
            <p className="eyebrow text-center">How It Works</p>
            <h2 className="mt-4 text-center text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Three steps. One organiser. Zero stress.
            </h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              <StepCard
                number="1"
                title="Answer 5 questions"
                body="Destination, dates, group size, budget per round, vibe. Takes 60 seconds. AI does the rest."
              />
              <StepCard
                number="2"
                title="Get a dual itinerary"
                body="Golf tee times and activities on the left. Partner spa, tours, and dining on the right. One shared dinner in the middle. All generated instantly."
              />
              <StepCard
                number="3"
                title="Share, vote, lock"
                body="Send one link. Everyone votes In or Out on each activity. You see conflicts, nudge non-voters, and lock the trip when it's ready."
              />
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  Product Preview — Split View                                 */}
        {/* ------------------------------------------------------------ */}
        <section className="page-shell py-20">
          <p className="eyebrow text-center">The Output</p>
          <h2 className="mt-4 text-center text-3xl font-display font-light italic text-foreground sm:text-4xl">
            Two trips. One link.
          </h2>
          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Golf Side */}
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-5">
                <p className="eyebrow text-fairway-text">Golf Side</p>
                <p className="mt-3 text-2xl font-display font-light text-foreground">Friday</p>
                <div className="mt-4 space-y-3">
                  <MiniActivity time="7:10 AM" name="Troon North Monument" tag="$185/round" />
                  <MiniActivity time="12:30 PM" name="Lunch at Phil's Grill" tag="$25/person" />
                  <MiniActivity time="3:00 PM" name="Skins game at TPC Scottsdale" tag="$220/round" />
                </div>
              </div>
              {/* Partner Side */}
              <div className="rounded-xl border border-partner/30 bg-partner/10 p-5">
                <p className="eyebrow text-partner-text">Partner Side</p>
                <p className="mt-3 text-2xl font-display font-light text-foreground">Friday</p>
                <div className="mt-4 space-y-3">
                  <MiniActivity time="9:00 AM" name="Joya Spa at Omni Scottsdale" tag="$180/person" />
                  <MiniActivity time="12:00 PM" name="Brunch at The Mission" tag="$35/person" />
                  <MiniActivity time="2:00 PM" name="Old Town shopping + galleries" tag="Free" />
                </div>
              </div>
            </div>
            {/* Shared Moment */}
            <div className="mt-4 rounded-xl border border-gold/30 bg-gold/5 p-5">
              <p className="eyebrow text-gold">Shared Moment</p>
              <p className="mt-2 text-lg font-display font-light text-foreground">
                Saturday 7:30 PM — Group dinner at Steak 44
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The anchor everyone rallies around. Not an afterthought.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  Dual Angle — Golf + Partners Equal Weight                    */}
        {/* ------------------------------------------------------------ */}
        <section className="border-t border-border/60 bg-bg-2">
          <div className="page-shell py-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <p className="eyebrow text-fairway-text">For the Golfers</p>
                <h3 className="mt-3 text-2xl font-display font-light text-foreground">
                  Real courses. Real prices. Your budget.
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Courses matched to your budget tier — not generic top-10 lists</li>
                  <li>Tee times scheduled around group size and vibe</li>
                  <li>Everyone votes before anyone books — no surprises</li>
                  <li>Booking links ready when the trip is locked</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-partner/20 bg-partner/5 p-8">
                <p className="eyebrow text-partner-text">For the Partners</p>
                <h3 className="mt-3 text-2xl font-display font-light text-foreground">
                  A real plan. Not an afterthought.
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Activities scheduled around golf — when they're on the course, you have a plan</li>
                  <li>Spa, dining, tours, and experiences curated for the destination</li>
                  <li>Your own column on the itinerary — equal billing, not a footnote</li>
                  <li>Vote on what you actually want to do</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ */}
        {/*  Final CTA                                                    */}
        {/* ------------------------------------------------------------ */}
        <section className="border-t border-border/60">
          <div className="page-shell py-16 text-center">
            <p className="eyebrow">Start Here</p>
            <h2 className="mt-4 text-4xl font-display font-light italic text-foreground sm:text-5xl">
              Stop planning. Start playing.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              5 questions. 2 itineraries. 1 link. 0 arguments.
            </p>
            <div className="mt-8 flex justify-center">
              <Link className="primary-link" href="/plan">
                Plan Your Trip
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Sub-components (server, no 'use client' needed)                    */
/* ------------------------------------------------------------------ */

function ProofCard({ number, unit, label }: { number: string; unit: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-3 p-4 text-center">
      <p className="text-3xl font-display font-light text-foreground">{number}</p>
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-gold">{unit}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  )
}

function PainCard({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <article className="rounded-xl border border-border bg-card/60 p-6">
      <p className="eyebrow">{eyebrow}</p>
      <h3 className="mt-3 text-xl font-display font-light text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
    </article>
  )
}

function StepCard({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
        <span className="text-lg font-display font-light text-gold">{number}</span>
      </div>
      <h3 className="mt-4 text-lg font-display font-light text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p>
    </div>
  )
}

function MiniActivity({ time, name, tag }: { time: string; name: string; tag: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div>
        <p className="text-xs text-muted-foreground">{time}</p>
        <p className="text-sm font-medium text-foreground">{name}</p>
      </div>
      <span className="shrink-0 text-xs text-muted-foreground">{tag}</span>
    </div>
  )
}
