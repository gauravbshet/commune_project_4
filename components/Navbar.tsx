"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Our Stays", href: "#stays" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#footer" },
  { label: "Explore Chikmagalur", href: "#chikmagalur" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 right-4 sm:right-6 z-50">
        <div className="flex items-center gap-0 bg-white/95 backdrop-blur rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden">
          <a
            href="#hero"
            className="hidden sm:block px-5 py-4 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10"
          >
            CHECK RATES
          </a>
          <a
            href="#footer"
            className="hidden sm:block px-5 py-4 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10"
          >
            CONTACT
          </a>
          <button className="hidden sm:block px-4 py-4 text-[11px] tracking-[0.15em] font-body font-medium text-ink/60 hover:text-sage-dark transition-colors border-r border-ink/10">
            EN
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="px-5 py-4 flex flex-col gap-[5px] items-end group"
          >
            <span className="block w-6 h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-colors" />
            <span className="block w-6 h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-colors" />
            <span className="block w-4 h-[1.5px] bg-ink/70 group-hover:bg-sage-dark transition-colors" />
          </button>
        </div>
      </nav>

      {/* Full menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-bark text-linen transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 sm:top-8 sm:right-10 text-3xl font-display font-light"
        >
          &times;
        </button>
        <div className="h-full flex flex-col items-center justify-center gap-5">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl sm:text-6xl font-light hover:text-sage transition-colors"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
