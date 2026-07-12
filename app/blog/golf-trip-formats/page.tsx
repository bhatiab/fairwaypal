/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../../src/components/Navbar'
import Footer from '../../../src/components/Footer'
import BlogByline from '../../../src/components/BlogByline'

const LAST_UPDATED = 'May 6, 2026'

export const metadata: Metadata = {
  title: 'Golf Trip Formats: Ryder Cup, Stableford, Skins, Nassau (And When to Use Each) | FairwayPal',
  description: 'A friendly guide to the golf trip formats that actually work for groups. Ryder Cup, Nassau, Stableford, skins, Wolf, scrambles. The rules, the strategy, and which format fits which kind of group.',
  alternates: { canonical: 'https://www.fairwaypal.com/blog/golf-trip-formats' },
  openGraph: { title: 'Golf Trip Formats: Ryder Cup, Stableford, Skins, Nassau', description: 'The rules, strategy, and which format fits which group.' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Golf Trip Formats: Ryder Cup, Stableford, Skins, Nassau (And When to Use Each)',
  description: 'A practical guide to popular golf trip formats. Ryder Cup, Nassau, Stableford, skins, Wolf, scrambles. Rules, scoring, strategy, and which format fits which group.',
  url: 'https://www.fairwaypal.com/blog/golf-trip-formats',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  author: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
  publisher: { '@type': 'Organization', name: 'FairwayPal', url: 'https://www.fairwaypal.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fairwaypal.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.fairwaypal.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'Golf Trip Formats', item: 'https://www.fairwaypal.com/blog/golf-trip-formats' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the best golf format for a group trip?', acceptedAnswer: { '@type': 'Answer', text: "Depends on the group size and skill spread. For 8 to 12 players: a Ryder Cup format (foursomes plus singles) over multiple days is the gold standard. For 4 to 8 with mixed skills: a Stableford team competition is the most fun because every shot matters. For 4 with similar skills: a Nassau ($2 front, $2 back, $2 total, plus presses) is the classic. For mixed-skill foursomes: a scramble takes the pressure off and lets everyone contribute. Most successful trips run multiple formats across the rounds rather than one format for the whole trip." } },
    { '@type': 'Question', name: 'How do you handicap a Nassau in a group golf trip?', acceptedAnswer: { '@type': 'Answer', text: "Use full handicap difference, with strokes given on the holes ranked highest in handicap by the scorecard. If a 5-handicap plays a 15-handicap, the 15 gets 10 strokes (one stroke on each of the 10 hardest holes by handicap rating, marked on the scorecard). For team Nassau (better ball), each player plays their own ball with their own handicap strokes; the team takes the lower score on each hole. Settling: the loser of each segment (front 9, back 9, total 18) pays the agreed stake. Presses are optional doublings of the bet, called when one side is down by 2 or more." } },
    { '@type': 'Question', name: 'What is a Stableford in golf and how does scoring work?', acceptedAnswer: { '@type': 'Answer', text: "Stableford is a points-based format that turns each hole into a discrete bet. Standard scoring: bogey 1 point, par 2 points, birdie 3 points, eagle 4 points, double bogey or worse 0 points (with handicap strokes applied as normal). The player with the most points at the end wins. Modified Stableford (used at the Barracuda Championship on the PGA Tour) sweetens the higher scores: birdie 2, eagle 5, par 0, bogey -1, double bogey or worse -3. Stableford works brilliantly for groups because a bad hole costs you 0 instead of 8, so the round stays fun even after a triple bogey." } },
    { '@type': 'Question', name: 'How does a skins game work?', acceptedAnswer: { '@type': 'Answer', text: "Each hole has a pot (the skin). Lowest score wins the pot for that hole. If two or more players tie for low, the skin carries over to the next hole. A typical group game has $1 to $5 per skin; the carryovers can add up dramatically over 18 holes. Variations: validation (the winner of a skin must par or better on the next hole to keep it; otherwise it goes back into the pot), and 'no carryover' (every hole gets settled). Skins works best in foursomes with similar skill levels because handicaps are awkward to apply hole-by-hole." } },
    { '@type': 'Question', name: 'What is the Ryder Cup format and how do you run one on a trip?', acceptedAnswer: { '@type': 'Answer', text: "The Ryder Cup format pits two teams against each other across multiple match types. For a 4-day trip with 8 players: pick two captains, draft teams, then play foursomes (alternate shot) on day 1, four-ball (better ball) on day 2, and singles (head to head) on day 3. Each match is worth 1 point; halves are 0.5 each. The team with the most points at the end wins the trip. For larger groups (12+), expand to two foursomes matches and two four-balls per day. The format adds genuine competitive structure to a trip and most groups remember the moments more than the score." } },
    { '@type': 'Question', name: 'What golf format works best for mixed-skill groups?', acceptedAnswer: { '@type': 'Answer', text: "Three options work well. (1) Stableford with full handicap (the higher handicap gets more chances to score points, and a bad hole costs nothing). (2) Better ball / four-ball (each player plays their own ball, the team takes the lower score per hole; the higher-handicap player only contributes when they have a great hole, removing the pressure). (3) Scramble (everyone hits, team picks the best shot, plays from there; the higher-handicap player contributes through driver distance, putting, or specialty shots). Avoid stroke play with a big handicap gap; it demoralises the higher-handicap player after 4 holes." } },
  ],
}

export default function GolfTripFormatsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
      <Navbar />
      <main className="page-shell pt-28 pb-20">
        <p className="eyebrow">The FairwayPal Blog</p>
        <h1 className="mt-3 text-4xl font-display font-light italic leading-tight text-foreground sm:text-5xl lg:text-6xl">Golf Trip Formats: Ryder Cup, Stableford, Skins, Nassau</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground"><span>May 6, 2026</span><span>·</span><span>10 min read</span></div>
        <BlogByline lastUpdated={LAST_UPDATED} />
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
          The right format turns a group of friends into a competition with stakes; the wrong format turns it into a long week of demoralising stroke play with someone quietly checking out by the third hole. Here is the friendly guide to the formats that actually work for golf trips, when to use each, and how to set them up so the rounds stay fun.
        </p>
        <div className="mt-8 max-w-3xl rounded-2xl border border-gold/20 bg-gold/5 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">The cheat sheet</p>
          <p className="mt-3 text-base leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">8 to 12 players, multi-day trip:</span> Ryder Cup format (foursomes + four-ball + singles).<br />
            <span className="font-semibold text-foreground">4 to 8 mixed skill:</span> Stableford team competition.<br />
            <span className="font-semibold text-foreground">4 similar skill:</span> Nassau with presses.<br />
            <span className="font-semibold text-foreground">Mixed skill foursome:</span> Scramble.<br />
            <span className="font-semibold text-foreground">Casual fun within a foursome:</span> Skins.
          </p>
        </div>
        <div className="mt-12 space-y-14 max-w-3xl">
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Nassau</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The classic foursome bet.</strong> Three separate matches in one round: front 9, back 9, and total 18. Each segment has a stake (the standard "$2 Nassau" is $2 on each segment, $6 maximum exposure). Presses (doublings of the bet) can be called when one side is down by 2 holes or more.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>How to play:</strong> match play (hole by hole, win by lowest score) for each segment. Use full handicap difference; the higher-handicap player gets strokes on the hardest-rated holes. Standard format is 2 vs 2 (better ball), but it works as 1 vs 1 too.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Why it works:</strong> three separate bets means even if the front 9 is lost, there are still two bets to play for. Presses keep things interesting when the match is lopsided. Settling is simple at the end.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>When to use:</strong> a foursome where the players know each other and the skills are roughly similar (within 5 handicap strokes ideally). Best for groups that want a structured but not too serious competition.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Stableford</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The points-based format that keeps bad rounds fun.</strong> Each hole is scored discretely: bogey 1 point, par 2, birdie 3, eagle 4, double bogey or worse 0. Handicap strokes apply as normal. The player or team with the most points after 18 holes wins.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Modified Stableford</strong> (the format used at the Barracuda Championship on the PGA Tour) increases the rewards for big scores: birdie 2 points, eagle 5, par 0, bogey -1, double bogey or worse -3. Encourages aggressive play.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Why it works:</strong> a triple-bogey costs you 0 points instead of 8 strokes. The hole is over, you move on. This single design choice keeps the round fun even when someone blows up. It also works brilliantly across multiple days as a cumulative competition.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>When to use:</strong> mixed-skill groups, multi-day trips, anyone who wants competitive golf without the risk of one bad hole ruining the whole round. The most universally applicable group format.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Skins</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The hole-by-hole pot game.</strong> Each hole is a separate competition. The player with the lowest score on a hole wins the skin (the pot). If two or more players tie for low, the skin carries over to the next hole.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Stakes:</strong> typical group game has $1 to $5 per skin. Carryovers compound; a $2 skin pot that has carried over 4 holes is worth $10 on the 5th hole. Variations: validation (winner must par or better the next hole to keep the skin), no-carryover (every hole gets settled).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Why it works:</strong> the dramatic carryovers create theatre. A long birdie putt to win 6 holes worth of skins is a moment everyone remembers. It is also low-stakes if you set the skin amount right.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>When to use:</strong> casual foursomes with similar skill levels. The handicap math is awkward hole-by-hole, so skins works less well across big handicap gaps. Often run alongside a Nassau as a side bet.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The Ryder Cup format</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The gold standard for an 8 to 12 person multi-day trip.</strong> Two teams, multiple match types across multiple days. Total points decide the winner. Scales naturally from 8 (two foursomes per side) to 12 or 16 with more matches.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The standard format for 8 players over 4 days:</strong></p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Day 1: foursomes</strong> (alternate shot). Two players on each team take turns hitting one ball. Pairs decided by the captains. 2 matches, 2 points up for grabs.</li>
              <li><strong>Day 2: four-ball</strong> (better ball). Each player plays their own ball, the team takes the lower score on each hole. 2 matches, 2 points.</li>
              <li><strong>Day 3 (if 4 nights): rest day or extra match</strong>. Some groups do a scramble to mix things up.</li>
              <li><strong>Day 4: singles</strong>. Head to head, 8 separate matches, 8 points up for grabs.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Setup:</strong> name two captains (often the most senior or most golf-organising members of the group). Captains draft teams in alternating order. Run the points scoreboard publicly so everyone can see it. Decide the trophy in advance (a small prize, a paid dinner for the winning team, a plaque kept by whoever wins).</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Why it works:</strong> the format adds a real competitive arc to the trip. The conversations at dinner are about the matches; the rounds have stakes; the singles on the final day are dramatic. Most groups who try it run it again.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Wolf</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The rotating-pairs game for foursomes.</strong> A unique format where one player (the Wolf) on each tee picks a partner from the other three based on their drive, or chooses to play alone (Lone Wolf, double points). The Wolf rotates each hole.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>How it works:</strong> the Wolf tees off first. As each other player tees off, the Wolf can claim them as a partner immediately or pass and watch the next drive. After all four drives, the Wolf must pick a partner (or go alone). The team plays better ball; lowest team score wins the hole's points (1 each for the winning team in the standard game; 2 each for a Lone Wolf win; 3 each if the Lone Wolf calls before the others tee off, "Blind Lone Wolf").</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>When to use:</strong> a foursome with mixed skills who want something more interesting than skins. The strategy of when to pick a partner versus go alone is genuinely fun.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Scramble</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>The mixed-skill team format.</strong> All players hit a tee shot, the team picks the best one, and everyone plays their next shot from there. Repeat until the ball is in the hole.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Variations:</strong> Texas Scramble (each player must contribute at least a set number of drives, e.g., 4 per team per round) prevents one strong driver from carrying everything. Florida Scramble (the player whose ball is selected sits out the next shot) shares the load more evenly.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Why it works:</strong> the higher-handicap player contributes through specific shots (a great drive, a clutch putt) without their bad shots costing the team. Removes pressure entirely. Pace of play also speeds up.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>When to use:</strong> mixed-skill foursomes, day-1-of-trip warm-ups, a fun corporate-style round, the rest day in the middle of a longer trip.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Side bets that compound</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Most successful group trips layer side bets on top of the main format. Three classics:</p>
            <ul className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-disc pl-6">
              <li><strong>Closest to the pin:</strong> on every par 3, $1 to $5 from each player goes into the pot. Closest tee shot wins the hole's pot. Skip if no one gets on the green.</li>
              <li><strong>Long drive:</strong> agreed in advance on one par 4 or par 5 per round. Longest drive in the fairway wins.</li>
              <li><strong>Birdie pool:</strong> $1 to $2 from each player into a pot. Each birdie pays out an equal share. Ends with $0 if no one birdies, or the pot split among the birdie-makers.</li>
            </ul>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Keep all gambling pools separate from the trip's shared expenses. Settle them daily, in cash. Our <Link href="/blog/how-to-split-costs-golf-trip" className="text-gold hover:underline">guide to splitting golf trip costs</Link> covers why mixing the two is a mistake.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">The handicap question</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">The single biggest determinant of which format works is the handicap spread in the group.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Tight spread (within 5 strokes):</strong> any format works. Nassau, skins, Wolf are all fun.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Moderate spread (5 to 15 strokes):</strong> Stableford with full handicap, or scramble. Nassau works if you give the full handicap difference.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground"><strong>Big spread (15+ strokes):</strong> scramble or modified Stableford only. Skins and Nassau will frustrate the higher-handicap player. Stroke-play formats are off the table entirely.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">For Ryder Cup formats with 8+ players, captains can balance the teams to keep handicap spreads roughly equal across the two sides. This is the captain's most important job at the draft.</p>
          </section>
          <section>
            <h2 className="text-3xl font-display font-light text-foreground">Practical setup</h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">Five steps to set up any format cleanly:</p>
            <ol className="mt-4 space-y-3 text-base leading-8 text-muted-foreground list-decimal pl-6">
              <li><strong>Confirm everyone has a current handicap</strong> 2 weeks before the trip. The USGA GHIN app is the standard. If someone does not have one, agree on an estimated handicap based on recent rounds.</li>
              <li><strong>Name the format and the stakes</strong> in writing in the group chat. "Day 1: 4-ball Nassau, $5 each segment, $5 birdies, $5 closest to the pin on par 3s. Total max exposure $40 per player per day."</li>
              <li><strong>Bring cash.</strong> Settle daily after the round, in cash, before dinner. Apps and Venmo are clunky for course gambling.</li>
              <li><strong>Designate a scorekeeper</strong> for any cumulative format. The scorekeeper owns the spreadsheet, the running totals, and the final settlement.</li>
              <li><strong>Cap the maximum exposure.</strong> Agree in advance on the most anyone can lose in a single round. Caps prevent the trip-killing scenario where someone is down $400 by day 2 and stops enjoying themselves.</li>
            </ol>
          </section>
          <section className="rounded-2xl border border-gold/20 bg-gold/5 p-8 text-center">
            <h2 className="text-3xl font-display font-light italic text-foreground sm:text-4xl">Plan the trip. Then play the format.</h2>
            <p className="mt-3 text-base text-muted-foreground">FairwayPal handles the destination, dates, and budget so you can focus on the matches.</p>
            <div className="mt-6 flex justify-center"><Link className="primary-link" href="/plan">Start Planning</Link></div>
          </section>
          <section>
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Golf trip formats FAQ</h2>
            <div className="mt-6 space-y-4">
              <FaqItem question="What is the best golf format for a group trip?" answer="Depends on size and skill spread. 8-12 multi-day: Ryder Cup. 4-8 mixed skill: Stableford team. 4 similar skill: Nassau. Mixed-skill foursome: scramble. Casual fun: skins." />
              <FaqItem question="How do you handicap a Nassau?" answer="Full handicap difference, with strokes given on the hardest-rated holes. For team Nassau (better ball), each player plays their own ball with handicap strokes; team takes lower score per hole." />
              <FaqItem question="What is Stableford and how does scoring work?" answer="Points-based: bogey 1, par 2, birdie 3, eagle 4, double or worse 0 (with handicap strokes). Most points wins. Modified Stableford rewards aggression: birdie 2, eagle 5, par 0, bogey -1, double or worse -3." />
              <FaqItem question="How does a skins game work?" answer="Each hole has a pot. Lowest score wins the pot. Ties carry over to the next hole. Carryovers compound dramatically over 18 holes." />
              <FaqItem question="What is the Ryder Cup format?" answer="Two teams across multiple days: foursomes (alternate shot), four-ball (better ball), singles (head to head). Total points wins. Best for 8-12 player multi-day trips." />
              <FaqItem question="What format works best for mixed-skill groups?" answer="Stableford with full handicap, better ball, or scramble. Avoid stroke play with big handicap gaps." />
            </div>
          </section>
          <section>
            <p className="eyebrow">Keep Reading</p>
            <h2 className="mt-2 text-3xl font-display font-light text-foreground">Related guides</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <RelatedPost href="/blog/golf-trip-group-size" title="Golf Trip Group Size" description="How group size shapes the format options." />
              <RelatedPost href="/blog/how-to-split-costs-golf-trip" title="How to Split Costs Without Resentment" description="Keep gambling pools separate from trip expenses." />
              <RelatedPost href="/blog/best-golf-trip-apps" title="Best Golf Trip Apps and Tools" description="Apps that help track Ryder Cup scoring or skins carryovers." />
              <RelatedPost href="/blog/golf-trip-weekend-schedule" title="3-Night Golf Weekend Schedule" description="Where to fit the matches into the schedule." />
              <RelatedPost href="/blog/how-to-plan-a-golf-trip" title="How to Plan a Golf Trip" description="The full planning guide; format is one part." />
              <RelatedPost href="/blog/best-bachelor-party-golf-destinations" title="Best Bachelor Golf Destinations" description="Six destinations and the formats that suit each." />
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
