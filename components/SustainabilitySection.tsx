import Image from "next/image";
import Reveal from "./Reveal";
import LiveClock from "./LiveClock";

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="bg-cream">
      <div className="grid md:grid-cols-3">
        <div className="px-6 sm:px-12 py-16 flex items-center">
          <Reveal>
            <p className="text-ink/70 leading-relaxed text-[15px] sm:text-base text-center md:text-left">
              At Green Tree Villas, we take sustainability seriously. Our
              villas are thoughtfully designed with sustainable principles
              in mind, using renewable energy sources such as solar panels
              and rainwater collection systems. Our green roofs provide
              natural insulation and comfort while our saltwater pools are
              both eco-friendly and easier on the skin. Experience the best
              of both worlds at Green Tree Villas.
            </p>
          </Reveal>
        </div>

        <div className="relative h-[50vh] md:h-auto min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=1600&auto=format&fit=crop"
            alt="Golden hour light over pine-covered hills above the Adriatic coastline"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <div className="px-6 sm:px-12 py-16 flex items-center justify-center">
          <Reveal delay={100}>
            <LiveClock />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
