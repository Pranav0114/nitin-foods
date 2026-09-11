import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { images } from "@/data/images";
import { founder } from "@/data/founder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="lg:order-1">
          <SectionHeading
            eyebrow="Our Founder"
            title="A journey from the farm to the factory floor"
            align="left"
            className="mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg font-semibold text-forest-dark"
          >
            {founder.name}
            <span className="mt-1 block text-sm font-medium text-ink/50">{founder.title}</span>
          </motion.p>

          <div className="mt-5 space-y-4">
            {founder.story.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-balance leading-relaxed text-ink/65"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-emerald">
              Recognized For Excellence
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {founder.awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-forest/5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <FaAward size={13} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold leading-snug text-forest-dark">
                      {award.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-ink/45">{award.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative lg:order-2"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-premium">
            <img
              src={images.founderJourney}
              alt="The farmland where Nitin Foods' journey began"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl bg-forest p-5 text-cream shadow-premium sm:-left-8"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <FaAward size={18} />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-cream">Farmer to Founder</p>
              <p className="text-xs uppercase tracking-wider text-cream/60">A Legacy Built on Roots</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
