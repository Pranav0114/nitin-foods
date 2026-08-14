import { motion } from "framer-motion";
import {
  FaCertificate,
  FaHandsWash,
  FaSnowflake,
  FaLeaf,
  FaAppleAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";

const pillars = [
  { icon: FaCertificate, title: "Food Safety Standards", description: "FSSAI-compliant facilities audited to international benchmarks." },
  { icon: FaHandsWash, title: "Hygienic Manufacturing", description: "HACCP-aligned protocols across every processing stage." },
  { icon: FaSnowflake, title: "Cold-Chain Management", description: "Continuous -18°C monitoring from factory to final mile." },
  { icon: FaLeaf, title: "Freshness Retention", description: "IQF technology locks in texture, colour and aroma." },
  { icon: FaAppleAlt, title: "Nutritional Preservation", description: "Flash freezing safeguards vitamins and natural nutrients." },
];

const badges = ["FSSAI Certified", "HACCP Aligned", "ISO 22000", "Export Grade"];

export function QualityAssurance() {
  return (
    <section id="quality" className="relative overflow-hidden bg-forest-dark py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(230,179,37,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(30,122,77,0.25),transparent_50%)]" />

      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Quality Assurance"
          title="Uncompromising standards, batch after batch"
          dark
          description="Every product we ship carries the same commitment: safety, purity and consistency you can build a business on."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-cream/10 bg-gradient-to-b from-cream/[0.06] to-transparent p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <p.icon size={20} />
              </span>
              <p className="mt-4 text-sm font-semibold text-cream">{p.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-cream/55">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-cream/10 pt-12"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i, type: "spring" }}
              whileHover={{ scale: 1.06, rotate: 2 }}
              className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-5 py-2.5"
            >
              <FaCheckCircle className="text-gold" size={14} />
              <span className="text-xs font-semibold uppercase tracking-wide text-cream/90">
                {b}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
