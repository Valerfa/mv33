import Hero from "../components/Hero";
import Media from "../components/Media";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Advantage from "@/components/Advantage";
import Price from "@/components/Price";
  
export default function HomePage() {
  return (
    <>
      <Hero />
      <Media/>
      <Price/>
      <Advantage/>
      <Reviews/>
      <Footer/>
    </>
  );
}