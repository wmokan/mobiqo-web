import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "./dictionaries";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <Services dict={dict} />
      <Process dict={dict} />
      <Capabilities dict={dict} />
      <About dict={dict} />
      <Stats dict={dict} />
      <FAQ dict={dict} />
      <Contact lang={lang} dict={dict} />
    </>
  );
}
