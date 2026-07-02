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
        heading="The view"
        body="Nestled on a tranquil hillside in Rabac, our villas seamlessly blend with nature, providing breathtaking views of the lush forests and the sparkling turquoise waters as well as islands of the Adriatic Sea, including Lošinj, Cres, and Unije. Each villa comes complete with its own private pool and terrace, offering the ideal spot to soak up the sun and take in the magnificent views. Enjoy the perfect combination of luxury, serenity, and natural beauty."
        image="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=900&auto=format&fit=crop"
        imageAlt="Private terrace with sun loungers overlooking the turquoise Adriatic"
        align="left"
      />

      <ContentBlock
        heading="Wellness for body and soul"
        body="We offer a range of amenities to ensure your stay is as comfortable and enjoyable as possible. Take a dip in your private swimming pool, unwind in the sauna, stay active in our gym, or curl up with a good book in our cozy library. With something for everyone, our villas provide the perfect balance of relaxation and recreation."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=900&auto=format&fit=crop"
        imageAlt="Aerial view of a swimming pool with three white loungers"
        align="left"
      />

      <ContentBlock
        heading="Aromatic garden"
        body="We take great pride in our commitment to sustainability and self-sufficiency. Our aromatic garden offers an array of herbs and plants which we incorporate into our range of home products. You are welcome to explore the garden and learn about the different herbs and their uses, as well as participate in workshops."
        image="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=900&auto=format&fit=crop"
        imageAlt="Green Tree branded oil bottle resting on fresh rosemary"
        align="right"
        compact
      />

      <ContentBlock
        heading="Wine and dine"
        body="At Green Tree Villas we understand that part of the joy of vacation is exploring new tastes and culinary experiences. That's why we offer our guests the opportunity to showcase their cooking skills with our outdoor barbecue area. Pick up fresh ingredients from local markets and enjoy a delicious meal in the comfort of your own private garden."
        image="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop"
        imageAlt="Stone outdoor barbecue and dining table under a wooden pergola"
        align="left"
      />

      <MeetIstria />
      <StorySplit />
      <Footer />
    </main>
  );
}
