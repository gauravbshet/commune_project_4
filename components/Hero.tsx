import Image from "next/image";
import TreeMark from "./TreeMark";
import BookingBar from "./BookingBar";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&w=2400&auto=format&fit=crop"
        alt="Commune18 — misty jungle resort in the Western Ghats, Chikmagalur"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="sr-only">Commune 18</h1>
        <TreeMark className="w-72 sm:w-[450px] h-14 sm:h-20 text-white mb-8 -mt-32 sm:-mt-40" />

        <button
          aria-label="Play showreel"
          className="mt-10 w-12 h-12 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <span className="ml-0.5">&#9658;</span>
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-8 sm:bottom-10 z-10 px-6">
        <p className="text-center text-white/85 text-[11px] sm:text-xs mb-4 font-body">
          Book direct &amp; get the best rates — no hidden fees, just jungle vibes
        </p>
        <BookingBar />
      </div>
    </section>
  );
}
