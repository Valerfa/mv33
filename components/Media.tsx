"use client";

import Image from "next/image";

export default function Media() {
  return (
    <section className="px-4 md:px-8 lg:px-12 pt-16 pb-8 flex flex-col">
      {/* 1. Заголовок секции */}
      <div className="flex items-center  mb-2 md:mb-4">
        <span className="text-2xl text-black">•</span>
        <p className="text-black text-sm font-medium">Как мы работаем</p>
      </div>

      {/* 2. Основной заголовок */}
      <h2 className="heading text-black mb-8 max-w-2xl">
        Предоставляем удобный <br/> и понятный сервис
      </h2>

<div className="block max-w-4xl mb-4 border-l-[2px] border-black">
  <div className="flex flex-col gap-4">
<div className="left-0 -ml-[6px] flex items-start gap-2">
  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
    <p className="body-text text-black text-center md:text-left -mt-1">
      Вы звоните нам
    </p>
    </div>
    <div className="left-0 -ml-[6px] flex items-center gap-2">
  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
    <p className="body-text text-black text-center md:text-left">
      Согласовываем маршрут
    </p>
    </div>
    <div className="left-0 -ml-[6px] flex items-center gap-2">
  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
    <p className="body-text text-black text-center md:text-left">
      Назначаем встречу
    </p>
    </div>
    <div className="left-0 -ml-[6px] flex items-end gap-2">
  <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
    <p className="body-text text-black text-center md:text-left -mb-1">
      Вы полагаетесь на нас
    </p>
    </div>

  </div>
</div>


      {/* Видео */}
      <div className="relative w-full h-64 md:h-96 lg:h-[600px] mb-2">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        >
          <source src="/images/hero-video2.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}