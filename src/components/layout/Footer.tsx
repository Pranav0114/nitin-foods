import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaDownload,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { categories } from "@/data/products";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Industries We Serve", href: "#industries" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-forest-dark pt-20 text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold">
            Nitin <span className="text-gold">Foods</span>
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-cream/40">
            Home of the Great Purandhar brand
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
            Premium frozen fruit pulps, slices, vegetables, crushes and jams —
            hygienically processed and cold-chain fresh, trusted by
            restaurants, manufacturers and distributors nationwide.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition-transform hover:scale-105"
          >
            <FaDownload size={14} /> Download Catalogue
          </a>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">
            Product Categories
          </h4>
          <ul className="mt-4 space-y-3">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href="#products"
                  className="text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-gold">
            Stay Updated
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-cream/65">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-gold" size={13} />
              Purandhar, Pune, Maharashtra 412205, India
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="shrink-0 text-gold" size={12} />
              +91 93227 23352
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="shrink-0 text-gold" size={12} />
              nitinfoods1411@gmail.com
            </li>
          </ul>

          <form onSubmit={handleSubscribe} className="mt-5">
            <div className="flex overflow-hidden rounded-full border border-cream/20 bg-cream/5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-gold px-4 text-sm font-semibold text-forest-dark"
              >
                Join
              </button>
            </div>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs text-gold"
              >
                Thanks for subscribing!
              </motion.p>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Nitin Foods. All rights reserved.</p>
          <p>Pure &middot; Fresh &middot; Frozen</p>
        </div>
      </div>
    </footer>
  );
}
