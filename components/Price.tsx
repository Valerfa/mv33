// components/ImpactPanels.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import OrderPopup from "./OrderPopup";

interface PriceProps {
  onOpenOrder?: () => void;
}

export default function Price({ onOpenOrder }: PriceProps) {
    const [OrderOpen, setOrderOpen] = useState(false);

  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 w-full flex flex-col lg:flex-row gap-4">
      {/* Левая текстовая колонка */}
<div className="lg:w-[500px] flex flex-col justify-between lg:w-[500px] shrink-0 flex flex-col">
  
  <div className="h-full">
    
    {/* Подпись */}
   <div className="inline-flex items-center bg-black/5 text-black/30 rounded-md px-2 mb-2 md:mb-4">
        
      <p className="text-sm font-medium">
      Тарифы
      </p>
      </div>

    {/* Заголовок */}
    <h2 className="text-black heading">
      Прозрачная система<br /> расчета стоимости
    </h2>
</div>
</div>
<div className="w-full">
    {/* Список тарифов */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 text-black md:mt-10 p-4 rounded-xl bg-smoke">

      {/* По Владимиру */}
      <div className="bg-white p-4 border border-black rounded-xl flex flex-col lg:flex-row lg:items-center sm:justify-between gap-4">
        <div>
          <p className="font-medium text-lg">
            По Владимиру
          </p>
          <p className="text-black/60 text-sm">
            Фиксированная стоимость поездки
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-2">
          <p className="self-start rounded-full bg-accent/10 px-3 py-1 text-accent text-lg font-semibold whitespace-nowrap">
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
            onClick={() => onOpenOrder?.()}
          >
            Заказать
          </button>
        </div>
      </div>

      {/* За пределами Владимира */}
      <div className="w-full bg-white p-4 border border-black rounded-xl flex flex-col lg:flex-row lg:items-center sm:justify-between gap-4">
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
            onClick={() => onOpenOrder?.()}
          >
            Заказать
          </button>
      </div>

      {/* Московская область */}
      <div className="bg-white p-4 border border-black rounded-xl flex flex-col lg:flex-row lg:items-center sm:justify-between gap-4">
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
            onClick={() => onOpenOrder?.()}
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


<OrderPopup
  open={OrderOpen}
  onClose={() => setOrderOpen(false)}
/>

    </section>
  );
}