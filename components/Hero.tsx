import Image from "next/image";
import TreeMark from "./TreeMark";
import BookingBar from "./BookingBar";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop"
        alt="Green Tree Villas — olive oil and linen, house-made products from the estate"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/10 to-ink/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <TreeMark className="w-14 h-16 text-white mb-4" />
        <h1 className="font-display font-medium text-white tracking-[0.25em] text-2xl sm:text-3xl">
          GREEN TREE
        </h1>
        <p className="font-body text-white/80 tracking-[0.5em] text-[10px] sm:text-xs mt-1">
          VILLAS
        </p>

        <button
          aria-label="Play showreel"
          className="mt-10 w-12 h-12 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <span className="ml-0.5">&#9658;</span>
        </button>
      </div>

      <div className="absolute left-0 right-0 bottom-8 sm:bottom-10 z-10 px-6">
        <p className="text-center text-white/85 text-[11px] sm:text-xs mb-4 font-body">
          Unlock 10% off your next stay at Green Tree Villas from booking direct with us
        </p>
        <BookingBar />
      </div>
    </section>
  );
}
