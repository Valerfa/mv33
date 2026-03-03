"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-12 pb-4 md:pb-8 lg:pb-12 px-4 md:px-4 lg:px-12">
      <div className="grid grid-col md:grid-cols-4 gap-4">
      <div className="flex flex-col items-start text-left">
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
        <div className="pt-4 flex items-center space-x-6">
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
<div className="p-4 bg-[#151719] rounded-2xl w-full md:col-start-4 h-40">
  <div className="flex flex-col h-full text-light/60">
    
    <div>
      <p className="text-sm text-white font-medium">
        Правовая информация
      </p>

      <Link
        className="mt-2 block text-micro underline underline-offset-2 hover:text-light"
        href="/privacy"
      >
        Политика конфиденциальности
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
</div>
</div>
    </footer>
  );
}