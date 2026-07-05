import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "18", label: "ACRES OF LUSH JUNGLE & PLANTATION" },
  { value: "5", label: "UNIQUE ACCOMMODATION TYPES" },
  { value: "500+", label: "HAPPY GUESTS EVERY MONTH" },
];

export default function StatsSection() {
  return (
    <section className="grid md:grid-cols-3 bg-cream">
      <div className="relative min-h-[320px] md:min-h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1543363136-3fdb62e11be5?q=80&w=1400&auto=format&fit=crop"
          alt="Crystal clear waterfall in the Chikmagalur forest"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10 py-16 px-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <div className="text-center">
              <p className="font-display font-medium text-sage-deep text-6xl sm:text-7xl leading-none">
                {s.value}
              </p>
              <p className="text-ink/60 text-xs sm:text-sm tracking-widest mt-3">
                {s.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="divider-dash text-ink/30 w-40 mx-auto mt-8" />
            )}
          </Reveal>
        ))}
      </div>

      <div className="relative min-h-[320px] md:min-h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1400&auto=format&fit=crop"
          alt="Wooden cottage lit warmly at night surrounded by jungle"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
    </section>
  );
}
