"use client";

type CallButtonProps = {
  className?: string;
  children?: string;
  phone?: string;
  variant?: "black" | "green";
};

export default function CallButton({
  className = "",
  children = "Позвонить",
  phone = "+79203669096",
  variant = "black",
}: CallButtonProps) {
  const href = `tel:${phone}`;
  const tooltipText = "Номер телефона: +7 (920) 366-90-96";
  const variantClassName =
    variant === "green"
      ? "bg-accent text-black hover:bg-black hover:text-white"
      : "bg-black text-white hover:bg-accent hover:text-black";
  const baseClassName =
    "group inline-flex w-full md:w-auto items-center justify-center inline-center overflow-hidden rounded-xl transition-all duration-300 ease-out h-16 md:h-12 px-4 md:px-6";
  const buttonClassName = `${baseClassName} ${variantClassName} ${className}`.trim();

  return (
    <span className="relative flex w-full md:inline-flex md:w-auto group/call">
      <a
        href={href}
        className={buttonClassName}
        aria-label={`Позвонить ${phone}`}
      >
        {children}
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-xs text-white opacity-0 shadow-lg transition-opacity duration-200 md:block md:group-hover/call:opacity-100"
      >
        {tooltipText}
      </span>
    </span>
  );
}
