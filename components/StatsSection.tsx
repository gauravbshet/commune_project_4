import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "1200m", label: "TO MOST BEAUTIFUL PEBBLE BEACHES" },
  { value: "6000m", sup: "2", label: "GREEN TREE VILLA AREA" },
  { value: "3", label: "VILLAS IN THE RESORT." },
];

export default function StatsSection() {
  return (
    <section className="grid md:grid-cols-3 bg-cream">
      <div className="relative min-h-[320px] md:min-h-[560px]">
        <Image
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop"
          alt="Clear turquoise water over pale rocks"
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
                {s.sup && <sup className="text-3xl sm:text-4xl">{s.sup}</sup>}
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
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
          alt="Villa entrance lit at night, framed by olive trees"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
    </section>
  );
}
