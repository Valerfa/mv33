"use client";

import { useState } from "react";
import Image from "next/image";
import ContactPopup from "./ContactPopup";

function formatPhone(raw: string) {
  const d = raw.replace(/\D/g, "");
  let digits = d;

  if (digits.startsWith("8")) digits = "7" + digits.slice(1);

  const dd = digits.slice(0, 11);
  const p1 = dd.slice(1, 4);
  const p2 = dd.slice(4, 7);
  const p3 = dd.slice(7, 9);
  const p4 = dd.slice(9, 11);

  let out = "+7";
  if (p1) out += ` (${p1}`;
  if (p1.length === 3) out += `)`;
  if (p2) out += ` ${p2}`;
  if (p3) out += `-${p3}`;
  if (p4) out += `-${p4}`;

  return out;
}

export default function Hero() {
  const [contactOpen, setContactOpen] = useState(false);
  const [phone, setPhone] = useState("");

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(e.target.value));
  }

  return (
    <>
      <section className="relative min-h-screen max-h-screen bg-[#131313] w-full rounded-b-xl overflow-hidden">
        {/* Фолбэк на изображение если видео не загрузится */}
        <Image
          src="/images/vladimir.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />

        {/* Оверлей для читаемости */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Хедер ВНУТРИ Hero */}
        <header className="relative z-20 w-full">
          <nav className="flex items-center justify-between h-16 p-4 md:p-8 lg:p-12">
            {/* ЛОГО */}
            <a href="/" className="flex items-center">
              <Image
                src="/icons/logo.svg"
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

              <button className="hidden h-12 px-4 md:px-6 rounded-xl bg-white/90 backdrop-blur-sm text-black text-sm font-medium hover:bg-white transition">
                Заказать
              </button>
            </div>
          </nav>
        </header>

        {/* Основной контент - используем flex для точного контроля */}
        <div className="relative z-10 w-full h-[calc(100vh-4rem)] flex flex-col justify-between">
          
          {/* Верхняя часть - заголовки */}
          <div className="flex-1 flex flex-col justify-end mx-4 md:mx-4 lg:mx-12 pb-4 md:pb-8">
            <p className="title-hero text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[140px] 3xl:text-[200px] text-light leading-[0.85]">
              Безопасные поездки
            </p>
            <p className="title-hero text-6xl md:text-7xl lg:text-8xl xl:text-[100px] 2xl:text-[140px] 3xl:text-[200px] text-accent leading-[0.85]">
              с трезвым водителем
            </p>
            
            {/* Бейдж "Работаем 24 часа" - только на десктопе */}
            <div className="mt-4 md:mt-6 lg:mt-8">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm text-accent bg-accent/20">
                Работаем 24 часа в сутки
              </span>
            </div>
          </div>

          {/* Нижняя часть - контент */}
          <div className="border-t-2 border-white/20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[30vh]">
              
              {/* Левая колонка */}
              <div className="h-full md:border-r-2 border-white/20">
                <div className="h-full mx-4 md:mx-4 lg:mx-12 flex flex-col justify-center">
                  <p className="caption text-white/30 mb-4 md:mb-6">О сервисе</p>
                  <p className="text-md md:text-lg xl:text-2xl text-white font-light leading-relaxed">
                    Мы помогаем быть вовремя в нужном месте. Независимо от
                    обстоятельств. Мы сделаем вашу поездку комфортной и
                    безопасной.
                  </p>
                </div>
              </div>
              
              {/* Правая колонка */}
              <div className="h-full">
                <div className="h-full mx-4 md:mx-8 lg:mr-12 xl:mr-16 2xl:mr-24 flex flex-col justify-center py-4 md:py-8">
                  
                  {/* Кнопка "Позвонить" для мобильных */}
                  <div className="md:hidden mb-6">
                    <a
                      href="tel:+79203669096"
                      className="block w-full px-8 py-4 rounded-xl bg-accent body-text text-light hover:opacity-90 transition h-16 flex items-center justify-center"
                    >
                      Позвонить
                    </a>
                  </div>
                  
                  {/* Форма для десктопа */}
                  <div className="hidden md:block">
                    <p className="caption text-white/30 mb-4">Заказ услуги</p>
                    <div className="w-full 2xl:w-3/4 h-16 bg-white rounded-xl py-1 pl-4 md:pl-6 pr-1 flex justify-between">
                      <input
                        inputMode="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+7 (000) 000-00-00"
                        className="min-w-0 flex-1 h-full text-lg xl:text-2xl text-black bg-transparent outline-none font-normal"
                      />
                      <button
                        onClick={() => setContactOpen(true)}
                        className="h-full px-4 md:px-6 rounded-xl bg-black text-white text-xs md:text-sm lg:text-md xl:text-xl flex items-center justify-center hover:bg-accent hover:text-black transition leading-none md:whitespace-nowrap"
                      >
                        Заказать звонок
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactPopup
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        initialPhone={phone}
      />
    </>
  );
}