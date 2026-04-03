/**
 * routes.mjs — Single source of truth for all public routes.
 *
 * Shared by:
 *   • scripts/generate-sitemap.mjs  (sitemap generation)
 *   • scripts/prerender.mjs         (static pre-rendering)
 *
 * When you add a new <Route> in src/App.tsx add it here too, then run:
 *   npm run sitemap && npm run prerender
 */

// priority: 1.0 = homepage, 0.9 = featured race, 0.8 = subpage/important,
//           0.7 = guide/editorial, 0.6 = framework race, 0.3-0.5 = utility/legal
//
// changefreq: "weekly" for live/updated content, "monthly" for stable pages,
//             "yearly" for legal pages

export const ROUTES = [
  // ── Core pages ──
  { path: "/",                        changefreq: "weekly",  priority: 1.0 },
  { path: "/melbourne",               changefreq: "weekly",  priority: 0.9 },
  { path: "/calendar",                changefreq: "weekly",  priority: 0.9 },
  { path: "/circuits",                changefreq: "monthly", priority: 0.8 },
  { path: "/street-circuits",         changefreq: "monthly", priority: 0.8 },
  { path: "/standings",               changefreq: "weekly",  priority: 0.8 },
  { path: "/experiences",             changefreq: "weekly",  priority: 0.7 },
  { path: "/new-era",                 changefreq: "monthly", priority: 0.7 },
  { path: "/tech-guide",              changefreq: "monthly", priority: 0.7 },

  // ── Guides ──
  { path: "/guides",                                          changefreq: "monthly", priority: 0.7 },
  { path: "/guides/first-f1-race",                            changefreq: "monthly", priority: 0.8 },
  { path: "/guides/what-to-pack-for-f1",                      changefreq: "monthly", priority: 0.7 },
  { path: "/guides/bahrain-saudi-cancelled-what-to-do",       changefreq: "monthly", priority: 0.7 },
  { path: "/guides/f1-2026-replacement-races",                changefreq: "monthly", priority: 0.7 },
  { path: "/guides/best-first-f1-races",                      changefreq: "monthly", priority: 0.7 },
  { path: "/guides/sprint-weekend",                           changefreq: "monthly", priority: 0.7 },
  { path: "/bahrain-saudi-2026-status",                       changefreq: "monthly", priority: 0.7 },

  // ── Blog / Editorial ──
  { path: "/blog",                                             changefreq: "weekly",  priority: 0.8 },
  { path: "/blog/f1-2026-rule-changes-explained",               changefreq: "monthly", priority: 0.7 },
  { path: "/blog/best-f1-viewing-spots-2026-circuits",          changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-2026-active-aero-fan-guide",                changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-on-a-budget-2026",                          changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-night-races-everything-you-need-to-know",   changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-2026-safety-innovations",                   changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-2026-tyre-compounds-explained",              changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-live-timing-at-the-track",                   changefreq: "monthly", priority: 0.7 },
  { path: "/blog/best-airports-european-f1-races",               changefreq: "monthly", priority: 0.7 },
  { path: "/blog/f1-2026-driver-lineup-guide",                   changefreq: "monthly", priority: 0.7 },

  // ── Utility ──
  { path: "/melbourne-download",       changefreq: "monthly", priority: 0.5 },
  { path: "/about",                    changefreq: "monthly", priority: 0.5 },
  { path: "/contact",                  changefreq: "monthly", priority: 0.4 },

  // ── Legal ──
  { path: "/privacy",                  changefreq: "yearly",  priority: 0.3 },
  { path: "/terms",                    changefreq: "yearly",  priority: 0.3 },
  { path: "/affiliate-disclosure",     changefreq: "yearly",  priority: 0.3 },

  // ── Melbourne cluster ──
  { path: "/races/melbourne/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/melbourne/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Shanghai / Chinese GP ──
  { path: "/races/chinese-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/chinese-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/chinese-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Suzuka / Japanese GP ──
  { path: "/races/suzuka-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/suzuka-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/suzuka-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Montreal / Canadian GP ──
  { path: "/races/canada-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/canada-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/canada-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Monaco GP ──
  { path: "/races/monaco-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/monaco-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/monaco-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Silverstone / British GP ──
  { path: "/races/silverstone-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/silverstone-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/silverstone-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Miami GP ──
  { path: "/races/miami-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/miami-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/miami-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Featured race: Spain Barcelona GP ──
  { path: "/races/spain-barcelona-2026",              changefreq: "weekly", priority: 0.9 },
  { path: "/races/spain-barcelona-2026/planner",      changefreq: "weekly", priority: 0.8 },
  { path: "/races/spain-barcelona-2026/experiences",  changefreq: "weekly", priority: 0.8 },

  // ── Framework race pages ──
  { path: "/races/bahrain-2026",        changefreq: "monthly", priority: 0.6 },
  { path: "/races/saudi-arabia-2026",   changefreq: "monthly", priority: 0.6 },
  { path: "/races/austria-2026",        changefreq: "monthly", priority: 0.6 },
  { path: "/races/belgium-2026",        changefreq: "monthly", priority: 0.6 },
  { path: "/races/hungary-2026",        changefreq: "monthly", priority: 0.6 },
  { path: "/races/netherlands-2026",    changefreq: "monthly", priority: 0.6 },
  { path: "/races/italy-2026",          changefreq: "monthly", priority: 0.6 },
  { path: "/races/spain-madrid-2026",   changefreq: "monthly", priority: 0.6 },
  { path: "/races/azerbaijan-2026",     changefreq: "monthly", priority: 0.6 },
  { path: "/races/singapore-2026",      changefreq: "monthly", priority: 0.6 },
  { path: "/races/usa-austin-2026",     changefreq: "monthly", priority: 0.6 },
  { path: "/races/mexico-2026",         changefreq: "monthly", priority: 0.6 },
  { path: "/races/brazil-2026",         changefreq: "monthly", priority: 0.6 },
  { path: "/races/las-vegas-2026",      changefreq: "monthly", priority: 0.6 },
  { path: "/races/qatar-2026",          changefreq: "monthly", priority: 0.6 },
  { path: "/races/abu-dhabi-2026",      changefreq: "monthly", priority: 0.6 },
];
