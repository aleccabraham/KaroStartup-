import { motion } from "framer-motion";

const APPLY_URL = "https://tally.so/r/2Ekqpg";
const PARTNER_URL = "mailto:business@karostartup.com?subject=Karo Pitch Partnership Inquiry";

const CTASection = () => (
  <section className="bg-foreground py-[12vh] md:py-[16vh]">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] text-background mb-8">
          Ready to Pitch Your Startup?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors hover:bg-primary-dark"
          >
            Apply Now
          </motion.a>
          <motion.a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-background/20 text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-background/10 transition-colors"
          >
            Partner With Us
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
