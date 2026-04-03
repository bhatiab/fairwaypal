'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, Wine, Music, MapPin, Landmark, Calendar, Info } from "lucide-react";

const race = getRaceBySlug('jerez')!;

const BODEGAS = [
  {
    name: 'Tío Pepe / González Byass',
    type: 'Large estate, guided tours',
    detail: 'One of the most famous sherry producers in the world. The González Byass estate in the city centre offers guided cellar tours, vineyard walks, and tastings of their full range from dry fino to rich Pedro Ximénez. The most accessible bodega visit for first-timers.',
    bookingNote: 'Tours run daily. Book online in advance — race week slots fill up.',
  },
  {
    name: 'Bodegas Lustau',
    type: 'Premium tasting experiences',
    detail: 'Lustau is one of the most respected sherry houses for quality. Their cellar tours focus on the solera ageing system and culminate in a tasting of their premium range. A more in-depth experience than the larger estate tours.',
    bookingNote: 'Smaller groups. Book well in advance for race week.',
  },
  {
    name: 'Bodegas Fundador',
    type: 'Historical cellar, brandy and sherry',
    detail: 'Pedro Domecq\'s historic cellar, now Bodegas Fundador. Tours cover both sherry and brandy production. One of the most atmospheric cellars in Jerez — the scale of the ageing barrels is impressive.',
    bookingNote: 'Check opening times as they vary by season.',
  },
  {
    name: 'Bodegas Álvaro Domecq',
    type: 'Family estate, traditional methods',
    detail: 'A family-run bodega using traditional methods. Smaller and more personal than the large estates. Good for visitors who want a less commercialised introduction to sherry production.',
    bookingNote: 'Smaller capacity — book directly.',
  },
];

const FLAMENCO = [
  {
    name: 'Tabanco El Pasaje',
    detail: 'The most accessible flamenco experience in Jerez. This traditional sherry bar hosts impromptu flamenco performances at night — not a staged tourist show, but real flamenco from local performers. Go after dinner, order sherry, and wait. Race week is particularly lively.',
  },
  {
    name: 'Peña Flamenca La Bulería',
    detail: 'A local flamenco club (peña) in the old town. These clubs exist for the local community, not tourists — which makes them the most authentic flamenco you can see. Shows are in the evenings and the standard is very high.',
  },
  {
    name: 'Festival de Jerez',
    detail: 'One of Spain\'s top flamenco festivals, held annually in late February to early March. This predates the race by roughly 2 months, so it won\'t overlap with the April race weekend — but if you are planning a longer trip to Spain, it\'s worth knowing about.',
  },
];

const HORSES = [
  {
    name: 'Royal Andalusian School of Equestrian Art',
    detail: 'The world\'s pre-eminent Andalusian dressage school. Their show "Cómo Bailan los Caballos Andaluces" (How the Andalusian Horses Dance) runs multiple times a week and showcases precision horse training at its most spectacular. One of the top cultural experiences in Spain.',
    practical: 'Shows run on Tuesdays, Thursdays, and Fridays (times vary). Book well in advance — tickets sell out.',
  },
  {
    name: 'Feria del Caballo — Horse Fair',
    detail: 'Jerez\'s biggest annual event. In 2026, the Feria del Caballo runs 9–16 May — two to three weeks after the race. If you can extend your trip, it\'s an extraordinary event: parades of Andalusian horses, casetas (food and drink marquees serving sherry), flamenco dresses, live music, and celebrations across the city.',
    practical: 'The race is 24–26 April; the Feria is 9–16 May. They don\'t overlap in 2026, but extending your stay is worth considering.',
  },
];

const HISTORY = [
  {
    name: 'Alcázar of Jerez',
    detail: 'A well-preserved Moorish fortress in the city centre with gardens, an ancient bathhouse, and panoramic views over the city. One of the best examples of Moorish architecture in Andalusia. Compact enough to visit in 1-2 hours.',
  },
  {
    name: 'Jerez Cathedral',
    detail: 'An impressive Gothic/Baroque cathedral built over a 17th-century structure. The bell tower is climbable for good city views. Located in the heart of the historic centre.',
  },
  {
    name: 'Mercado Central de Abastos',
    detail: 'The city\'s central market. Good for local produce, fresh food, cheeses, and Andalusian specialities. An excellent morning stop on non-race days to pick up provisions.',
  },
];

const DAY_TRIPS = [
  {
    destination: 'Cádiz',
    travel: '45 min by train',
    detail: 'One of Europe\'s oldest cities with a compact, beautiful historic centre built on a narrow peninsula. Excellent beaches on the Atlantic side, good seafood restaurants, and a relaxed atmosphere. The most popular day trip from Jerez.',
  },
  {
    destination: 'White Village Route — Arcos de la Frontera',
    travel: '30 min drive',
    detail: 'The closest of Andalusia\'s famous white villages (pueblos blancos). Arcos sits dramatically on a clifftop ridge above a gorge. Whitewashed houses, narrow streets, and views over the countryside. A 2-hour visit is enough to get the atmosphere.',
  },
  {
    destination: 'El Puerto de Santa María',
    travel: '20 min drive',
    detail: 'A sherry town on the coast with excellent seafood restaurants and a more relaxed pace than Jerez. Good for an afternoon or evening if Jerez restaurants are fully booked during race week.',
  },
];

const ITINERARY = [
  {
    day: 'Thursday (arrival day)',
    activities: ['Bodega tour in the afternoon — Tío Pepe or Lustau', 'Explore the Alcázar and old town', 'Tapas dinner in the city centre — Bar Juanito or walk the tabancos'],
  },
  {
    day: 'Friday (practice day)',
    activities: ['Morning at the circuit for free practice sessions', 'Afternoon: Royal Equestrian School show (book ahead)', 'Evening: Flamenco at Tabanco El Pasaje'],
  },
  {
    day: 'Saturday (sprint day)',
    activities: ['Morning: Mercado Central for breakfast provisions', 'At circuit for qualifying and sprint race', 'Evening: Street party atmosphere in old town — Plaza Plateros area'],
  },
  {
    day: 'Sunday (race day)',
    activities: ['Arrive at circuit by 9 AM (over 100,000 fans expected)', 'Moto3 and Moto2 races throughout the morning', 'MotoGP race at 14:00 local time', 'Post-race: late dinner once the crowds have cleared'],
  },
];

export default function ExperiencesClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/jerez" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Experiences
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Jerez is not just a race — it is a destination
          </p>
        </div>
      </section>

      {/* Intro note */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Jerez has three pillars beyond the racing:</strong> sherry (it is the home of sherry wine), horses (Andalusian dressage is world-class here), and flamenco (Jerez has its own distinct flamenco style and is considered one of its birthplaces). Any one of these is worth an extended visit. Combined with the race, they make a trip to Jerez genuinely different from other race weekends.
            </p>
          </div>
        </div>
      </section>

      {/* Sherry bodegas */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Wine className="inline h-5 w-5 text-primary mr-2" />
            Sherry Bodega Tours
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Jerez is the heart of the sherry triangle. Bodega tours combine history, cellar architecture, the solera ageing system, and tastings. Most tours take 60-90 minutes. Book in advance, especially for race week.
          </p>
          <div className="space-y-4">
            {BODEGAS.map((b) => (
              <div key={b.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">{b.name}</p>
                    <p className="text-xs text-muted-foreground">{b.type}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{b.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">
                    <Info className="inline h-3 w-3 mr-1" />{b.bookingNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flamenco */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Music className="inline h-5 w-5 text-primary mr-2" />
            Flamenco
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Jerez is one of the recognised birthplaces of flamenco and has its own distinct style — more raw and rhythmically complex than the tourist shows you find in Seville. The best experiences here are the unplanned ones.
          </p>
          <div className="space-y-4">
            {FLAMENCO.map((f) => (
              <div key={f.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{f.name}</p>
                <p className="text-sm text-muted-foreground">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horses */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            Horses & Equestrian Culture
          </h2>
          <div className="space-y-4">
            {HORSES.map((h) => (
              <div key={h.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{h.name}</p>
                <p className="text-sm text-muted-foreground mb-3">{h.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">
                    <Info className="inline h-3 w-3 mr-1" />{h.practical}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Landmark className="inline h-5 w-5 text-primary mr-2" />
            Historical Jerez
          </h2>
          <div className="space-y-3">
            {HISTORY.map((h) => (
              <div key={h.name} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <p className="text-sm font-semibold text-foreground mb-1">{h.name}</p>
                <p className="text-xs text-muted-foreground">{h.detail}</p>
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
          <div className="space-y-3">
            {DAY_TRIPS.map((d) => (
              <div key={d.destination} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-foreground">{d.destination}</p>
                  <span className="text-xs font-mono text-primary shrink-0">{d.travel}</span>
                </div>
                <p className="text-xs text-muted-foreground">{d.detail}</p>
              </div>
            ))}
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
            How to combine the racing with the best of Jerez across the four days.
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
