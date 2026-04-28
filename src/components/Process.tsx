import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary };

export function Process({ dict }: Props) {
  return (
    <section id="process" className="scroll-mt-20 border-t border-border/60 bg-background-elev/20">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dict.process.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.process.title}
          </h2>
          <p className="mt-4 text-pretty text-base text-muted sm:text-lg">
            {dict.process.subtitle}
          </p>
        </div>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
          {dict.process.steps.map((step) => (
            <li
              key={step.n}
              className="relative bg-background-elev/60 p-6 transition hover:bg-background-elev"
            >
              <div className="font-mono text-xs text-accent/70">{step.n}</div>
              <h3 className="mt-3 text-base font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
