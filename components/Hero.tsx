"use client";

import { useState } from "react";
import Image from "next/image";
import ContactPopup from "./ContactPopup";
import Header from "./Header";

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
      <section className="relative h-screen bg-[#131313] w-full rounded-b-2xl overflow-hidden">
        {/* Фолбэк на изображение если видео не загрузится */}
        <Image
          src="/images/hero-5.webp"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center grayscale"
        />

        <div className="absolute inset-0 bg-black/60" />

<Header />
        {/* Основной контент - используем flex для точного контроля */}
        <div className="relative z-10 w-full h-full flex flex-col"> 
          {/* Верхняя часть - заголовки */}
          <div className="flex-1 flex flex-col justify-end mx-4 md:mx-8 lg:mx-12">
            <h1 className="title-hero text-white">
              Безопасные поездки
              <br />
              <span className="text-accent">с трезвым водителем</span>
            </h1>
            
            
            {/* Бейдж "Работаем 24 часа" - только на десктопе */}
            <div className="mt-4 md:mt-6 lg:mt-8">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-xs md:text-sm text-accent bg-accent/20">
                Работаем 24 часа в сутки
              </span>
            </div>
          </div>

          {/* Нижняя часть - контент */}
          <div className="border-t-2 border-white/10 w-full mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Левая колонка */}
              <div className="h-full md:border-r-2 border-white/10">
                <div className="h-full mx-4 md:mx-4 lg:mx-12 flex flex-col justify-between">
                  <p className="caption text-white/30 py-4 md:py-6">О сервисе</p>
                  <p className="hero-subscription mb-4 md:mb-6 text-white font-light leading-relaxed">
                    Мы помогаем быть вовремя в нужном месте. Независимо от
                    обстоятельств. Мы сделаем вашу поездку комфортной и
                    безопасной.
                  </p>
                </div>
              </div>
              {/* Кнопка "Позвонить" для мобильных */}
                  <div className="md:hidden mx-4 mb-4">
                    <a
                      href="tel:+79203669096"
                      className="block w-full px-8 py-4 rounded-xl bg-accent hero-subscription text-light hover:opacity-90 transition h-16 flex items-center justify-center"
                    >
                      Позвонить
                    </a>
                  </div>
              {/* Правая колонка */}
         
                <div className="h-full mx-4 md:mx-8 lg:mr-12 xl:mr-16 2xl:mr-24 p">
                  
                  
                  
                  {/* Форма для десктопа */}
                  <div className="h-full hidden md:flex flex-col justify-between">
                    <div><p className="caption text-white/30 pt-4 md:pt-6">Заказ услуги</p></div>
                    <div className="mb-4 md:mb-6 w-full 2xl:w-3/4 h-16 bg-white rounded-xl py-1 pl-4 md:pl-6 pr-1 flex justify-between">
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
      </section>

      <ContactPopup
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        initialPhone={phone}
      />
    </>
  );
}