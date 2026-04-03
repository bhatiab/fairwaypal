'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Users,
  Ticket,
  Calendar,
  Headphones,
  MapPin,
  ChevronDown,
} from 'lucide-react'
import { useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

interface FirstTimeHubClientProps {
  faqs: FaqItem[]
}

const CIRCUIT_GUIDES = [
  {
    slug: 'mugello',
    name: 'Mugello',
    hook: 'The best atmosphere on the calendar',
    country: 'Italy',
  },
  {
    slug: 'silverstone',
    name: 'Silverstone',
    hook: "Britain's home of MotoGP",
    country: 'United Kingdom',
  },
  {
    slug: 'assen',
    name: 'Assen',
    hook: "The Cathedral — MotoGP's oldest event",
    country: 'Netherlands',
  },
  {
    slug: 'catalunya',
    name: 'Catalunya',
    hook: 'Beach + racing near Barcelona',
    country: 'Spain',
  },
]

const DIFFERENCE_CARDS = [
  {
    icon: Ticket,
    title: 'Paddock Access for Everyone',
    description:
      'Unlike F1, MotoGP paddock access is widely available. Many circuits sell paddock walk passes, and some rounds include free pit lane walks on Thursday or Friday. You can get close to the bikes and teams without a hospitality package.',
  },
  {
    icon: Calendar,
    title: 'Three Championships in One Weekend',
    description:
      'Every MotoGP weekend includes Moto3, Moto2, and MotoGP races — three distinct championships with different bikes and riders. Some rounds also feature MotoE. That means 6+ races across the weekend vs. a single main event.',
  },
  {
    icon: Users,
    title: 'Fan Culture That Feels Real',
    description:
      'Camping at the circuit, track walks during free practice, and genuine rider accessibility define the MotoGP experience. Riders do autograph sessions, fan zones are free, and the crowd skews passionate rather than corporate.',
  },
  {
    icon: Headphones,
    title: 'Saturday Sprint Race',
    description:
      'Since 2023, every MotoGP round includes a Sprint Race on Saturday — a half-distance race with full championship points. That gives you two MotoGP race starts in one weekend, not just Sunday.',
  },
]

export default function FirstTimeHubClient({ faqs }: FirstTimeHubClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your First MotoGP Race
          </h1>
          <p className="font-body mt-4 max-w-2xl text-lg text-muted-foreground">
            MotoGP weekends are loud, accessible, and packed with on-track action
            from Friday to Sunday. Three racing classes, real paddock access, and
            a fan culture that makes F1 feel buttoned-up. Here is what to expect
            and how to plan around the things that actually trip people up.
          </p>
        </div>
      </section>

      {/* What Makes MotoGP Different */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          What Makes MotoGP Different
        </h2>
        <p className="font-body mt-2 text-muted-foreground">
          If you are coming from F1 or have never been to a motorsport event,
          here is what sets a MotoGP weekend apart.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {DIFFERENCE_CARDS.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Circuit-Specific Guides */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Circuit-Specific First-Timer Guides
          </h2>
          <p className="font-body mt-2 text-muted-foreground">
            Each circuit has its own transport quirks, viewing spots, and mistakes
            to avoid. Pick the one you are heading to.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CIRCUIT_GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/first-time/${guide.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/50"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="font-body text-xs uppercase tracking-wide text-muted-foreground">
                      {guide.country}
                    </span>
                  </div>
                  <h3 className="font-display mt-1 text-lg font-semibold text-foreground">
                    {guide.name}
                  </h3>
                  <p className="font-body mt-0.5 text-sm text-muted-foreground">
                    {guide.hook}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Paddock Access */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Paddock Access
        </h2>
        <p className="font-body mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          One of the biggest differences between MotoGP and F1 is how close you can
          get. The MotoGP paddock is not locked behind five-figure hospitality
          packages the way F1's is. Here is how access typically works:
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              VIP Village
            </h3>
            <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">
              Premium hospitality with paddock access, pit lane walks, grid access,
              and catering. Available at every round through MotoGP's official VIP
              Village program. Prices vary by circuit but are a fraction of
              equivalent F1 hospitality.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Paddock Experience Passes
            </h3>
            <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">
              Some circuits sell standalone paddock walk passes or include them in
              premium grandstand tickets. These let you walk through the paddock
              area, see the team garages from outside, and get much closer to the
              action than general admission.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display text-base font-semibold text-foreground">
              Pit Lane Walks
            </h3>
            <p className="font-body mt-2 text-sm leading-relaxed text-muted-foreground">
              Several circuits offer free or low-cost pit lane walks on Thursday or
              Friday morning, before the track goes live. This is when you can see
              bikes being prepared, meet team staff, and occasionally get rider
              autographs. Check the specific event schedule — availability varies.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Common Questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-background"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-display pr-4 text-base font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="border-t border-border px-5 pb-4 pt-3">
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          Plan Your Trip
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/calendar"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Race Calendar
              </h3>
              <p className="font-body mt-1 text-sm text-muted-foreground">
                See the full race calendar
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
          <Link
            href="/cheapest-races"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Most Affordable Races
              </h3>
              <p className="font-body mt-1 text-sm text-muted-foreground">
                Find the most affordable races
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </Link>
        </div>
      </section>
    </main>
  )
}
