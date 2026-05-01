"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/icons/logo.svg";
import OrderPopup from "./OrderPopup";
import CallButton from "./CallButton";

interface HeaderProps {
  onOpenOrder?: () => void;
}

export default function Header({ onOpenOrder }: HeaderProps) {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50">
        <nav className="relative flex items-center h-20 px-4 md:px-8 pt-4">

          {/* 📱 MOBILE — логотип слева */}
          <div className="md:hidden">
            <a href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Логотип"
                width={56}
                height={56}
                priority
              />
            </a>
          </div>

          {/* 💻 DESKTOP — текст слева */}
          <div className="hidden md:block text-white text-sm font-medium uppercase whitespace-nowrap">
            Мой водитель 33
          </div>

          {/* 💻 DESKTOP — логотип по центру */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <a href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Логотип"
                width={56}
                height={56}
                priority
              />
            </a>
          </div>

          {/* СКРЫТАЯ кнопка */}
          <div className="hidden ml-auto">
            <button
              onClick={() => onOpenOrder?.()}
              className="
                flex
                items-center justify-center
                h-12
                px-5
                rounded-xl
                bg-accent
                text-black
                text-sm
                font-medium
                hover:bg-black
                hover:text-white
                transition
              "
            >
              Вызвать водителя
            </button>
          </div>

          <div className="hidden md:block ml-auto">
            <CallButton/>
          </div>

        </nav>
      </header>

      <OrderPopup
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
      />
    </>
  );
}