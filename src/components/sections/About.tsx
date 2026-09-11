import { motion } from "framer-motion";
import { FaSnowflake, FaLeaf, FaShieldAlt, FaBoxOpen } from "react-icons/fa";
import { images } from "@/data/images";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { icon: FaSnowflake, title: "Cold-Chain Expertise", description: "Unbroken -18°C chain from processing to delivery." },
  { icon: FaLeaf, title: "Hygienic Processing", description: "Food-safety-certified facilities and protocols." },
  { icon: FaShieldAlt, title: "No Preservatives", description: "Freshness preserved naturally, through freezing alone." },
  { icon: FaBoxOpen, title: "Export-Ready Packaging", description: "International-standard, tamper-evident packs." },
];

const stats = [
  { target: 30, suffix: "+", label: "Product Varieties" },
  { target: 250, suffix: "+", label: "Happy Business Clients" },
  { target: 18, suffix: "+", label: "States Served" },
  { target: 5000, suffix: "+", label: "Bulk Orders Delivered" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-emerald/5 blur-3xl" />

      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <img
              src={images.aboutFactory}
              alt="Nitin Foods cold storage and processing facility"
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-4 w-56 rounded-2xl bg-forest p-5 text-cream shadow-premium sm:-right-8 sm:w-64"
          >
            <p className="font-display text-3xl font-bold text-gold">-18°C</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-cream/70">
              Consistent Deep-Freeze Storage
            </p>
          </motion.div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About Nitin Foods"
            title="Nature's freshness, engineered for reliability"
            align="left"
            className="mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-balance leading-relaxed text-ink/65"
          >
            For over a decade, Nitin Foods has partnered with farms across
            India to bring restaurants, manufacturers and distributors the
            freshest frozen fruits and vegetables — processed hygienically,
            frozen at peak ripeness, and delivered through an unbroken cold
            chain. Every batch is a promise of consistency, purity and
            export-grade quality — manufactured by Nitin Foods and trusted in
            the market as Great Purandhar.
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="flex items-start gap-3 rounded-2xl bg-white/60 p-4 shadow-sm ring-1 ring-forest/5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                  <p.icon size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest-dark">{p.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-ink/55">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-forest/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
