import { motion } from "framer-motion";
import { FaBoxes, FaUtensils, FaIndustry, FaHandshake, FaClipboardList } from "react-icons/fa";
import { images } from "@/data/images";
import { MagneticButton } from "@/components/ui/MagneticButton";

const points = [
  { icon: FaBoxes, text: "5kg & 20kg industrial packs" },
  { icon: FaUtensils, text: "Restaurant supply programs" },
  { icon: FaIndustry, text: "Manufacturing supply contracts" },
  { icon: FaHandshake, text: "Distribution partnerships" },
  { icon: FaClipboardList, text: "Custom order inquiries" },
];

export function BulkOrders() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-forest to-emerald py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Bulk &amp; Industrial Supply
          </p>
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
            Looking for Bulk Supply?
          </h2>
          <p className="mt-5 max-w-lg text-balance leading-relaxed text-cream/75">
            Partner with Nitin Foods for dependable, spec-consistent volumes —
            built for restaurants, manufacturers and distribution networks
            that can't afford supply gaps.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((pt, i) => (
              <motion.li
                key={pt.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl bg-cream/10 px-4 py-3 backdrop-blur-sm"
              >
                <pt.icon className="shrink-0 text-gold" size={16} />
                <span className="text-sm text-cream/90">{pt.text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10">
            <MagneticButton href="#contact" variant="primary">
              Request Bulk Quote
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <img
              src={images.warehouse}
              alt="Bulk frozen fruit pulp packaging and warehouse distribution"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-6 flex items-center gap-3 rounded-2xl bg-cream p-4 shadow-premium sm:-left-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <FaBoxes size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold text-forest-dark">20kg Bulk Pack</p>
              <p className="text-[10px] text-ink/50">Industrial Grade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
