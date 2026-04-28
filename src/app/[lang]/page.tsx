import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <About dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
