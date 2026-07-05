import Image from "next/image";
import Reveal from "./Reveal";

const tiles = [
  {
    title: "Trekking & Wildlife",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Coffee Estate Tours",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Adventure & Bonfires",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=900&auto=format&fit=crop",
  },
];

export default function MeetIstria() {
  return (
    <section id="chikmagalur" className="bg-sage-deep text-linen">
      <div className="grid md:grid-cols-[minmax(0,1fr)_2fr]">
        <div className="px-6 sm:px-12 py-20 flex flex-col justify-center">
          <Reveal>
            <span className="font-script text-4xl sm:text-5xl block">explore</span>
            <h2 className="font-display font-medium text-6xl sm:text-7xl -mt-2 mb-8">
              Chikmagalur.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-linen/85 leading-relaxed text-[15px] max-w-md">
              Wrapped in mist and coffee, Chikmagalur is Karnataka&apos;s crown
              jewel. Its rolling hills shelter leopards and elephants, its slopes
              produce some of India&apos;s finest coffee, and its trails wind
              through forests that feel untouched by time. Come for the scenery
              — stay for everything else.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#chikmagalur"
              className="mt-10 inline-flex items-center gap-3 border border-linen/70 px-7 py-4 text-xs tracking-[0.15em] font-medium hover:bg-linen hover:text-sage-deep transition-colors w-fit"
            >
              EXPLORE CHIKMAGALUR <span aria-hidden>&#8594;</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-3">
          {tiles.map((t) => (
            <div key={t.title} className="relative min-h-[280px] sm:min-h-[420px] group overflow-hidden">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(min-width: 768px) 22vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <p className="absolute bottom-4 left-3 right-3 font-display font-medium text-white text-lg sm:text-2xl leading-tight">
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
