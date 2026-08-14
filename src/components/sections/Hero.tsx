import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaDownload, FaChevronDown } from "react-icons/fa";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Particles } from "@/components/ui/Particles";
import { images } from "@/data/images";

const floaters = [
  { src: images.mango, size: 110, top: "14%", left: "8%", depth: 30, delay: 0 },
  { src: images.strawberrySingle, size: 90, top: "62%", left: "6%", depth: 45, delay: 0.6 },
  { src: images.guava, size: 100, top: "20%", left: "84%", depth: 25, delay: 1.1 },
  { src: images.dragonFruit, size: 120, top: "68%", left: "82%", depth: 35, delay: 0.3 },
  { src: images.broccoli, size: 85, top: "8%", left: "45%", depth: 50, delay: 0.9 },
  { src: images.berriesMixed, size: 80, top: "78%", left: "42%", depth: 40, delay: 1.4 },
];

interface FloatingFruitProps {
  f: (typeof floaters)[number];
  sx: ReturnType<typeof useSpring>;
  sy: ReturnType<typeof useSpring>;
}

function FloatingFruit({ f, sx, sy }: FloatingFruitProps) {
  const x = useTransform(sx, [-1, 1], [f.depth, -f.depth]);
  const y = useTransform(sy, [-1, 1], [f.depth, -f.depth]);

  return (
    <motion.div
      className="absolute hidden select-none rounded-full border-4 border-cream/10 shadow-2xl sm:block"
      style={{ top: f.top, left: f.left, width: f.size, height: f.size, x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: f.delay + 0.6 }}
    >
      <motion.img
        src={f.src}
        alt=""
        className="h-full w-full animate-float rounded-full object-cover"
        style={{ animationDelay: `${f.delay}s` }}
      />
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, [-1, 1], [15, -15]);
  const bgY = useTransform(sy, [-1, 1], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest-dark"
    >
      {/* Background with slow Ken Burns zoom */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.img
          src={images.heroBg}
          alt=""
          style={{ x: bgX, y: bgY }}
          className="h-full w-full scale-110 object-cover object-center opacity-40"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/90 via-forest-dark/80 to-forest-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(230,179,37,0.12),transparent_60%)]" />
      <Particles count={28} className="absolute inset-0 z-1" />

      {/* Floating fruit elements */}
      {floaters.map((f, i) => (
        <FloatingFruit key={i} f={f} sx={sx} sy={sy} />
      ))}

      {/* Content */}
      <div className="container-px relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] text-gold"
        >
          Pure &middot; Fresh &middot; Frozen
        </motion.p>

        <h1 className="font-display text-4xl font-bold leading-[1.1] text-cream text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          {"Premium Frozen Fruits & Vegetables for Modern Food Businesses"
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.045 }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          From nature to your table — hygienically processed, frozen fresh,
          and trusted by restaurants, cafés, manufacturers, and distributors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#products" variant="primary">
            Explore Products
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Request Bulk Quote
          </MagneticButton>
          <MagneticButton href="#" variant="ghost">
            <FaDownload size={13} /> Download Catalogue
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/60"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <FaChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
