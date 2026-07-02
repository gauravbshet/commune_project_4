import Image from "next/image";
import Reveal from "./Reveal";

const tiles = [
  {
    title: "Hiking in Istria: Discover trails near Green Tree Villas",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Arts & Culture",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=900&auto=format&fit=crop",
  },
  {
    title: "Sightseeing",
    image:
      "https://images.unsplash.com/photo-1500916433055-2adf7c46dbb1?q=80&w=900&auto=format&fit=crop",
  },
];

export default function MeetIstria() {
  return (
    <section id="istria" className="bg-sage-deep text-linen">
      <div className="grid md:grid-cols-[minmax(0,1fr)_2fr]">
        <div className="px-6 sm:px-12 py-20 flex flex-col justify-center">
          <Reveal>
            <span className="font-script text-4xl sm:text-5xl block">meet</span>
            <h2 className="font-display font-medium text-6xl sm:text-7xl -mt-2 mb-8">
              Istria.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-linen/85 leading-relaxed text-[15px] max-w-md">
              Welcome to Istria, a stunning region that offers an abundance
              of natural beauty. The green hills are covered in olive groves
              and vineyards, and the region is renowned for producing some
              of the world&apos;s best wine, truffles and olive oil.
              Istria&apos;s pristine coastline boasts crystal-clear waters,
              perfect for swimming and water sports. Whether you&apos;re
              exploring charming villages, dining on delicious local
              cuisine, or simply enjoying the fresh sea air, Istria offers
              an unforgettable experience. Come visit and create memories
              that will last a lifetime.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#istria"
              className="mt-10 inline-flex items-center gap-3 border border-linen/70 px-7 py-4 text-xs tracking-[0.15em] font-medium hover:bg-linen hover:text-sage-deep transition-colors w-fit"
            >
              MEET ISTRIA <span aria-hidden>&#8594;</span>
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
