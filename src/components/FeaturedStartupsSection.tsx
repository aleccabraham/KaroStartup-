import { motion } from "framer-motion";
import { Leaf, Cookie, HardHat } from "lucide-react";

const startups = [
  { name: "FarmLink", desc: "AgriTech platform connecting farmers to buyers", icon: Leaf, tag: "AgriTech" },
  { name: "SnackNation", desc: "Healthy D2C snack brand", icon: Cookie, tag: "D2C" },
  { name: "BuildFlow", desc: "SaaS software for construction teams", icon: HardHat, tag: "SaaS" },
];

const FeaturedStartupsSection = () => (
  <section id="startups" className="py-[12vh] md:py-[16vh] bg-muted">
    <div className="max-w-7xl mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">Portfolio</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-16">
        Featured Startups
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {startups.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="border border-border bg-background p-8 rounded-xl hover:shadow-[var(--shadow-lift)] transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon size={24} className="text-primary" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground bg-muted px-2 py-1 rounded-full">
                {s.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-2xl tracking-tight mb-2">{s.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedStartupsSection;
