import { motion } from "framer-motion";
import { FileText, CheckCircle, Mic, Rocket } from "lucide-react";

const steps = [
  { icon: FileText, title: "Apply with your pitch deck", step: 1 },
  { icon: CheckCircle, title: "Get shortlisted by KaroStartup", step: 2 },
  { icon: Mic, title: "Pitch live to investors", step: 3 },
  { icon: Rocket, title: "Raise funding and scale", step: 4 },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-[12vh] md:py-[16vh] bg-muted">
    <div className="max-w-7xl mx-auto px-6">
      <p className="font-mono text-xs uppercase tracking-[0.1em] text-primary mb-4">The Protocol</p>
      <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-[-0.04em] leading-[0.95] mb-16">
        How It Works
      </h2>

      <div className="relative grid md:grid-cols-4 gap-6">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-border" />

        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative border border-border bg-background p-8 rounded-xl hover:border-primary/30 transition-all hover:shadow-[var(--shadow-lift)]"
          >
            <span className="font-mono text-primary text-sm mb-4 block">0{s.step}</span>
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4">
              <s.icon size={20} strokeWidth={2} className="text-foreground" />
            </div>
            <h3 className="font-display font-bold text-lg tracking-tight">{s.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
