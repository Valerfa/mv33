"use client";

import { useRef } from "react";
import Image from "next/image";
import AvitoIcon from "@/public/icons/avito-black.svg"
import AvitoLogo from "@/public/icons/avito-logo.svg"
import Stars from "@/public/icons/stars.svg"
import StarsBlack from "@/public/icons/stars-black.svg"



const REVIEWS = [
  {
    id: 1,
    text: "Договорились быстро, все четко и по делу! Очень ответственный и отзывчивый человек, всем рекомендую, будем обращаться еще.",
    name: "Дарья",
    company: "Трезвый водитель · 26.04.2023",
    rating: 5,
  },
  {
    id: 2,
    text: "Константин очень доброжелательный человек, обращался к нему много раз, все было в лучшем виде, ставлю оценку 100+.",
    name: "Алик",
    company: "Трезвый водитель · 18.05.2022",
    rating: 5,
  },
  {
    id: 3,
    text: "Ребята молодцы, приехали быстро, на машине ездят профессионально и очень аккуратно, буду рекомендовать!",
    name: "Алексей",
    company: "Трезвый водитель · 31.07.2023",
    rating: 5,
  },
  {
    id: 4,
    text: "Быстро откликнулись на вызов. Оперативно перегнали авто в Москву. Все просто супер! Всем рекомендую!",
    name: "Марина",
    company: "Перегон автомобиля · 29.09.2023",
    rating: 5,
  },
];

export default function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollerRef.current) return;
    const amount = dir === "left" ? -360 : 360;
    scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="w-full py-12 overflow-hidden">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-0">
        
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="mx-4 md:ml-8 lg:ml-12 lg:w-[500px] shrink-0 flex flex-col mb-8 md:mb-0">
           <div className="flex items-center gap-2 text-black/70 mb-4">
             <Image src={Stars} alt="rating" className="h-4 w-auto"/>
              <span className="caption opacity-60">5.0 за услугу</span>
              <Image src={AvitoIcon} alt="Avito" className="h-5 w-auto"/>
            </div>
          <div className="flex items-end md:flex-col md:items-start justify-between">
            <div>
           

            <h2 className="heading text-black mb-6">
              <br />
              Нас выбирают <br/> за спокойствие <br/> и надёжность
            </h2>

           <a
  href="https://www.avito.ru/vladimir/predlozheniya_uslug/usluga_trezvyy_voditel_33_3099755999?context=H4sIAAAAAAAA_wE_AMD_YToyOntzOjEzOiJsb2NhbFByaW9yaXR5IjtiOjA7czoxOiJ4IjtzOjE2OiJ1TFNiczFBUzJVQ2FSbzc3Ijt9TubF_z8AAAA"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    inline-flex items-center
    overflow-hidden
    rounded-xl
    bg-black text-white hover:bg-black hover:text-white
    transition-all duration-300 ease-out
    h-16 md:h-12
    px-4 md:px-6
    hover:pr-4
  "
>
  {/* текст */}
  <span className="body-medium">
    Смотреть все отзывы
  </span>

  {/* логотип */}
  <span
    className="
      ml-0
      max-w-0
      opacity-0
      transition-all duration-300 ease-out
      group-hover:ml-3
      group-hover:max-w-[40px]
      group-hover:opacity-100
      flex items-center
    "
  >
    <Image
      src={AvitoLogo}
      alt="Avito"
      className="h-6 w-auto"
    />
  </span>
</a>
   </div>       

          {/* Стрелки */}
          <div className="flex gap-2 md:mt-12">
            <button
              onClick={() => scroll("left")}
              className="w-16 h-16 md:w-10 md:h-10 rounded-full bg-[#E9E5E5] text-black hover:bg-white/20 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-16 h-16 md:w-10 md:h-10 rounded-full bg-[#E9E5E5] text-black hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
          </div>

        </div>

        {/* КАРТОЧКИ */}
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4"
        >
          {REVIEWS.map((r) => (
            <div
              key={r.id}
              className="bg-[#E9E5E5] min-w-[360px] max-w-[360px] rounded-2xl p-6 flex flex-col justify-between"
            >
              {/* рейтинг */}
              <div className="mb-4">
                <Image src={StarsBlack} alt="rating" className="h-4 w-auto"/>
              </div>

              {/* текст */}
              <p className="text-black body-text mb-6">
                {r.text}
              </p>

              {/* автор */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-xl bg-accent text-black flex items-center justify-center">
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-black body-text">{r.name}</p>
                  <p className="text-black/50 caption">{r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}