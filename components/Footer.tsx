"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-12 pb-4 md:pb-8 lg:pb-12">
      <div className="flex flex-col md:flex-row gap-4 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col items-start text-left w-full md:w-1/2 lg:w-3/4">
        {/* Заголовок */}
        <h3 className="heading mb-10 text-light">
          Связаться с нами:
        </h3>

        {/* Контактная информация */}
        <div className="flex flex-col items-start space-y-1">
          <a 
            href="tel:+79203669096" 
            className="text-light/90 hover:text-light transition-colors text-xl md:text-2xl"
          >
            +7 (920) 366-90-96
          </a>
          <a 
            href="mailto:gramzo33rus@gmail.com" 
            className="text-light/90 hover:text-light transition-colors text-xl md:text-2xl"
          >
            gramzo33rus@gmail.com
          </a>
          
        </div>

        {/* Социальные иконки */}
        <div className="py-8 flex items-center space-x-6">
          <a 
            href="https://www.instagram.com/myvoditel33"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110"
            title="Перейти в Instagram"
          >
            <img 
              src="/icons/instagram-v2.svg" 
              alt="Instagram"
              className="w-12 h-12 md:w-10 md:h-10"
              
            />
          </a>

          <a 
            href="https://t.me/Gramzo33"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110"
            title="Перейти в Telegram"
          >
            <img 
              src="/icons/telegram-v2.svg" 
              alt="Telegram"
              className="w-12 h-12 md:w-10 md:h-10"
              />
          </a>

          <a 
            href="https://vk.com/moyvoditel33"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-200 hover:scale-110"
            title="Перейти на страницу ВК"
          >
            <img 
              src="/icons/vk-v2.svg" 
              alt="VK"
              className="w-12 h-12 md:w-10 md:h-10"
              />
          </a>
        </div>
        </div>
<div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
   <div className="flex flex-col text-light/60 bg-[#151719] p-3 md:p-4 rounded-2xl h-48">
    
    <div>
      <p className="text-md text-white/70 font-medium">
        Правовая информация
      </p>

      <Link
        className="mt-4 block text-micro underline underline-offset-2 hover:text-light"
        href="/privacy"
      >
        Политика конфиденциальности
      </Link>

      <Link
        className="mt-4 block text-micro underline underline-offset-2 hover:text-light"
        href="/oferta"
      >
        Договор оферты
      </Link>
    </div>

    {/* ↓ прижимается вниз */}
    <div className="mt-auto flex flex-col gap-1">
      <p className="text-micro">
        © 2026 Индивидуальный предприниматель Алексеев Константин Юрьевич
      </p>
      <p className="text-micro">ИНН: 332710259344</p>
      <p className="text-micro">ОГРНИП: 325330000063900</p>
    </div>

  </div>
  <div className="bg-[#151719] p-3 md:p-4 rounded-xl flex-none">
  <a
    href="https://t.me/fatykhova_va"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 group"
  >
    <img
      src="/icons/telegram-small.svg"
      alt="Telegram"
      className="w-4 h-4"
    />

    {/* SLOT EFFECT */}
    <div className="relative h-5 overflow-hidden">
      <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-1/2">
        <span className="text-xs h-5 text-light">
          Разработка сайта: @fatykhova_va
        </span>
        <span className="text-xs h-4 text-light">
          Разработка сайта: @fatykhova_va
        </span>
      </div>
    </div>
  </a>
</div>
</div>
</div>
    </footer>
  );
}