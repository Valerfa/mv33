"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import PopupController from "@/components/PopupController";
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

  const [contactOpen, setContactOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
    <Suspense fallback={null}>
  <PopupController
    openOrder={() => setOrderOpen(true)}
    openContact={() => setContactOpen(true)}
  />
</Suspense>
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