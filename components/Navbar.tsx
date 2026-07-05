"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import TreeMark from "./TreeMark";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Our Stays", href: "#stays" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#footer" },
  { label: "Explore Chikmagalur", href: "#chikmagalur" },
];

const sliderImages = [
  {
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=900&auto=format&fit=crop",
    subtitle: "Commune 18",
    title: "Chikmagalur."
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=900&auto=format&fit=crop",
    subtitle: "Jungle",
    title: "Retreat."
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=900&auto=format&fit=crop",
    subtitle: "Nature",
    title: "Villas."
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simple auto-slider for the menu images
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (open) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
      }, 3500);
    } else {
      setCurrentSlide(0); // reset when closed
    }
    return () => clearInterval(interval);
  }, [open]);

  return (
    <>
      {/* Top Right Navbar Pill */}
      <nav className="fixed top-4 right-4 sm:right-6 z-[70]">
        <div className="flex items-stretch bg-white/95 backdrop-blur rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden h-[52px]">
          <a
            href="#hero"
            className="hidden sm:flex items-center px-5 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10"
          >
            CHECK RATES
          </a>
          <a
            href="#footer"
            className="hidden sm:flex items-center px-5 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10"
          >
            CONTACT
          </a>
          <button className="hidden sm:flex items-center px-4 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10">
            EN
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="relative px-5 min-w-[64px] flex items-center justify-center group"
          >
            <div className="relative w-6 h-[14px] flex flex-col justify-between items-end">
              <span className={`absolute left-0 h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${open ? 'top-1/2 -translate-y-1/2 rotate-45 w-6' : 'top-0 w-6'}`} />
              <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'opacity-0 -translate-x-2' : 'opacity-100 w-6'}`} />
              <span className={`absolute h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${open ? 'left-0 top-1/2 -translate-y-1/2 -rotate-45 w-6' : 'right-0 bottom-0 w-4 group-hover:w-6'}`} />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-bark text-linen transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-y-0" : "-translate-y-full pointer-events-none"}`}
        style={{ transitionDelay: open ? "0ms" : "400ms" }}
      >
        <div className="h-full w-full flex flex-col-reverse md:flex-row">
          {/* Left Column (Desktop) / Bottom Column (Mobile): Image Slider */}
          <div className="w-full h-1/3 md:h-full md:w-5/12 lg:w-1/3 relative overflow-hidden flex-shrink-0">
            {sliderImages.map((slide, idx) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={slide.title}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 41vw, 33vw"
                priority={idx === 0}
              />
            ))}

            {/* Dark gradient overlay so the image isn't too overpowering and text is readable */}
            <div className="absolute inset-0 bg-ink/30" />

            {/* Slider Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4 sm:px-8">
              {sliderImages.map((slide, idx) => (
                <div key={idx} className={`absolute flex items-baseline gap-2 text-center transition-all duration-700 ease-in-out ${idx === currentSlide && open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <span className="font-body text-xs sm:text-base tracking-[0.1em] text-linen/70 italic">{slide.subtitle}</span>
                  <span className="font-display text-3xl sm:text-5xl text-linen">{slide.title}</span>
                </div>
              ))}
            </div>

            {/* Slider Pagination */}
            <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center gap-3 z-20">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-[2px] transition-all duration-500 rounded-full ${idx === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/60'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="w-full flex-1 md:w-7/12 lg:w-2/3 flex flex-col justify-center px-8 sm:px-16 md:px-24">

            {/* Logo inside menu overlay (Slides down like greentree.hr) */}
            <div className={`overflow-hidden mb-8 sm:mb-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`} style={{ transitionDelay: `${open ? 200 : 0}ms` }}>
              <a href="#hero" onClick={() => setOpen(false)} aria-label="Home">
                <TreeMark className="w-32 sm:w-48 h-6 sm:h-9 text-linen hover:text-sage transition-colors" />
              </a>
            </div>

            <div className="flex flex-col items-start gap-2 sm:gap-4 mt-2 md:mt-0">
              {links.map((l, i) => (
                <div key={l.label} className="overflow-hidden py-2 pr-12">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center group font-display text-4xl sm:text-5xl lg:text-6xl font-light text-linen/90 hover:text-sage transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-y-0 opacity-100' : 'translate-y-[50%] opacity-0'}`}
                    style={{ transitionDelay: `${open ? i * 75 + 300 : (links.length - i - 1) * 50}ms` }}
                  >
                    <span className="relative">
                      {l.label}
                    </span>

                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 ml-4 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
