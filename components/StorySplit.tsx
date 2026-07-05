import Image from "next/image";

export default function StorySplit() {
  return (
    <section className="bg-sage-deep">
      <div className="flex items-center justify-between px-6 sm:px-12 py-5 border-b border-linen/20">
        <div className="flex items-center gap-2 text-linen">
          <span aria-hidden>&#9679;</span>
          <span className="text-sm sm:text-base font-medium">Where is Chikmagalur?</span>
        </div>
        <div className="hidden sm:block h-px flex-1 mx-10 bg-linen/30" />
      </div>

      <div className="grid md:grid-cols-2">
        <a
          href="#about"
          className="relative group h-[60vh] min-h-[420px] flex items-end justify-start p-8 sm:p-12 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop"
            alt="Guests laughing and relaxing together at Commune18"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-sage-deep/40 group-hover:bg-sage-deep/20 transition-colors duration-700" />
          <div className="relative z-10 text-white flex items-center gap-4">
            <span className="text-2xl">&#8592;</span>
            <span>
              <span className="font-script text-2xl sm:text-3xl block">our</span>
              <span className="font-display font-medium text-5xl sm:text-6xl -mt-2 block">
                story.
              </span>
            </span>
          </div>
        </a>

        <a
          href="#stays"
          className="relative group h-[60vh] min-h-[420px] flex items-end justify-end p-8 sm:p-12 overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=1400&auto=format&fit=crop"
            alt="Cosy wooden cottage nestled in the jungle at Commune18"
            fill
            className="object-cover mix-blend-multiply group-hover:mix-blend-normal transition-all duration-700"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-sage-deep/45 group-hover:bg-sage-deep/15 transition-colors duration-700" />
          <div className="relative z-10 text-white flex items-center gap-4">
            <span>
              <span className="font-script text-2xl sm:text-3xl block">explore</span>
              <span className="font-display font-medium text-5xl sm:text-6xl -mt-2 block">
                stays.
              </span>
            </span>
            <span className="text-2xl">&#8594;</span>
          </div>
        </a>
      </div>
    </section>
  );
}
