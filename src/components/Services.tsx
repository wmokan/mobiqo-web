import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary };

export function Services({ dict }: Props) {
  return (
    <section id="services" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.services.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {dict.services.title}
            </h2>
          </div>
          <div className="text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>{dict.services.body}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {dict.services.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background-elev/40 p-6 transition hover:border-accent/40"
            >
              <div className="mb-4 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
