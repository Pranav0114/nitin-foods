import { Hero } from "@/components/sections/Hero";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { BulkOrders } from "@/components/sections/BulkOrders";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

// Founder and FactoryGallery sections are built (see components/sections)
// but held back for v2 per client request — re-add both imports and JSX
// below (between About and Products, and between Industries and
// ProcessTimeline) when ready to ship them.

export function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <About />
      <Products />
      <WhyChooseUs />
      <Industries />
      <ProcessTimeline />
      <QualityAssurance />
      <BulkOrders />
      <Testimonials />
      <Contact />
    </>
  );
}
