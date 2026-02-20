"use client";

import { useEffect, useRef } from "react";

import Link from "next/link";
import FooterTelegramStrip from "./FooterTelegramStrip";

export default function Footer() {
  return (
    <footer className="bg-black w-full pt-12">
      <div className="mx-4 md:mx-4 lg:mx-12 flex flex-col items-start text-left">
        {/* Заголовок */}
        <h3 className="heading mb-10 text-light">
          Связаться с нами:
        </h3>

        {/* Контактная информация */}
        <div className="flex flex-col items-start space-y-1 mb-8">
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
           <Link className="pt-8 text-light/60 hover:text-light transition-colors text-md md:text-xl underline underline-offset-2 cursor-pointer" href="/privacy"> 
          Политика конфиденциальности
        </Link>
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
<div className="flex flex-col md:flex-row justify-between items-start mt-24 py-4 px-4 md:px-4 lg:px-12 border-light/40">
  <div className="flex flex-row flex-wrap gap-2 text-micro text-light/60">
    <p className="">© 2026 Индивидуальный предприниматель Алексеев Константин Юрьевич</p>
    <p className="hidden md:block"> | </p>
    <p className="">ИНН: 332710259344</p>
     <p className=""> | </p>
    <p className="">ОГРНИП: 325330000063900</p>
</div>



   
</div>



        
      
     
    </footer>
  );
}