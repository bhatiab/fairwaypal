'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Wine, Landmark, MapPin, Calendar, Info, Mountain } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const WINE_EXPERIENCES = [
  {
    name: 'Chianti wine country',
    type: 'Vineyard tours and tastings',
    detail: 'The Chianti wine region is immediately south of the Mugello valley. Some of Italy\'s most celebrated vineyards are within an hour\'s drive. A morning at a Chianti estate includes a vineyard walk, cellar tour, and tasting of Chianti Classico — Sangiovese-based reds that pair with everything Tuscan.',
    bookingNote: 'Many estates offer tours on specific days. Book at least a week ahead for race week timing.',
  },
  {
    name: 'Local olive oil producers',
    type: 'Farm visits',
    detail: 'Tuscany produces exceptional olive oil. Several farms in the Mugello valley offer visits where you can taste freshly pressed oil, learn about the process, and buy direct. These are small, personal experiences — the opposite of a tourist bus tour.',
    bookingNote: 'Ask your accommodation host for recommendations — local agriturismos often connect guests with nearby producers.',
  },
];

const FLORENCE = [
  {
    name: 'Galleria degli Uffizi',
    detail: 'One of the world\'s greatest art museums. Botticelli\'s Birth of Venus, works by Leonardo, Raphael, Michelangelo. Allow 2-3 hours minimum. The queue can be long — book timed-entry tickets online in advance.',
  },
  {
    name: 'Florence Cathedral (Duomo)',
    detail: 'Brunelleschi\'s dome is one of the most recognizable structures in the world. You can climb to the top for panoramic views over the city. The adjacent Baptistery doors are equally impressive. Free to enter the cathedral; dome climb requires a ticket.',
  },
  {
    name: 'Ponte Vecchio & Oltrarno',
    detail: 'The medieval bridge lined with jewellery shops is Florence\'s most photographed landmark. Cross it into the Oltrarno neighbourhood for better restaurants, fewer tourists, and the Palazzo Pitti gardens.',
  },
];

const MEDIEVAL = [
  {
    name: 'Scarperia e San Piero',
    detail: 'The nearest town to the circuit has a well-preserved medieval centre with the Palazzo dei Vicari — a castle-like building covered in coats of arms. Scarperia is historically famous for knife-making. The Museo dei Ferri Taglienti (Knife Museum) is a compact but interesting local museum. Walkable in an hour.',
  },
  {
    name: 'Vicchio — Giotto\'s birthplace',
    detail: 'About 15 km east of Scarperia. The main square features the Palazzo Pretorio and Church of S. Giovanni. The house of Giotto — the father of Renaissance painting — is in nearby Vespignano and is open on Sundays. Also the birthplace of Beato Angelico.',
  },
];

const OUTDOOR = [
  {
    name: 'Mugello valley hiking',
    detail: 'The hills around the circuit offer walking trails through cypress-lined paths, olive groves, and woodland. The Mugello landscape is classic Tuscany — rolling green hills, stone farmhouses, and quiet roads. A morning walk before heading to the circuit is a good way to start the day.',
  },
  {
    name: 'Lake Bilancino',
    detail: 'An artificial lake near the circuit, popular for walking, picnicking, and cooling off in hot weather. A relaxed option for a non-race afternoon if the weather is good.',
  },
];

const ITINERARY = [
  {
    day: 'Thursday (arrival day)',
    activities: ['Arrive in Florence or the Mugello area', 'Afternoon: Scarperia old town and Palazzo dei Vicari', 'Evening: Dinner at a local trattoria — try bistecca alla fiorentina'],
  },
  {
    day: 'Friday (practice day)',
    activities: ['Morning at the circuit for free practice sessions', 'Afternoon: Chianti wine tasting or olive oil farm visit', 'Evening: Explore Borgo San Lorenzo or campsite atmosphere'],
  },
  {
    day: 'Saturday (sprint day)',
    activities: ['At circuit for qualifying and sprint race', 'Evening: Florence day trip — Duomo, Ponte Vecchio, dinner in Oltrarno'],
  },
  {
    day: 'Sunday (race day)',
    activities: ['Arrive at circuit early (by 8-9 AM)', 'Moto3 and Moto2 races through the morning', 'MotoGP race at 14:00 local time', 'Post-race: enjoy the Tifosi celebrations, then late dinner'],
  },
];

export default function ExperiencesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Experiences
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Tuscany is the destination — the race is the excuse
          </p>
        </div>
      </section>

      {/* Intro note */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Mugello sits in the heart of Tuscany.</strong> Florence — one of the world&apos;s great cities — is 30 km away. Chianti wine country is next door. Medieval hilltop towns dot the landscape. The food is among Italy&apos;s best. This is one of the few race trips where the destination genuinely rivals the racing itself.
            </p>
          </div>
        </div>
      </section>

      {/* Wine */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Wine className="inline h-5 w-5 text-primary mr-2" />
            Wine & Food Experiences
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Tuscany is one of the world&apos;s great wine regions. Chianti vineyards and olive farms are a short drive from the circuit. A tasting session on Thursday or Friday is the perfect complement to a race weekend.
          </p>
          <div className="space-y-4">
            {WINE_EXPERIENCES.map((w) => (
              <div key={w.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">{w.name}</p>
                    <p className="text-xs text-muted-foreground">{w.type}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{w.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">
                    <Info className="inline h-3 w-3 mr-1" />{w.bookingNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florence */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Landmark className="inline h-5 w-5 text-primary mr-2" />
            Florence — 30 km Away
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            The birthplace of the Renaissance is less than an hour from the circuit. If you have a free afternoon — particularly Thursday or the Saturday evening after the sprint race — Florence is unmissable.
          </p>
          <div className="space-y-3">
            {FLORENCE.map((f) => (
              <div key={f.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{f.name}</p>
                <p className="text-xs text-muted-foreground">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medieval towns */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Medieval Towns
          </h2>
          <div className="space-y-3">
            {MEDIEVAL.map((m) => (
              <div key={m.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outdoor */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Mountain className="inline h-5 w-5 text-primary mr-2" />
            Outdoors
          </h2>
          <div className="space-y-3">
            {OUTDOOR.map((o) => (
              <div key={o.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{o.name}</p>
                <p className="text-xs text-muted-foreground">{o.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day trips */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <MapPin className="inline h-5 w-5 text-primary mr-2" />
            Day Trips
          </h2>
          <div className="rounded-xl border border-border/50 bg-card/60 p-4 mb-3">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <p className="text-sm font-semibold text-foreground">San Gimignano</p>
              <span className="text-xs font-mono text-primary shrink-0">~1.5h drive</span>
            </div>
            <p className="text-xs text-muted-foreground">The most photogenic medieval town in Tuscany. Famous stone towers, gelato, and views. Best visited on a non-race day.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-card/60 p-4">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <p className="text-sm font-semibold text-foreground">Siena</p>
              <span className="text-xs font-mono text-primary shrink-0">~1.5h drive</span>
            </div>
            <p className="text-xs text-muted-foreground">Historic city famous for the Palio horse race and the shell-shaped Piazza del Campo. Gothic cathedral, excellent food, and a proper city atmosphere. Combine with San Gimignano for a full day trip.</p>
          </div>
        </div>
      </section>

      {/* Weekend itinerary */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Calendar className="inline h-5 w-5 text-primary mr-2" />
            Race Weekend Itinerary
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            How to combine the racing with the best of Tuscany across the four days.
          </p>
          <div className="space-y-4">
            {ITINERARY.map((day) => (
              <div key={day.day} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-3">{day.day}</p>
                <ul className="space-y-2">
                  {day.activities.map((a, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="shrink-0 text-primary mt-0.5">—</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
