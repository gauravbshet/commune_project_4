import Image from "next/image";
import Reveal from "./Reveal";
import LiveClock from "./LiveClock";

export default function SustainabilitySection() {
  return (
    <section id="about" className="bg-cream">
      <div className="grid md:grid-cols-3">
        <div className="px-6 sm:px-12 py-16 flex items-center">
          <Reveal>
            <p className="text-ink/70 leading-relaxed text-[15px] sm:text-base text-center md:text-left">
              At Commune18, we believe a great escape doesn&apos;t have to cost
              the earth. Tucked into Chikmagalur&apos;s verdant hills, our
              resort is built for community, comfort and connection with nature.
              Whether you&apos;re here to unwind, work remotely, or venture
              through coffee trails — we&apos;ve got a spot with your name on
              it.
            </p>
          </Reveal>
        </div>

        <div className="relative h-[50vh] md:h-auto min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1600&auto=format&fit=crop"
            alt="Misty green hills of Chikmagalur at sunrise"
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
