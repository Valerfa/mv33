// components/ContactPopup.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";


type Props = {
  open: boolean;
  onClose: () => void;
  initialPhone?: string;
};

type Messenger = "telegram" | "whatsapp" | "vk" | "";

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

export default function ContactPopup({ open, onClose, initialPhone }: Props) {
  const [name, setName] = useState("");
const [phoneInput, setPhoneInput] = useState("");
const [consent, setConsent] = useState(false);
const [comment, setComment] = useState("");
const [submitted, setSubmitted] = useState(false);
const [consentOferta, setConsentOferta] = useState(false);
const [consentPrivacy, setConsentPrivacy] = useState(false);

  // закрытие по Esc + блок скролла
  useEffect(() => {
  if (open && initialPhone) {
  setPhoneInput(normalizePhone(initialPhone));
}

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  window.addEventListener("keydown", onKeyDown);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", onKeyDown);
  };
}, [open, initialPhone, onClose]);

  const normalizedPhone = useMemo(() => normalizePhone(phoneInput), [phoneInput]);

  const phoneIsValid = useMemo(() => {
    // РФ номер: 11 цифр и начинается с 7
    return normalizedPhone.length === 11 && normalizedPhone.startsWith("7");
  }, [normalizedPhone]);

  // Кнопка активна, если:
  // 1) есть валидный телефон ИЛИ выбран мессенджер
  // 2) поставлено согласие
  const canSubmit = useMemo(() => {
  return (
    phoneIsValid &&
    consentOferta &&
    consentPrivacy
  );
}, [phoneIsValid, consentOferta, consentPrivacy]);

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
  const raw = e.target.value;

  // если пользователь всё удалил
  if (!raw) {
    setPhoneInput("");
    return;
  }

  let digits = raw.replace(/\D/g, "");

  // если начали с +
  if (raw.startsWith("+")) {
    digits = raw.slice(1).replace(/\D/g, "");
  }

  // если начали с 9 → делаем 79
  if (digits.startsWith("9")) {
    digits = "79" + digits.slice(1);
  }

  // если начали с 8 → меняем на 7
  if (digits.startsWith("8")) {
    digits = "7" + digits.slice(1);
  }

  // если есть цифры и первая не 7 → добавляем 7
  if (digits.length > 0 && !digits.startsWith("7")) {
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
      type: "contact", // 🔥 ВАЖНО
      name,
      phone: phoneInput,
      comment,
      consentOferta,
consentPrivacy,
    }),
  });

  setSubmitted(true);
}

function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.key !== "Backspace") return;

  const input = e.currentTarget;
  const cursor = input.selectionStart ?? 0;
  const value = formatPhone(phoneInput);

  // Если курсор стоит сразу после ')'
  if (value[cursor - 1] === ")") {
    e.preventDefault();

    // удаляем одну цифру из кода (позиции 1-3 после 7)
    const digits = phoneInput.slice(0, -1);
    setPhoneInput(digits);
  }
} 
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center" role="dialog" aria-modal="true">
      {/* overlay */}
      <button
        aria-label="Закрыть"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />

      {/* modal */}
      <div className="relative z-[2001] w-[min(540px,92vw)] bg-whitesoft rounded-2xl shadow-2xl p-4 md:p-6 pt-6 md:pt-12">
        {/* close X */}
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
      Укажите контактный номер телефона
    </h2>

    <div className="mt-4 lg:mt-6 space-y-3 text-black">
      {/* name */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ваше имя"
        className="w-full h-16 rounded-xl border border-black/20 px-6 text-lg lg:text-xl outline-none focus:border-black"
      />

      {/* phone */}
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

      {/* comment */}
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
                    href="/oferta?popup=contact"
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
                    href="/privacy?popup=contact"
                    className="text-orange underline underline-offset-2 hover:text-orange/70"
                    onClick={onClose}
                  >
                    Политикой конфиденциальности
                  </Link>
                </span>
              </label>

      {/* submit */}
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
        Заказать звонок
      </button>
    </div>
  </>
) : (


  <div className="py-8 px-4 text-center flex flex-col items-center gap-2">
  {/* success icon */}
  <img
  src="/icons/check-icon.svg"
  alt="Успешно"
  className="w-24 h-24"
/>
<p className="heading leading-snug mt-8">
    Заявка принята</p>
  <p className="text-lg lg:text-xl font-normal leading-snug mt-4">
    Мы перезвоним Вам в ближайшее время.</p>
   
</div>
)}
      </div>
    </div>
  );
}