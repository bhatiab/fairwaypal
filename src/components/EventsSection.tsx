import { useState } from "react";
import { motion } from "framer-motion";
import { events, categoryLabels, EventCategory } from "@/data/events";
import EventCard from "./EventCard";

interface EventsSectionProps {
  itinerary: string[];
  onToggle: (id: string) => void;
}

const categories: (EventCategory | "all")[] = [
  "all",
  "racing",
  "nightlife",
  "food",
  "music",
  "culture",
  "outdoor",
];

const EventsSection = ({ itinerary, onToggle }: EventsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <section id="events" aria-label="Events happening during GP weekend" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            What's <span className="text-gradient-racing">Happening</span>
          </h2>
          <p className="font-body text-muted-foreground">
            Tap <span className="text-primary">+</span> to add events to your itinerary
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 font-body text-sm transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-accent"
              }`}
            >
              {cat === "all" ? "All Events" : categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Event grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((event, i) => (
            <EventCard
              key={event.id}
              event={event}
              isInItinerary={itinerary.includes(event.id)}
              onToggle={onToggle}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
