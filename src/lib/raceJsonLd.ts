/**
 * Reusable JSON-LD structured data builders for race pages.
 * Pass visible, on-page content only — no fabricated values.
 */

const SITE_URL = "https://gpmotopal.com";

/* ── Geo coordinates for every 2026 MotoGP circuit ── */
const circuitGeo: Record<string, { lat: number; lng: number }> = {
  "thailand":       { lat: 14.9583, lng: 103.0847 },
  "brazil":         { lat: -16.7194, lng: -49.2653 },
  "austin":         { lat: 30.1328, lng: -97.6411 },
  "jerez":          { lat: 36.7083, lng: -6.0342 },
  "le-mans":        { lat: 47.9567, lng: 0.2075 },
  "catalunya":      { lat: 41.5700, lng: 2.2611 },
  "mugello":        { lat: 43.9975, lng: 11.3719 },
  "hungary":        { lat: 46.8889, lng: 17.7653 },
  "brno":           { lat: 49.2036, lng: 16.5347 },
  "assen":          { lat: 52.9625, lng: 6.5231 },
  "sachsenring":    { lat: 50.7911, lng: 12.6878 },
  "silverstone":    { lat: 52.0786, lng: -1.0169 },
  "aragon":         { lat: 41.0783, lng: -0.2308 },
  "misano":         { lat: 43.9628, lng: 12.6836 },
  "austria":        { lat: 47.2197, lng: 14.7647 },
  "motegi":         { lat: 36.5328, lng: 140.2281 },
  "mandalika":      { lat: -8.9000, lng: 116.3167 },
  "phillip-island": { lat: -38.5000, lng: 145.2333 },
  "sepang":         { lat: 2.7606, lng: 101.7381 },
  "qatar":          { lat: 25.4900, lng: 51.4542 },
  "portimao":       { lat: 37.2272, lng: -8.6267 },
  "valencia":       { lat: 39.4883, lng: -0.6264 },
};

export interface RaceJsonLdInput {
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  circuit: string;
  city: string;
  countryCode: string;
  slug: string;
  image?: string;
  faqItems?: { q: string; a: string }[];
  pagePath?: string;
  offerPath?: string;
  breadcrumbItems?: { name: string; item: string }[];
}

export function buildRaceJsonLd(input: RaceJsonLdInput) {
  const pageUrl = input.pagePath
    ? `${SITE_URL}${input.pagePath}`
    : `${SITE_URL}/races/${input.slug}`;

  const geo = circuitGeo[input.slug];
  const endDate = input.endDate ?? input.startDate;

  const event: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: input.name,
    description: input.description,
    startDate: input.startDate.toISOString(),
    endDate: endDate.toISOString(),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: input.circuit,
      address: {
        "@type": "PostalAddress",
        addressLocality: input.city,
        addressCountry: input.countryCode,
      },
      ...(geo ? {
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.lat,
          longitude: geo.lng,
        },
      } : {}),
    },
    image: [
      input.image ?? `${SITE_URL}/images/tracks/${input.slug}.jpg`,
    ],
    organizer: {
      "@type": "Organization",
      name: "Dorna Sports",
      url: "https://www.motogp.com",
    },
    performer: {
      "@type": "SportsOrganization",
      name: "MotoGP World Championship",
    },
    offers: {
      "@type": "Offer",
      url: input.offerPath ? `${SITE_URL}${input.offerPath}` : `${SITE_URL}/races/${input.slug}`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    sport: "MotoGP",
    url: pageUrl,
  };

  const defaultBreadcrumbs = [
    { name: "Home", item: SITE_URL },
    { name: "Races", item: `${SITE_URL}/` },
    { name: input.name, item: pageUrl },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: (input.breadcrumbItems ?? defaultBreadcrumbs).map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  const schemas: object[] = [event, breadcrumb];

  if (input.faqItems && input.faqItems.length > 0) {
    const faqPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: input.faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    };
    schemas.push(faqPage);
  }

  return schemas;
}

/**
 * Build WebSite schema with SearchAction for the homepage.
 */
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GP Moto Pal — MotoGP Race Travel Guides",
    url: SITE_URL,
    description: "Your complete guide to the MotoGP season — race schedules, circuit guides, trip planners, and fan experiences.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/calendar?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Injects an array of JSON-LD objects into <head> under a single script tag.
 */
export function injectJsonLd(id: string, schemas: object[]): () => void {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemas.map((s) => {
      const { "@context": _ctx, ...rest } = s as Record<string, unknown>;
      return rest;
    }),
  });
  return () => { el?.remove(); };
}
