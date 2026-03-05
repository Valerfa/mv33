"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface Props {
  openOrder: () => void;
  openContact: () => void;
}

export default function PopupController({ openOrder, openContact }: Props) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const popupType = searchParams.get("popup");

    if (popupType === "order") {
      openOrder();
    }

    if (popupType === "contact") {
      openContact();
    }
  }, [searchParams, openOrder, openContact]);

  return null;
}