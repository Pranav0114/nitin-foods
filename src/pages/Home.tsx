import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { QualityAssurance } from "@/components/sections/QualityAssurance";
import { BulkOrders } from "@/components/sections/BulkOrders";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
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
