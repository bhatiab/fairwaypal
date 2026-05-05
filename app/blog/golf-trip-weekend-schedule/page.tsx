/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 5, 2026'

export const metadata: Metadata = {
  title: 'Golf Weekend Itinerary Template: 3-Night Schedule — FairwayPal',
  description:
    'A complete 3-night golf weekend schedule — tee times, meals, partner activities, and a day-by-day template you can use for any destination. Golfer and partner columns side by side.',
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-weekend-schedule' },
  openGraph: {
    title: 'Golf Weekend Itinerary Template: 3-Night Schedule',
    description:
      'The complete 3-night golf weekend schedule — what to do, when, and how to keep both golfers and partners happy. A template you can copy for any destination.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Golf Weekend Itinerary Template: 3-Night Schedule',
  description:
    'A complete 3-night golf weekend schedule with golfer and partner activities side by side. Use it as a template for any destination.',
  url: 'https://fairwaypal.com/blog/golf-trip-weekend-schedule',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Golf Weekend Schedule',
      item: 'https://fairwaypal.com/blog/golf-trip-weekend-schedule',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a typical golf weekend itinerary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 3-night golf weekend runs Thursday evening to Sunday afternoon: arrive Thursday, play 27 holes over Friday and Saturday, use Saturday evening for a group dinner, play a final 18 holes Sunday morning, then depart. Total golf: 2–3 rounds (36–54 holes). Rest and meals are built around an early first tee time each day — usually 7:30–8:30 AM.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many rounds of golf can you play in a weekend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A serious group can play 3 rounds (54 holes) over a 3-night trip: 18 Friday, 18 Saturday, 18 Sunday morning. A more relaxed group plays 2 rounds (36 holes). Playing 36 holes in a single day is possible but tiring — most groups prefer spreading it over multiple days to allow proper recovery time. If you plan 27 holes in one day, start early (7 AM) and have a very light lunch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time should you tee off on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal tee time on a golf trip is 7:30–8:30 AM. Early tee times mean less heat (especially in warm destinations), the course is at its quietest, you finish by early afternoon, and the rest of the day is free. Afternoon tee times (after 1 PM) are significantly slower due to course congestion and push the round into early evening — fine for a practice round, not ideal for the marquee round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do non-golfers do during a golf weekend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-golfers on a golf weekend need a full day programme that doesn\'t depend on the golfers. The most successful setups: a spa day (half-day treatment plus pool), a city or town exploration day, an organised activity (hiking, kayaking, cooking class), or simply a beach day at coastal destinations. The critical rule: don\'t leave partners with "free time" — free time without a plan becomes waiting, which creates resentment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you plan a golf weekend with partners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan partner activities before finalising the golf schedule, not after. Book partner activities (spa, tours, day trips) at the same time as tee times. Choose a destination where both the golf and the partner experience are genuinely good — not where the golf is great and the partner plan is an afterthought. The shared dinner each evening is the social anchor for both groups; book it in advance.',
      },
    },
  ],
}

export default function GolfTripWeekendSchedulePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <nav className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Golf Weekend Schedule</span>
        </nav>

        <p className="eyebrow">Planning Guide</p>

        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          The 3-Night Golf Weekend<br />Schedule Template
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>9 min read</span>
          <span>·</span>
          <span>Planning</span>
        </div>

        <BlogByline lastUpdated={LAST_UPDATED} />

        <div className="prose-article">

          <p className="text-lg text-muted-foreground leading-8 mt-0">
            Most golf trip schedules are built backwards — the organiser books tee times, then figures out everything else around them. This template starts with the full picture: golf and partner activities side by side, meals planned, and the logic behind each timing decision explained. Copy it for any destination. Or at the end, let FairwayPal build one for your specific trip in 5 minutes.
          </p>

          {/* The framework */}
          <h2>The Framework: What Makes a Good Golf Weekend</h2>

          <p>
            A 3-night golf trip has four structural constraints that everything else fits around:
          </p>

          <ol>
            <li><strong>Tee times are fixed</strong> — everything else adjusts to them, not the other way around</li>
            <li><strong>Golf takes longer than you think</strong> — budget 5 hours per round including transport, warm-up, and the post-round beer</li>
            <li><strong>Partner activities need to be planned as seriously as tee times</strong> — not improvised on the day</li>
            <li><strong>One shared meal per day is the social glue</strong> — dinner together, every night</li>
          </ol>

          <p>
            The template below uses <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale, Arizona</Link> as the example destination. The structure works for any destination — swap the venue names for your location.
          </p>

          {/* Pre-trip checklist */}
          <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 my-8">
            <h3 className="text-base font-semibold text-foreground mt-0 mb-4">Before You Leave: The Booking Checklist</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span><strong className="text-foreground">Tee times booked</strong> — all 3 rounds confirmed. Don't book trips without tee times. Course availability drives the destination, not the other way around.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span><strong className="text-foreground">Accommodation confirmed</strong> — one location for the whole group. No splitting across two hotels.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span><strong className="text-foreground">Partner activities booked</strong> — spa, tours, and any organised activities. These fill up, especially at peak destinations.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span><strong className="text-foreground">Saturday dinner reserved</strong> — the main group dinner. Book this first; good restaurants at golf destinations fill up weeks ahead.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold mt-0.5">✓</span>
                <span><strong className="text-foreground">Transport planned</strong> — airport to accommodation, accommodation to courses. Confirm who's renting a car or if the resort offers a shuttle.</span>
              </div>
            </div>
          </div>

          {/* Day by day */}
          <h2>The Schedule: Day by Day</h2>

          {/* Thursday */}
          <div className="rounded-xl border border-border bg-card/60 p-6 my-6">
            <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">Thursday: Arrival Day</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-3">Golfers</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">Noon–3 PM</span>
                    <span>Fly in. Land at Phoenix Sky Harbor (PHX). Car rental or rideshare to Scottsdale — 20–40 min depending on property location.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3–5 PM</span>
                    <span>Check in. Pool. Unpack. No golf today — Thursday is recovery and logistics. The temptation to squeeze in a quick 9 holes is real; resist it.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">5–6 PM</span>
                    <span>Group briefing: tomorrow's tee time, course dress code, car logistics, who's riding with whom. Keep it short.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7 PM</span>
                    <span>Casual dinner — something close to the accommodation. No long drives tonight. Keg & String or the property restaurant work well.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">9 PM</span>
                    <span>Early night. The round starts in 10 hours. Anyone who stays out past midnight on Thursday is the reason the group plays badly on Friday.</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-3">Partners</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">Noon–3 PM</span>
                    <span>Same arrival. Travel together if possible — departing from the same city on the same flight saves coordination overhead at the other end.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3–6 PM</span>
                    <span>Pool time and property exploration. Scottsdale resort properties have genuinely excellent pools — this isn't a consolation activity.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">6 PM</span>
                    <span>Optional: walk Old Town Scottsdale if staying centrally. Good for casual shopping and early cocktails at one of the rooftop bars.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7 PM</span>
                    <span>Dinner together — same as golfers. Thursday is the one day where the schedule is fully shared.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Friday */}
          <div className="rounded-xl border border-border bg-card/60 p-6 my-6">
            <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">Friday: The Opening Round</h3>
            <p className="text-sm text-muted-foreground mb-4">Play the second-best course on Friday. Save the marquee round for Saturday when everyone is loose and settled in.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-3">Golfers</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">6:00 AM</span>
                    <span>Wake up. Coffee. Quick breakfast — banana, energy bar, or whatever the property has. A full cooked breakfast before a morning round is a mistake; you'll feel it on the back nine.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">6:30 AM</span>
                    <span>Leave for the course. Allow 30 minutes travel plus 15 minutes to unload, check in, and warm up. Arriving at the first tee stressed is a bad start.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7:30 AM</span>
                    <span>Tee time. 18 holes. Budget 4.5 hours for the round including the inevitable slow foursome in front of you.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">Noon</span>
                    <span>Post-round lunch at the clubhouse. Settle bets. Review scorecards. This is the most social part of any golf trip and it deserves 45 minutes, not 15.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">2 PM</span>
                    <span>Back to the property. Pool and recovery. Friday afternoon is not for planning the next round — it's for doing nothing useful.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7 PM</span>
                    <span>Dinner — casual, near the property. The main event dinner is Saturday. Friday should be relaxed.</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-3">Partners</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">8 AM</span>
                    <span>Sleep in. Proper breakfast at the property. No 6 AM alarms unless they want one.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">9:30 AM</span>
                    <span>Spa. Book a half-day package in advance: one treatment, full spa access for the day. In Scottsdale, Civana, Miraval, or the Four Seasons spa are worth the price. This is not the day to improvise.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">1 PM</span>
                    <span>Lunch at the spa or a nearby spot. Old Town Scottsdale is close if the property is centrally located.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3 PM</span>
                    <span>Explore Old Town or Fashion Square. Not obligatory — the pool back at the property is a legitimate alternative.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7 PM</span>
                    <span>Dinner with golfers. Casual Friday — everyone is tired from the travel and first full day.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Saturday */}
          <div className="rounded-xl border border-border bg-card/60 p-6 my-6">
            <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">Saturday: The Main Event</h3>
            <p className="text-sm text-muted-foreground mb-4">The marquee round and the group dinner. This is the day the trip is remembered by.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-3">Golfers</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">6:00 AM</span>
                    <span>Same routine as Friday. The body is adjusted to the schedule now — this is the sharpest round of the trip for most players.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7:30 AM</span>
                    <span>Tee time at the marquee course. In Scottsdale: TPC Scottsdale (Stadium), We-Ko-Pa Saguaro, or Whisper Rock if you have access. The one everyone agreed on when the trip was first planned.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">1 PM</span>
                    <span>Post-round clubhouse lunch. Saturday's round is the one with the most to discuss — best shots, worst moments, the bet that went sideways on 17.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3 PM</span>
                    <span>Return to property. Get some rest — Saturday evening is the main group dinner and it will go late.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7:30 PM</span>
                    <span>Group dinner — the one you reserved 4 weeks ago. In Scottsdale: Bourbon Steak at the Four Seasons, Mastro's City Hall, or Café Monarch. Not a casual spot — this is the event of the weekend.</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-3">Partners</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">8 AM</span>
                    <span>Sunrise desert hike — Camelback, Pinnacle Peak, or the McDowell Sonoran Preserve. Best done early before the heat builds. Bring water.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">11 AM</span>
                    <span>Farmer's markets (Saturday morning, Old Town) or Old Town exploration and gallery browsing.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">1 PM</span>
                    <span>Lunch — Matt's Big Breakfast, The Henry, or Snooze for something casual and good.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3 PM</span>
                    <span>Pool or light shopping. Wind down before the evening. No one wants to be exhausted at the main dinner.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7:30 PM</span>
                    <span>Group dinner. Same table as golfers — this is the shared moment of the weekend. Both groups have had a full day; there's actually something to talk about.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sunday */}
          <div className="rounded-xl border border-border bg-card/60 p-6 my-6">
            <h3 className="text-lg font-semibold text-foreground mt-0 mb-4">Sunday: Farewell Round + Departure</h3>
            <p className="text-sm text-muted-foreground mb-4">One more round for golfers; a slow morning for everyone else. Flights typically 3–6 PM to allow a morning round.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-fairway-text mb-3">Golfers</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">6:00 AM</span>
                    <span>Last early morning. Bags packed and by the door before leaving for the course.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">7:30 AM</span>
                    <span>Final round — at the most accessible course on the list. Sunday is a farewell lap, not a pressure round. Cougar Point, Grayhawk Talon, or Kierland Commons work well: good but not intimidating.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">12:30 PM</span>
                    <span>Quick lunch. Load cars. Drive to PHX — allow 45 minutes minimum plus 1.5 hours before departure.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3–5 PM</span>
                    <span>Flights home.</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-partner-text mb-3">Partners</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">8 AM</span>
                    <span>Sleep in. Leisurely breakfast at the property. Pack.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">10 AM</span>
                    <span>One last pool hour, coffee on the terrace, or a final walk. Sunday morning is the easiest part of the schedule.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">12:30 PM</span>
                    <span>Meet golfers at the car. Lunch together on the way to the airport or at the terminal.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-foreground font-medium shrink-0 w-20">3–5 PM</span>
                    <span>Same flights as golfers. Always book return flights together — the split-airport scramble at the end of a trip is chaotic and avoidable.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timing rules */}
          <h2>The Timing Rules That Matter</h2>

          <div className="space-y-4 my-8">
            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Always book the earliest available tee time</h3>
              <p className="text-sm text-muted-foreground">7:00–8:30 AM is the sweet spot. The course is empty, the temperature is manageable, and you finish by early afternoon. The 11 AM tee time sounds appealing from your sofa two weeks before the trip. On the day, it means not finishing until 4 PM with a 5-hour flight home at 7. Book early, play early.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Budget 5 hours per round, not 4</h3>
              <p className="text-sm text-muted-foreground">An 18-hole round for a group of 8 (two foursomes) takes 4–4.5 hours of actual play plus travel time to/from the course, bag drop, warm-up, and the post-round beer that always happens. Budget 5 hours from departure to return. If you're building a schedule that assumes 4-hour rounds, it will run late every day.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Plan the partner schedule before finalising golf</h3>
              <p className="text-sm text-muted-foreground">Partners' activities — spa, guided tours, hiking — have fixed start times and booking windows. Book those first, then arrange golf around them. The alternative (book golf, improvise partner activities) produces the situation where the spa is full and partners are watching Netflix while golfers play. This is not a hypothetical.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">One sit-down dinner per day, every day</h3>
              <p className="text-sm text-muted-foreground">The shared dinner is the social anchor. Lunch is individual and often split — golfers at the clubhouse, partners at wherever they are. But dinner is non-negotiable together. It's where the day gets compared, bets get settled, and the trip's story gets told. Book all three dinners in advance; don't improvise on the night.</p>
            </div>

            <div className="rounded-xl border border-border bg-card/60 p-5">
              <h3 className="text-base font-semibold text-foreground mt-0 mb-2">Leave the third evening of the trip free</h3>
              <p className="text-sm text-muted-foreground">Saturday night (in a Thursday–Sunday schedule) is the naturally busy social evening. By Sunday night, most people want to pack, process the trip, and sleep. Don't over-schedule the last evening — the dinner should end by 9 PM and wind down naturally. Trips that try to go hard every night end Sunday in tatters.</p>
            </div>
          </div>

          {/* Variations */}
          <h2>Schedule Variations</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-6 text-foreground font-semibold">Trip Length</th>
                  <th className="text-left py-3 px-4 text-foreground font-semibold">Structure</th>
                  <th className="text-left py-3 pl-4 text-foreground font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">2 nights (Fri–Sun)</td>
                  <td className="py-3 px-4">Arrive Friday afternoon, 2 rounds Saturday and Sunday morning</td>
                  <td className="py-3 pl-4">Long weekend, no PTO needed, smaller budgets</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">3 nights (Thu–Sun)</td>
                  <td className="py-3 px-4">3 rounds, the standard schedule above</td>
                  <td className="py-3 pl-4">Most groups — the best balance of golf, rest, and social time</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">4 nights (Wed–Sun)</td>
                  <td className="py-3 px-4">3–4 rounds, one recovery/social day built in</td>
                  <td className="py-3 pl-4">International trips, premium destinations, bachelor trips</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">7+ nights</td>
                  <td className="py-3 px-4">4–6 rounds across two destinations or a multi-course region</td>
                  <td className="py-3 pl-4">Scotland/Ireland pilgrimages, bucket-list US tours (Pebble + Bandon)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2>Frequently Asked Questions</h2>

          <div className="space-y-6 my-8">
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What is a typical golf weekend itinerary?</h3>
              <p className="text-sm text-muted-foreground mt-1">A typical 3-night golf weekend: arrive Thursday, play 36 holes over Friday and Saturday, Saturday evening is the group dinner, play a final 18 Sunday morning, depart Sunday afternoon. Total golf: 2–3 rounds. Early tee times (7:30–8:30 AM) each day.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How many rounds of golf can you play in a weekend?</h3>
              <p className="text-sm text-muted-foreground mt-1">A serious group can play 3 rounds (54 holes) over a 3-night trip. A more relaxed group plays 2 rounds. Playing 36 holes in one day is possible but tiring — most groups prefer spreading it across multiple days. If you plan 27 holes in one day, start at 7 AM and eat light.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What time should you tee off on a golf trip?</h3>
              <p className="text-sm text-muted-foreground mt-1">7:30–8:30 AM. Early tee times mean less heat, fewer people, and finishing by early afternoon. Afternoon tee times push the round into the evening and make the next morning brutal.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">What do non-golfers do during a golf weekend?</h3>
              <p className="text-sm text-muted-foreground mt-1">They need a full, planned day programme — not "free time." Spa, organised tours, city exploration, or beach. Don't leave partners without a plan; free time without structure becomes waiting, which creates resentment. Book partner activities at the same time as tee times.</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mt-0">How do you plan a golf weekend with partners?</h3>
              <p className="text-sm text-muted-foreground mt-1">Plan partner activities before finalising the golf schedule. Book spa and tours at the same time as tee times. Choose a destination where both the golf and the partner experience are strong. Book the shared dinner first — it's the hardest thing to get at the last minute.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center my-12">
            <h2 className="text-3xl font-display font-light italic text-foreground mt-0 sm:text-4xl">
              Or let FairwayPal build this for you.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Answer 5 questions about your trip. FairwayPal generates the full schedule — golf and partner activities, side by side, for your specific destination and group. One shareable link. Everyone votes.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link className="primary-link" href="/plan">
                Build My Golf Weekend
              </Link>
            </div>
          </div>

          {/* Related guides */}
          <h2>Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            {[
              { href: '/blog/how-to-plan-a-golf-trip', label: 'How to Plan a Golf Trip (Step by Step)' },
              { href: '/blog/golf-trip-group-size', label: 'Golf Trip Group Size: 4 vs 8 vs 12' },
              { href: '/blog/golf-trip-budget', label: 'Golf Trip Budget Breakdown' },
              { href: '/destinations/scottsdale', label: 'Scottsdale Destination Guide' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-border bg-card/60 p-4 text-sm text-muted-foreground hover:border-gold/30 hover:text-foreground transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Looking for a specific destination?{' '}
              <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link>,{' '}
              <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link>,{' '}
              <Link href="/destinations/pinehurst" className="text-gold hover:underline">Pinehurst</Link>,{' '}
              <Link href="/destinations/bandon-dunes" className="text-gold hover:underline">Bandon Dunes</Link>,{' '}
              <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link>, and{' '}
              <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link> all have full destination guides with course recommendations.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
