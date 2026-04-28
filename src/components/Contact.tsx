import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Contact({ dict }: Props) {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dict.contact.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.contact.title}
          </h2>
          <p className="mt-4 text-pretty text-base text-muted sm:text-lg">
            {dict.contact.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${dict.contact.email}`}
            className="group rounded-2xl border border-border bg-background-elev/40 p-6 transition hover:border-accent/40"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-muted">
              {dict.contact.email_label}
            </div>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="text-lg font-semibold text-foreground">
                {dict.contact.email}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-accent opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100"
                aria-hidden="true"
              >
                <path d="M3 8h10m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </a>
          <div className="rounded-2xl border border-border bg-background-elev/40 p-6">
            <div className="text-xs font-medium uppercase tracking-wider text-muted">
              {dict.contact.location_label}
            </div>
            <div className="mt-2 text-lg font-semibold text-foreground">
              {dict.contact.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
