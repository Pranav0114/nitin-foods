import { motion } from "framer-motion";

export function BrandStrip() {
  return (
    <section className="relative overflow-hidden bg-forest-dark py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,179,37,0.1),transparent_60%)]" />

      <div className="container-px relative mx-auto flex max-w-5xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-5">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-medium uppercase tracking-[0.2em] text-cream/50"
        >
          Manufactured by Nitin Foods &middot; Sold in the market as
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl font-bold tracking-wide text-gold sm:text-3xl"
        >
          GREAT PURANDHAR
        </motion.p>
      </div>
    </section>
  );
}
