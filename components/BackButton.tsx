"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const popupType = searchParams.get("popup");

  function handleBack() {
    if (popupType) {
      router.push(`/?popup=${popupType}`);
    } else {
      router.push("/");
    }
  }

  return (
    <button
      onClick={handleBack}
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