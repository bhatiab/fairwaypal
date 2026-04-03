import { motion } from "framer-motion";
import {
  AlertTriangle, Clock, ChevronRight, Info, CheckCircle2,
} from "lucide-react";
import FAQAccordion, { type FaqItem } from "@/components/race/FAQAccordion";
import BottomCrossLinkCTA, { type CrossLinkItem } from "@/components/race/BottomCrossLinkCTA";

/* ── Types ────────────────────────────────────────────────────────────── */

export type StatusLevel =
  | "scheduled"
  | "under-review"
  | "high-risk"
  | "cancelled"
  | "postponed"
  | "updated";

export interface TimelineEntry {
  date: string;
  text: string;
  highlight?: boolean;
}

export interface GuidanceItem {
  text: React.ReactNode;
}

export interface ImpactCard {
  title: string;
  text: string;
}

export interface StatusSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

export interface LiveStatusUpdateProps {
  /** Current status level */
  status: StatusLevel;
  /** e.g. "9 March 2026, 14:00 GMT" */
  lastUpdated: string;
  /** Hero badge label, e.g. "Live Update" */
  badge?: string;
  /** Page H1 */
  title: string;
  /** Intro paragraph below H1 */
  intro: string;

  /** Factual key-facts block (rendered inside a card) */
  keyFacts?: React.ReactNode;
  /** Optional paragraph below key facts */
  keyFactsFooter?: React.ReactNode;

  /** Decision timeline entries */
  timeline?: TimelineEntry[];
  /** Intro text above the timeline */
  timelineIntro?: string;

  /** Impact / scenario cards */
  impactCards?: ImpactCard[];

  /** Free-form content sections rendered between structured blocks */
  sections?: StatusSection[];

  /** Guidance items for ticket holders / travellers */
  guidance?: GuidanceItem[];
  /** Optional callout below guidance */
  guidanceCallout?: { title: string; text: string };

  /** FAQ items */
  faqItems?: FaqItem[];

  /** Bottom CTA links */
  ctaLinks?: CrossLinkItem[];
}

/* ── Status palette ──────────────────────────────────────────────────── */

const statusStyles: Record<StatusLevel, { label: string; color: string; border: string; bg: string; heroBg: string }> = {
  scheduled:     { label: "Scheduled",                        color: "text-muted-foreground", border: "border-border/40",      bg: "bg-card/50",        heroBg: "from-background" },
  "under-review": { label: "Under Review",                   color: "text-amber-400",        border: "border-amber-500/40",   bg: "bg-amber-500/10",   heroBg: "from-amber-500/5" },
  "high-risk":    { label: "High Risk — Likely to Be Dropped", color: "text-amber-400",      border: "border-amber-500/40",   bg: "bg-amber-500/10",   heroBg: "from-amber-500/5" },
  cancelled:     { label: "Officially Cancelled",             color: "text-red-400",          border: "border-red-500/40",     bg: "bg-red-500/10",     heroBg: "from-red-500/5" },
  postponed:     { label: "Postponed",                        color: "text-amber-400",        border: "border-amber-500/40",   bg: "bg-amber-500/10",   heroBg: "from-amber-500/5" },
  updated:       { label: "Updated",                          color: "text-sky-400",          border: "border-sky-500/40",     bg: "bg-sky-500/10",     heroBg: "from-sky-500/5" },
};

/* ── Sub-components ──────────────────────────────────────────────────── */

const SectionBlock = ({ id, icon, title, children }: { id: string; icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/30 bg-primary/10">
          {icon}
        </div>
        <h2 className="font-display text-lg font-bold text-foreground sm:text-xl">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </motion.div>
  </section>
);

const TimelineItem = ({ date, text, highlight }: TimelineEntry) => (
  <div className="flex gap-4 items-start">
    <div className="flex flex-col items-center">
      <div className={`h-3 w-3 rounded-full shrink-0 mt-1.5 ${highlight ? "bg-amber-400" : "bg-muted-foreground/30"}`} />
      <div className="w-px flex-1 bg-border/40 mt-1" />
    </div>
    <div className="pb-6">
      <span className={`text-xs font-bold uppercase tracking-wider ${highlight ? "text-amber-400" : "text-muted-foreground"}`}>{date}</span>
      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{text}</p>
    </div>
  </div>
);

/* ── Main component ──────────────────────────────────────────────────── */

const LiveStatusUpdate = ({
  status,
  lastUpdated,
  badge = "Live Update",
  title,
  intro,
  keyFacts,
  keyFactsFooter,
  timeline,
  timelineIntro,
  impactCards,
  sections,
  guidance,
  guidanceCallout,
  faqItems,
  ctaLinks,
}: LiveStatusUpdateProps) => {
  const s = statusStyles[status];

  return (
    <div className="space-y-0">
      {/* ── Status Banner ─────────────────────────────────────────── */}
      <div className={`${s.bg} ${s.border} border-b`}>
        <div className="mx-auto max-w-3xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle className={`h-4 w-4 ${s.color}`} />
            <span className={`text-xs font-bold uppercase tracking-widest ${s.color}`}>{s.label}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-[11px]">Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <header className={`relative overflow-hidden border-b border-border/40 bg-gradient-to-b ${s.heroBg} to-background pt-24 pb-14 sm:pt-32 sm:pb-16`}>
        <div className="mx-auto max-w-3xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className={`mb-4 inline-block rounded-full border ${s.border} ${s.bg} px-3 py-1 text-xs font-semibold uppercase tracking-widest ${s.color}`}>
              {badge}
            </span>
            <h1 className="font-display text-2xl font-black tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {intro}
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── Body ──────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-3xl space-y-14 px-4 py-12 sm:py-16">

        {/* Key Facts */}
        {keyFacts && (
          <SectionBlock id="what-we-know" icon={<Info className="h-4 w-4 text-primary" />} title="What We Know">
            <div className="rounded-xl border border-border/60 bg-card/70 p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
              {keyFacts}
            </div>
            {keyFactsFooter}
          </SectionBlock>
        )}

        {/* Timeline */}
        {timeline && timeline.length > 0 && (
          <SectionBlock id="timeline" icon={<Clock className="h-4 w-4 text-primary" />} title="Key Decision Timeline">
            {timelineIntro && <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{timelineIntro}</p>}
            <div className="rounded-xl border border-border/60 bg-card/70 p-5">
              {timeline.map((t, i) => <TimelineItem key={i} {...t} />)}
            </div>
          </SectionBlock>
        )}

        {/* Custom sections */}
        {sections?.map((sec) => (
          <SectionBlock key={sec.id} id={sec.id} icon={sec.icon} title={sec.title}>
            {sec.content}
          </SectionBlock>
        ))}

        {/* Impact cards */}
        {impactCards && impactCards.length > 0 && (
          <SectionBlock id="impact" icon={<AlertTriangle className="h-4 w-4 text-primary" />} title="Why This Matters">
            <div className="grid gap-3 sm:grid-cols-2">
              {impactCards.map((c) => (
                <div key={c.title} className="rounded-xl border border-border/60 bg-card/70 p-4">
                  <h3 className="text-sm font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </SectionBlock>
        )}

        {/* Guidance */}
        {guidance && guidance.length > 0 && (
          <SectionBlock id="guidance" icon={<CheckCircle2 className="h-4 w-4 text-primary" />} title="Guidance for Ticket Holders">
            <div className="rounded-xl border border-border/60 bg-card/70 p-5 space-y-2">
              {guidance.map((g, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>{g.text}</span>
                </div>
              ))}
            </div>
            {guidanceCallout && (
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  {guidanceCallout.title}
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{guidanceCallout.text}</p>
              </div>
            )}
          </SectionBlock>
        )}

        {/* FAQ */}
        {faqItems && faqItems.length > 0 && (
          <FAQAccordion items={faqItems} headingId="faq" />
        )}

        {/* CTA */}
        {ctaLinks && ctaLinks.length > 0 && (
          <BottomCrossLinkCTA links={ctaLinks} />
        )}
      </div>
    </div>
  );
};

export default LiveStatusUpdate;
