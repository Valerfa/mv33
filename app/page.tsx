"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Media from "../components/Media";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import Advantage from "@/components/Advantage";
import Price from "@/components/Price";
import OrderPopup from "@/components/OrderPopup";
import ContactPopup from "@/components/ContactPopup";

export default function HomePage() {
  const searchParams = useSearchParams();
  const popupType = searchParams.get("popup");

  const [contactOpen, setContactOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
  if (popupType === "order") {
    setOrderOpen(true);
  }

  if (popupType === "contact") {
    setContactOpen(true);
  }
}, [popupType]);

  return (
    <>
      <Header onOpenOrder={() => setOrderOpen(true)} />
      <Hero onOpenContact={() => setContactOpen(true)} />
      <Media />
      <Price onOpenOrder={() => setOrderOpen(true)} />
      <Advantage />
      <Reviews />
      <Footer />

      <OrderPopup
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
      />

      <ContactPopup
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}