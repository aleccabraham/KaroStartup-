import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Startups" },
  { value: "100+", label: "Investors" },
  { value: "₹50Cr+", label: "Funding Raised" },
  { value: "5000+", label: "Founder Community" },
];

const StatsSection = () => (
  <section className="bg-muted py-16 md:py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`text-center py-8 ${i < stats.length - 1 ? "md:border-r border-border" : ""}`}
          >
            <p className="font-display font-extrabold text-4xl md:text-5xl tracking-tight tabular-nums">
              {s.value}
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground mt-2">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
