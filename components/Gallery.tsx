"use client";

import Image from "next/image";

export default function TeamBlock() {
  return (
    <section className="relative w-full p-4 md:p-8 lg:p-12 flex flex-col">
      {/* 1. Заголовок секции */}
      <div className="flex items-center mb-4">
        <span className="text-2xl text-black">•</span>
        <p className="text-black text-sm font-medium">Как мы работаем</p>
      </div>

      {/* 2. Основной заголовок */}
      <h2 className="heading text-black mb-8 max-w-2xl">
        Предоставляем удобный <br/> и понятный сервис
      </h2>

    
     {/* 4. Шаги работы */}
<div className="max-w-4xl mb-4">
  <div className="flex flex-col md:flex-row items-center md:items-center justify-start md:justify-between gap-2 rounded-xl">

    <div className="body-text text-black text-center md:text-left">
      Вы звоните нам
    </div>

    <div className="text-black text-xl">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>

    <div className="body-text text-black text-center md:text-left">
      Согласовываем маршрут
    </div>

    <div className="text-black text-xl">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>

    <div className="body-text text-black text-center md:text-left">
      Назначаем встречу
    </div>

    <div className="text-black text-xl">
      <span className="md:hidden">↓</span>
      <span className="hidden md:inline">→</span>
    </div>

    <div className="body-text text-black text-center md:text-left">
      Вы полагаетесь на нас
    </div>

  </div>
</div>
      {/* 3. Видео */}
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