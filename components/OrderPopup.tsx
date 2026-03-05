"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  initialPhone?: string;
};

function normalizePhone(raw: string) {
  // оставляем только цифры
  const digits = raw.replace(/\D/g, "");
  // для РФ: допускаем +7XXXXXXXXXX или 8XXXXXXXXXX
  if (digits.length === 11 && (digits.startsWith("7") || digits.startsWith("8"))) return digits;
  if (digits.length === 10) return "7" + digits; // если ввели без кода
  return digits;
}

function formatPhone(digits: string) {
  if (!digits) return "";

  const d = digits.slice(0, 11);

  if (d === "7") return "+7";

  const p1 = d.slice(1, 4);
  const p2 = d.slice(4, 7);
  const p3 = d.slice(7, 9);
  const p4 = d.slice(9, 11);

  let result = "+7";

  if (p1) result += ` (${p1})`;
  if (p2) result += ` ${p2}`;
  if (p3) result += `-${p3}`;
  if (p4) result += `-${p4}`;

  return result;
}

export default function OrderPopup({ open, onClose, initialPhone }: Props) {
  const [name, setName] = useState("");
const [phoneInput, setPhoneInput] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [consentOferta, setConsentOferta] = useState(false);
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open && initialPhone) {
      setPhoneInput(normalizePhone(initialPhone));
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, initialPhone, onClose]);

  const normalizedPhone = useMemo(() => normalizePhone(phoneInput), [phoneInput]);

  const phoneIsValid = useMemo(() => {
    return normalizedPhone.length === 11 && normalizedPhone.startsWith("7");
  }, [normalizedPhone]);

  const nameIsValid = name.trim().length > 0;
  const departureIsValid = departure.trim().length > 0;
  const arrivalIsValid = arrival.trim().length > 0;

  const canSubmit = useMemo(() => {
    return (
      phoneIsValid &&
      nameIsValid &&
      departureIsValid &&
      arrivalIsValid &&
      consentOferta &&
      consentPrivacy
    );
  }, [
    phoneIsValid,
    nameIsValid,
    departureIsValid,
    arrivalIsValid,
    consentOferta,
    consentPrivacy,
  ]);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
  let raw = e.target.value;

  let digits = raw.replace(/\D/g, "");

  if (!digits) {
    setPhoneInput("");
    return;
  }

  // если начали с 9 → добавляем 7
  if (digits.startsWith("9")) {
    digits = "7" + digits;
  }

  // если начали с 8 → меняем на 7
  if (digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  }

  // если первая цифра не 7 → добавляем 7
  if (!digits.startsWith("7")) {
    digits = "7" + digits;
  }

  setPhoneInput(digits.slice(0, 11));
}

  async function handleSubmit() {
    if (!canSubmit) return;

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "driver_order",
        name,
        phone: phoneInput,
        departure,
        arrival,
        comment,
      }),
    });

    setSubmitted(true);
  }

  if (!open) return null;

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key !== "Backspace") return;

  const input = e.currentTarget;
  const cursor = input.selectionStart ?? 0;
  const value = formatPhone(phoneInput);

  if (value[cursor - 1] === ")") {
    e.preventDefault();
    setPhoneInput(phoneInput.slice(0, -1));
  }
}

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center" role="dialog" aria-modal="true">
      <button
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      <div className="relative z-[2001] w-[min(540px,92vw)] bg-whitesoft rounded-2xl shadow-2xl p-4 md:p-6 pt-6 md:pt-12">
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-4 top-4 h-10 w-10 rounded-xl text-black hover:bg-black hover:text-light transition flex items-center justify-center"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="heading text-center text-black">
              Заказ водителя
            </h2>

            <div className="mt-4 lg:mt-6 space-y-3 text-black">

              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="w-full h-16 rounded-xl border border-black/20 px-6 text-lg lg:text-xl outline-none focus:border-black"
              />

              <div className="w-full h-16 rounded-xl border border-black/20 px-6 flex items-center gap-3 focus-within:border-black">
                <span className="text-lg lg:text-xl">🇷🇺</span>
                <input
  inputMode="tel"
  value={formatPhone(phoneInput)}
  onChange={handlePhoneChange}
  onKeyDown={handlePhoneKeyDown}
  placeholder="+7 (000) 000-00-00"
  className="w-full h-full text-lg lg:text-xl outline-none"
/>
              </div>

              <input
                required
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                placeholder="Пункт отправления"
                className="w-full h-16 rounded-xl border border-black/20 px-6 text-lg lg:text-xl outline-none focus:border-black"
              />

              <input
                required
                value={arrival}
                onChange={(e) => setArrival(e.target.value)}
                placeholder="Пункт прибытия"
                className="w-full h-16 rounded-xl border border-black/20 px-6 text-lg lg:text-xl outline-none focus:border-black"
              />

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Комментарий (необязательно)"
                rows={3}
                className="w-full rounded-xl border border-black/20 px-6 py-4 text-base lg:text-lg outline-none resize-none focus:border-black"
              />

              {/* Чекбокс оферты */}
              <label className="mt-4 flex items-center shrink-0 gap-4 text-xs">
                <input
                  type="checkbox"
                  checked={consentOferta}
                  onChange={(e) => setConsentOferta(e.target.checked)}
                  className="flex-none h-6 w-6 accent-black"
                />
                <span className="leading-snug">
                  Я принимаю условия{" "}
                  <Link
                    href="/oferta?popup=order"
                    className="text-orange underline underline-offset-2 hover:text-orange/70"
                    onClick={onClose}
                  >
                    Договора публичной оферты
                  </Link>
                </span>
              </label>

              {/* Чекбокс политики */}
              <label className="flex items-center shrink-0 gap-4 text-xs">
                <input
                  type="checkbox"
                  checked={consentPrivacy}
                  onChange={(e) => setConsentPrivacy(e.target.checked)}
                  className="flex-none h-6 w-6 accent-black"
                />
                <span className="leading-snug">
                  Я даю согласие на обработку персональных данных в соответствии с{" "}
                  <Link
                    href="/privacy?popup=order"
                    className="text-orange underline underline-offset-2 hover:text-orange/70"
                    onClick={onClose}
                  >
                    Политикой конфиденциальности
                  </Link>
                </span>
              </label>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={[
                  "mt-6 w-full h-16 rounded-xl font-medium text-lg transition",
                  canSubmit
                    ? "bg-black text-light hover:opacity-90"
                    : "bg-black/20 text-black/40 cursor-not-allowed",
                ].join(" ")}
              >
                Заказать
              </button>

            </div>
          </>
        ) : (
          <div className="py-8 px-4 text-center flex flex-col items-center gap-2">
            <img
              src="/icons/check-icon.svg"
              alt="Успешно"
              className="w-24 h-24"
            />
            <p className="heading leading-snug mt-8">
              Заявка принята
            </p>
            <p className="text-lg lg:text-xl font-normal leading-snug mt-4">
              В ближайшее время мы свяжемся с Вами для подтверждения заказа.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}