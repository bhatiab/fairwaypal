/**
 * Single source of truth for which guide sub-pages exist per race.
 */

export type GuidePage = {
  slug: string;
  label: string;
  star?: boolean;
};

/** Per-race guide sub-pages in canonical display order */
export const RACE_GUIDE_PAGES: Record<string, GuidePage[]> = {
  "jerez": [
    { slug: "first-timer-guide",  label: "First-Timer",    star: true },
    { slug: "getting-there",      label: "Getting There"              },
    { slug: "packing-guide",      label: "Packing"                    },
    { slug: "bag-policy",         label: "Bag Policy"                 },
    { slug: "grandstands",        label: "Grandstands"                },
    { slug: "experiences",        label: "Experiences"                },
    { slug: "food-and-nightlife", label: "Food & Nightlife"           },
    { slug: "mistakes",           label: "Mistakes"                   },
    { slug: "costs",              label: "Costs"                      },
  ],
  "le-mans": [
    { slug: "first-timer-guide", label: "First-Timer", star: true },
    { slug: "getting-there",     label: "Getting There" },
    { slug: "packing-guide",     label: "Packing"       },
    { slug: "mistakes",          label: "Mistakes"      },
    { slug: "costs",             label: "Costs"         },
  ],
  "catalunya": [
    { slug: "first-timer-guide", label: "First-Timer", star: true },
    { slug: "getting-there",     label: "Getting There" },
    { slug: "packing-guide",     label: "Packing"       },
    { slug: "mistakes",          label: "Mistakes"      },
    { slug: "costs",             label: "Costs"         },
  ],
  "mugello": [
    { slug: "first-timer-guide",  label: "First-Timer",    star: true },
    { slug: "getting-there",      label: "Getting There"              },
    { slug: "packing-guide",      label: "Packing"                    },
    { slug: "bag-policy",         label: "Bag Policy"                 },
    { slug: "grandstands",        label: "Grandstands"                },
    { slug: "experiences",        label: "Experiences"                },
    { slug: "food-and-nightlife", label: "Food & Nightlife"           },
    { slug: "mistakes",           label: "Mistakes"                   },
    { slug: "costs",              label: "Costs"                      },
  ],
  "hungary":       [{ slug: "costs", label: "Costs" }],
  "brno":          [{ slug: "costs", label: "Costs" }],
  "assen":         [{ slug: "costs", label: "Costs" }],
  "sachsenring":   [{ slug: "costs", label: "Costs" }],
  "silverstone":   [{ slug: "costs", label: "Costs" }],
  "aragon":        [{ slug: "costs", label: "Costs" }],
  "misano":        [{ slug: "costs", label: "Costs" }],
  "austria":       [{ slug: "costs", label: "Costs" }],
  "portimao":      [{ slug: "costs", label: "Costs" }],
  "valencia":      [{ slug: "costs", label: "Costs" }],
  "austin":        [{ slug: "costs", label: "Costs" }],
};

export const TIER1_SLUGS = new Set<string>([
  "first-timer-guide",
  "getting-there",
  "packing-guide",
  "mistakes",
]);

export const TIER1_ORDER = [
  "first-timer-guide",
  "getting-there",
  "packing-guide",
  "mistakes",
] as const;

export const TIER1_META: Record<string, { label: string; description: string }> = {
  "first-timer-guide": {
    label: "First-Timer Guide",
    description: "What to expect on your first race weekend",
  },
  "getting-there": {
    label: "Getting There",
    description: "Transport, parking, and how to leave without chaos",
  },
  "packing-guide": {
    label: "Packing Guide",
    description: "What to bring for this specific circuit and climate",
  },
  "mistakes": {
    label: "Mistakes",
    description: "The things that catch people out — sorted in advance",
  },
};

export const TIER2_FIXED = [
  { slug: "experiences", label: "Tickets & Experiences" },
] as const;

/** Get the sub-pages registered for a given race slug. Returns [] if none. */
export const getGuidePages = (slug: string): GuidePage[] =>
  RACE_GUIDE_PAGES[slug] ?? [];
