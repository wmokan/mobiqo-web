import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary };

export function FAQ({ dict }: Props) {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dict.faq.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.faq.title}
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background-elev/40">
          {dict.faq.items.map((item, i) => (
            <details
              key={i}
              className="group/faq"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-white/5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                  {item.q}
                </h3>
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-accent transition group-open/faq:rotate-45"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm leading-relaxed text-muted sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
