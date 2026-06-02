import { motion } from "framer-motion";
import heroImage from "@/assets/hero-illustration.png";

const APPLY_URL = "https://tally.so/r/2Ekqpg";
const ELIGIBILITY_URL = "https://docs.google.com/document/d/1WaM3rJNg1V_4bML-5iLOMbFHm0FQgaYlvtUpxSnKydc/edit?usp=sharing";

const HeroSection = () => (
  <section className="pt-32 pb-16 md:py-[16vh] md:pt-[20vh]">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground mb-4">
          By KaroStartup
        </p>
        <h1
          className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] mb-6"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Pitch Your Startup to India's{" "}
          <span className="text-primary">Top Investors</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-[50ch] mb-8">
          Karo Pitch helps early-stage founders from across India connect with investors through curated pitch events and startup discovery.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-colors hover:bg-primary-dark"
          >
            Apply to Pitch
          </motion.a>
          <motion.a
            href={ELIGIBILITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-border px-8 py-4 rounded-full font-bold text-lg text-foreground hover:bg-muted transition-colors"
          >
            Check Eligibility
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
        className="flex justify-center"
      >
        <img src={heroImage} alt="Founder pitching to investors" className="w-full max-w-lg" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
