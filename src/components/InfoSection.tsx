import { motion } from "framer-motion";
import { Train, Plane, Thermometer, MapPin } from "lucide-react";

const tips = [
  {
    icon: Train,
    title: "Getting There",
    text: "Take the Metro (Green Line) to Jean-Drapeau station — it drops you right at the circuit.",
  },
  {
    icon: Plane,
    title: "Airport",
    text: "YUL Montréal-Trudeau is 25 min from downtown. 747 express bus runs 24/7 for $11.",
  },
  {
    icon: Thermometer,
    title: "Weather",
    text: "Expect 20-28°C. Rain is possible — bring layers and sunscreen. It's a long day trackside.",
  },
  {
    icon: MapPin,
    title: "Stay Central",
    text: "Old Montreal, Plateau, or Downtown. You'll want walkable access to the nightlife scene.",
  },
];

const InfoSection = () => {
  return (
    <section aria-label="Travel tips for Montreal Grand Prix" className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-display text-4xl font-bold text-foreground sm:text-5xl"
        >
          Need to <span className="text-gradient-racing">Know</span>
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <tip.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {tip.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {tip.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
