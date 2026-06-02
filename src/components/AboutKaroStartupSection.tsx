import { motion } from "framer-motion";

const AboutKaroStartupSection = () => (
  <section className="py-[12vh] md:py-[16vh] bg-muted">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">The Platform</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-6">
          About KaroStartup
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[65ch]">
          KaroStartup is a startup media platform that has published thousands of founder stories and built a strong founder community across India. We spotlight Bharat's entrepreneurial spirit — from Tier-2 towns to metro hubs — amplifying voices that shape the future of Indian business.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutKaroStartupSection;
