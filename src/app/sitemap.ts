import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const SITE = "https://mobiqo.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((lang) => ({
    url: `${SITE}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: lang === "tr" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE}/${l}`]),
      ),
    },
  }));
}
