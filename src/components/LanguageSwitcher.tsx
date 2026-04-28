"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rest = stripLocale(pathname);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
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
              <Link
                href={`/${loc}${rest === "/" ? "" : rest}`}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
                  loc === current
                    ? "bg-accent-soft text-accent"
                    : "text-foreground/80 hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <span>{localeNames[loc]}</span>
                <span className="text-xs opacity-60">{localeFlags[loc]}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
