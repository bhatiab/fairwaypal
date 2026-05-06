/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'How to Split Costs on a Golf Trip Without Resentment | FairwayPal',
  description:
    'Money is the most common reason golf trips blow up. A friendly, practical guide to splitting costs fairly: when to share, when to itemise, the apps that help, and the conversation that prevents 80% of fights.',
  alternates: { canonical: 'https://fairwaypal.com/blog/how-to-split-costs-golf-trip' },
  openGraph: {
    title: 'How to Split Costs on a Golf Trip Without Resentment',
    description:
      'A practical guide to splitting golf trip costs fairly. The five methods, the apps, and the one conversation that prevents most disputes.',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Split Costs on a Golf Trip Without Resentment',
  description:
    'A practical guide to splitting golf trip costs fairly across a group. Methods, apps, and the conversations that prevent disputes.',
  url: 'https://fairwaypal.com/blog/how-to-split-costs-golf-trip',
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
      name: 'How to Split Costs on a Golf Trip',
      item: 'https://fairwaypal.com/blog/how-to-split-costs-golf-trip',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the fairest way to split costs on a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Split shared expenses (accommodation, groceries, the rental car, group dinners) equally, and let everyone pay individually for things only they used (their green fees, their bar tab, their flight, their caddie tip). This 'shared pot plus individual line items' approach is the fairest because it stops the heavier drinkers and bigger eaters from being subsidised by the rest. Avoid splitting everything equally if your group has very different spending habits, because that is where resentment quietly builds.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should one person pay for everything and get reimbursed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Only if that person genuinely volunteers, the trip has a small group (4 to 6), and the costs are predictable. The 'organiser pays, everyone Venmos at the end' model works for a long weekend with one or two big charges (a house rental, a caddie pool). It breaks down for longer trips with hundreds of small charges, because chasing reimbursements becomes a part-time job for the organiser. For trips of 5+ days or 6+ people, use a shared expense app or split charges in real time.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best app for splitting golf trip costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Splitwise is the most polished and feature-rich (Splitwise Pro is around $3 per month or $30 per year as of 2026), but the free tier has tight daily limits. Tricount is fully free as of 2026 with no premium tier, and is excellent for a one-week group trip. Settle Up has a generous free tier and works offline, which matters if you are heading to remote courses. For US groups settling at the end, Venmo or Zelle handle the actual payment cleanly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle a group where some people drink and gamble more than others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Keep alcohol and gambling out of the shared pot. Make the bar tab individual at every venue (ask the server for separate cards), and run the on-course gambling pool as its own settlement that has nothing to do with the group expense app. The principle: shared expenses are things everyone uses (accommodation, the cart of beer in the fridge, group dinners), individual expenses are things only some people choose. Mixing the two is the single most common source of trip resentment.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should you collect money up front for a golf trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When you have to pre-pay non-refundable deposits: house rentals, group tee times that require deposits 60 to 90 days out, group transport, and big group dinners that require a card on file. Collect at least the deposit amount from everyone before you book anything in your name. The simple rule: never carry someone else's deposit risk on your own credit card. Use Venmo or Zelle for the collection, give a clear deadline (usually 7 days), and follow up firmly. Most trip arguments trace back to one organiser who fronted everything and then chased reimbursement for two months.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do you split costs fairly when one person flies first class or stays an extra night?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Personal preferences are personal expenses. If one person upgrades their flight, takes a private room while others share, stays an extra night, or hires a private driver, those costs come out of their own pocket. The shared pot covers the baseline trip everyone agreed to. Establish the baseline early (e.g., 'we are all flying coach, sharing twin rooms, riding the resort shuttle'), and anyone who wants more pays the difference themselves. This is also where it pays to write the plan down somewhere everyone can see it.",
      },
    },
  ],
}

export default function HowToSplitCostsPage() {
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
          How to Split Costs on a Golf Trip Without Resentment
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span>May 6, 2026</span>
          <span>·</span>
          <span>9 min read</span>
        </div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          Money is the most common reason golf trips quietly blow up. Not the rounds, not the weather, not the partner who dropped out. Money. Specifically, the slow build of resentment when one person feels they paid for everyone else's drinks, or when the organiser ends up chasing seven Venmo requests for two months. Here is the friendly, practical playbook for splitting costs so the trip ends with handshakes instead of a group chat that goes silent.
        </p>

        {/* Quick Rule */}
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The simple rule</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            Split <span className="font-semibold text-foreground">shared expenses equally</span> (accommodation, the rental car, group dinners, groceries). Let everyone pay <span className="font-semibold text-foreground">individually</span> for things only they used (their tee times, their bar tab, their caddie tip, their flight upgrade). Settle once at the end. Use an app, not your memory.
          </p>
        </div>

        <div className="mt-12 space-y-14 max-w-3xl">

          {/* Why equal splits fail */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Why splitting everything equally is the wrong default
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The instinct on a group trip is to dump every receipt into one pile and divide by the number of people. It feels democratic. In practice, it is the single biggest source of trip resentment, because it quietly forces the people who drank one beer with dinner to subsidise the people who closed down the bar.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Across most groups, individual spending varies by a factor of three on a long weekend. Person A might spend $250 over three days on incidentals; Person B might spend $750. Equal splits hide that gap, and a polite group will not say anything during the trip. They will just remember it next year, and they may not come.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The fix is simple: be deliberate about what is shared and what is individual. Shared expenses are the ones everyone benefits from equally (the roof over your heads, the car everyone rode in, the group dinner where you all ate the same set menu). Individual expenses are the ones where the consumption varies (alcohol, optional rounds, optional excursions, anyone's bar tab). Keep them in separate buckets and the math gets fair on its own.
            </p>
          </section>

          {/* Five methods */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Five practical methods (and when to use each)
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              There is no single right answer. The best method depends on group size, trip length, and how much variation there is in spending habits. Pick one early, communicate it, and stick with it.
            </p>
            <div className="mt-6 space-y-4">
              <MethodCard
                name="1. Shared pot plus individual line items (recommended default)"
                detail="One person pre-pays the big shared costs (house, rental car, group transport, the case of beer in the fridge) and everyone settles their share. Each person then pays for their own green fees, bar tabs, caddie tips, and personal extras as they go. At the end, settle the shared pot with one transfer per person."
                bestFor="Most groups of 4 to 12, trips of 3 to 7 nights, mixed spending habits"
              />
              <MethodCard
                name="2. Common kitty"
                detail="Everyone puts $300 to $500 in cash into a common envelope at the start of the trip. The organiser pulls from the kitty for shared expenses (group meals, beverages, taxis, tips). Top it up if it runs out. Refund any leftover at the end. Simple, no apps, no Venmo at midnight."
                bestFor="Smaller groups (4 to 6), shorter trips (long weekend), groups that prefer cash and informality"
              />
              <MethodCard
                name="3. Organiser carries the card, settle at the end"
                detail="One person uses their card for nearly everything during the trip (often to bank the points), and reconciles the totals once everyone is home. Works well when costs are large and predictable, badly when there are dozens of small charges across multiple venues."
                bestFor="Trips with one or two big shared charges (a house rental, a marquee tee time block) and a small, trustworthy group"
              />
              <MethodCard
                name="4. Per-line-item itemisation"
                detail="Every expense gets logged in a shared expense app the moment it happens. Some go in the shared pot, some get assigned to specific people. The app does the math. Most accurate method by far."
                bestFor="Larger groups (8+), longer trips, or groups where spending habits vary widely. Worth the small overhead of asking 'shared or yours?' at every till."
              />
              <MethodCard
                name="5. The bachelor party model: groomsmen pay for the groom"
                detail="Everyone except the guest of honour splits the guest of honour's share equally. Common for bachelor weekends. Simple, generous, but make sure the guest of honour understands what their group is paying for so they do not unintentionally drive up the cost."
                bestFor="Bachelor parties, milestone birthdays, and trips with a clear guest of honour. Not for regular annual trips."
              />
            </div>
          </section>

          {/* Before the trip */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              Before the trip: the conversation that prevents 80% of fights
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The single highest-leverage thing the organiser can do is have a 10 minute money conversation in the group chat before any deposits go down. It is awkward; it is also the difference between a great trip and a quietly bitter one.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Cover four questions, in this order:
            </p>
            <ol className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-decimal pl-6">
              <li><strong>What is the per-person budget ceiling?</strong> Everyone says a number. Use the lowest one as the working budget. If two people say $1,500 and four people say $3,000, you plan a $1,500 trip and the four can spend the difference on their own extras. Our <Link href="/blog/golf-trip-budget" className="text-gold hover:underline">golf trip budget guide</Link> has typical per-destination ranges.</li>
              <li><strong>What is shared and what is individual?</strong> Get explicit. Are caddies a group spend or personal? Is the case of beer at the house communal? What about the round at the upgraded marquee course?</li>
              <li><strong>What method are we using?</strong> Pick one of the five methods above. Whoever takes the cards on file (house, rental car, big tee times) needs everyone's deposit before they book.</li>
              <li><strong>When is the settlement deadline?</strong> Write it down. "All Venmo requests sent by Friday after the trip; everyone settles by the following Friday." Do not let it drag.</li>
            </ol>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The organiser then needs to do one more thing: collect deposits before they book anything. Houses, group tee times, and any non-refundable transportation should be paid for with money that has already landed in the organiser's account. Carrying $4,000 of group deposits on your own credit card while you wait for everyone to send their share is a fast track to a tense pre-trip group chat.
            </p>
          </section>

          {/* During the trip */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              During the trip: the rhythm that keeps things tidy
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              A few small habits make a huge difference once you are on the ground.
            </p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Ask for separate cards at the bar.</strong> Every server, every restaurant. It takes 30 seconds. It saves an hour of itemising at the end.</li>
              <li><strong>Log shared spend the moment it happens.</strong> Whoever pays opens the app, snaps the receipt, and adds the entry. Two minutes a day across the group is much easier than a 90 minute reconstruction on the flight home.</li>
              <li><strong>Tip caddies individually.</strong> Caddies typically get 20 to 30% on top of the bag fee. Each player pays their own caddie tip in cash; this is not a group expense, even though it feels like one.</li>
              <li><strong>Run the on-course gambling pool as its own settlement.</strong> Money that changes hands on Nassau or skins or birdies is between the players, settled match by match. Keep it out of the trip expense app entirely.</li>
              <li><strong>Decide upgrades the moment they happen.</strong> If someone wants to upgrade their cart, room, or round, the answer is yes, they pay the difference now. Do not let "we will sort it later" be the answer.</li>
            </ul>
          </section>

          {/* Apps */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The apps worth using
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              For a trip of more than a long weekend or a group of more than six, an app is non-optional. The math gets too messy too fast otherwise. Three solid options:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <AppCard
                name="Splitwise"
                price="Free tier with daily limits; Pro ~$3/month or $30/year"
                pros={['Most polished interface', 'Receipt scanning, charts, history', 'Bank integrations on Pro']}
                cons={['Free tier is now tight', 'Ads on free version']}
              />
              <AppCard
                name="Tricount"
                price="Fully free as of 2026"
                pros={['Free with no premium tier', 'Receipt scanning, multi-currency', 'No account required']}
                cons={['Fewer power-user features', 'Less polished than Splitwise']}
              />
              <AppCard
                name="Settle Up"
                price="Generous free tier; optional Pro"
                pros={['Works offline (great for remote courses)', 'Multiple split types', 'Multi-currency native']}
                cons={['Interface feels older', 'Fewer integrations']}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              For US groups, settle the actual money via Venmo or Zelle once the app shows the totals. Both are instant and free. Avoid PayPal for friend-to-friend transfers because of the fees.
            </p>
          </section>

          {/* After the trip */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              After the trip: settle in the first 7 days
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Settlement loses momentum every day after the trip ends. Day one back, everyone is still buzzing and motivated to clear up. By day ten, nobody wants to think about it. By day thirty, the group chat is quiet and the organiser is reluctantly typing reminder messages.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The fix is to give the group a hard deadline before the trip ends. Something like: "Splitwise will be locked Friday at noon, requests go out Saturday, everyone settles by the following Friday." Saying it out loud, ideally on the last evening of the trip, is enough to turn settlement into a real expectation rather than an open task.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              When you do send the request, attach a one-line summary so people can see what they are paying for: "House $200, food $80, caddie pool $50 = $330." Numbers without context land worse than numbers with context.
            </p>
          </section>

          {/* The conversation */}
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">
              The harder conversation: when someone is consistently spending more
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Sometimes the system works perfectly and there is still a problem: one person in the group has dramatically different spending habits to the rest, and equal splits even on truly shared expenses (the wine pairings at every dinner, the premium house, the upgraded rental car) are quietly stretching the others.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              The honest fix is a conversation, not an algorithm. The organiser, ideally a year before the next trip when memories are fresh and tempers cool, can frame it without naming names: "Last year we drifted toward a more expensive trip than some of us had budgeted for. This year let's anchor on a $X budget and anyone who wants to upgrade pays the difference themselves."
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              That single sentence, said early and warmly, fixes 90% of the problem. The remaining 10% is a deeper conversation that probably should not happen in the group chat.
            </p>
          </section>

          {/* CTA */}
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">
              Plan the trip in 5 minutes. Split the costs cleanly.
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              FairwayPal builds the dual itinerary so everyone knows what they are signing up for before they pay a dollar. Less surprise, less resentment, more golf.
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
              Splitting golf trip costs FAQ
            </h2>
            <div className="mt-6 space-y-4">
              <FaqItem
                question="What is the fairest way to split costs on a golf trip?"
                answer="Split shared expenses equally (accommodation, the rental car, group dinners). Let everyone pay individually for things only they used (their green fees, their bar tab, their caddie tip). The shared-pot-plus-individual-line-items approach is fair because it stops heavier spenders being subsidised by lighter spenders."
              />
              <FaqItem
                question="Should one person pay for everything and get reimbursed?"
                answer="Only for small groups of 4 to 6 with predictable costs and a long-weekend trip. For longer trips or larger groups, use a shared expense app or split charges in real time. Chasing reimbursements becomes a part-time job otherwise."
              />
              <FaqItem
                question="What is the best app for splitting golf trip costs?"
                answer="Splitwise is most polished but the free tier has daily limits (Pro is around $3/month or $30/year). Tricount is fully free as of 2026 and excellent for one-off group trips. Settle Up has a generous free tier and works offline. For US groups, settle final amounts via Venmo or Zelle."
              />
              <FaqItem
                question="How do you handle a group where some drink and gamble more than others?"
                answer="Keep alcohol and gambling out of the shared pot. Make bar tabs individual at every venue, and run on-course gambling pools as their own settlement. Shared = things everyone benefits from. Individual = things people choose to buy. Mixing them is the most common source of trip resentment."
              />
              <FaqItem
                question="When should you collect money up front?"
                answer="Whenever you have non-refundable deposits: house rentals, group tee times, group transport, big group dinners. Collect at least the deposit amount before booking anything in your name. Use Venmo or Zelle, give a 7 day deadline, and follow up firmly."
              />
              <FaqItem
                question="What if one person flies first class or stays an extra night?"
                answer="Personal preferences are personal expenses. The shared pot covers the agreed baseline. Anyone who wants to upgrade pays the difference themselves. Establish the baseline early so this is a non-issue."
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
                href="/blog/golf-trip-tipping-guide"
                title="Tipping on a Golf Trip"
                description="The country-by-country tipping guide so you carry the right cash."
              />
              <RelatedPost
                href="/blog/best-golf-trip-apps"
                title="Best Golf Trip Apps"
                description="Splitwise, Tricount, Settle Up, plus the rest of the trip-running stack."
              />
              <RelatedPost
                href="/blog/golf-trip-budget"
                title="Golf Trip Budget Breakdown"
                description="What a golf trip actually costs by destination and group size."
              />
              <RelatedPost
                href="/blog/how-to-plan-a-golf-trip"
                title="How to Plan a Golf Trip"
                description="The complete step-by-step guide to organising the trip end to end."
              />
              <RelatedPost
                href="/blog/golf-trip-group-size"
                title="Golf Trip Group Size: 4 vs 8 vs 12"
                description="How group size changes the cost math and the social dynamics."
              />
              <RelatedPost
                href="/blog/golf-trip-weekend-schedule"
                title="The 3-Night Golf Weekend Schedule"
                description="A concrete day-by-day schedule for a golf weekend."
              />
              <RelatedPost
                href="/blog/best-bachelor-party-golf-destinations"
                title="Best Bachelor Golf Destinations"
                description="The top six US destinations ranked honestly."
              />
              <RelatedPost
                href="/blog/golf-trip-with-non-golfers"
                title="Golf Trips With Non-Golfers"
                description="How to plan a trip that works for the whole group."
              />
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

function MethodCard({ name, detail, bestFor }: { name: string; detail: string; bestFor: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-fairway-text">Best for</p>
      <p className="mt-1 text-sm text-muted-foreground">{bestFor}</p>
    </div>
  )
}

function AppCard({ name, price, pros, cons }: { name: string; price: string; pros: string[]; cons: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{name}</h3>
      <p className="mt-1 text-xs text-gold">{price}</p>
      <ul className="mt-3 space-y-1">
        {pros.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-fairway-text">+</span>{p}
          </li>
        ))}
        {cons.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1 text-xs text-partner-text">−</span>{c}
          </li>
        ))}
      </ul>
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
