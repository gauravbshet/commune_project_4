import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import SustainabilitySection from "@/components/SustainabilitySection";
import StatsSection from "@/components/StatsSection";
import VillasIntroTitle from "@/components/VillasIntroTitle";
import ContentBlock from "@/components/ContentBlock";
import MeetIstria from "@/components/MeetIstria";
import StorySplit from "@/components/StorySplit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ParallaxShowcase />
      <SustainabilitySection />
      <StatsSection />

      <VillasIntroTitle />

      <ContentBlock
        heading="The Wooden Cottage"
        body="Nestled on a private jungle island accessible only by a hanging bridge, our wooden cottages offer an intimate escape. Wake up to birdsong, misty mornings, and the gentle rustle of coffee leaves — all with modern comforts within reach."
        image="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=900&auto=format&fit=crop"
        imageAlt="Warm wooden cottage interior surrounded by lush jungle"
        align="left"
      />

      <ContentBlock
        heading="Pool & Play"
        body="Dive into our expansive swimming pool with a breathtaking backdrop of the Western Ghats. Splash around, soak in the sun, then wind down with indoor games — table tennis, carrom, Jenga — or gather around the bonfire under a sky full of stars."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=900&auto=format&fit=crop"
        imageAlt="Outdoor swimming pool with mountain views at a jungle resort"
        align="left"
      />

      <ContentBlock
        heading="Work from the Wild"
        body="Commune18 is your favourite co-working space — if your co-working space had birdsong, fresh coffee, and zero traffic. High-speed Wi-Fi, quiet corners, and a community of fellow nomads make workations here unlike anywhere else."
        image="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=900&auto=format&fit=crop"
        imageAlt="Open-air workspace with laptop in a peaceful jungle setting"
        align="right"
        compact
      />

      <ContentBlock
        heading="Taste of Chikmagalur"
        body="From freshly brewed estate coffee to hearty local Karnataka meals, our in-house dining brings the best of the region to your table. Savour breakfast on the lawn, high tea by the pool, or a late-night campfire snack beneath the stars."
        image="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
        imageAlt="Local Karnataka cuisine served on an outdoor dining table"
        align="left"
      />

      <MeetIstria />
      <StorySplit />
      <Footer />
    </main>
  );
}
