import Image from "next/image";
import Reveal from "./Reveal";
import ParallaxColumn from "./ParallaxColumn";

export default function ParallaxShowcase() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="grid md:grid-cols-3 gap-x-8 lg:gap-x-16 px-6 sm:px-10 lg:px-14 max-w-8xl mx-auto">
        {/* Column 1 — welcome copy, then a pendant-light interior shot lower down */}
        <div className="flex flex-col">
          <div className="pt-20 sm:pt-28 pb-16">
            <Reveal>
              <span className="font-script text-3xl sm:text-4xl text-ink/80 block">
                welcome to
              </span>
              <h2 className="font-display font-medium text-sage-dark leading-[0.95] text-6xl sm:text-7xl -mt-2">
                green
                <br />
                serenity
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 sm:mt-32 pb-20">
            <ParallaxColumn speed={-0.06}>
              <div className="relative w-full h-[420px] sm:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=900&auto=format&fit=crop"
                  alt="Pendant lights hanging above a concrete beam in a Green Tree villa interior"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </ParallaxColumn>
          </div>
        </div>

        {/* Column 2 — sunset terrace image, dashed divider, then the "go where" headline */}
        <div className="flex flex-col">
          <div className="pt-0 md:pt-40 pb-10">
            <Reveal>
              <p className="text-ink/70 leading-relaxed text-[15px] sm:text-base max-w-md">
                Where luxury and sustainability unite in harmony. Our villas
                blend seamlessly with nature, providing a peaceful escape
                that you won&apos;t find anywhere else. Their secluded
                hilltop location ensures a peaceful and relaxing getaway.
                Experience the beauty of Istria and create unique memories
                that will last a lifetime.
              </p>
            </Reveal>
          </div>

          <ParallaxColumn speed={0.1}>
            <div className="relative w-full h-[420px] sm:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1200&auto=format&fit=crop"
                alt="Terrace loungers at sunset overlooking the Adriatic coastline"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
          </ParallaxColumn>

          <div className="divider-dash text-ink/25 w-full mt-4" />

          <div className="mt-24 sm:mt-40 pb-20">
            <Reveal>
              <h2 className="font-display font-medium text-sage-deep text-5xl sm:text-6xl leading-[1.05]">
                go where
                <br />
                you feel
                <br />
                most{" "}
                <span className="font-script font-semibold text-ink/80 text-5xl sm:text-6xl">
                  alive
                </span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Column 3 — tall villa interior, then the live solar-energy stat */}
        <div className="flex flex-col">
          <div className="pt-6 sm:pt-10">
            <ParallaxColumn speed={-0.1}>
              <div className="relative w-full h-[520px] sm:h-[680px]">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1200&auto=format&fit=crop"
                  alt="Sunlit villa interior with a sea view through wooden columns"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            </ParallaxColumn>
          </div>

          <div className="mt-16 sm:mt-24 pb-20">
            <Reveal>
              <p className="text-ink/50 text-sm tracking-widest mb-1">Today</p>
              <p className="font-display font-medium text-sage-dark text-6xl sm:text-7xl leading-none">
                41 kWh
              </p>
              <p className="text-ink/60 text-sm mt-2">
                energy produced from sun
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
