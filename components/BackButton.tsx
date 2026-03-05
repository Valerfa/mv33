"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const popupType = searchParams.get("popup") || "order";
  // если параметр есть — берём его
  // если нет — по умолчанию order

  return (
    <button
      onClick={() => router.push(`/?popup=${popupType}`)}
      className="
        flex items-center justify-center
        px-12
        h-16
        rounded-xl
        bg-black text-white
        hover:opacity-90
        transition
        whitespace-nowrap
      "
    >
      Вернуться назад
    </button>
  );
}