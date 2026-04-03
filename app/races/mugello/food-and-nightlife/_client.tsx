'use client'
import Link from "next/link";
import { getRaceBySlug } from "@/data/races2026";
import Footer from "@/components/Footer";
import { ArrowLeft, UtensilsCrossed, Wine, Music, MapPin, AlertTriangle, Clock } from "lucide-react";

const race = getRaceBySlug('mugello')!;

const RESTAURANTS = [
  {
    name: 'Fattoria Il Palagio',
    type: 'Traditional Tuscan trattoria',
    area: 'Scarperia',
    detail: 'A working farm restaurant on the outskirts of Scarperia serving traditional Tuscan food made from their own produce. Ribollita, pappardelle al cinghiale (wild boar), and grilled meats. The kind of place where the menu is what the kitchen made today.',
    tip: 'Book ahead for race weekend — this is a small place and fills up with fans who know the area.',
  },
  {
    name: 'Antica Osteria di Nandone',
    type: 'Steak specialist — since 1909',
    area: 'Mugello hills',
    detail: 'Operating since 1909, now run by fourth-generation owner Paolo Mugnai. Listed on the "World\'s 101 Best Steak Restaurants." Known for bistecca alla fiorentina cooked over wood. This is where you come for the definitive Tuscan steak experience.',
    tip: 'Book well ahead for race weekend. The steak is worth the trip on its own.',
  },
  {
    name: 'Ristorante Divino',
    type: 'Italian, varied menu',
    area: 'Scarperia',
    detail: 'Extensive menu with a local following. Known for fillet steak with peppercorn sauce and excellent calzone. Won a local "golden tortellini" award. Race weekend visitors frequently book repeat dinners here across the weekend.',
    tip: 'Arrive between 12:30 and 1:30 PM for lunch or after 7:30 PM for dinner. Italian timing.',
  },
];

const TUSCAN_FOOD = [
  {
    name: 'Tortelli Mugellani',
    detail: 'The signature dish of the Mugello valley — large ravioli stuffed with potatoes. This is the local speciality you will not find done this well anywhere else. Every trattoria in the valley has its own version. Order them.',
  },
  {
    name: 'Bistecca alla fiorentina',
    detail: 'A massive T-bone steak from Chianina cattle, grilled rare over charcoal. This is the signature dish of Tuscany. Shared between two people, served with nothing but salt, olive oil, and perhaps white beans. Expect €35-60 per kilo — if it costs less, it is probably not authentic.',
  },
  {
    name: 'Chianti wines',
    detail: 'The Chianti Rufina sub-zone is the nearest wine area to Mugello. Medium-bodied Sangiovese reds that pair perfectly with Tuscan food. A bottle at a local trattoria costs €15-25 and will be very good.',
  },
];

const RACE_WEEK_ATMOSPHERE = [
  {
    title: 'Campsite parties',
    detail: 'The campsites around Mugello are the social centre of race week. Thousands of fans — mostly Italian, but increasingly international — set up camp from Thursday and create their own festival atmosphere with grills, music, and celebrations that run late into the night. The camping atmosphere at Mugello is famous in the MotoGP world.',
  },
  {
    title: 'Scarperia town centre',
    detail: 'The nearest town to the circuit fills up during race week. Small bars and restaurants in the historic centre attract fans in the evenings. The atmosphere is relaxed and local — this is a small Tuscan town, not a party city. That is part of the charm.',
  },
  {
    title: 'Circuit food stalls',
    detail: 'Inside the circuit, food stalls serve panini, pizza, pasta, and porchetta (slow-roasted pork). Quality is better than most race circuits because this is Italy — even circuit food tends to be decent. Prices are marked up for the event but not outrageous.',
  },
  {
    title: 'Pre-race atmosphere on the straight',
    detail: 'On Sunday morning, the main straight fills with fans early. The atmosphere builds through the Moto3 and Moto2 races until the MotoGP warm-up and race. When the Italian national anthem plays, the crowd erupts. It is one of MotoGP\'s great emotional experiences.',
  },
];

const DAY_TRIPS = [
  {
    destination: 'Florence',
    distance: '30 km / 40-60 min drive',
    detail: 'One of the world\'s great cities. The Uffizi, the Duomo, Ponte Vecchio, and hundreds of restaurants and bars. If you arrive on Wednesday or Thursday, spend a day in Florence. The train back to the Mugello area runs until late evening.',
  },
  {
    destination: 'Fiesole',
    distance: '25 km / 30 min drive',
    detail: 'A hilltop town overlooking Florence with Roman ruins, Etruscan walls, and panoramic views over the city. Less crowded than Florence itself and excellent for a quiet afternoon with good food.',
  },
];

export default function FoodAndNightlifeClient() {
  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Header */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <Link href="/races/mugello" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-4">
            <ArrowLeft className="h-3 w-3" /> {race.name}
          </Link>

          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Food & Nightlife
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Where to eat and what to expect after the racing stops
          </p>
        </div>
      </section>

      {/* Key tip */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Italian meal times</p>
                <p className="text-sm text-muted-foreground">
                  Lunch in Italy runs from 12:30–2:30 PM and is often the main meal. Dinner starts at 7:30–8:00 PM — restaurants may not be fully running before then. Arriving at 6 PM will get you a table, but the kitchen might not be ready and you will miss the atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurants */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <UtensilsCrossed className="inline h-5 w-5 text-primary mr-2" />
            Restaurants
          </h2>
          <div className="space-y-4">
            {RESTAURANTS.map((r) => (
              <div key={r.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-sm font-bold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.type} · {r.area}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{r.detail}</p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-2.5">
                  <p className="text-xs text-primary/80">{r.tip}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Book ahead:</strong> The Mugello area has limited restaurant capacity. During race week, every decent restaurant fills up. Book before you travel — walk-in tables are unlikely on Friday and Saturday evenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tuscan food */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Wine className="inline h-5 w-5 text-primary mr-2" />
            Tuscan Food & Wine — What to Try
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            You are in Tuscany — one of the world&apos;s great food and wine regions. Do not eat only at the circuit. Even a simple trattoria in the Mugello valley will serve food that is genuinely excellent.
          </p>
          <div className="space-y-4">
            {TUSCAN_FOOD.map((t) => (
              <div key={t.name} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Race week atmosphere */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-xl font-bold text-foreground mb-4">
            <Music className="inline h-5 w-5 text-primary mr-2" />
            Race Week Atmosphere
          </h2>
          <div className="space-y-4">
            {RACE_WEEK_ATMOSPHERE.map((a) => (
              <div key={a.title} className="rounded-xl border border-border/50 bg-card/60 p-5">
                <p className="text-sm font-bold text-foreground mb-2">{a.title}</p>
                <p className="text-sm text-muted-foreground">{a.detail}</p>
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
            Evening Escapes — Nearby Towns
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            If Mugello-area restaurants are fully booked, or you want a different atmosphere, these places are close and worth the trip.
          </p>
          <div className="space-y-3">
            {DAY_TRIPS.map((d) => (
              <div key={d.destination} className="rounded-xl border border-border/50 bg-card/60 p-4">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-foreground">{d.destination}</p>
                  <span className="text-xs font-mono text-primary shrink-0">{d.distance}</span>
                </div>
                <p className="text-xs text-muted-foreground">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
