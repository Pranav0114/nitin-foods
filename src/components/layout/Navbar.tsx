import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/80 shadow-[0_4px_30px_-10px_rgba(11,93,59,0.25)] backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container-px flex h-20 items-center justify-between">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          <span className={scrolled ? "text-forest-dark" : "text-cream"}>Nitin</span>{" "}
          <span className="text-gold">Foods</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-gold",
                  scrolled ? "text-ink/80" : "text-cream/90"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-emerald"
          >
            Request Bulk Quote
          </a>
        </div>

        <button
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled ? "text-forest-dark" : "text-cream"
          )}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 hover:bg-mist hover:text-forest-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-forest px-6 py-3 text-center text-sm font-semibold text-cream"
                >
                  Request Bulk Quote
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-center text-sm font-semibold text-forest-dark"
                >
                  <FaDownload size={14} /> Download Catalogue
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
