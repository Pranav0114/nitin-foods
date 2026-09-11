import { useRef, useState } from "react";
import type { MouseEvent } from "react";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -8, ry: px * 8 });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-shadow duration-300 hover:shadow-premium"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-forest-dark backdrop-blur-sm">
          {product.category}
        </span>
        <span className="absolute bottom-4 right-4 rounded-full bg-gold/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-forest-dark">
          Great Purandhar
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-forest-dark">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">
          {product.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.packSizes.map((size) => (
            <span
              key={size}
              className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-forest"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
