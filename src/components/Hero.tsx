import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export function Hero({ lang, dict }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elev/60 px-3 py-1 text-xs font-medium text-foreground/70 backdrop-blur">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
            {dict.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            <span className="block">{dict.hero.title_1}</span>
            <span className="block text-gradient">{dict.hero.title_2}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={`/${lang}#contact`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110 glow"
            >
              {dict.hero.cta_primary}
            </Link>
            <Link
              href={`/${lang}#process`}
              className="inline-flex items-center justify-center rounded-full border border-border bg-background-elev/60 px-6 py-3 text-sm font-semibold text-foreground/80 backdrop-blur transition hover:border-accent/40 hover:text-foreground"
            >
              {dict.hero.cta_secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
