/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Golf Trip Flights: Bag Fees and What Saves Real Money (2026 Guide) | FairwayPal',
  description: 'A friendly, honest guide to golf trip flights in 2026. Airline bag fees, the United pre-approval gotcha, when status saves money, the credit card cheat code, and what saves $200+ per player.',
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-flights-bag-fees' },
  openGraph: { title: 'Golf Trip Flights: Bag Fees and What Saves Real Money', description: 'Honest 2026 guide to airline bag fees and what actually saves money on golf trip flights.' },
}

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Golf Trip Flights: Bag Fees and What Saves Real Money (2026 Guide)',
  description: 'Practical 2026 guide to golf trip flights. Airline-by-airline bag fees, status benefits, credit card co-branded perks, oversize fee thresholds, and what actually saves money.',
  url: 'https://fairwaypal.com/blog/golf-trip-flights-bag-fees',
  datePublished: '2026-05-06', dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Golf Trip Flights', item: 'https://fairwaypal.com/blog/golf-trip-flights-bag-fees' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are airline bag fees for golf clubs in 2026?', acceptedAnswer: { '@type': 'Answer', text: "American, Delta, and United charge standard checked bag fees of $35 to $40 per leg for the first checked bag (golf clubs count as standard checked baggage in their hard cases). If your bag exceeds 50 lbs, oversize/overweight fees of $100 to $200 per leg apply. Southwest is the cheapest at $75 flat surcharge or sometimes free as the first checked bag under 50 lbs. JetBlue and Alaska are middle of the road at $35 to $45 first bag plus $100 oversize. United requires pre-approval for golf bags; failing to register in advance can result in denied boarding or doubled fees. Always check the current policy on the airline's website before you book." } },
    { '@type': 'Question', name: 'Which airline has the cheapest golf bag fees?', acceptedAnswer: { '@type': 'Answer', text: "Southwest, comfortably. The flat $75 golf bag surcharge (or first checked bag free in many cases) is meaningfully cheaper than the legacy carriers. Across a 6-person group with round trip flights, the Southwest savings can hit $400 to $800 versus American or Delta. The catch is route coverage: Southwest is strong on US domestic but does not fly internationally. For Scotland, Ireland, or the Algarve, you are choosing among the legacy carriers and TAP Air Portugal." } },
    { '@type': 'Question', name: 'Does airline elite status save money on golf trip flights?', acceptedAnswer: { '@type': 'Answer', text: "Yes, often more than people realise. Most legacy carriers (American Aadvantage, Delta SkyMiles, United MileagePlus) waive the first checked bag for elite status holders, which saves $35 to $40 per leg on the standard fee. Higher tiers (Diamond, Executive Platinum, Premier 1K) waive overweight and oversize fees up to certain thresholds. For a frequent golf trip player, status pays back fast. If your group has one elite-status member, they can sometimes share the benefit by checking in for the group at the desk, depending on the carrier's policy." } },
    { '@type': 'Question', name: 'Do co-branded credit cards help with golf bag fees?', acceptedAnswer: { '@type': 'Answer', text: "Yes, dramatically. The major airline co-branded credit cards (Citi AAdvantage Platinum, Delta SkyMiles Gold, United Explorer, Alaska Airlines Visa) all include first checked bag free for the cardholder and typically up to 8 companions on the same booking. The annual fees ($95 to $99) often pay back in a single round-trip golf bag fee waiver per year. For groups that fly together, one cardholder can extend the benefit to the rest of the booking, which is a cheat code worth $35 to $40 per leg per player." } },
    { '@type': 'Question', name: 'What is the United pre-approval gotcha for golf bags?', acceptedAnswer: { '@type': 'Answer', text: "United Airlines requires advance registration for golf bags as a special baggage item. If your group does not pre-register, you can be denied boarding, charged double fees, or have to check at a different counter that adds 30+ minutes to the airport experience. The registration is free and takes 5 minutes online (call or use the United app). The mistake is showing up at the counter without doing it; this catches several golfers a year. Always pre-approve United golf bags at booking, before you fly." } },
  ],
}

export default function GolfTripFlightsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Golf Trip Flights: Bag Fees and What Saves Real Money (2026 Guide)</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Flights are the most variable cost on a US golf trip. The same trip on Southwest versus Delta can differ by $200 to $400 per player once bag fees are added. There are also a handful of small rules that catch first-time travellers (United pre-approval, the 50-lb threshold trap, the credit card cheat code). Here is the friendly 2026 guide to flying smarter for golf.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">Fly Southwest if you can.</span> $75 flat surcharge or sometimes free.<br />
            <span className="font-semibold text-foreground">Get a co-branded card.</span> First checked bag free for you and up to 8 companions saves $35-40 per leg per player.<br />
            <span className="font-semibold text-foreground">Weigh your bag at home.</span> Crossing 50 lbs costs $100-200 per leg in oversize fees.<br />
            <span className="font-semibold text-foreground">Pre-approve United golf bags</span> at booking; otherwise denied boarding or doubled fees.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Airline-by-airline bag fees</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">2026 bag fee landscape for golf travel. Always check the current policy on the airline's website before you book; fees change.</p>
            <div className="mt-6 space-y-4">
              <AirlineCard airline="Southwest" cost="$75 flat surcharge for golf bag, or first checked bag free under 50 lbs" gotcha="The clear winner on cost. No oversize fee for golf bags up to 50 lbs. Strong US domestic coverage; no international." />
              <AirlineCard airline="American Airlines" cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs" gotcha="Standard fee structure. Co-branded credit cards (Citi AAdvantage) waive first bag fee. Status (Gold and above) waives the first bag." />
              <AirlineCard airline="Delta" cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs" gotcha="Same as American. SkyMiles Gold + cards waive first bag. Diamond Medallion waives oversize too." />
              <AirlineCard airline="United" cost="$35-40 first checked bag, plus $100-200 oversize/overweight if over 50 lbs" gotcha="Critical: requires pre-approval for golf bags. Failing to register can result in denied boarding or doubled fees. Pre-approve when you book." />
              <AirlineCard airline="JetBlue" cost="$35-45 first checked bag; oversize fees over 50 lbs or 62 in length" gotcha="Watch the 62 inch length limit; some hard cases clip it. Measure before you go." />
              <AirlineCard airline="Alaska" cost="$35 first checked bag; oversize $100 if over 50 lbs" gotcha="Lower overweight fee than legacy carriers. Strong choice on the West Coast." />
              <AirlineCard airline="Spirit / Frontier" cost="Variable surcharges, often $100+ per leg" gotcha="Avoid for golf travel. The bag fees can match the ticket price." />
              <AirlineCard airline="International (BA, Aer Lingus, TAP Air Portugal)" cost="$150-250+ each way for golf bags transatlantic" gotcha="Premium economy and business class often include golf bag handling. Check fare-class fine print. International golf bag fees are where shipping starts looking obvious." />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The 50-pound threshold trap</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">A full set of clubs in a hard travel case typically weighs 50 to 55 pounds. The 50-lb threshold for standard checked bags is the trap. Cross 50 lbs by 1 pound and most US carriers (American, Delta, United) charge $100 to $200 per leg in oversize/overweight fees, on top of the standard $35 to $40.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">A round trip with a 52-pound bag on Delta or American can cost $170 to $300 total. Two players in your group hitting the threshold is $340 to $600 of unbudgeted cost across the group.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The fix:</strong> a digital luggage scale costs $15 from Amazon. Weigh your bag at home before you go. If you are over, shift items to a carry-on or to your bag inside the case. The hard case itself often weighs 8 to 12 lbs empty; a few pairs of golf shoes and a couple of dozen golf balls add another 8 to 10 lbs. Easy to clip 50.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The credit card cheat code</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The most underused way to save on golf trip flights. The major airline co-branded credit cards include first checked bag free for the cardholder and typically up to 8 companions on the same booking. Annual fees are $95 to $99. The bag fee waiver typically pays back in a single round trip.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For a group flying together, one cardholder can extend the benefit to the entire booking. A 6-person group with one cardholder saves 6 x $80 = $480 in round-trip first bag fees. The card pays for itself many times over per year.</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Citi AAdvantage Platinum Select Mastercard:</strong> first checked bag free for cardholder + 4 companions on AA flights. $99/year.</li>
              <li><strong>Delta SkyMiles Gold American Express:</strong> first checked bag free for cardholder + 8 companions on Delta flights. $99/year.</li>
              <li><strong>United Explorer Card:</strong> first checked bag free for cardholder + 1 companion. $95/year.</li>
              <li><strong>Alaska Airlines Visa Signature:</strong> first checked bag free for cardholder + up to 6 companions. $95/year.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If your group flies a particular airline regularly, the cheat code is even simpler: get the card, save the fees forever. The cards also include other perks (priority boarding, in-flight discounts) that pay for themselves on regular travel.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Status benefits worth knowing</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If you have airline elite status, the benefits compound on golf trips:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>First checked bag free</strong> at most mid-tier statuses (American Gold, Delta Silver, United Premier Silver). Saves $35-40 per leg.</li>
              <li><strong>Multiple checked bags free</strong> at higher tiers (Platinum, Gold, Premier Gold). Useful if a partner is also bringing a bag.</li>
              <li><strong>Oversize/overweight fee waivers</strong> at top tiers (Executive Platinum, Diamond, Premier 1K). Saves the $100-200 per leg overweight fee even if your bag clips 50 lbs.</li>
              <li><strong>Priority boarding and overhead bin space.</strong> Less relevant for golf bags but useful for the rest of the group.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For groups with a status member, that person can often check in the entire group at the desk and extend some benefits. Check the specific carrier's policy.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">When to ship instead of fly</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For trips on American, Delta, or United where your bag is over 50 lbs, shipping via Ship Sticks or Luggage Forward often costs the same or less than flying with the clubs, and your clubs are waiting at the resort pro shop on arrival. Domestic shipping runs $80 to $150 each way; international runs $300 to $600.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For Southwest passengers, fly with them; the $75 flat surcharge beats shipping every time. For international trips (Scotland, Ireland, the Algarve), shipping is almost always the better experience because of customs handling and the shorter airport time.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Read our full <Link href="/blog/shipping-clubs-vs-flying-with-clubs" className="text-gold hover:underline">shipping vs flying guide</Link> for the decision matrix.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Booking timing for golf trip flights</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Golf trip flights have specific quirks worth knowing:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Group bookings of 10+ travellers</strong> get group rates from most carriers, often at a discount and with held seats. Worth calling the airline group desk if your bachelor or birthday trip is 10+ people.</li>
              <li><strong>Domestic flights to peak destinations</strong> (Scottsdale in February, Pinehurst in March, etc.) are cheapest 60 to 90 days out. Prices generally rise inside 30 days.</li>
              <li><strong>International flights</strong> are cheapest 90 to 180 days out. Watch for shoulder-season fare drops in late spring and early fall.</li>
              <li><strong>Award flights</strong> to popular golf destinations book up first; if using miles for Scotland or Ireland, plan 6 to 9 months ahead.</li>
              <li><strong>Pre-register golf bags on United</strong> at booking, not at the airport. Saves the doubled-fee gotcha.</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan the trip. Then handle the flights.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal handles the destination, dates, and budget so the flight booking is the easy part.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Golf trip flights FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What are airline bag fees for golf clubs in 2026?" answer="$35-40 first bag on AA/Delta/United; $100-200 oversize over 50 lbs. Southwest $75 flat or sometimes free. JetBlue/Alaska middle of the road. United requires pre-approval." />
              <FaqItem question="Which airline has the cheapest golf bag fees?" answer="Southwest by a clear margin. $75 flat or sometimes free. Domestic only." />
              <FaqItem question="Does elite status save money?" answer="Yes. Mid-tier waives first bag ($35-40 per leg). Top tier waives oversize too ($100-200 per leg)." />
              <FaqItem question="Do co-branded cards help?" answer="Dramatically. First bag free for cardholder + companions on the booking. $95-99 annual fee pays back in one round trip. The cheat code." />
              <FaqItem question="What is the United pre-approval gotcha?" answer="United requires advance registration for golf bags. Failing to register can result in denied boarding or doubled fees. Free, takes 5 minutes online at booking." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/shipping-clubs-vs-flying-with-clubs" title="Shipping Clubs vs Flying" description="The full decision matrix between flying with clubs and shipping them." />
              <RelatedPost href="/blog/hidden-costs-golf-trip" title="Hidden Costs of a Golf Trip" description="Bag fees are only one of the surprises. Plan for the rest too." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs, with flights factored in." />
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete planning playbook including booking timing." />
              <RelatedPost href="/blog/golf-trip-packing-list" title="Golf Trip Packing List" description="What to pack and how to pack it (especially around the 50-lb threshold)." />
              <RelatedPost href="/blog/best-golf-trip-apps" title="Best Golf Trip Apps and Tools" description="The 12 apps that actually make a golf trip easier, including airline apps." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function AirlineCard({ airline, cost, gotcha }: { airline: string; cost: string; gotcha: string }) {
  return (<div className="rounded-xl border border-border bg-card/60 p-5"><h3 className="text-base font-semibold text-foreground">{airline}</h3><p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-fairway-text">{cost}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{gotcha}</p></div>)
}
function FaqItem({ question, answer }: { question: string; answer: string }) { return (<details className="group rounded-xl border border-border bg-card/60"><summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary><div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div></details>) }
function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) { return (<Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30"><h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></Link>) }
