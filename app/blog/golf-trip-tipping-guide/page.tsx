/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Tipping on a Golf Trip: The Complete Guide | FairwayPal',
  description:
    'A friendly, honest guide to tipping on a golf trip. Caddies, bag drops, halfway-house attendants, valet, and dinner servers, with country-by-country guidelines for the US, Scotland, Ireland, and Portugal.',
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-tipping-guide' },
  openGraph: {
    title: 'Tipping on a Golf Trip: The Complete Guide',
    description:
      'How much to tip caddies, bag drop, valet, and servers across US, Scotland, Ireland, and Portugal. Real numbers, no awkwardness.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tipping on a Golf Trip: The Complete Guide',
  description:
    'A practical country-by-country guide to tipping on a golf trip. Caddies, bag drops, halfway-house staff, valet, restaurants, and the etiquette that prevents awkwardness.',
  url: 'https://fairwaypal.com/blog/golf-trip-tipping-guide',
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
      name: 'Tipping on a Golf Trip',
      item: 'https://fairwaypal.com/blog/golf-trip-tipping-guide',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much should you tip a caddie on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Country and venue matter, but the standard ranges are: in the US, 30 to 50% of the caddie fee for a single bag (typically $40 to $80 in addition to the $50 to $100 fee at high-end resorts); in Scotland, 20 to 30% on top of the caddie fee, with £25 to £50 considered standard at the famous courses; in Ireland, 20 to 30% similarly; in Portugal and continental Europe, smaller tips are normal (€10 to €25 in addition to the fee). When in doubt, ask the caddie master at check-in what is customary at that venue.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you tip in Scotland and the UK on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Tipping in the UK is more modest than in the US, but it is expected for caddies (20 to 30% on top of the fee, typically £25 to £50 at the major venues), bag drop attendants (£2 to £5 per bag), and pro shop staff who help with rentals (small amounts, £5 to £10). Restaurant tipping in the UK runs 10 to 15% if a service charge is not included; check the bill, because many places now add a 10 to 12.5% service charge automatically. Round up taxi fares, but no large tips. Drinks at the bar are not tipped.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much should you tip the bag drop attendant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In the US, $2 to $5 per bag at most resort bag drops, given as you arrive. At very high-end resorts where the attendant cleans clubs and helps with the cart, $5 to $10 is more appropriate. In Scotland and Ireland, £2 to £5 per bag (or skip if it is a small course). In Portugal and continental Europe, tipping bag drop attendants is less common; €1 to €3 is appreciated but not expected. If the same attendant helps you again at the end of the round (cleans clubs, loads the car), a small additional tip is gracious.",
      },
    },
    {
      '@type': 'Question',
      name: 'What about the halfway house and beverage cart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In the US, tip 15 to 20% of the food and drink purchase, similar to a restaurant. The halfway house attendant is often working for tips alone. The beverage cart driver should be tipped 15 to 20% of what you order, in cash if possible. If you bought drinks for the group on the cart and the driver was patient and helpful, round up generously. In Scotland and Ireland, halfway houses are usually staffed by club staff and tipping is more modest (a couple of pounds). In Portugal, similar small tips.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you tip the valet at a golf resort?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In the US, $5 per car when the valet retrieves your vehicle is standard. If you have luggage being moved by a bellhop, $2 to $5 per bag separately. At high-end resorts where you are dropping the car off and picking it up multiple times, $20 at the end of the trip can cover everything if you prefer. In Scotland, Ireland, and Portugal, valet at resort hotels is less common; if it is offered, £2 to £5 (or €2 to €5) is appropriate.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should you pre-budget for tips on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. For a US group golf trip with caddies, plan to set aside $200 to $400 per person for tips across a 3 to 4 night stay, depending on how many caddied rounds you play. For a Scotland or Ireland trip with caddies, plan £150 to £300 per person across a week. Carry small bills, because ATMs are not always close to the first tee. Some groups put tip money into the shared kitty at the start of the trip, which removes the awkwardness of fumbling for a tip on the 18th green.",
      },
    },
  ],
}

export default function GolfTripTippingGuidePage() {
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
          Tipping on a Golf Trip: The Complete Guide
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Tipping is the awkward part of any golf trip. The caddie has handed back your putter and is waiting; you are pretending to look for something in your bag. Different countries, different venues, different services, and nobody really wants to ask. Here is the friendly, no-awkwardness guide so you arrive knowing exactly what to do, what to carry, and roughly how much to budget.
        </p>

        {/* Quick rule */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The simple rule</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Carry cash, tip generously for personal service, ask the caddie master if you are unsure.</span> The default tip ranges are: caddies 20 to 50% on top of the fee (varies by country); bag drop $2 to $5 per bag in the US, similar elsewhere; halfway house and beverage cart 15 to 20% of what you order; valet $5 per car. The exact percentages vary, but generosity is rarely the wrong call.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Caddies */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Caddies: the big one
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Caddie tips are the biggest line item on a tipping budget and the one that most often causes anxiety. Here is the country-by-country breakdown.
            </p>
            <div className="mt-6 space-y-4">
              <CountryCard
                country="United States"
                rule="30 to 50% of the caddie fee, with $40 to $80 standard at high-end resorts"
                detail="At Pebble Beach, Pinehurst, and Bandon Dunes, the caddie fee is typically $100 to $130 per bag. A 30% tip is the floor for solid service; 40 to 50% is appropriate for excellent reads, attentive bag work, and a great personality. $50 in cash on top of the fee is the most common single tip number reported by US caddies. Pay in cash, on the green or at the cart after the round."
              />
              <CountryCard
                country="Scotland"
                rule="20 to 30% on top of the fee, often £25 to £50"
                detail="Scottish caddie fees at the famous courses run £80 to £130 per bag. A £25 tip on a £100 fee is solid; £40 to £50 is appropriate for an Old Course caddie who walked you through the bunker reads. Caddies in Scotland are more reserved than American caddies, but the work and the local knowledge are excellent. Pay in cash (UK pounds preferred, dollars accepted at most major venues but rate is unfavourable)."
              />
              <CountryCard
                country="Ireland"
                rule="20 to 30% on top of the fee"
                detail="Similar to Scotland. Irish caddie fees at the major links run €80 to €120. A €20 to €40 tip is standard for solid service, more for genuinely outstanding work. Pay in euros, in cash. Irish caddies are often the funniest and most quotable people you will meet on the trip; the tip is for the read, the lines, and the company."
              />
              <CountryCard
                country="Portugal and continental Europe"
                rule="€10 to €25 on top of the fee, smaller percentages"
                detail="Caddie fees in Portugal are lower (€30 to €60 typical), and tipping culture is more modest. €10 to €20 on top of the fee is appropriate for solid service, €25 to €30 for excellent. Tipping a caddie 50% on a €40 fee would feel American and would surprise the caddie. Pay in euros, cash."
              />
            </div>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              When in doubt, ask the caddie master at check-in. Most are happy to give a guideline number, and they will know the local etiquette better than any blog. Also ask whether the tip should be cash on the green or whether it can be charged to your room; some resorts allow the latter.
            </p>
          </section>

          {/* Bag drop */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Bag drop, locker room, and pro shop
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The smaller tips that you give over and over throughout a golf trip.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Bag drop attendant (US):</strong> $2 to $5 per bag on arrival. At high-end resorts where the attendant cleans clubs after the round, an additional $5 to $10 at the end of the round is appropriate. Some attendants will help every day of the trip; reward consistent good service.</li>
              <li><strong>Bag drop (Scotland, Ireland, Portugal):</strong> £2 to £5 (or €2 to €5) per bag. Less ingrained as expectation but always appreciated.</li>
              <li><strong>Locker room attendant:</strong> $2 to $5 per visit in the US if the attendant gives you a towel, helps with shoe rental, or provides any service. £2 in the UK if the same. Skip if the locker room is unattended.</li>
              <li><strong>Pro shop / club rental staff:</strong> $5 to $10 if they help fit you for rental clubs or set up a quick lesson before the round. Not expected for a regular purchase.</li>
              <li><strong>Range pickers and ball staff:</strong> Generally not tipped at most venues, though a small thank-you is always nice if you have asked them to find a club you forgot.</li>
            </ul>
          </section>

          {/* Halfway house */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Halfway house and beverage cart
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              On many US courses, the halfway-house attendant and the beverage cart driver are working largely for tips. They genuinely appreciate cash.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>US halfway house:</strong> 15 to 20% of the bill. If your group spends $40 on hot dogs and beer, $8 cash on top is the move. Higher percentages are appropriate at the busy resorts where you are paying premium prices.</li>
              <li><strong>US beverage cart driver:</strong> 15 to 20% of what your group orders, in cash. The driver may visit your group three times across a round; tip generously on each, or do a single bigger tip on the last visit and explain.</li>
              <li><strong>Scotland and Ireland:</strong> Halfway houses are usually staffed by club staff. £1 to £2 in coins is appropriate, more like a thank-you than a percentage tip.</li>
              <li><strong>Portugal:</strong> Round up to the nearest €5 on a halfway-house tab. Tipping is not expected as in the US.</li>
            </ul>
          </section>

          {/* Valet and hotel staff */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Valet, bellhop, and hotel staff
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Resort hotel tipping follows hotel rules, but a few golf-specific notes.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Valet (US):</strong> $5 per car when the valet retrieves your vehicle. If you are at a resort that valets multiple times a day across a 3 night trip, $20 at the end of the trip covers everything if you prefer to consolidate.</li>
              <li><strong>Bellhop / luggage assistance:</strong> $2 to $5 per bag in the US; £1 to £2 per bag in the UK; €1 to €2 per bag in Portugal.</li>
              <li><strong>Housekeeping:</strong> $3 to $5 per night, left in cash on the pillow or counter. Higher at premium resorts. £2 per night in the UK; €2 per night in Portugal.</li>
              <li><strong>Concierge:</strong> $10 to $20 if they make a meaningful booking for the group (a hard-to-get tee time, a great restaurant reservation). Not expected for routine information.</li>
              <li><strong>Doorman:</strong> $1 to $2 per cab they hail in the US. Skip elsewhere unless they go above and beyond.</li>
            </ul>
          </section>

          {/* Restaurants and bars */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Restaurants and bars
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The country differences here are significant and worth knowing before the bill arrives.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>United States:</strong> 18 to 22% on the pre-tax total at sit-down restaurants. 15% is now considered low. At bars, $1 to $2 per drink, or 15 to 20% of the tab. For a large group dinner, a service charge is sometimes added automatically; check before adding more.</li>
              <li><strong>United Kingdom (Scotland and elsewhere):</strong> 10 to 15% if a service charge is not already on the bill. Many UK restaurants now add an automatic 10 to 12.5% "discretionary service charge"; you can ask to remove it if service was poor. Drinks at the bar are not tipped.</li>
              <li><strong>Ireland:</strong> 10 to 15% at restaurants, similar to the UK. Service charges are increasingly common. Drinks at the bar are typically not tipped, though rounding up is appreciated.</li>
              <li><strong>Portugal:</strong> 5 to 10% at restaurants, even lower at casual places. Bar drinks are not tipped; the price is the price. Some upscale restaurants add a "couvert" (cover charge) for bread and olives that you can decline if you do not want it.</li>
            </ul>
          </section>

          {/* Budget */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              How to budget for tips on a golf trip
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The single biggest mistake groups make is underestimating the tipping line. Tips can add 10 to 15% to the total trip cost without being visible in any of your bookings.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-card/60 overflow-hidden">
              <div className="grid grid-cols-2 border-b border-border bg-bg-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-muted-foreground">
                <span>Trip type</span>
                <span className="text-center">Tip budget per person</span>
              </div>
              {[
                ['US, 3 nights, 3 caddied rounds (Pinehurst, Pebble, Bandon)', '$200 to $400'],
                ['US, 3 nights, no caddies (Scottsdale, Myrtle Beach)', '$80 to $150'],
                ['Scotland or Ireland, 7 nights with caddies', '£150 to £300'],
                ['Algarve or continental Europe, 5 nights', '€60 to €150'],
              ].map(([trip, budget]) => (
                <div key={trip} className="grid grid-cols-2 border-b border-border px-5 py-3 text-sm last:border-0">
                  <span className="text-muted-foreground">{trip}</span>
                  <span className="text-center font-medium text-foreground">{budget}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Bring more cash than you think you need. ATMs near major golf venues are not always close, and cash tipping is the universal expectation. For US trips, hit the ATM before you leave home; for international trips, get the local currency at your home bank or at the airport on arrival. Some groups put tip money into the shared kitty at the start of the trip, which removes the awkwardness of fumbling for a tip on the 18th green and means everyone is contributing equally. Our <Link href="/blog/how-to-split-costs-golf-trip" className="text-gold hover:underline">guide to splitting golf trip costs</Link> covers how to handle this cleanly.
            </p>
          </section>

          {/* Etiquette */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The small etiquette that makes everything smoother
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Beyond the numbers, a few habits make tipping land well rather than awkward.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Have the cash ready.</strong> Pull out your tip before you reach the green or the bag drop; do not make the caddie or attendant wait while you fumble.</li>
              <li><strong>Hand the cash directly, with eye contact and a thank you.</strong> Not crumpled, not in an envelope unless it is a big tip. A direct handover with a sentence ("That was a great loop, thanks") lands better than any envelope.</li>
              <li><strong>Tip individually, not as a foursome through one player.</strong> Each player tips their own caddie, their own halfway-house, their own beverage cart. Pooling tips through one person feels impersonal.</li>
              <li><strong>If the service was outstanding, say so.</strong> Caddies remember kind clients, and you may want them again next trip.</li>
              <li><strong>If service was genuinely poor, do not punish through the tip alone.</strong> Speak to the caddie master quietly. A reduced tip without explanation is unhelpful and might just confuse a caddie who is unaware they did something wrong.</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan the trip in 5 minutes. Skip the awkwardness.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds the dual itinerary and helps you set the right group expectations on cost from day one.
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
              Golf trip tipping FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="How much should you tip a caddie?"
                answer="US: 30 to 50% of the fee, often $40 to $80 cash. Scotland: 20 to 30%, typically £25 to £50. Ireland: 20 to 30%, €20 to €40. Portugal: smaller, €10 to €25. Always cash, paid directly. Ask the caddie master if unsure."
              />
              <FaqItem
                question="Do you tip in Scotland and the UK?"
                answer="Yes, but more modestly than the US. Caddies 20-30% on top of fee, bag drop £2-5/bag, restaurants 10-15% if not already a service charge. Bar drinks are not tipped."
              />
              <FaqItem
                question="How much should you tip the bag drop attendant?"
                answer="$2-5 per bag in the US, more at high-end resorts where the attendant cleans clubs. £2-5 in UK and Ireland. €1-3 in Portugal."
              />
              <FaqItem
                question="What about halfway house and beverage cart?"
                answer="US: 15-20% of what you order. Scotland and Ireland: small, more like a thank-you (£1-2). Portugal: round up to the nearest €5."
              />
              <FaqItem
                question="Do you tip the valet?"
                answer="US: $5 per car when the valet retrieves your vehicle. UK and Ireland: £2-5 if offered. Portugal: €2-5."
              />
              <FaqItem
                question="Should you pre-budget for tips?"
                answer="Yes. Plan $200-400 per person for a 3-4 night US trip with caddies. £150-300 for a Scotland/Ireland trip with caddies. €60-150 for an Algarve trip. Carry small bills."
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
                href="/blog/how-to-split-costs-golf-trip"
                title="How to Split Costs Without Resentment"
                description="Tips usually go in the individual bucket, not the shared pot. Here's why."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs, with tips factored in."
              />
              <RelatedPost
                href="/blog/how-to-plan-a-golf-trip"
                title="How to Plan a Golf Trip"
                description="The complete step-by-step planning guide."
              />
              <RelatedPost
                href="/blog/golf-trip-packing-list"
                title="Golf Trip Packing List"
                description="What to pack, including a section on small bills."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="Partner-side tipping notes for spas and tours."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="Where to go and what to budget for the whole weekend."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function CountryCard({ country, rule, detail }: { country: string; rule: string; detail: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{country}</h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-fairway-text">{rule}</p>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{detail}</p>
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
