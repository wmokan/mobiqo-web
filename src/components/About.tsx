import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary;
};

export function About({ dict }: Props) {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60 bg-background-elev/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {dict.about.eyebrow}
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {dict.about.title}
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
            <p>{dict.about.body_1}</p>
            <p className="text-muted">{dict.about.body_2}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.values.map((v, i) => (
            <div
              key={v.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background-elev/40 p-6 transition hover:border-accent/40"
            >
              <div className="text-xs font-mono text-accent/60">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {v.desc}
              </p>
              <div
                className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
