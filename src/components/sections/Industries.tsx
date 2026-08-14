import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Industries() {
  return (
    <section id="industries" className="bg-forest-dark py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Trusted across the food & beverage value chain"
          dark
          description="From boutique cafés to industrial food processors, our supply is built to fit every scale of operation."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.07 }}
              whileHover={{ y: -5, borderColor: "rgba(230,179,37,0.5)" }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 text-center backdrop-blur-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <ind.icon size={20} />
              </span>
              <h3 className="text-sm font-semibold text-cream" style={{ fontFamily: "var(--font-sans)" }}>{ind.name}</h3>
              <p className="text-xs leading-relaxed text-cream/50">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
