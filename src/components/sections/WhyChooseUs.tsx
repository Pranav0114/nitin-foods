import { motion } from "framer-motion";
import { features } from "@/data/features";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Quality you can taste, reliability you can count on"
          description="A decade of cold-chain discipline and hygienic processing, distilled into every pack we ship."
        />

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-forest/5 transition-shadow hover:shadow-premium"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-gold">
                <f.icon size={22} />
              </span>
              <p className="text-sm font-semibold text-forest-dark">{f.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/55">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
