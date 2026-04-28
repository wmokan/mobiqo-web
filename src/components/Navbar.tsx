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
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href={`/${lang}`} className="flex items-center" aria-label="mobiqo">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-8 text-sm text-foreground/70 md:flex">
          <li>
            <Link href={`/${lang}#about`} className="transition hover:text-foreground">
              {dict.nav.about}
            </Link>
          </li>
          <li>
            <Link href={`/${lang}#contact`} className="transition hover:text-foreground">
              {dict.nav.contact}
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <LanguageSwitcher current={lang} />
          <Link
            href={`/${lang}#contact`}
            className="hidden rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-background transition hover:brightness-110 sm:inline-flex"
          >
            {dict.hero.cta_primary}
          </Link>
        </div>
      </nav>
    </header>
  );
}
