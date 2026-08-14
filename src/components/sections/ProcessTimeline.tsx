import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = stepsRef.current?.querySelectorAll(".process-card");

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        }
      );

      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.12,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: stepsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="bg-mist py-24 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="From harvest to your doorstep, every step engineered"
          description="A meticulously controlled eight-stage journey ensures every pack meets the same exacting standard."
        />

        <div className="relative mt-20 overflow-x-auto pb-4">
          <div className="relative min-w-[900px] px-2 lg:min-w-0">
            <div className="absolute left-0 right-0 top-8 h-[2px] bg-forest/10" />
            <div
              ref={lineRef}
              className="absolute left-0 right-0 top-8 h-[2px] bg-gradient-to-r from-emerald via-gold to-forest"
            />

            <div ref={stepsRef} className="relative grid grid-cols-8 gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="process-card flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-mist bg-forest text-gold shadow-premium">
                    <step.icon size={20} />
                  </div>
                  <p className="mt-4 font-display text-2xl font-bold text-forest/20">
                    {step.step}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-forest-dark" style={{ fontFamily: "var(--font-sans)" }}>{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/50">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
