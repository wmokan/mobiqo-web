import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/app/[lang]/dictionaries";
import { ContactForm } from "./ContactForm";

type Props = {
  lang: Locale;
  dict: Dictionary;
};

export function Contact({ lang, dict }: Props) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60 bg-background-elev/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.contact.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-pretty text-base text-muted sm:text-lg">
              {dict.contact.subtitle}
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  {dict.contact.email_label}
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`mailto:${dict.contact.email}`}
                    className="text-base font-semibold text-foreground transition hover:text-accent"
                  >
                    {dict.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wider text-muted">
                  {dict.contact.location_label}
                </dt>
                <dd className="mt-1.5 text-base font-semibold text-foreground">
                  {dict.contact.location}
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-background-elev/40 p-6 sm:p-8">
            <ContactForm lang={lang} dict={dict} />
          </div>
        </div>
      </div>
    </section>
  );
}
