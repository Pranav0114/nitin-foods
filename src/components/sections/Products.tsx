import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const spotlight = products.filter((p) =>
  ["alphonso-mango-pulp", "strawberry-pulp", "dragon-fruit-pulp", "red-guava-pulp", "green-peas", "broccoli-florets"].includes(p.id)
);

const filterCategories = categories.filter((c) => c !== "Bulk & Industrial");

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>(filterCategories[0]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = p.category === activeCategory;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="products" className="relative bg-mist py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Range"
          title="A premium catalogue, built for every kitchen"
          description="From single-origin fruit pulps to industrial bulk packs — explore our full range of frozen fruits, vegetables, crushes and spreads."
        />

        {/* Spotlight carousel */}
        <div className="mt-16">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            slidesPerView={1.15}
            spaceBetween={24}
            loop
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 1.5, slideShadows: false }}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              1024: { slidesPerView: 2.4 },
            }}
            className="!pb-4"
          >
            {spotlight.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="group relative h-72 overflow-hidden rounded-3xl shadow-premium sm:h-80">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-forest-dark/20 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-gold/95 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-forest-dark">
                    Great Purandhar
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                      {p.category}
                    </p>
                    <p className="mt-1 font-display text-xl font-semibold text-cream sm:text-2xl">
                      {p.name}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Search + filters */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="relative w-full max-w-md">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/30" size={14} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="w-full rounded-full border border-forest/10 bg-white py-3 pl-11 pr-4 text-sm shadow-sm outline-none ring-emerald/30 transition focus:ring-2"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm",
                  activeCategory === cat
                    ? "bg-forest text-cream shadow-md"
                    : "bg-white text-ink/60 hover:bg-forest/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-sm text-ink/50">
            No products match your search. Try a different keyword or category.
          </p>
        )}
      </div>
    </section>
  );
}
