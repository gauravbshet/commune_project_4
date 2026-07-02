import type { Metadata } from "next";
import { Fraunces, Caveat, Jost } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Green Tree Villas | Luxury & Sustainable Villas in Istria",
  description:
    "Experience luxury and sustainability in harmony. Secluded hilltop villas overlooking the Adriatic in Rabac, Istria.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveat.variable} ${jost.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
