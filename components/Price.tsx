// components/ImpactPanels.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import ContactPopup from "./ContactPopup";


export default function Price() {
    const [contactOpen, setContactOpen] = useState(false);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 w-full flex flex-col md:flex-row gap-4">
      {/* Левая текстовая колонка */}
<div className="lg:w-[500px] flex flex-col justify-between lg:w-[500px] shrink-0 flex flex-col">
  
  <div className="h-full">
    
    {/* Подпись */}
    <div className="text-black flex items-center mb-2 md:mb-4">
      <p className="text-2xl">•</p>
      <p className="text-black text-sm font-medium">
        Тарифы
      </p>
    </div>

    {/* Заголовок */}
    <h2 className="text-black heading">
      Понятная система<br /> расчета тарифов
    </h2>
</div>
</div>
<div className="w-full">
    {/* Список тарифов */}
    <div className="flex flex-col gap-4 text-black">

      {/* По Владимиру */}
      <div className="bg-white p-4 border border-black rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-medium text-lg">
            По Владимиру
          </p>
          <p className="text-black/60 text-sm">
            Фиксированная стоимость поездки
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <p className="text-lg font-semibold whitespace-nowrap">
            2 500 ₽
          </p>
          <button
            className="group
    inline-center
    overflow-hidden
    rounded-xl
    bg-black text-white hover:bg-accent hover:text-black
    transition-all duration-300 ease-out
    h-16 md:h-12
    px-4 md:px-6"
            onClick={() => setContactOpen(true)}
          >
            Заказать
          </button>
        </div>
      </div>

      {/* За пределами Владимира */}
      <div className="w-full bg-white p-4 border border-black rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-medium text-lg">
            За пределами Владимира
          </p>
          <p className="text-black/60 text-sm">
            2 500 ₽ + 35 ₽ за километр
          </p>
        </div>
          <button
            className="group
    inline-center
    overflow-hidden
    rounded-xl
    bg-black text-white hover:bg-accent hover:text-black
    transition-all duration-300 ease-out
    h-16 md:h-12
    px-4 md:px-6"
            onClick={() => setContactOpen(true)}
          >
            Заказать
          </button>
      </div>

      {/* Московская область */}
      <div className="bg-white p-4 border border-black rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-medium text-lg">
            Московская область
          </p>
          <p className="text-black/60 text-sm">
            2 500 ₽ + 50 ₽ за километр
          </p>
        </div>

       
          <button
            className="group
    inline-center
    overflow-hidden
    rounded-xl
    bg-black text-white hover:bg-accent hover:text-black
    transition-all duration-300 ease-out
    h-16 md:h-12
    px-4 md:px-6"
            onClick={() => setContactOpen(true)}
          >
            Заказать
          </button>
        
      </div>

      {/* Ожидание */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-medium text-lg">
            * Ожидание
          </p>
          <p className="text-black/60 text-sm">
            35 ₽ за минуту
          </p>
        </div>

        
      </div>

    </div>

  </div>


<ContactPopup
  open={contactOpen}
  onClose={() => setContactOpen(false)}
/>

    </section>
  );
}