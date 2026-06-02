import { motion } from "framer-motion";

const investors = [
  "Sequoia Capital", "Accel Partners", "Matrix Partners",
  "Blume Ventures", "Nexus Venture", "Elevation Capital",
];

const InvestorsSection = () => (
  <section id="investors" className="py-[12vh] md:py-[16vh]">
    <div className="max-w-7xl mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">Network</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-6">
        Meet Investors Looking for the Next Big Startup
      </h2>
      <p className="text-muted-foreground text-lg mb-16 max-w-[65ch]">
        Our curated investor network spans early-stage VCs, angel investors, and institutional funds actively looking for breakthrough startups from Bharat.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {investors.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="border border-border rounded-xl p-6 flex items-center justify-center bg-background hover:border-primary/30 transition-all"
          >
            <span className="font-display font-bold text-sm text-center tracking-tight text-muted-foreground">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestorsSection;
