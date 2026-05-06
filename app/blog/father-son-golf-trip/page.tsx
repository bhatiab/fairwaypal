/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Father-Son Golf Trip Planning: The Honest Guide | FairwayPal',
  description: 'A friendly, honest guide to planning a father-son golf trip. Picking the right destination by skill level and age, the four destination archetypes, the conversations worth having, and what nobody tells you about the trip dynamic.',
  alternates: { canonical: 'https://fairwaypal.com/blog/father-son-golf-trip' },
  openGraph: { title: 'Father-Son Golf Trip Planning: The Honest Guide', description: 'How to plan a father-son golf trip that lives up to the expectations on both sides.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Father-Son Golf Trip Planning: The Honest Guide',
  description: 'A practical guide to planning a father-son golf trip. Destination archetypes by skill and age, conversations worth having, and dynamics nobody warns you about.',
  url: 'https://fairwaypal.com/blog/father-son-golf-trip',
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
    { '@type': 'ListItem', position: 3, name: 'Father-Son Golf Trip', item: 'https://fairwaypal.com/blog/father-son-golf-trip' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best destination for a father-son golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Depends heavily on the skill levels, ages, and what you both want from the trip. Pinehurst is the classic choice: walkable village, deep history, the Tufts Archives, and No. 2 as a once-in-a-lifetime round if dad plays well enough to enjoy it. Bandon Dunes is the harder pilgrimage choice: walking only, links golf, true bonding through shared challenge. Pebble Beach is the bucket-list choice if budget allows: one round at the most famous course in America. Scottsdale is the easier option: flexible courses by skill level, varied food, and Old Town for the non-golf evenings. Myrtle Beach is the value choice: 4 rounds in 3 days, casual atmosphere, low pressure." } },
    { '@type': 'Question', name: 'How long should a father-son golf trip be?', acceptedAnswer: { '@type': 'Answer', text: "Three to four nights is the sweet spot. Three nights gives you 3 to 4 rounds plus generous downtime; four nights gives you 4 to 5 rounds plus a recovery day in the middle. Anything shorter feels rushed. Anything over five nights starts to feel long if it is just the two of you, especially if your skill levels are very different. The exception is the trip-of-a-lifetime trip (Bandon, Scotland, Ireland) which justifies 5 to 7 nights because of travel time." } },
    { '@type': 'Question', name: 'Should a father-son trip play matches or just enjoy the round?', acceptedAnswer: { '@type': 'Answer', text: "Most father-son groups we have helped plan say a friendly match adds genuine fun without making it competitive in a bad way. The format matters: avoid stroke play if your handicaps are very different (the worse player gets demoralised). Better ball with strokes given makes it competitive but not punishing. A father-son scramble with another father-son pair is a brilliant format if you can find it. The real point: agree on the format upfront, settle small stakes for fun (lunch on the loser, $5 a round), and remember the goal is the trip, not the win." } },
    { '@type': 'Question', name: 'How do you handle big handicap differences on a father-son trip?', acceptedAnswer: { '@type': 'Answer', text: "Pick courses both can enjoy. A 36-handicap father playing the back tees of a tournament course will not have fun; nor will a 5-handicap son playing executive courses. Most resorts have multiple courses at different difficulties (Pinehurst No. 6 vs No. 2; Bandon Trails vs Sheep Ranch; the Pebble alternative courses). Use forward tees for the higher handicap, regular tees for the lower. If the gap is dramatic, mix in a lesson together at one of the resort academies; both learn something and the lesson removes the implicit teaching dynamic from the round itself." } },
    { '@type': 'Question', name: 'When is the best age for a father-son golf trip?', acceptedAnswer: { '@type': 'Answer', text: "There is no perfect age, but the most rewarding trips tend to happen in two windows: when the son is 16 to 25 (golfing well, before life gets in the way) and when the son is 35 to 50 (perspective, time, ability to plan it themselves). The first window is about the bonding before independence; the second is about the gratitude after independence. Both work. Trips with a son in his early teens can also work but require more partner-style accommodations (mid-round breaks, simpler courses, lower expectations on score)." } },
  ],
}

export default function FatherSonGolfTripPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Father-Son Golf Trip Planning: The Honest Guide</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>9 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          A father-son golf trip is one of the great trips in a man's life on either side. It is also a different kind of trip than a buddies weekend. Smaller group dynamics, different expectations, often different skill levels, and the unique pressure of "we should be doing this more often" hanging over both of you. Here is the friendly guide to planning one that lives up to the hype.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The honest take</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground"><span className="font-semibold text-foreground">Pick the destination for the relationship, not just the golf.</span> A four-day Bandon Dunes pilgrimage is incredible if you both love links golf and walking; brutal if dad's back hurts and son hates wind. The single biggest planning mistake on father-son trips is picking the destination one of you would pick on a buddies trip. Pick for the two of you.</p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The four destination archetypes</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Most great father-son trips fit one of four archetypes. Pick the one that matches your relationship, your golf, and your budget.</p>
            <div className="mt-6 space-y-4">
              <ArchetypeCard archetype="The pilgrimage" detail="Bandon Dunes, Scotland, Ireland. Walking only (or near it), links golf, weather as part of the experience, deep shared challenge. Best for fit, serious-golfer father-son pairs who want a memory bigger than the rounds." budget="Bandon $2,000-3,500 per person; Scotland/Ireland $2,500-5,000+" />
              <ArchetypeCard archetype="The heritage trip" detail="Pinehurst. Walkable village, the Tufts Archives, Donald Ross history, multiple courses at different price points so you can pick by both skill levels. The classic father-son trip; if dad is a golf history fan, this is the right call." budget="$1,500-3,000 per person for 3 nights" />
              <ArchetypeCard archetype="The bucket-list round" detail="Pebble Beach. Built around one or two unforgettable rounds at the most famous course in America. Carmel-by-the-Sea makes a perfect non-golf evening base. More cost than the others but the memory is real." budget="$2,500-5,000 per person for 3 nights" />
              <ArchetypeCard archetype="The flexible weekend" detail="Scottsdale or Myrtle Beach. Multiple courses at different price points, varied food and entertainment, less golf-pressure. Best for father-son pairs with very different handicaps, or when you want a trip that does not depend entirely on the rounds being great." budget="$900-1,500 (Myrtle Beach) or $1,400-2,200 (Scottsdale) per person" />
            </div>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The handicap question</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The single biggest variable on a father-son trip is the handicap gap. A 5 vs 5 trip plays totally differently from a 5 vs 25 trip. The honest planning answers:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Same skill level (within 5 strokes):</strong> any destination works. Play matches, keep score, settle small stakes.</li>
              <li><strong>Moderate gap (5 to 15 strokes):</strong> pick courses that are challenging but fair from forward tees. Use a handicap system that gives the higher-handicap player real strokes (full handicap difference). Pinehurst's nine-course resort is great for this because you can pick by both skills.</li>
              <li><strong>Big gap (15+ strokes):</strong> avoid courses where the higher-handicap player will lose 8 balls a round. Skip Bandon (wind kills weak ball-strikers) and Pebble Links (the back nine punishes mishits). Choose Myrtle Beach (varied difficulty, including resort tracks designed for higher handicaps) or Scottsdale's resort courses.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The conversation before the trip</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Father-son trips work better when you have one explicit 10-minute conversation in advance. The questions:</p>
            <ol className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-decimal pl-6">
              <li><strong>What does each of us want from this?</strong> Some sons want their dad's coaching; some specifically do not. Some dads want to relive playing with their son; some want a parallel-track trip. Both are valid. Knowing matters.</li>
              <li><strong>What is the budget ceiling for each of us?</strong> One person should not be quietly paying for the other unless that is explicit. If dad is treating, dad says so; otherwise it is split. Settle this before deposits go down.</li>
              <li><strong>What is the score-keeping intensity?</strong> Are we keeping handicap-eligible scores? Playing matches? Or just enjoying? All three are fine; agreeing prevents tension.</li>
              <li><strong>Is there a rest day?</strong> If one of you has a back, knees, or stamina concern, build in a non-golf morning or a 9-hole afternoon. Better to admit it before the trip than to push through and regret it.</li>
            </ol>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Our <Link href="/blog/how-to-split-costs-golf-trip" className="text-gold hover:underline">guide to splitting golf trip costs</Link> applies even on a 2-person trip; the conversation matters.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The dynamic nobody warns you about</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Father-son trips have a unique dynamic that buddies trips do not. Three things to know:</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The teaching trap.</strong> Even if you both agree there will be no instruction, dad will give a swing tip on the second hole. Son will be polite. Dad will give another. Son will quietly stop having fun. The fix: agree explicitly that there is no on-course coaching unless the player asks for it. Take a paid lesson together at one of the resort academies if you want technical work; that removes the dynamic.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The score sensitivity.</strong> When dad shoots a worse round than expected, especially in front of his son, it can quietly affect the rest of the trip. The fix: name it. "I'm playing terribly today, no big deal." That sentence, said out loud, releases the pressure for both of you. Son does the same when their day is bad.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The conversation pacing.</strong> 4 hours alone with dad is more conversation than most father-son pairs have had in years. Some of it will be deep, some surface, and there will be silences. Lean into the silences. The course is doing the work.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The non-golf hours</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">36-hole days work for buddies trips because the group spreads out the social load. On a father-son trip, 18 holes plus dinner is plenty for most pairs. The non-golf hours are where the trip becomes a memory.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Plan two or three meals at memorable restaurants. Spend an evening at the resort bar with no agenda. Take a slow morning before the second round. The best father-son trips are paced so neither of you is exhausted by day 3, which is when the conversations get good.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If the destination has good non-golf options (Pinehurst Village, Carmel-by-the-Sea, Old Town Scottsdale, the Marshwalk in Murrells Inlet), use them. Use the early-evening hours for the best dinners.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The annual tradition idea</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The single best thing about father-son golf trips is when they become annual. The structure is forgiving: same week each year, alternate destinations, low planning friction once you have done one. Two annual destinations rotated (Pinehurst alternating with Pebble; Scottsdale alternating with Myrtle Beach) gives variety without re-deciding everything every year.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">If you can lock in the dates a year out, do it. The reason most father-son trips do not become annual is not the cost or the time; it is the friction of re-planning. Booking next year before this year ends removes that friction entirely.</p>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan a trip that lives up to it.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal builds a trip plan in 5 minutes so the planning is not the obstacle.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Father-son golf trip FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What is the best destination for a father-son golf trip?" answer="Depends on skill, age, and budget. Pinehurst is the classic. Bandon Dunes is the pilgrimage. Pebble Beach is the bucket-list. Scottsdale and Myrtle Beach are the flexible options for varied skill levels." />
              <FaqItem question="How long should a father-son golf trip be?" answer="Three to four nights is the sweet spot for most trips. Five to seven for a Scotland or Ireland pilgrimage." />
              <FaqItem question="Should you play matches?" answer="Yes, with a format that fits the handicap gap. Better ball or scrambles avoid demoralising the higher-handicap player. Settle small stakes for fun." />
              <FaqItem question="How to handle big handicap differences?" answer="Pick courses both can enjoy. Use forward tees for higher handicaps. Mix in a paid lesson together at the resort academy to remove the on-course teaching dynamic." />
              <FaqItem question="When is the best age for a father-son trip?" answer="No perfect age. Two windows tend to be most rewarding: son 16-25 (before life gets busy) and son 35-50 (perspective and capability). Both work." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The complete step-by-step planning guide." />
              <RelatedPost href="/blog/pinehurst-vs-kiawah-island-golf-trip" title="Pinehurst vs Kiawah Island" description="The two best East Coast bucket-list resorts." />
              <RelatedPost href="/blog/bandon-dunes-vs-pebble-beach-golf-trip" title="Bandon Dunes vs Pebble Beach" description="The two great West Coast bucket-list trips compared." />
              <RelatedPost href="/blog/golf-trip-budget" title="Golf Trip Budget Breakdown" description="What a golf trip actually costs by destination." />
              <RelatedPost href="/blog/how-to-split-costs-golf-trip" title="How to Split Costs Without Resentment" description="The five practical methods, the apps, and the conversation that prevents fights." />
              <RelatedPost href="/blog/best-golf-trip-apps" title="Best Golf Trip Apps and Tools" description="The 12 apps that actually make a golf trip easier." />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

function ArchetypeCard({ archetype, detail, budget }: { archetype: string; detail: string; budget: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-5">
      <h3 className="text-base font-semibold text-foreground">{archetype}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-gold">Budget · <span className="font-medium normal-case tracking-normal">{budget}</span></p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-border bg-card/60">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-base font-semibold text-foreground">{question}<span className="ml-2 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">+</span></summary>
      <div className="border-t border-border px-5 py-4 text-sm leading-7 text-muted-foreground">{answer}</div>
    </details>
  )
}

function RelatedPost({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-gold/30">
      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
    </Link>
  )
}
