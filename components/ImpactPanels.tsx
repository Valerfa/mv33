// components/ImpactPanels.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const PANELS = [
  {
    id: 1,
    title: "5 лет",
    subtitle: "существует наш сервис. Мы имеем опыт, а значит, знаем, как качественно выполнить заказ.",
    color: "bg-accent",
    image: "/images/panel-1.jpg",
  },
  {
    id: 2,
    title: "2000+ заказов",
    subtitle: "мы уже выполнили. У нас регулярно заказывают услуги водителей и перегона автомобилей.",
    color: "bg-accent2",
    image: "/images/panel-2.jpg",
  },
  {
    id: 3,
    title: "50+ клиентов",
    subtitle: "обращались к нам 2 и более раз. Мы вызываем доверие и обретаем постоянных клиентов.",
    color: "bg-[#003262]",
    image: "/images/panel-3.jpg",
  },
  {
    id: 4,
    title: "40+ водителей",
    subtitle: "работает с нами. У нас всегда есть свободные сотрудники, поэтому мы быстро реагируем на заказ.",
    color: "bg-black",
    image: "/images/panel-4.jpg",
  },
];

export default function ImpactPanels() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="p-4 md:p-8 lg:p-12 w-full flex flex-col gap-4">
      {/* Левая текстовая колонка */}
      <div className="lg:w-[500px] flex flex-col justify-between">
        <div className="h-full mb-4">
  <div className="text-black flex items-center mb-2 md:mb-4">
        <p className="text-2xl">
        •
      </p>
      <p className="text-black text-sm font-medium">
      О нас
      </p>
      </div>
          <h2 className="text-black heading">
 Результаты <br/> в цифрах  
          </h2>
          
        </div>

        
      </div>

      {/* Панели */}
      {/* Карточки */}
<div className="flex-1 flex flex-col md:flex-row gap-4">
  {PANELS.map((panel) => (
    <div
    key={panel.id} 
      className="
        relative
        w-full
        h-56 lg:h-[500px]
        rounded-2xl
        overflow-hidden
        group
      "
    >
      {/* Фон */}
      <div className={`absolute inset-0 ${panel.color}`} />

      {/* Фото */}
      <Image
        src={panel.image}
        alt=""
        fill
        className="
          object-cover
          transition-opacity duration-500
          opacity-100
        "
      />

      {/* Затемнение */}
      <div className="absolute inset-0 bg-black/50" />


      {/* Контент */}
      <div className="relative z-10 h-full flex items-end p-4 md:p-8">
        <div className="max-w-[320px] text-white">
          <p className="heading text-5xl">{panel.title}</p>
          <p className="mt-2 body-text">
            {panel.subtitle}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}