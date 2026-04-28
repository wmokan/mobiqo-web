"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeFlags, localeNames, type Locale } from "@/i18n/config";

type Props = {
  current: Locale;
};

function stripLocale(pathname: string): string {
  for (const loc of locales) {
    if (pathname === `/${loc}`) return "/";
    if (pathname.startsWith(`/${loc}/`)) return pathname.slice(loc.length + 1);
  }
  return pathname;
}

export function LanguageSwitcher({ current }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rest = stripLocale(pathname);

  useEffect(() => {
    if (!open) return;

    function handlePointer(event: MouseEvent | TouchEvent) {
      const node = containerRef.current;
      if (!node) return;
      if (!node.contains(event.target as Node)) setOpen(false);
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  function handleSelect(loc: Locale) {
    setOpen(false);
    if (loc === current) return;
    const next = `/${loc}${rest === "/" ? "" : rest}`;
    router.push(next);
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background-elev/60 px-3 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur transition hover:border-accent/40 hover:text-foreground"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{localeFlags[current]}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 min-w-[140px] overflow-hidden rounded-xl border border-border bg-background-elev/95 p-1 shadow-2xl backdrop-blur"
        >
          {locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                onClick={() => handleSelect(loc)}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                  loc === current
                    ? "bg-accent-soft text-accent"
                    : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span>{localeNames[loc]}</span>
                <span className="text-xs opacity-60">{localeFlags[loc]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
