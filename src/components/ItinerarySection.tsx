import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock } from "lucide-react";
import { events } from "@/data/events";
import { categoryLabels } from "@/data/events";

interface ItinerarySectionProps {
  itinerary: string[];
  onRemove: (id: string) => void;
}

const ItinerarySection = ({ itinerary, onRemove }: ItinerarySectionProps) => {
  const itineraryEvents = events.filter((e) => itinerary.includes(e.id));

  if (itineraryEvents.length === 0) return null;

  return (
    <section id="itinerary" aria-label="Your planned itinerary" className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            Your <span className="text-gradient-racing">Itinerary</span>
          </h2>
          <p className="font-body text-muted-foreground">
            {itineraryEvents.length} event{itineraryEvents.length > 1 ? "s" : ""} planned
          </p>
        </motion.div>

        <div className="space-y-3">
          <AnimatePresence>
            {itineraryEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20, height: 0 }}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-body text-sm font-semibold">
                  <Calendar className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm font-semibold text-foreground truncate">
                    {event.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 font-body text-xs text-muted-foreground mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.date} · {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 font-body text-xs text-muted-foreground hidden sm:block">
                  {categoryLabels[event.category]}
                </span>
                <button
                  onClick={() => onRemove(event.id)}
                  className="shrink-0 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
