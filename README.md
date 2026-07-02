# Green Tree Villas

A Next.js (App Router) recreation of the greentree.hr one-page site: hero with
booking widget, sustainability + live "energy produced" stats, a villa
amenities scrollthrough (view / wellness / aromatic garden / wine & dine),
a Meet Istria section, a story/villas split navigator, and a footer with
newsletter sign-up.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom sage / cream / bark token palette in `tailwind.config.js`)
- `next/font/google`: Fraunces (display serif), Caveat (script accent), Jost (body)
- Scroll-reveal via a small `IntersectionObserver` client component (`components/Reveal.tsx`)
- Live clock widget (`components/LiveClock.tsx`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: this environment's sandbox blocks `fonts.googleapis.com`, so a
> production build couldn't fetch webfonts here — on your machine (with
> normal internet access) `npm run build` / `npm run dev` will pull the
> fonts automatically the first time.

## Structure

```
app/
  layout.tsx      – fonts + metadata
  page.tsx         – assembles all sections in order
  globals.css       – base styles, reveal animation, dashed divider utility
components/
  Navbar.tsx         – fixed pill nav + full-screen menu overlay
  Hero.tsx           – full-bleed hero + booking bar
  BookingBar.tsx      – check-in/out/discount rate widget (reused)
  Welcome.tsx         – "green serenity" intro split
  CottageTeaser.tsx    – "view details" CTA + full-bleed image
  AliveSection.tsx      – "go where you feel most alive" + solar stat
  SustainabilitySection.tsx – sustainability copy + live clock
  StatsSection.tsx        – 1200m / 6000m² / 3 villas stat row
  VillasIntroTitle.tsx      – "experience our villas" title
  ContentBlock.tsx           – reusable text+image block (view/wellness/garden/dine)
  MeetIstria.tsx               – Istria intro + 3-tile image grid
  StorySplit.tsx                 – story vs villas split navigator
  Footer.tsx                      – nav links, contact, newsletter
  TreeMark.tsx                     – logo mark (inline SVG)
  Reveal.tsx                        – scroll-reveal wrapper
```

## Notes / next steps

- Images are placeholder stock photography from Unsplash (`images.unsplash.com`,
  allow-listed in `next.config.js`) standing in for the original site's
  photography — swap in your own villa photography via the `src` props.
- The booking bar's date inputs and the newsletter form are presentational;
  wire them up to your booking engine / ESP of choice.
- Colors, type scale and spacing live in `tailwind.config.js` /
  `app/globals.css` — tweak the `sage`, `cream`, `bark`, `ink` tokens to
  match brand refinements.
