"use client";

import Image from "next/image";
import Logo from "@/public/icons/logo.svg";

export default function Header() {
  return (
    <header className="relative z-50 w-full bg-transparent">
      <nav className="flex items-center justify-between h-16 px-4">
        {/* ЛОГО */}
        <a href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Логотип"
            width={36}
            height={36}
            priority
          />
        </a>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+79203669096"
            className="text-white body-text transition hover:text-accent/80"
          >
            +7 (920) 366-90-96
          </a>

          <button
            className="
              hidden
              h-12
              px-4 md:px-6
              rounded-xl
              bg-white/90 backdrop-blur-sm
              text-black
              text-sm
              font-medium
              hover:bg-white
              transition
            "
          >
            Заказать
          </button>
        </div>
      </nav>
    </header>
  );
}