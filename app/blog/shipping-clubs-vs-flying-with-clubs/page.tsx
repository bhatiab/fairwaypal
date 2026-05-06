/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Shipping Clubs vs Flying with Clubs: The Honest 2026 Numbers | FairwayPal',
  description:
    'A friendly, honest breakdown of shipping golf clubs versus flying with them. Real airline bag fees, Ship Sticks and Luggage Forward pricing, when each option wins, and the gotchas nobody warns you about.',
  alternates: { canonical: 'https://fairwaypal.com/blog/shipping-clubs-vs-flying-with-clubs' },
  openGraph: {
    title: 'Shipping Clubs vs Flying with Clubs: The Honest 2026 Numbers',
    description:
      'Should you ship your clubs or fly with them? Real numbers, by airline and by route. The friendly guide.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shipping Clubs vs Flying with Clubs: The Honest 2026 Numbers',
  description:
    'Practical comparison of shipping versus flying with golf clubs in 2026. Airline bag fees by carrier, Ship Sticks and Luggage Forward pricing, decision matrix, and the gotchas nobody warns you about.',
  url: 'https://fairwaypal.com/blog/shipping-clubs-vs-flying-with-clubs',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
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
      name: 'Shipping Clubs vs Flying',
      item: 'https://fairwaypal.com/blog/shipping-clubs-vs-flying-with-clubs',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it cheaper to ship golf clubs or fly with them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on the airline and the route. On American, Delta, and United, a round trip with golf clubs typically costs $150 to $250 in bag fees alone, plus another $100 to $200 per leg if your bag is over 50 lbs. Door-to-door shipping with Ship Sticks or Luggage Forward runs $80 to $150 each way ($160 to $300 round trip) for domestic US, with full insurance and tracking included. Shipping is usually slightly cheaper or comparable, with the bonus of skipping the airport entirely. Southwest is the exception: their flat $75 golf bag surcharge (or free under 50 lbs on some routes) makes flying clearly cheaper if your group is on Southwest.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Ship Sticks cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Domestic US shipping with Ship Sticks typically costs $80 to $150 one-way, depending on the route and the speed (ground versus expedited). Cross-country shipments run $90 to $140 each way. Insurance is included up to $1,000 for golf clubs at no extra cost; you can add coverage up to $7,500 for an additional fee. Ship Sticks guarantees end-of-day delivery on the scheduled date and offers $200 in delay protection. Door-to-door pickup and drop-off are included.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Luggage Forward cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Luggage Forward pricing is in the same range as Ship Sticks ($80 to $150 one-way domestic, more for international). Their differentiator is the on-time guarantee: if your bag is late, they refund double what you paid to ship it, which is more generous than Ship Sticks' $200 cap. Base insurance coverage is $500. Luggage Forward has been operating since 2005 and reports a 99% on-time delivery rate. For an international trip (US to Scotland, Ireland, or Portugal), Luggage Forward is the more established choice.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which airlines have the cheapest golf bag fees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Southwest Airlines is comfortably the cheapest: a flat $75 golf bag surcharge, or sometimes free as the first checked bag under 50 lbs (policies vary, check current rates). American, Delta, and United all charge standard checked bag fees of $35 to $40 per leg, plus oversize/overweight fees of $100 to $200 per leg if the bag exceeds 50 lbs (which most full sets in a hard case do). United also requires pre-approval for golf bags; failing to register in advance can result in denied boarding or doubled fees. JetBlue and Alaska are middle-of-the-road. Spirit and Frontier add their own surcharges that can be unpredictable. Always check the current policy on the airline's website before you book.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should you ship clubs versus fly with them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Ship if: you are flying American, Delta, or United (the bag fees often equal or exceed shipping); you have a tight connection (skipping the bag carousel saves real time); you want clubs waiting at the resort pro shop on arrival; or you are flying internationally with a US-based carrier. Fly with them if: you are on Southwest (flat $75 fee is hard to beat); you have a direct flight on a route you trust; you want to keep your clubs in your sight at all times (some golfers prefer this); or your itinerary is too tight for the 4 to 7 day shipping window.",
      },
    },
    {
      '@type': 'Question',
      name: 'How early should I ship my clubs before a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For domestic US shipping, plan 4 to 7 business days from pickup to delivery on standard ground service. Ship Sticks and Luggage Forward both offer expedited 2 to 3 day options at higher prices. Pick a delivery date 1 to 2 days before your arrival to give the resort time to receive and store the clubs. For international shipping (US to UK, Ireland, Portugal), plan 7 to 10 business days minimum and add 2 to 3 days for customs at peak periods. Always print the return label before you fly so the trip home is just one phone call from the resort pro shop.",
      },
    },
  ],
}

export default function ShippingClubsVsFlyingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        {/* Hero */}
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Shipping Clubs vs Flying with Clubs: The Honest 2026 Numbers
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          For a long time the answer was easy: of course you fly with your clubs, that is what golfers do. Then airline bag fees crept up, oversize and overweight surcharges piled on, and Ship Sticks and Luggage Forward got really good at door-to-door delivery. In 2026 the math is genuinely different by carrier and by route, and a lot of groups are still defaulting to the old answer when shipping would be cheaper, faster at the airport, and less stressful. Here are the real numbers.
        </p>

        {/* Quick verdict */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The simple rule</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">If you are on Southwest, fly with them.</span> The $75 flat fee (sometimes free) is hard to beat. <span className="font-semibold text-foreground">If you are on American, Delta, or United, ship them.</span> The combined bag fee plus oversize charges typically equal or exceed shipping, and your clubs are waiting at the resort pro shop on arrival. <span className="font-semibold text-foreground">For international (Scotland, Ireland, Algarve), ship them via Luggage Forward.</span> The savings on baggage and the avoidance of customs hassle are usually worth it.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* The numbers */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The numbers, side by side
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For a typical full set in a hard travel case (around 50 to 55 lbs total), here is what a round trip actually costs in 2026.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-3 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Method</span>
                <span className="text-center">Round trip cost</span>
                <span className="text-center">Notes</span>
              </div>
              {[
                ['Southwest, under 50 lbs', '$75 flat or free', 'Best value. Confirm current policy.'],
                ['American / Delta / United, under 50 lbs', '$70 to $100', 'Standard checked bag fees.'],
                ['American / Delta / United, 51 to 70 lbs', '$170 to $300', 'Oversize/overweight fees per leg.'],
                ['Ship Sticks ground, US domestic', '$160 to $300', 'Door-to-door, $1,000 insurance, end-of-day guarantee.'],
                ['Luggage Forward ground, US domestic', '$160 to $300', 'Door-to-door, double-money-back if late, 99% on-time.'],
                ['International (US to UK or EU)', '$300 to $600+', 'Ship Sticks or Luggage Forward; airlines often charge $200+.'],
              ].map(([method, cost, note]) => (
                <div key={method} className="grid grid-cols-3 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{method}</span>
                  <span className="text-center font-medium text-foreground">{cost}</span>
                  <span className="text-center text-xs text-muted-foreground">{note}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              The honest takeaway: if your bag is over 50 lbs (most full sets in a hard case are), the airline math gets ugly fast on AA/Delta/United. Shipping looks more attractive once you factor in the oversize fee.
            </p>
          </section>

          {/* By airline */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              By airline: the gotchas
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Each major US carrier has quirks worth knowing before you book.
            </p>
            <div className="mt-6 space-y-4">
              <AirlineCard
                airline="Southwest"
                cost="$75 flat surcharge for golf bag, or first checked bag free under 50 lbs"
                gotcha="Confirm current policy before relying on this. Southwest's bag policy has been the most golfer-friendly for years; small changes can affect the math."
              />
              <AirlineCard
                airline="American Airlines"
                cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs"
                gotcha="Most full sets in a hard case clip the 50 lb threshold. Weigh your case at home before you go. Hard cases themselves can weigh 8 to 12 lbs empty."
              />
              <AirlineCard
                airline="Delta"
                cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs"
                gotcha="Same overweight rules as American. Sky Priority and Diamond status golfers sometimes get a checked bag free, which changes the math."
              />
              <AirlineCard
                airline="United"
                cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs"
                gotcha="United requires pre-approval for golf bags. Failure to register in advance can result in denied boarding or doubled fees. This is the single biggest United-specific issue: do not skip the registration."
              />
              <AirlineCard
                airline="JetBlue"
                cost="$35-45 first checked bag; oversize fees apply over 50 lbs or 62 in length"
                gotcha="JetBlue is generally clear and reasonable, but the 62 inch length limit catches some hard cases. Measure before you go."
              />
              <AirlineCard
                airline="Alaska"
                cost="$35 first checked bag; oversize $100 if over 50 lbs"
                gotcha="Alaska's overweight fee is lower than the legacy carriers. If you are West Coast and on Alaska, the math is more competitive."
              />
              <AirlineCard
                airline="International (BA, Aer Lingus, TAP)"
                cost="$150 to $250+ each way for golf bags on transatlantic"
                gotcha="Premium economy and business class often include golf bag handling. Check fare-class fine print. International golf bag fees are where shipping starts looking obvious."
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Always check the current policy on the airline's website before you book. Bag fees change.
            </p>
          </section>

          {/* Shipping services */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The two shipping services worth using
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The category has consolidated around two operators. Both are good. The differences matter at the margin.
            </p>
            <div className="mt-6 space-y-4">
              <ServiceCard
                name="Ship Sticks"
                price="Domestic US: $80-150 one-way; cross-country $90-140 each way"
                strengths={['Higher base insurance ($1,000 included for clubs)', 'End-of-day delivery guarantee on scheduled date', 'Strong domestic US infrastructure', 'Phone and chat support is responsive']}
                weaknesses={['Delay protection capped at $200', 'Slightly less polished international service than Luggage Forward']}
              />
              <ServiceCard
                name="Luggage Forward"
                price="Domestic US: similar range; international US-to-UK/EU $300-600+"
                strengths={['Double-money-back guarantee if delivery is late', '99% on-time delivery rate (since 2005)', 'Stronger international experience and customs handling', 'Many high-end golf trip outfitters partner with them']}
                weaknesses={['Base insurance is lower ($500)', 'Slightly higher prices on some domestic routes']}
              />
            </div>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Both services pick up from your home, office, or hotel and deliver door-to-door to the resort pro shop or another address. Both include tracking. Both let you ship round trip with one booking.
            </p>
          </section>

          {/* When to ship */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              When to ship instead of fly
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Ship in any of these cases:
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>You are flying American, Delta, or United.</strong> The combined fees often match or exceed shipping costs, and shipping eliminates the airport hassle entirely.</li>
              <li><strong>Your bag is over 50 lbs.</strong> Hard cases plus a full set with extras tip over 50 lbs more often than golfers expect. Once you trigger the oversize fee, shipping wins.</li>
              <li><strong>You have a tight connection.</strong> Oversized bags often miss tight connections. A late club arrival ruins day one. Shipping removes the risk entirely.</li>
              <li><strong>You want clubs waiting at the resort.</strong> No bag drop drama on arrival; clubs are at the pro shop, sorted, ready for your tee time.</li>
              <li><strong>You are going international.</strong> Customs handling, oversized international bag fees, and the long airport waits make shipping the dramatically better experience for transatlantic trips.</li>
              <li><strong>You are nervous about your clubs being mishandled.</strong> Both services include real insurance; airlines pay out at much lower limits and only after a long claims process.</li>
            </ul>
          </section>

          {/* When to fly */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              When flying with them still wins
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>You are on Southwest.</strong> $75 flat (or sometimes free) is unbeatable. Just do this.</li>
              <li><strong>You have a direct flight on a route you trust.</strong> Direct flights mean less risk of mishandled bags. If your home airport has a direct to your destination on a carrier you have used before without trouble, flying with them is fine.</li>
              <li><strong>You want clubs in sight at all times.</strong> Some golfers (especially with custom or expensive equipment) genuinely prefer to know their bag is on the same plane. Reasonable preference.</li>
              <li><strong>Your trip is too tight for shipping.</strong> If you are flying out tomorrow and decide to play, shipping does not work. Standard ground is 4 to 7 business days.</li>
              <li><strong>You are flying first class or have status with checked bag included.</strong> If a checked golf bag is included with your fare or status, flying is essentially free.</li>
            </ul>
          </section>

          {/* Tips for both */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Practical tips for either method
            </h2>
            <div className="mt-6 space-y-4">
              <TipCard
                title="Use a hard case, not a soft bag"
                detail="A Sun Mountain ClubGlider, OGIO Mutant, or Vessel hard case protects your clubs from the inevitable rough handling. The case adds 8 to 12 lbs but is worth every ounce. Stuff a couple of pairs of shoes and rolled-up shirts in the bag for cushioning around the clubheads."
              />
              <TipCard
                title="Weigh your bag at home before you go"
                detail="A digital luggage scale costs $15 and tells you whether you are over 50 lbs. Once you know, you can make decisions: shift items to a carry-on, take fewer driver covers, or accept the overweight fee with eyes open. Surprise overweight charges at the counter are the worst kind."
              />
              <TipCard
                title="Pack a head cover, a putter cover, and a few towels around clubheads"
                detail="The most common shipping or flying damage is to clubheads. Soft cushioning around the heads costs nothing and prevents most issues."
              />
              <TipCard
                title="If shipping, schedule arrival 1 to 2 days before you fly"
                detail="The resort pro shop will hold the bag and you start the trip with one less thing to worry about. Most resort pro shops handle inbound shipments daily; call ahead to confirm."
              />
              <TipCard
                title="Print or save the return label before you fly"
                detail="At the end of the trip, the resort pro shop drops your bag in for the return shipment. The return label needs to be ready. Both Ship Sticks and Luggage Forward send the return label by email when you book round trip."
              />
              <TipCard
                title="Know who handles which bag in the group"
                detail="One person should take responsibility for organising the group's club logistics: who is shipping, who is flying with theirs, what time the resort needs them. Add it to the trip plan early."
              />
            </div>
          </section>

          {/* International */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              International trips: ship them
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For trips to Scotland, Ireland, the Algarve, or anywhere else international, the math is even more decisive. Transatlantic golf bag fees on most carriers are $150 to $250+ each way. Add long airport waits with oversized bags, customs queues, and the jet-lagged uncertainty about whether your clubs actually arrived, and shipping starts looking obvious.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Luggage Forward is the more established international option (since 2005, established UK and EU customs handling). Plan 7 to 10 business days minimum from pickup to delivery, and add 2 to 3 days for customs at peak periods. Pickup from your home or office, delivery to the resort pro shop. Costs typically $300 to $600 each way for transatlantic depending on weight and origin/destination.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Customs declarations are handled by the shipper; you provide details at booking. Be honest about the value of the clubs (this affects insurance) and keep the receipts/declaration handy in case the resort asks. In practice, customs almost never delays a shipment once it is properly declared.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan the trip in 5 minutes. Decide the clubs after.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds the dual itinerary so you can focus on logistics like the clubs once the destination and dates are locked.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Start Planning
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Shipping vs flying with clubs FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="Is it cheaper to ship golf clubs or fly with them?"
                answer="Depends on the airline. On American, Delta, and United, round-trip bag fees often equal or exceed door-to-door shipping ($160-300). Southwest is cheaper to fly with ($75 flat). Most groups end up shipping for the convenience even when costs are similar."
              />
              <FaqItem
                question="How much does Ship Sticks cost?"
                answer="$80-150 one-way domestic US, including $1,000 club insurance and end-of-day delivery guarantee. Add $200 delay protection at no extra cost."
              />
              <FaqItem
                question="How much does Luggage Forward cost?"
                answer="Similar to Ship Sticks domestically. International US-to-UK/EU runs $300-600+. Differentiator: double-money-back if late, 99% on-time delivery rate, $500 base insurance."
              />
              <FaqItem
                question="Which airlines have the cheapest golf bag fees?"
                answer="Southwest ($75 flat or sometimes free). American, Delta, United run $35-40 first bag plus $100-200 oversize fees if over 50 lbs. United requires pre-approval."
              />
              <FaqItem
                question="When should you ship instead of fly?"
                answer="Ship if: flying AA/Delta/United, bag is over 50 lbs, tight connection, want clubs at the resort on arrival, or going international. Fly if: on Southwest, direct flight you trust, or flying first class with bag included."
              />
              <FaqItem
                question="How early should I ship clubs before a trip?"
                answer="4-7 business days domestic, 7-10 days international plus 2-3 for customs. Schedule delivery 1-2 days before arrival. Print the return label before you fly."
              />
            </div>
          </section>

          {/* Related Posts */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              Related guides
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs by destination and group size."
              />
              <RelatedPost
                href="/blog/how-to-split-costs-golf-trip"
                title="How to Split Costs Without Resentment"
                description="Tip and shipping fees usually go in the individual bucket, not the shared pot."
              />
              <RelatedPost
                href="/blog/golf-trip-tipping-guide"
                title="Tipping on a Golf Trip"
                description="Caddies, bag drops, halfway house. Country-by-country guidelines."
              />
              <RelatedPost
                href="/blog/best-golf-trip-apps"
                title="Best Golf Trip Apps and Tools"
                description="The 12 apps that actually make a golf trip easier."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What to pack and how to pack it (especially around the clubs)."
              />
              <RelatedPost
                href="/blog/how-to-plan-a-golf-trip"
                title="How to Plan a Golf Trip"
                description="The complete step-by-step planning guide."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function AirlineCard({ airline, cost, gotcha }: { airline: string; cost: string; gotcha: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{airline}</h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-fairway-text">{cost}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{gotcha}</p>
    </div>
  )
}

function ServiceCard({ name, price, strengths, weaknesses }: { name: string; price: string; strengths: string[]; weaknesses: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs text-gold">{price}</p>
      <ul className="mt-3 space-y-1">
        {strengths.map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-fairway-text">+</span>{s}
          </li>
        ))}
        {weaknesses.map((w) => (
          <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-partner-text">−</span>{w}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TipCard({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <p className="text-base font-semibold text-foreground">{title}</p>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">
        {question}
        <span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">
        {answer}
      </div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"
    >
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
