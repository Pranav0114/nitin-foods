import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import { categories } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MagneticButton } from "@/components/ui/MagneticButton";

const contactDetails = [
  { icon: FaPhoneAlt, label: "Phone", value: "+91 99999 99999" },
  { icon: FaEnvelope, label: "Email", value: "sales@nitinfoods.example" },
  { icon: FaMapMarkerAlt, label: "Address", value: "MIDC Industrial Area, Nashik, Maharashtra, India" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-mist py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's discuss your supply requirements"
          description="Whether it's a restaurant order or an industrial bulk contract, our team responds within one business day."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {contactDetails.map((c) => (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-forest/5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <c.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                      {c.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-forest-dark">{c.value}</p>
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] p-4 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
              >
                <FaWhatsapp size={18} /> Chat with us on WhatsApp
              </a>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl shadow-sm ring-1 ring-forest/5">
              <iframe
                title="Nitin Foods location"
                src="https://maps.google.com/maps?q=Nashik%2C%20Maharashtra%2C%20India&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-6 shadow-premium sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-forest-dark">
                Business &amp; Bulk Order Inquiry
              </h3>
              <p className="mt-1 text-sm text-ink/55">
                Fill in your details and our sales team will get back to you shortly.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company Name" name="company" />
                <Field label="Phone Number" name="phone" type="tel" required />
                <Field label="Email Address" name="email" type="email" required />

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                    Product Category
                  </label>
                  <select
                    name="category"
                    className="rounded-xl border border-forest/10 bg-cream px-4 py-3 text-sm outline-none ring-emerald/30 transition focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <Field label="Required Quantity" name="quantity" placeholder="e.g. 500 kg / month" />
              </div>

              <div className="mt-5 flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirement…"
                  className="resize-none rounded-xl border border-forest/10 bg-cream px-4 py-3 text-sm outline-none ring-emerald/30 transition focus:ring-2"
                />
              </div>

              <div className="mt-6 flex items-center gap-4">
                <MagneticButton variant="secondary" type="submit">
                  <FaPaperPlane size={13} /> Send Inquiry
                </MagneticButton>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-medium text-emerald"
                  >
                    Thank you! We'll be in touch shortly.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold uppercase tracking-wide text-ink/50">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-forest/10 bg-cream px-4 py-3 text-sm outline-none ring-emerald/30 transition focus:ring-2"
      />
    </div>
  );
}
