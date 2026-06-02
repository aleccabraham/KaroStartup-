import { motion } from "framer-motion";
import { ShoppingBag, Users, Factory, Monitor, Wrench, MapPin } from "lucide-react";

const categories = [
  { icon: ShoppingBag, title: "D2C Brands", tag: "Consumer" },
  { icon: Users, title: "Consumer Startups", tag: "B2C" },
  { icon: Factory, title: "MSMEs", tag: "Enterprise" },
  { icon: Monitor, title: "SaaS Startups", tag: "Technology" },
  { icon: Wrench, title: "Manufacturing Businesses", tag: "Industrial" },
  { icon: MapPin, title: "Bharat-Focused Startups", tag: "Tier 2/3" },
];

const WhoCanApplySection = () => (
  <section className="py-[12vh] md:py-[16vh]">
    <div className="max-w-7xl mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">Taxonomy</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-16">
        Who Can Apply
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative border border-border p-8 rounded-xl bg-background hover:border-primary/30 transition-all group"
          >
            <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground bg-muted px-2 py-1 rounded-full">
              {c.tag}
            </span>
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
              <c.icon size={20} strokeWidth={2} className="text-foreground" />
            </div>
            <h3 className="font-display font-bold text-xl tracking-tight">{c.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoCanApplySection;
