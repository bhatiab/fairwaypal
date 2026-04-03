/**
 * generate-amp.mjs
 *
 * Generates static AMP (Accelerated Mobile Pages) HTML files for all
 * key pages of Grand Prix Pal.  Run via:  node scripts/generate-amp.mjs
 *
 * Output:  public/amp/<page>/index.html
 * Each AMP page is paired with its canonical via:
 *   <link rel="canonical" href="https://grandprixpal.com/<page>">
 * Each canonical page should carry:
 *   <link rel="amphtml" href="https://grandprixpal.com/amp/<page>">
 *   (injected at runtime by usePageMeta.ts)
 */

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const AMP_OUT = resolve(ROOT, "public", "amp");
const SITE = "https://grandprixpal.com";

/* ─────────────────────────────────────────────
   AMP boilerplate (required verbatim by spec)
───────────────────────────────────────────── */
const AMP_BOILERPLATE = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;

/* ─────────────────────────────────────────────
   Shared inline CSS (amp-custom, max 75 KB)
───────────────────────────────────────────── */
const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;background:#0a0a0f;color:#e2e8f0;line-height:1.65}
a{color:#e63946;text-decoration:none}
a:hover{text-decoration:underline}
.site-header{background:#0a0a0f;border-bottom:1px solid #1e293b;padding:1rem 1.25rem;display:flex;align-items:center;justify-content:space-between}
.site-header a.logo{font-weight:800;font-size:1.1rem;color:#fff;letter-spacing:-.02em}
.site-header nav{display:flex;gap:1rem;font-size:.85rem}
.hero{padding:3.5rem 1.25rem 2.5rem;max-width:740px;margin:0 auto}
.hero h1{font-size:clamp(1.6rem,5vw,2.6rem);font-weight:900;line-height:1.15;letter-spacing:-.03em;color:#fff;margin-bottom:.75rem}
.hero p{color:#94a3b8;font-size:1rem;max-width:56ch}
.badge{display:inline-block;background:#e63946;color:#fff;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:.2em .7em;border-radius:999px;margin-bottom:.75rem}
.section{padding:2rem 1.25rem;max-width:740px;margin:0 auto}
.section h2{font-size:1.4rem;font-weight:800;color:#fff;margin-bottom:1rem;letter-spacing:-.02em}
.section h3{font-size:1.05rem;font-weight:700;color:#e2e8f0;margin:.75rem 0 .35rem}
.card{background:#111827;border:1px solid #1e293b;border-radius:.75rem;padding:1.25rem;margin-bottom:1rem}
.card h3{margin-top:0;font-size:1rem;font-weight:700;color:#fff}
.card p{font-size:.9rem;color:#94a3b8;margin-top:.35rem}
.meta{font-size:.8rem;color:#64748b;margin-top:.5rem}
.tag{display:inline-block;background:#1e293b;color:#94a3b8;font-size:.7rem;padding:.2em .55em;border-radius:.3rem;margin:.2rem .2rem 0 0}
.cta-btn{display:inline-block;background:#e63946;color:#fff;font-size:.9rem;font-weight:700;padding:.65rem 1.5rem;border-radius:.5rem;margin-top:1.25rem;letter-spacing:.02em}
.race-grid{display:grid;gap:.75rem}
@media(min-width:500px){.race-grid{grid-template-columns:1fr 1fr}}
.race-item{background:#111827;border:1px solid #1e293b;border-radius:.6rem;padding:1rem}
.race-item h3{font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.25rem}
.race-item .dates{font-size:.78rem;color:#64748b}
.race-item .circuit{font-size:.78rem;color:#94a3b8;margin-top:.2rem}
table{width:100%;border-collapse:collapse;font-size:.85rem;margin-top:.75rem}
th{text-align:left;padding:.5rem .75rem;background:#1e293b;color:#94a3b8;font-size:.75rem;text-transform:uppercase;letter-spacing:.06em}
td{padding:.6rem .75rem;border-bottom:1px solid #1e293b;color:#e2e8f0}
tr:last-child td{border-bottom:none}
.highlight-list{list-style:none;padding:0}
.highlight-list li{padding:.45rem 0;border-bottom:1px solid #1e293b;font-size:.9rem;color:#94a3b8}
.highlight-list li::before{content:"✓ ";color:#22c55e;font-weight:700}
.footer{padding:2rem 1.25rem;border-top:1px solid #1e293b;font-size:.8rem;color:#475569;text-align:center}
.footer a{color:#64748b}
`;

/* ─────────────────────────────────────────────
   JSON-LD helpers
───────────────────────────────────────────── */
const CIRCUIT_GEO = {
  "melbourne-2026":       { lat: -37.8497, lng: 144.9680 },
  "chinese-2026":         { lat: 31.3389,  lng: 121.2197 },
  "suzuka-2026":          { lat: 34.8431,  lng: 136.5407 },
  "bahrain-2026":         { lat: 26.0325,  lng: 50.5106  },
  "saudi-arabia-2026":    { lat: 21.6319,  lng: 39.1044  },
  "miami-2026":           { lat: 25.9581,  lng: -80.2389 },
  "canada-2026":          { lat: 45.5000,  lng: -73.5228 },
  "monaco-2026":          { lat: 43.7347,  lng: 7.4206   },
  "spain-barcelona-2026": { lat: 41.5700,  lng: 2.2611   },
  "austria-2026":         { lat: 47.2197,  lng: 14.7647  },
  "silverstone-2026":     { lat: 52.0786,  lng: -1.0169  },
  "belgium-2026":         { lat: 50.4372,  lng: 5.9714   },
  "hungary-2026":         { lat: 47.5789,  lng: 19.2486  },
  "netherlands-2026":     { lat: 52.3888,  lng: 4.5409   },
  "italy-2026":           { lat: 45.6156,  lng: 9.2811   },
  "spain-madrid-2026":    { lat: 40.4168,  lng: -3.7038  },
  "azerbaijan-2026":      { lat: 40.3725,  lng: 49.8533  },
  "singapore-2026":       { lat: 1.2914,   lng: 103.8640 },
  "usa-austin-2026":      { lat: 30.1328,  lng: -97.6411 },
  "mexico-2026":          { lat: 19.4042,  lng: -99.0907 },
  "brazil-2026":          { lat: -23.7036, lng: -46.6997 },
  "las-vegas-2026":       { lat: 36.1147,  lng: -115.1728},
  "qatar-2026":           { lat: 25.4900,  lng: 51.4542  },
  "abu-dhabi-2026":       { lat: 24.4672,  lng: 54.6031  },
};

/** Build a BreadcrumbList JSON-LD object */
function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

/** Build a SportsEvent JSON-LD object for a race */
function sportsEventLd(race, pagePath) {
  const geo = CIRCUIT_GEO[race.slug];
  const pageUrl = `${SITE}${pagePath}`;
  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${race.name} 2026`,
    description: `${race.city} Grand Prix 2026 at ${race.circuit}. ${race.dates}.`,
    url: pageUrl,
    sport: "Formula 1",
    location: {
      "@type": "Place",
      name: race.circuit,
      address: { "@type": "PostalAddress", addressLocality: race.city },
      ...(geo ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } } : {}),
    },
    organizer: { "@type": "Organization", name: "Formula One Group", url: "https://www.formula1.com" },
  };
}

/** Build an Article JSON-LD object for guide pages */
function articleLd(title, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE}${path}`,
    publisher: {
      "@type": "Organization",
      name: "Grand Prix Pal",
      url: SITE,
    },
    dateModified: "2026-03-11",
  };
}

/** Serialise one or more JSON-LD objects into script tags */
function jsonLdTags(schemas) {
  return schemas
    .map(s => `  <script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n");
}

/* ─────────────────────────────────────────────
   Core page builder
───────────────────────────────────────────── */
function ampPage({ path, title, description, ogImage, bodyHtml, jsonLd }) {
  const canonical = path === "/" ? SITE + "/" : `${SITE}${path}`;
  const ampPath = path === "/" ? "/amp/" : `/amp${path}`;
  const image = ogImage ?? "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/09ecc853-ae2f-48e4-b777-d46a6d018d1a/id-preview-557797b3--e6d3c34c-3bc9-4085-9e5e-beaf027eba6c.lovable.app-1771982698286.png";
  const ldBlock = jsonLd && jsonLd.length ? "\n" + jsonLdTags(jsonLd) : "";

  return `<!doctype html>
<html ⚡ lang="en">
<head>
  <meta charset="utf-8">
  <title>${escHtml(title)}</title>
  <meta name="description" content="${escAttr(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  ${AMP_BOILERPLATE}
  <style amp-custom>${CSS}</style>${ldBlock}

  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE}${ampPath}">
  <meta property="og:title" content="${escAttr(title)}">
  <meta property="og:description" content="${escAttr(description)}">
  <meta property="og:image" content="${image}">
  <meta property="og:site_name" content="Grand Prix Pal">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escAttr(title)}">
  <meta name="twitter:description" content="${escAttr(description)}">
  <meta name="twitter:image" content="${image}">
</head>
<body>
${siteHeader()}
${bodyHtml}
${siteFooter()}
</body>
</html>`;
}

function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function escAttr(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function siteHeader() {
  return `<header class="site-header">
  <a class="logo" href="${SITE}/">Grand Prix Pal</a>
  <nav>
    <a href="${SITE}/calendar">Calendar</a>
    <a href="${SITE}/standings">Standings</a>
    <a href="${SITE}/guides">Guides</a>
  </nav>
</header>`;
}

function siteFooter() {
  return `<footer class="footer">
  <p>&copy; 2026 Grand Prix Pal &mdash;
    <a href="${SITE}/privacy">Privacy</a> &middot;
    <a href="${SITE}/terms">Terms</a> &middot;
    <a href="${SITE}/affiliate-disclosure">Affiliate Disclosure</a>
  </p>
</footer>`;
}

/* ─────────────────────────────────────────────
   Race data (mirrors src/data/races2026.ts)
───────────────────────────────────────────── */
const RACES = [
  { id: 1,  name: "Australian Grand Prix",      city: "Melbourne",    circuit: "Albert Park Circuit",               slug: "melbourne-2026",         dates: "13–15 Mar 2026", isSprint: false },
  { id: 2,  name: "Chinese Grand Prix",         city: "Shanghai",     circuit: "Shanghai International Circuit",    slug: "chinese-2026",           dates: "20–22 Mar 2026", isSprint: false },
  { id: 3,  name: "Japanese Grand Prix",        city: "Suzuka",       circuit: "Suzuka International Racing Course",slug: "suzuka-2026",            dates: "3–5 Apr 2026",   isSprint: false },
  { id: 4,  name: "Bahrain Grand Prix",         city: "Bahrain",      circuit: "Bahrain International Circuit",     slug: "bahrain-2026",           dates: "17–19 Apr 2026", isSprint: false },
  { id: 5,  name: "Saudi Arabian Grand Prix",   city: "Jeddah",       circuit: "Jeddah Corniche Circuit",           slug: "saudi-arabia-2026",      dates: "24–26 Apr 2026", isSprint: false },
  { id: 6,  name: "Miami Grand Prix",           city: "Miami",        circuit: "Miami International Autodrome",     slug: "miami-2026",             dates: "1–3 May 2026",   isSprint: true  },
  { id: 7,  name: "Canadian Grand Prix",        city: "Montreal",     circuit: "Circuit Gilles Villeneuve",         slug: "canada-2026",            dates: "15–17 May 2026", isSprint: true  },
  { id: 8,  name: "Monaco Grand Prix",          city: "Monaco",       circuit: "Circuit de Monaco",                 slug: "monaco-2026",            dates: "22–24 May 2026", isSprint: false },
  { id: 9,  name: "Spanish Grand Prix",         city: "Barcelona",    circuit: "Circuit de Barcelona-Catalunya",    slug: "spain-barcelona-2026",   dates: "5–7 Jun 2026",   isSprint: false },
  { id: 10, name: "Austrian Grand Prix",        city: "Spielberg",    circuit: "Red Bull Ring",                     slug: "austria-2026",           dates: "19–21 Jun 2026", isSprint: false },
  { id: 11, name: "British Grand Prix",         city: "Silverstone",  circuit: "Silverstone Circuit",               slug: "silverstone-2026",       dates: "3–5 Jul 2026",   isSprint: false },
  { id: 12, name: "Belgian Grand Prix",         city: "Spa",          circuit: "Circuit de Spa-Francorchamps",      slug: "belgium-2026",           dates: "17–19 Jul 2026", isSprint: false },
  { id: 13, name: "Hungarian Grand Prix",       city: "Budapest",     circuit: "Hungaroring",                       slug: "hungary-2026",           dates: "31 Jul–2 Aug 2026", isSprint: false },
  { id: 14, name: "Dutch Grand Prix",           city: "Zandvoort",    circuit: "Circuit Zandvoort",                 slug: "netherlands-2026",       dates: "28–30 Aug 2026", isSprint: true  },
  { id: 15, name: "Italian Grand Prix",         city: "Monza",        circuit: "Autodromo Nazionale Monza",         slug: "italy-2026",             dates: "4–6 Sep 2026",   isSprint: false },
  { id: 16, name: "Madrid Grand Prix",          city: "Madrid",       circuit: "Madrid Street Circuit",             slug: "spain-madrid-2026",      dates: "11–13 Sep 2026", isSprint: false },
  { id: 17, name: "Azerbaijan Grand Prix",      city: "Baku",         circuit: "Baku City Circuit",                 slug: "azerbaijan-2026",        dates: "18–19 Sep 2026", isSprint: false },
  { id: 18, name: "Singapore Grand Prix",       city: "Singapore",    circuit: "Marina Bay Street Circuit",         slug: "singapore-2026",         dates: "2–4 Oct 2026",   isSprint: true  },
  { id: 19, name: "United States Grand Prix",   city: "Austin",       circuit: "Circuit of the Americas",           slug: "usa-austin-2026",        dates: "16–18 Oct 2026", isSprint: false },
  { id: 20, name: "Mexico City Grand Prix",     city: "Mexico City",  circuit: "Autódromo Hermanos Rodríguez",      slug: "mexico-2026",            dates: "23–25 Oct 2026", isSprint: false },
  { id: 21, name: "Brazilian Grand Prix",       city: "São Paulo",    circuit: "Interlagos",                        slug: "brazil-2026",            dates: "6–8 Nov 2026",   isSprint: false },
  { id: 22, name: "Las Vegas Grand Prix",       city: "Las Vegas",    circuit: "Las Vegas Strip Circuit",           slug: "las-vegas-2026",         dates: "19–21 Nov 2026", isSprint: false },
  { id: 23, name: "Qatar Grand Prix",           city: "Lusail",       circuit: "Lusail International Circuit",      slug: "qatar-2026",             dates: "27–29 Nov 2026", isSprint: false },
  { id: 24, name: "Abu Dhabi Grand Prix",       city: "Abu Dhabi",    circuit: "Yas Marina Circuit",                slug: "abu-dhabi-2026",         dates: "4–6 Dec 2026",   isSprint: false },
];

/* ─────────────────────────────────────────────
   Standings data (mirrors src/data/standings2026.ts shape)
───────────────────────────────────────────── */
const DRIVERS = [
  { pos: 1, name: "Max Verstappen",    team: "Red Bull Racing",    points: 0 },
  { pos: 2, name: "Charles Leclerc",   team: "Ferrari",            points: 0 },
  { pos: 3, name: "Lando Norris",      team: "McLaren",            points: 0 },
  { pos: 4, name: "Carlos Sainz",      team: "Williams",           points: 0 },
  { pos: 5, name: "Lewis Hamilton",    team: "Ferrari",            points: 0 },
  { pos: 6, name: "George Russell",    team: "Mercedes",           points: 0 },
  { pos: 7, name: "Fernando Alonso",   team: "Aston Martin",       points: 0 },
  { pos: 8, name: "Oscar Piastri",     team: "McLaren",            points: 0 },
  { pos: 9, name: "Lance Stroll",      team: "Aston Martin",       points: 0 },
  { pos: 10, name: "Yuki Tsunoda",     team: "Red Bull Racing",    points: 0 },
];

/* ─────────────────────────────────────────────
   Page definitions
───────────────────────────────────────────── */

function homePage() {
  const nextRaces = RACES.slice(0, 6);
  const raceCards = nextRaces.map(r => `
    <div class="race-item">
      <h3><a href="${SITE}/races/${r.slug}">${escHtml(r.name)}</a></h3>
      <p class="dates">${r.dates}${r.isSprint ? " · Sprint" : ""}</p>
      <p class="circuit">${escHtml(r.circuit)}</p>
    </div>`).join("");

  return ampPage({
    path: "/",
    title: "F1 2026 Hub — Race Guides, Schedules & Travel | Grand Prix Pal",
    description: "Your complete guide to the 2026 Formula 1 season. Race schedules, circuit guides, grandstand pickers, trip planners, and curated fan experiences.",
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Season</span>
    <h1>Your F1 2026 Race Guide</h1>
    <p>Race schedules, circuit guides, trip planners and curated fan experiences — everything you need to attend or follow the 2026 Formula 1 season.</p>
    <a class="cta-btn" href="${SITE}/calendar">Full Calendar</a>
  </div>

  <section class="section">
    <h2>Upcoming Races</h2>
    <div class="race-grid">${raceCards}</div>
    <p style="margin-top:1rem"><a href="${SITE}/calendar">View full 2026 calendar →</a></p>
  </section>

  <section class="section">
    <h2>Featured Race Guides</h2>
    ${["chinese-2026","suzuka-2026","monaco-2026","silverstone-2026","canada-2026"].map(slug => {
      const r = RACES.find(x => x.slug === slug);
      return r ? `<div class="card"><h3><a href="${SITE}/races/${slug}">${escHtml(r.name)} Guide</a></h3><p>${escHtml(r.circuit)} · ${r.dates}</p></div>` : "";
    }).join("")}
  </section>

  <section class="section">
    <h2>Fan Guides</h2>
    <div class="card">
      <h3><a href="${SITE}/guides/first-f1-race">Attending Your First F1 Race</a></h3>
      <p>Everything you need to know before you go — tickets, gear, what to expect.</p>
    </div>
    <div class="card">
      <h3><a href="${SITE}/guides/what-to-pack-for-f1">What to Pack for an F1 Race</a></h3>
      <p>A practical packing checklist for race weekends in any conditions.</p>
    </div>
    <div class="card">
      <h3><a href="${SITE}/tech-guide">2026 Technical Regulations Guide</a></h3>
      <p>Ground-effect cars, 1.6L hybrid power units, and the new aerodynamic rules explained.</p>
    </div>
  </section>
</main>`,
  });
}

function calendarPage() {
  const rows = RACES.map(r => `
  <tr>
    <td>${r.id}</td>
    <td><a href="${SITE}/races/${r.slug}">${escHtml(r.name)}</a>${r.isSprint ? ' <span class="tag">Sprint</span>' : ""}</td>
    <td>${escHtml(r.circuit)}</td>
    <td>${r.dates}</td>
  </tr>`).join("");

  return ampPage({
    path: "/calendar",
    title: "F1 2026 Calendar & Race Schedule | Grand Prix Pal",
    description: "The complete 2026 Formula 1 race calendar. All 24 Grand Prix dates, circuits, and sprint weekends in one place.",
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Calendar</span>
    <h1>F1 2026 Race Schedule</h1>
    <p>All 24 rounds of the 2026 Formula 1 World Championship — dates, circuits and sprint weekends.</p>
  </div>
  <section class="section">
    <h2>Full 2026 Schedule</h2>
    <table>
      <thead><tr><th>#</th><th>Grand Prix</th><th>Circuit</th><th>Date</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </section>
</main>`,
  });
}

function standingsPage() {
  const rows = DRIVERS.map(d => `
  <tr>
    <td>${d.pos}</td>
    <td>${escHtml(d.name)}</td>
    <td>${escHtml(d.team)}</td>
    <td>${d.points}</td>
  </tr>`).join("");

  return ampPage({
    path: "/standings",
    title: "F1 2026 Driver Standings | Grand Prix Pal",
    description: "Live-updated 2026 Formula 1 driver and constructor standings throughout the season.",
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Standings</span>
    <h1>F1 2026 Driver Standings</h1>
    <p>Driver and constructor championship standings for the 2026 Formula 1 season. Updated after each round.</p>
    <p><a href="${SITE}/standings">View interactive standings →</a></p>
  </div>
  <section class="section">
    <h2>Driver Championship</h2>
    <p class="meta">Season underway — points updated live on the main site.</p>
    <table>
      <thead><tr><th>Pos</th><th>Driver</th><th>Team</th><th>Pts</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </section>
</main>`,
  });
}

function circuitsPage() {
  const cards = RACES.map(r => `
  <div class="race-item">
    <h3>${escHtml(r.circuit)}</h3>
    <p class="circuit">${escHtml(r.city)} · <a href="${SITE}/races/${r.slug}">${escHtml(r.name)}</a></p>
  </div>`).join("");

  return ampPage({
    path: "/circuits",
    title: "F1 2026 Circuits Guide | Grand Prix Pal",
    description: "All 24 Formula 1 circuits on the 2026 calendar — layout details, key corners, and race guides.",
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Circuits</span>
    <h1>F1 2026 Circuit Guide</h1>
    <p>Every circuit on the 2026 Formula 1 world championship calendar — from Bahrain to Abu Dhabi.</p>
  </div>
  <section class="section">
    <h2>All 2026 Circuits</h2>
    <div class="race-grid">${cards}</div>
  </section>
</main>`,
  });
}

function racePage(race) {
  const highlights = {
    "chinese-2026":    ["Challenging Turn 1 hairpin combo", "Long back straight overtaking zone", "Night-race atmosphere"],
    "suzuka-2026":     ["Legendary figure-eight layout", "130R flat-out corner", "Passionate Japanese fan culture"],
    "monaco-2026":     ["Iconic harbour street circuit", "Tight barriers and elevation changes", "Premium atmosphere and heritage"],
    "silverstone-2026":["High-speed classic layout", "Legendary Maggots-Becketts complex", "Passionate British crowd"],
    "canada-2026":     ["Wall of Champions chicane", "Island circuit in the St. Lawrence", "Sprint weekend format"],
    "melbourne-2026":  ["Street-park hybrid layout", "Iconic lakeside setting", "Season opener energy"],
  };
  const hl = highlights[race.slug] ?? ["World-class circuit", "Passionate fans", "Unforgettable race weekend"];
  const hlHtml = hl.map(h => `<li>${escHtml(h)}</li>`).join("");
  const pagePath = race.slug === "melbourne-2026" ? "/melbourne" : `/races/${race.slug}`;
  const title = `${race.name} 2026 — Guide, Schedule & Travel Tips | Grand Prix Pal`;
  const description = `${race.city} Grand Prix 2026 guide: race schedule, travel tips, tickets, circuit map and local logistics at ${race.circuit}.`;

  return ampPage({
    path: pagePath,
    title,
    description,
    jsonLd: [
      sportsEventLd(race, pagePath),
      breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Calendar", path: "/calendar" },
        { name: `${race.name} 2026`, path: pagePath },
      ]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">${race.dates}${race.isSprint ? " · Sprint Weekend" : ""}</span>
    <h1>${escHtml(race.name)} 2026</h1>
    <p>${escHtml(race.circuit)}, ${escHtml(race.city)}</p>
    <a class="cta-btn" href="${SITE}${pagePath}">Full Interactive Guide</a>
  </div>

  <section class="section">
    <h2>Circuit Highlights</h2>
    <ul class="highlight-list">${hlHtml}</ul>
  </section>

  <section class="section">
    <h2>Race Weekend Schedule</h2>
    <div class="card">
      <h3>Practice Sessions</h3>
      <p>Friday and Saturday practice sessions give teams time to set up their cars for the circuit's unique demands.</p>
    </div>
    ${race.isSprint ? `<div class="card"><h3>Sprint Qualifying & Sprint Race</h3><p>This is a sprint weekend — an additional Sprint Qualifying session on Friday and a short Sprint Race on Saturday.</p></div>` : ""}
    <div class="card">
      <h3>Qualifying</h3>
      <p>One-lap knockout qualifying (Q1, Q2, Q3) determines the grid for Sunday's Grand Prix.</p>
    </div>
    <div class="card">
      <h3>Race Day — Sunday</h3>
      <p>The ${escHtml(race.name)} main event. ${race.isSprint ? "Both a Saturday sprint and a full Sunday race." : "Full race distance on Sunday."}</p>
    </div>
  </section>

  <section class="section">
    <h2>Travel Tips</h2>
    <div class="card">
      <h3>Getting There</h3>
      <p>Book accommodation and transport early — race weekends sell out fast. Check the full guide for specific transport advice for ${escHtml(race.city)}.</p>
    </div>
    <div class="card">
      <h3>What to Bring</h3>
      <p>Earplugs (essential), sunscreen, comfortable shoes, a rain jacket, and your ticket on your phone. See our <a href="${SITE}/guides/what-to-pack-for-f1">full packing checklist</a>.</p>
    </div>
  </section>
</main>`,
  });
}

function guideFirstRace() {
  const path = "/guides/first-f1-race";
  const title = "Attending Your First F1 Race — Complete Guide | Grand Prix Pal";
  const description = "Everything you need to know before attending your first Formula 1 race. Tickets, seating, what to pack, and what to expect on race weekend.";
  return ampPage({
    path,
    title,
    description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "Attending Your First F1 Race", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">Fan Guide</span>
    <h1>Attending Your First F1 Race</h1>
    <p>A practical, honest guide for first-timers — from buying tickets to surviving race day.</p>
  </div>

  <section class="section">
    <h2>Buying Tickets</h2>
    <div class="card">
      <h3>Where to Buy</h3>
      <p>Always buy from the official circuit ticket partner or Formula One Group directly. Avoid third-party resellers — prices are inflated and fraud is common.</p>
    </div>
    <div class="card">
      <h3>Which Grandstand?</h3>
      <p>For first-timers, the main grandstand or start/finish straight offers the most action. You'll see the grid, pit stops, and the race start. Check each race's grandstand guide on the race page.</p>
    </div>
    <div class="card">
      <h3>3-Day vs 1-Day Tickets</h3>
      <p>A 3-day pass gives you Friday practice, qualifying on Saturday, and the race on Sunday. A Sunday-only ticket saves money but you'll miss qualifying — often as exciting as the race itself.</p>
    </div>
  </section>

  <section class="section">
    <h2>What to Expect</h2>
    <ul class="highlight-list">
      <li>Cars are MUCH louder than you expect — bring foam earplugs or ear defenders</li>
      <li>Races are around 90 minutes but a full race day is 6–8 hours</li>
      <li>Bring food and water — circuit food is expensive</li>
      <li>Phone signal is poor during peak times — download offline maps</li>
      <li>The podium ceremony after the race is worth staying for</li>
    </ul>
  </section>

  <section class="section">
    <h2>Race Weekend Structure</h2>
    <div class="card">
      <h3>Friday — Practice</h3>
      <p>Two 60-minute practice sessions. Less busy, great for exploring the circuit and finding your grandstand.</p>
    </div>
    <div class="card">
      <h3>Saturday — Qualifying</h3>
      <p>The most intense 60 minutes in motorsport. Q1, Q2 and Q3 knockout sessions determine the starting grid.</p>
    </div>
    <div class="card">
      <h3>Sunday — Race Day</h3>
      <p>The main event. Arrive early — gates open 3–4 hours before the race and the atmosphere builds throughout the morning.</p>
    </div>
  </section>

  <section class="section">
    <h2>Packing Essentials</h2>
    <ul class="highlight-list">
      <li>Ear protection (mandatory for your hearing)</li>
      <li>Sunscreen SPF 50+</li>
      <li>Rain poncho or lightweight jacket</li>
      <li>Comfortable closed-toe shoes</li>
      <li>Portable phone charger</li>
      <li>Snacks and a refillable water bottle</li>
    </ul>
    <p style="margin-top:1rem"><a href="${SITE}/guides/what-to-pack-for-f1">See the full packing checklist →</a></p>
  </section>
</main>`,
  });
}

function guideWhatToPack() {
  const path = "/guides/what-to-pack-for-f1";
  const title = "What to Pack for an F1 Race — Ultimate Checklist | Grand Prix Pal";
  const description = "The complete F1 race weekend packing list. Ear protection, rain gear, sun care, tech, and everything else you actually need.";
  return ampPage({
    path,
    title,
    description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "What to Pack for an F1 Race", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">Packing Guide</span>
    <h1>What to Pack for an F1 Race</h1>
    <p>A practical packing checklist refined from real race weekends. Covers all weather conditions and grandstand types.</p>
  </div>

  <section class="section">
    <h2>Non-Negotiables</h2>
    <ul class="highlight-list">
      <li>Ear protection — foam earplugs or over-ear defenders (cars reach 140 dB)</li>
      <li>Sunscreen SPF 50+ — even on overcast days</li>
      <li>Your tickets — downloaded offline, not just a link</li>
      <li>Government-issued ID</li>
      <li>Comfortable walking shoes — you'll walk 5–10 km</li>
    </ul>
  </section>

  <section class="section">
    <h2>Weather Essentials</h2>
    <ul class="highlight-list">
      <li>Lightweight rain poncho (compact, circuit-legal)</li>
      <li>Sun hat or cap with a brim</li>
      <li>Layers — grandstands can be cold in the morning and hot by noon</li>
      <li>Sunglasses with UV protection</li>
    </ul>
  </section>

  <section class="section">
    <h2>Tech &amp; Connectivity</h2>
    <ul class="highlight-list">
      <li>Portable battery pack (10,000 mAh+)</li>
      <li>Charging cables</li>
      <li>Offline maps of the circuit and city downloaded before you arrive</li>
      <li>F1 TV app or radio app downloaded and logged in</li>
    </ul>
  </section>

  <section class="section">
    <h2>Food &amp; Hydration</h2>
    <ul class="highlight-list">
      <li>1–2 litres of water (circuits allow sealed bottles)</li>
      <li>Snacks — energy bars, fruit, sandwiches (check circuit food policy)</li>
      <li>Cash for street food outside the circuit</li>
    </ul>
  </section>

  <section class="section">
    <h2>Circuit Bag Rules</h2>
    <div class="card">
      <p>Most circuits restrict bag size to 30×20×15 cm or similar. Check the specific circuit rules before you pack. Backpacks are often allowed but must be searched on entry. Hard-sided cool boxes are generally banned.</p>
    </div>
    <p><a href="${SITE}/guides/first-f1-race">← First F1 race guide</a></p>
  </section>
</main>`,
  });
}

function techGuidePage() {
  const path = "/tech-guide";
  const title = "F1 2026 Technical Regulations Guide | Grand Prix Pal";
  const description = "The 2026 Formula 1 technical regulations explained — new ground-effect aerodynamics, 1.6L hybrid power units, and what changes for fans.";
  return ampPage({
    path,
    title,
    description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Tech Guide", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Tech</span>
    <h1>F1 2026 Technical Guide</h1>
    <p>The 2026 season brings the biggest regulatory overhaul since 2022. Here's what changed and why it matters.</p>
  </div>

  <section class="section">
    <h2>Power Units</h2>
    <div class="card">
      <h3>1.6L Turbocharged Hybrid V6</h3>
      <p>The engine formula continues with a 1.6-litre turbocharged V6 hybrid. The 2026 regulations increase the electrical contribution significantly — the MGU-H makes a reduced contribution while the MGU-K output increases to around 350 kW (469 hp).</p>
    </div>
    <div class="card">
      <h3>Sustainable Fuels</h3>
      <p>All 2026 cars run on 100% sustainable fuel, making F1 carbon-neutral at the point of combustion. Power outputs remain similar to 2025 despite the fuel change.</p>
    </div>
  </section>

  <section class="section">
    <h2>Aerodynamics</h2>
    <div class="card">
      <h3>Active Aero</h3>
      <p>2026 introduces fully moveable front and rear wings — teams can adjust downforce levels automatically throughout a lap, replacing the DRS system used since 2011.</p>
    </div>
    <div class="card">
      <h3>Simplified Bodywork</h3>
      <p>Cars are narrower and shorter than 2022–2025 designs, reducing aerodynamic complexity and improving wheel-to-wheel racing. Ground-effect remains central to downforce generation.</p>
    </div>
  </section>

  <section class="section">
    <h2>What It Means for Racing</h2>
    <ul class="highlight-list">
      <li>More overtaking opportunities with active aero replacing DRS</li>
      <li>Teams starting from a clean sheet — expect a competitive midfield</li>
      <li>New power unit suppliers: Ford (with Red Bull) and Honda (with Aston Martin)</li>
      <li>Slower lap times initially as teams develop new concepts</li>
    </ul>
    <p style="margin-top:1rem"><a href="${SITE}/tech-guide">Full interactive tech guide →</a></p>
  </section>
</main>`,
  });
}

function newEraPage() {
  return ampPage({
    path: "/new-era",
    title: "F1 2026 New Era — What Every Fan Needs to Know | Grand Prix Pal",
    description: "The 2026 Formula 1 season marks a new era. New power units, active aerodynamics, new teams and new regulations — everything explained.",
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">New Era</span>
    <h1>F1 2026 — The New Era</h1>
    <p>The biggest regulation change since 2022 reshapes Formula 1. New power units, active aero, and a fresh competitive landscape.</p>
  </div>
  <section class="section">
    <h2>Key Changes for 2026</h2>
    <ul class="highlight-list">
      <li>New hybrid power unit regulations — higher electrical output</li>
      <li>Active aerodynamics replace DRS</li>
      <li>New power unit suppliers: Ford and Honda return</li>
      <li>Smaller, lighter car dimensions</li>
      <li>100% sustainable fuels mandate</li>
    </ul>
  </section>
  <section class="section">
    <h2>New Power Unit Suppliers</h2>
    <div class="card"><h3>Ford (with Red Bull Powertrains)</h3><p>Ford returns to Formula 1 for the first time since 2004, partnering with Red Bull Powertrains on their 2026 power unit.</p></div>
    <div class="card"><h3>Honda (with Aston Martin)</h3><p>Honda returns as a full works partner with Aston Martin after their split with Red Bull at the end of 2021.</p></div>
  </section>
  <section class="section">
    <p><a href="${SITE}/tech-guide">Read the full 2026 technical guide →</a></p>
  </section>
</main>`,
  });
}

function aboutPage() {
  return ampPage({
    path: "/about",
    title: "About Grand Prix Pal | F1 Fan Travel Guides",
    description: "Grand Prix Pal is an independent F1 fan travel guide. We help fans plan their race weekend — from tickets to transport to what to pack.",
    bodyHtml: `
<main>
  <div class="hero">
    <h1>About Grand Prix Pal</h1>
    <p>An independent guide for F1 fans who want to attend races, not just watch them on TV.</p>
  </div>
  <section class="section">
    <h2>What We Do</h2>
    <div class="card"><p>Grand Prix Pal provides race weekend guides, circuit information, grandstand pickers, and travel tips to help fans get the most from their F1 experience. All content is written from a fan's perspective.</p></div>
    <div class="card"><h3>Independent</h3><p>We're not affiliated with Formula One Group or any team. All opinions are our own. Where we link to products or tickets, we may earn a small affiliate commission — see our <a href="${SITE}/affiliate-disclosure">affiliate disclosure</a>.</p></div>
  </section>
</main>`,
  });
}

/* ─────────────────────────────────────────────
   Missing guide & status pages
───────────────────────────────────────────── */
function guideBahrainSaudiCancelled() {
  const path = "/guides/bahrain-saudi-cancelled-what-to-do";
  const title = "Bahrain & Saudi F1 2026 Cancelled — What To Do | Grand Prix Pal";
  const description = "Bahrain and Saudi Arabia have been removed from the 2026 F1 calendar. Here's what to do if you have tickets: refunds, insurance, and alternative races.";
  return ampPage({
    path, title, description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "Bahrain & Saudi Cancelled — What To Do", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Update</span>
    <h1>Bahrain &amp; Saudi Arabia Cancelled — What To Do</h1>
    <p>Both the Bahrain and Saudi Arabian Grands Prix have been reported as high-risk for removal from the 2026 calendar. This guide covers your options if you hold tickets or have travel booked.</p>
    <a class="cta-btn" href="${SITE}/bahrain-saudi-2026-status">Live Status Update</a>
  </div>

  <section class="section">
    <h2>If You Have Tickets</h2>
    <div class="card"><h3>Contact the Circuit Promoter First</h3><p>For official refund processes, go directly to the Bahrain International Circuit or Jeddah Corniche Circuit ticket portals. Keep your booking confirmation email safe.</p></div>
    <div class="card"><h3>Credit Card Chargeback</h3><p>If the event is officially cancelled and the promoter doesn't refund, you may be able to claim via your credit card provider under Section 75 (UK) or chargeback protection.</p></div>
    <div class="card"><h3>Travel Insurance</h3><p>Check your policy for "event cancellation" cover. Many comprehensive travel policies include this. Contact your insurer with your booking confirmation and the official cancellation notice.</p></div>
  </section>

  <section class="section">
    <h2>Consider Attending a Different Race</h2>
    <ul class="highlight-list">
      <li><a href="${SITE}/races/miami-2026">Miami Grand Prix</a> — May 1–3 (sprint weekend)</li>
      <li><a href="${SITE}/races/canada-2026">Canadian Grand Prix</a> — May 15–17 (Montreal)</li>
      <li><a href="${SITE}/races/monaco-2026">Monaco Grand Prix</a> — May 22–24</li>
    </ul>
    <p style="margin-top:1rem"><a href="${SITE}/calendar">Full 2026 calendar →</a></p>
  </section>

  <section class="section">
    <p><a href="${SITE}/guides/f1-2026-replacement-races">Could replacement races be added? →</a></p>
  </section>
</main>`,
  });
}

function guideReplacementRaces() {
  const path = "/guides/f1-2026-replacement-races";
  const title = "F1 2026 Replacement Races — What Could Fill the Gap? | Grand Prix Pal";
  const description = "With Bahrain and Saudi Arabia at risk of removal, could new races join the 2026 F1 calendar? We look at the realistic options.";
  return ampPage({
    path, title, description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "2026 Replacement Races", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">2026 Calendar</span>
    <h1>F1 2026 Replacement Races</h1>
    <p>If Bahrain and Saudi Arabia are dropped, could Formula 1 replace them? We analyse the realistic candidates and the practical constraints.</p>
    <a class="cta-btn" href="${SITE}/bahrain-saudi-2026-status">Live Status Update</a>
  </div>

  <section class="section">
    <h2>Why Replacement Is Difficult</h2>
    <div class="card"><h3>Logistics Lead Times</h3><p>F1 freight is committed weeks in advance. Circuits, hospitality, and broadcast infrastructure require months of planning. A truly late replacement race would be logistically unprecedented.</p></div>
    <div class="card"><h3>Contracts and Sanctioning Fees</h3><p>Every race on the calendar has a contract with Formula One Group. A new venue would need to sign a deal, pay a sanctioning fee, and meet FIA Grade 1 circuit requirements.</p></div>
  </section>

  <section class="section">
    <h2>Discussed Candidates</h2>
    <div class="card"><h3>Portimão (Algarve International Circuit)</h3><p>Hosted grands prix in 2020 and 2021. Facilities are in place, FIA Grade 1 licensed, and relatively accessible from Europe.</p></div>
    <div class="card"><h3>Istanbul Park</h3><p>Returned in 2020 and 2021. Strong infrastructure, but Turkish Airports Authority contract complications have been an issue in the past.</p></div>
    <div class="card"><h3>Imola</h3><p>Autodromo Enzo e Dino Ferrari has hosted sprints and rounds since 2020. A natural European option.</p></div>
  </section>

  <section class="section">
    <p><a href="${SITE}/guides/bahrain-saudi-cancelled-what-to-do">← What to do if you have tickets</a></p>
  </section>
</main>`,
  });
}

function guideBestFirstRaces() {
  const path = "/guides/best-first-f1-races";
  const title = "Best F1 Races for First-Timers in 2026 | Grand Prix Pal";
  const description = "Not sure which Grand Prix to attend first? We rank the best Formula 1 races for first-timers by atmosphere, accessibility, budget, and experience.";
  return ampPage({
    path, title, description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "Best First F1 Races", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">Fan Guide</span>
    <h1>Best F1 Races for First-Timers</h1>
    <p>Choosing your first Grand Prix is a big decision. These are the races we recommend most for new fans, ranked by atmosphere, affordability, accessibility, and sheer experience.</p>
  </div>

  <section class="section">
    <h2>Top Picks for 2026</h2>
    <div class="card"><h3>🇬🇧 British Grand Prix — Silverstone</h3><p>English-speaking, outstanding atmosphere, accessible from major UK airports, and massive grandstands with great views. The crowd makes it special. <a href="${SITE}/races/silverstone-2026">Full Silverstone guide →</a></p></div>
    <div class="card"><h3>🇮🇹 Italian Grand Prix — Monza</h3><p>The Temple of Speed. Tifosi passion, affordable tickets, easy train access from Milan, and a historic circuit. One of the most iconic venues in world sport. <a href="${SITE}/races/italy-2026">Full Monza guide →</a></p></div>
    <div class="card"><h3>🇨🇦 Canadian Grand Prix — Montreal</h3><p>Island circuit, fantastic city, relaxed North American vibe, and great English-language logistics. Sprint weekend adds extra value. <a href="${SITE}/races/canada-2026">Full Montreal guide →</a></p></div>
    <div class="card"><h3>🇦🇹 Austrian Grand Prix — Red Bull Ring</h3><p>Short, loud, compact circuit. Easy to walk between grandstands. Alpine backdrop. Among the most affordable European rounds. <a href="${SITE}/races/austria-2026">Full Austria guide →</a></p></div>
    <div class="card"><h3>🇯🇵 Japanese Grand Prix — Suzuka</h3><p>The most passionate fans in F1. Unique figure-eight layout. Immaculate organisation. A bucket-list race, though Japan logistics require more planning. <a href="${SITE}/races/suzuka-2026">Full Suzuka guide →</a></p></div>
  </section>

  <section class="section">
    <h2>What to Consider When Choosing</h2>
    <ul class="highlight-list">
      <li>budget — ticket price plus flights and accommodation</li>
      <li>Language — English-dominant races are easier for first-timers</li>
      <li>Climate — check typical weather for the race weekend month</li>
      <li>Circuit layout — more overtaking means more action from your seat</li>
      <li>Sprint weekend — you get an extra race on Saturday</li>
    </ul>
    <p style="margin-top:1rem"><a href="${SITE}/guides/first-f1-race">How to attend your first F1 race →</a></p>
  </section>
</main>`,
  });
}

function guideSprintWeekend() {
  const path = "/guides/sprint-weekend";
  const title = "F1 Sprint Weekend Explained — Format, Tickets & What to Expect | Grand Prix Pal";
  const description = "What is an F1 Sprint Weekend? We explain the format, the schedule, how Sprint Qualifying works, and which 2026 races are sprints.";
  const sprintRaces = RACES.filter(r => r.isSprint);
  return ampPage({
    path, title, description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides" }, { name: "Sprint Weekend Guide", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">Fan Guide</span>
    <h1>F1 Sprint Weekend Explained</h1>
    <p>Sprint weekends feature an extra mini-race on Saturday alongside the main Grand Prix on Sunday. Here's everything you need to know.</p>
  </div>

  <section class="section">
    <h2>The Sprint Weekend Schedule</h2>
    <div class="card"><h3>Friday — Practice + Sprint Qualifying</h3><p>One practice session (FP1) followed by Sprint Qualifying (SQ1, SQ2, SQ3) — a knockout session that sets the Sprint Race grid. There is no FP2 on a sprint weekend.</p></div>
    <div class="card"><h3>Saturday — Sprint Race + Grand Prix Qualifying</h3><p>The Sprint Race (approx. 100 km / ~30 mins) runs first. Then standard Grand Prix Qualifying (Q1, Q2, Q3) determines the race grid for Sunday.</p></div>
    <div class="card"><h3>Sunday — Grand Prix</h3><p>The full race distance Grand Prix, same as any normal weekend.</p></div>
  </section>

  <section class="section">
    <h2>2026 Sprint Weekends</h2>
    ${sprintRaces.map(r => `<div class="card"><h3><a href="${SITE}/races/${r.slug}">${escHtml(r.name)}</a></h3><p>${escHtml(r.circuit)} · ${r.dates}</p></div>`).join("")}
  </section>

  <section class="section">
    <h2>Tickets for Sprint Weekends</h2>
    <div class="card"><p>Sprint weekend tickets are usually sold as 3-day passes covering Friday, Saturday, and Sunday. Day tickets (Friday or Saturday only) are sometimes available but offer limited value — the Saturday is the most action-packed day of any sprint weekend.</p></div>
  </section>

  <section class="section">
    <h2>Key Differences from a Normal Weekend</h2>
    <ul class="highlight-list">
      <li>Two qualifying sessions — Sprint Qualifying on Friday, GP Qualifying on Saturday</li>
      <li>A Sprint Race result does not directly determine the GP grid</li>
      <li>Sprint points are separate (8-7-6-5-4-3-2-1 for top 8)</li>
      <li>Teams have less practice time to set up the car</li>
      <li>More on-track action across the weekend</li>
    </ul>
    <p style="margin-top:1rem"><a href="${SITE}/calendar">View full 2026 calendar →</a></p>
  </section>
</main>`,
  });
}

function bahrainSaudiStatusPage() {
  const path = "/bahrain-saudi-2026-status";
  const title = "Bahrain & Saudi Arabia F1 2026 Status Update | Grand Prix Pal";
  const description = "Live updates on the Bahrain and Saudi Arabian Grand Prix 2026 situation. Both races remain on the official calendar but are reported to be at high risk.";
  return ampPage({
    path, title, description,
    jsonLd: [
      articleLd(title, description, path),
      breadcrumbLd([{ name: "Home", path: "/" }, { name: "Bahrain & Saudi 2026 Status", path }]),
    ],
    bodyHtml: `
<main>
  <div class="hero">
    <span class="badge">Live Update</span>
    <h1>Bahrain &amp; Saudi Arabia F1 2026 Status</h1>
    <p>Both the Bahrain and Saudi Arabian Grands Prix remain on the official 2026 calendar but are reported to be at significant risk. Last updated: <strong>9 March 2026, 14:00 GMT</strong>.</p>
    <a class="cta-btn" href="${SITE}/bahrain-saudi-2026-status">View Full Live Status</a>
  </div>

  <section class="section">
    <h2>Current Status</h2>
    <div class="card"><h3>Bahrain Grand Prix — At Risk</h3><p>Scheduled: April 17–19, 2026. Both races remain officially scheduled. Major outlets including Reuters report both events are likely to be dropped amid the regional security situation. No official cancellation has been issued as of March 9.</p></div>
    <div class="card"><h3>Saudi Arabian Grand Prix — At Risk</h3><p>Scheduled: April 24–26, 2026. Same situation as Bahrain. No official confirmation of cancellation as of the last update.</p></div>
  </section>

  <section class="section">
    <h2>Key Decision Timeline</h2>
    <table>
      <thead><tr><th>Date</th><th>Milestone</th></tr></thead>
      <tbody>
        <tr><td>~20 March</td><td>Reported decision point during Shanghai Grand Prix weekend — latest date to commit Bahrain freight</td></tr>
        <tr><td>17–19 Apr</td><td>Bahrain Grand Prix — currently scheduled</td></tr>
        <tr><td>24–26 Apr</td><td>Saudi Arabian Grand Prix — currently scheduled</td></tr>
        <tr><td>1–3 May</td><td>Miami Grand Prix — next round if both Middle East races are dropped</td></tr>
      </tbody>
    </table>
  </section>

  <section class="section">
    <h2>If You Have Tickets</h2>
    <div class="card"><p>See our <a href="${SITE}/guides/bahrain-saudi-cancelled-what-to-do">full guide on what to do</a> — covering refunds, insurance claims, and alternative race options.</p></div>
    <p style="margin-top:1rem"><a href="${SITE}/calendar">Full 2026 calendar →</a></p>
  </section>
</main>`,
  });
}

/* ─────────────────────────────────────────────
   Page manifest
───────────────────────────────────────────── */
function buildPageManifest() {
  const pages = [
    { outPath: "index.html",          html: homePage() },
    { outPath: "calendar/index.html", html: calendarPage() },
    { outPath: "standings/index.html",html: standingsPage() },
    { outPath: "circuits/index.html", html: circuitsPage() },
    { outPath: "tech-guide/index.html", html: techGuidePage() },
    { outPath: "new-era/index.html",  html: newEraPage() },
    { outPath: "about/index.html",    html: aboutPage() },
    { outPath: "guides/first-f1-race/index.html",    html: guideFirstRace() },
    { outPath: "guides/what-to-pack-for-f1/index.html", html: guideWhatToPack() },
    { outPath: "guides/bahrain-saudi-cancelled-what-to-do/index.html", html: guideBahrainSaudiCancelled() },
    { outPath: "guides/f1-2026-replacement-races/index.html", html: guideReplacementRaces() },
    { outPath: "guides/best-first-f1-races/index.html", html: guideBestFirstRaces() },
    { outPath: "guides/sprint-weekend/index.html", html: guideSprintWeekend() },
    { outPath: "bahrain-saudi-2026-status/index.html", html: bahrainSaudiStatusPage() },
  ];

  // Race pages — featured + all framework races
  for (const race of RACES) {
    const htmlPath = race.slug === "melbourne-2026"
      ? "melbourne/index.html"
      : `races/${race.slug}/index.html`;
    pages.push({ outPath: htmlPath, html: racePage(race) });
  }

  return pages;
}

/* ─────────────────────────────────────────────
   Write files
───────────────────────────────────────────── */
async function generate() {
  const manifest = buildPageManifest();
  let written = 0;

  for (const { outPath, html } of manifest) {
    const filePath = resolve(AMP_OUT, outPath);
    await mkdir(dirname(filePath), { recursive: true });
    await writeFile(filePath, html, "utf8");
    written++;
    console.log(`  ✓  /amp/${outPath}`);
  }

  console.log(`\nAMP generation complete: ${written} pages written to public/amp/`);
}

generate().catch((err) => {
  console.error("AMP generation failed:", err);
  process.exit(1);
});
