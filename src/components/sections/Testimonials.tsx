import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by businesses who demand consistency"
          description="Hear from the chefs, founders and procurement teams who build their menus on Nitin Foods."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-forest/5 transition-shadow hover:shadow-premium"
            >
              <FaQuoteLeft className="text-2xl text-gold/40" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <FaStar key={idx} className="text-gold" size={13} />
                ))}
              </div>
              <div className="mt-4 border-t border-forest/10 pt-4">
                <p className="text-sm font-semibold text-forest-dark">{t.name}</p>
                <p className="text-xs text-ink/50">
                  {t.role}, {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
