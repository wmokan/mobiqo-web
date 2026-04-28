import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary };

export function Stats({ dict }: Props) {
  return (
    <section id="stats" className="scroll-mt-20 border-t border-border/60 bg-background-elev/20">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.stats.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              {dict.stats.title}
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              {dict.stats.subtitle}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {dict.stats.items.map((item) => (
              <div
                key={item.label}
                className="bg-background-elev/60 p-6 text-center"
              >
                <dt className="text-xs uppercase tracking-wider text-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
