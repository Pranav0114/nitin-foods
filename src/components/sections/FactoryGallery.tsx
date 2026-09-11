import { motion } from "framer-motion";
import { factoryGallery } from "@/data/factory";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FactoryGallery() {
  return (
    <section id="factory" className="bg-cream py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Inside Our Factory"
          title="A look inside where it all happens"
          description="From fruit processing to packaging and cold storage — a glimpse into the facility behind every pack we ship."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {factoryGallery.map((photo, i) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              className={
                "group relative overflow-hidden rounded-2xl shadow-soft " +
                (i === 0 ? "col-span-2 h-64 sm:h-80 md:col-span-1 md:h-96" : "h-44 sm:h-56 md:h-56")
              }
            >
              <img
                src={photo.image}
                alt={photo.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-forest-dark/0 to-transparent" />
              <p className="absolute bottom-3 left-4 right-4 text-sm font-medium text-cream">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
