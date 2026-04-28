export const locales = ["tr", "en", "es"] as const;
export const defaultLocale = "tr";

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  tr: "Türkçe",
  en: "English",
  es: "Español",
};

export const localeFlags: Record<Locale, string> = {
  tr: "TR",
  en: "EN",
  es: "ES",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
