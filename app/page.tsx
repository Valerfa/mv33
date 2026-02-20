import About from "@/components/About";
import Hero from "../components/Hero";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ImpactPanels from "@/components/ImpactPanels";
  
export default function HomePage() {
  return (
    <>
      <Hero />
      <Gallery/>
      <ImpactPanels/>
      <Reviews/>
      <Footer/>
    </>
  );
}