import Link from "next/link";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export function Navbar({ lang, dict }: Props) {
  const navItems: { href: string; label: string }[] = [
    { href: `/${lang}#services`, label: dict.nav.services },
    { href: `/${lang}#process`, label: dict.nav.process },
    { href: `/${lang}#about`, label: dict.nav.about },
    { href: `/${lang}#faq`, label: dict.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="flex items-center" aria-label="mobiqo">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-foreground/70 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={lang} />
          <Link
            href={`/${lang}#contact`}
            className="hidden rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-background transition hover:brightness-110 sm:inline-flex"
          >
            {dict.nav.contact}
          </Link>
        </div>
      </nav>
    </header>
  );
}
