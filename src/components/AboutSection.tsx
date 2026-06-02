import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-[12vh] md:py-[16vh]">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">About Karo Pitch</p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-6">
          Empowering Bharat{" "}Entrepreneurs
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[65ch]">
          Karo Pitch is a platform where early-stage founders across India can pitch their startups directly to investors. Our mission is to empower entrepreneurs from Tier-2 and Tier-3 cities by giving them access to funding, mentorship, and visibility.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
