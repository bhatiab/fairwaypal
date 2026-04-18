/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'

const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'fairwaypal-20'

export const metadata: Metadata = {
  title: 'The Golf Trip Packing List: Everything You (and Your Partner) Actually Need — FairwayPal',
  description:
    "Two packing lists in one — one for golfers, one for non-golfers. Cut the overpacking. Don't forget the one thing that ruins a trip.",
  alternates: { canonical: 'https://fairwaypal.com/blog/golf-trip-packing-list' },
  openGraph: {
    title: 'The Golf Trip Packing List: Everything You (and Your Partner) Actually Need',
    description:
      "Two packing lists in one — golfers and non-golfers. What to bring, what to leave behind, and what you'll regret forgetting.",
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Golf Trip Packing List: Everything You (and Your Partner) Actually Need',
  description:
    "Two packing lists in one — one for golfers, one for non-golfers. Cut the overpacking. Don't forget the one thing that ruins a trip.",
  url: 'https://fairwaypal.com/blog/golf-trip-packing-list',
  datePublished: '2025-04-17',
  dateModified: '2025-04-17',
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
      name: 'Golf Trip Packing List',
      item: 'https://fairwaypal.com/blog/golf-trip-packing-list',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I pack for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Essentials: golf shoes (wear on the plane), clubs (or rent on arrival), balls and tees, golf glove, a few shirts and trousers/shorts, waterproof jacket (even in Scottsdale for early-morning cool), comfort insoles if you're walking 36 holes, sunscreen, a power bank, and a rangefinder if you use one. For 3 nights: 3 golf shirts, 2 pairs of trousers/shorts, 1 waterproof jacket, 1 pullover.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to bring my own clubs on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No, but it's usually better value. Club rental at courses runs $50–75/day. If you're playing 2–3 rounds, that's $100–225 in rental fees — often more than shipping your clubs (typically $50–100 each way with a golf travel bag). Exception: international trips where checked-bag fees and risk of damage tip the calculation toward rental.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should a non-golfer pack for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Pack for the activities you've planned, not for spectating golf. A crossbody bag (not a backpack) for days out. Comfortable walking shoes — you'll cover more ground than expected. A packable jacket for evenings, which cool down fast. Layers, regardless of destination. A small daypack if hiking is on the itinerary.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the best bag for a golf trip?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A hard-case golf travel bag or a padded soft travel bag is the most important purchase for frequent golf travellers. Airline baggage handlers are not careful. For checked clubs: Sun Mountain or Club Glove hard cases are the standard recommendation. For carry-on and personal items: a 40L carry-on sized bag handles 3–4 nights of non-golf clothes comfortably.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need waterproofs for a golf trip to Scotland or Ireland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Non-negotiable. Scotland and Ireland are links golf destinations — the weather is part of the experience and it changes in minutes. A waterproof jacket and waterproof trousers are essential, even in August. Good waterproofs (Galvin Green, Footjoy HydroLite) pack small and make the difference between a memorable round and a miserable one.",
      },
    },
  ],
}

function AmazonItem({ name, query, tag }: { name: string; query: string; tag: string }) {
  const href = `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${tag}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-border bg-bg-3 p-3 text-sm text-ink transition-colors hover:border-gold/30 hover:text-gold"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-bg-2 text-xs text-ink-muted">
        →
      </span>
      {name}
    </a>
  )
}

export default function GolfTripPackingListPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }}
      />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">
          The Golf Trip Packing List: Everything You (and Your Partner) Actually Need
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>April 17, 2025</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The thing nobody packs until they wish they had it: comfort insoles. 36 holes in two days is roughly 12–14 miles of walking. Your feet will know. Everything else on this list is optional by comparison.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          Two lists below — one for golfers, one for non-golfers — plus the shared items that travel better as one per couple or group.
        </p>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Golfer list */}
          <section>
            <p className="eyebrow text-fairway-text">For Golfers</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              The golfer packing list
            </h2>

            <div className="mt-8 space-y-8">

              {/* Golf gear */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">Golf gear</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Wear your golf shoes on the plane — they're the heaviest item and won't count toward your luggage weight. Bring twice as many balls as you think you'll need for links or water courses.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <AmazonItem name="Golf travel bag (hard or padded)" query="golf travel bag" tag={AMAZON_TAG} />
                  <AmazonItem name="Golf shoe bag" query="golf shoe bag" tag={AMAZON_TAG} />
                  <AmazonItem name="Rangefinder" query="golf rangefinder" tag={AMAZON_TAG} />
                  <AmazonItem name="Golf gloves (pack 2–3)" query="golf glove" tag={AMAZON_TAG} />
                </div>
              </div>

              {/* Clothing */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">Clothing</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  For 3 nights: 3 golf shirts, 2 pairs of shorts or trousers, 1 light pullover for early mornings. Layers matter more than you expect — even Scottsdale is cold at 7am in October. Scotland and Ireland require full waterproofs, non-negotiable.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <AmazonItem name="Waterproof golf jacket" query="waterproof golf jacket" tag={AMAZON_TAG} />
                  <AmazonItem name="Waterproof golf trousers" query="waterproof golf trousers" tag={AMAZON_TAG} />
                  <AmazonItem name="Golf rain glove" query="golf rain gloves" tag={AMAZON_TAG} />
                  <AmazonItem name="Golf hat or cap" query="golf cap bucket hat" tag={AMAZON_TAG} />
                </div>
              </div>

              {/* Comfort */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">Comfort (the ones people skip and regret)</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  36 holes over two days is 12–14 miles. Insoles make a tangible difference. Cooling towels for Scottsdale in shoulder season. Ear defenders if you're a light sleeper sharing a house.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <AmazonItem name="Comfort insoles for golf shoes" query="comfort insoles golf" tag={AMAZON_TAG} />
                  <AmazonItem name="Cooling towel" query="cooling towel sport" tag={AMAZON_TAG} />
                  <AmazonItem name="High SPF sunscreen spray" query="SPF 50 sunscreen sport" tag={AMAZON_TAG} />
                  <AmazonItem name="Ear defenders / sleep earplugs" query="ear defenders sleep" tag={AMAZON_TAG} />
                </div>
              </div>

              {/* Tech */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">Tech</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  A power bank that charges two phones simultaneously is a group MVP on any trip. Wireless earbuds for the round if your playing partners are tolerant of that. International trips need adapters — pack one per couple, not per person.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <AmazonItem name="Power bank (20,000mAh, dual port)" query="power bank 20000mah dual port" tag={AMAZON_TAG} />
                  <AmazonItem name="International travel adapter" query="universal travel adapter" tag={AMAZON_TAG} />
                  <AmazonItem name="Wireless earbuds (sport/water resistant)" query="sport wireless earbuds waterproof" tag={AMAZON_TAG} />
                </div>
              </div>

            </div>
          </section>

          {/* Non-golfer list */}
          <section>
            <p className="eyebrow text-partner-text">For Non-Golfers</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">
              The non-golfer packing list
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Pack for the activities you've planned — not for spectating golf (you won't be doing that). The single most useful thing a non-golfer can bring: comfortable walking shoes. The golf destinations worth visiting involve more walking than expected.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <AmazonItem name="Crossbody bag (day bag, not a backpack)" query="crossbody bag travel women men" tag={AMAZON_TAG} />
              <AmazonItem name="Small daypack (if hiking is planned)" query="small daypack 20L lightweight" tag={AMAZON_TAG} />
              <AmazonItem name="Packable jacket (for evenings)" query="packable jacket lightweight" tag={AMAZON_TAG} />
              <AmazonItem name="Comfortable walking shoes" query="comfortable walking shoes travel" tag={AMAZON_TAG} />
            </div>
            <p className="mt-6 text-sm leading-7 text-muted-foreground">
              Destination-specific additions: Scotland and Ireland need a waterproof layer regardless of season. Scottsdale in summer needs a wide-brim hat and good sunscreen. Myrtle Beach needs beach bag, towel, and sunscreen. See individual destination guides for specifics:{' '}
              <Link href="/destinations/scottsdale" className="text-gold hover:underline">Scottsdale</Link>,{' '}
              <Link href="/destinations/myrtle-beach" className="text-gold hover:underline">Myrtle Beach</Link>,{' '}
              <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link>,{' '}
              <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link>.
            </p>
          </section>

          {/* Shared */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Shared items: one per couple, not per person
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              These pack better as shared items. Brief the group in the group chat so everyone doesn't show up with their own.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <AmazonItem name="Power bank (shared)" query="power bank 20000mah" tag={AMAZON_TAG} />
              <AmazonItem name="Travel first aid kit" query="compact travel first aid kit" tag={AMAZON_TAG} />
              <AmazonItem name="Portable Bluetooth speaker" query="portable bluetooth speaker waterproof" tag={AMAZON_TAG} />
              <AmazonItem name="International travel adapter" query="universal travel adapter" tag={AMAZON_TAG} />
            </div>
          </section>

          {/* What not to bring */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              What not to bring
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The things that add weight and never leave the bag.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { item: 'More than 3 pairs of golf trousers/shorts', reason: 'You will wear the same two pairs the whole trip. Everyone does.' },
                { item: 'Full bag of range balls', reason: "The course has them. Paying $5 for range time is fine." },
                { item: 'Golf GPS watch if you have a rangefinder', reason: "Pick one. You don't need both." },
                { item: 'Formal clothes for the evenings', reason: "Unless the trip explicitly includes a formal dinner, you won't use them. Golf destinations don't require it." },
                { item: 'Multiple pairs of golf shoes', reason: "One pair is enough for 3 rounds. Take up the space with comfort insoles instead." },
              ].map(({ item, reason }) => (
                <div key={item} className="flex gap-4 rounded-xl border border-border bg-card/60 p-4">
                  <span className="mt-0.5 text-base text-muted-foreground shrink-0">✕</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item}</p>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* International extras */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              International trip extras
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              If you're heading to <Link href="/destinations/scotland" className="text-gold hover:underline">Scotland</Link> or <Link href="/destinations/ireland" className="text-gold hover:underline">Ireland</Link>, add these to both lists.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { item: 'Full waterproof set (jacket + trousers)', note: 'Non-negotiable. Pack it, wear it, be grateful for it.' },
                { item: 'Universal travel adapter', note: 'UK/Ireland use Type G plugs. Pack one per couple.' },
                { item: 'Golf bag shipping vs check-in decision', note: 'Shipping services (Ship Sticks, Luggage Forward) often work out cost-neutral vs airline fees and eliminate the risk of damage. Worth pricing up.' },
                { item: 'Travel insurance that covers golf equipment', note: 'Clubs get damaged. Check your policy before you go.' },
                { item: 'Waterproof golf bag cover', note: "If you're walking in Scotland, your bag will get wet. A bag cover costs £15 and prevents a soggy clubs situation." },
              ].map(({ item, note }) => (
                <div key={item} className="rounded-xl border border-border bg-card/60 p-4">
                  <p className="text-sm font-semibold text-foreground">{item}</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Packing sorted. Trip still needs planning.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              5 questions. Golf and partner itinerary. One link for the whole group to vote on.
            </p>
            <div className="mt-6 flex justify-center">
              <Link className="primary-link" href="/plan">
                Plan Your Trip
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Packing FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What should I pack for a golf trip?"
                answer="Essentials: golf shoes (wear on the plane), clubs or plan to rent, balls and tees, golf glove, 3 shirts and 2 trousers/shorts, waterproof jacket, comfort insoles, sunscreen, and a power bank. For 3 nights, that fits in a carry-on plus a golf travel bag."
              />
              <FaqItem
                question="Do I need to bring my own clubs on a golf trip?"
                answer="No, but it's usually better value. Club rental runs $50–75/day. For 2–3 rounds that's $100–225 vs ~$50–100 each way to ship your clubs. Exception: international trips where the calculation on shipping vs damage risk tips toward rental."
              />
              <FaqItem
                question="What should a non-golfer pack for a golf trip?"
                answer="Pack for your activities, not for spectating. A crossbody day bag, comfortable walking shoes, a packable jacket for evenings, and layers — regardless of destination. Scotland and Ireland add waterproofs to that list."
              />
              <FaqItem
                question="What's the best bag for a golf trip?"
                answer="A padded soft golf travel bag handles most trips well. Hard cases offer more protection but are bulkier. For carry-on and clothes: a 40L bag handles 3–4 nights comfortably. Don't pack your clubs and clothes in the same bag — it usually doesn't work out well."
              />
              <FaqItem
                question="Do I need waterproofs for a golf trip to Scotland or Ireland?"
                answer="Yes, non-negotiable. Even in summer. Waterproof jacket and trousers — not just a rain mac. Good waterproofs (Galvin Green, Footjoy HydroLite) pack small and make the difference between a memorable round and a miserable one."
              />
            </div>
          </section>

          {/* Related */}
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs — so there are no surprises."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="Six destinations ranked, with climate and packing context."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
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
