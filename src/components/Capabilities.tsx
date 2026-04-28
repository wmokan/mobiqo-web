import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = { dict: Dictionary };

export function Capabilities({ dict }: Props) {
  return (
    <section id="capabilities" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {dict.capabilities.eyebrow}
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {dict.capabilities.title}
          </h2>
          <p className="mt-4 text-pretty text-base text-muted sm:text-lg">
            {dict.capabilities.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.capabilities.groups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-background-elev/40 p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {group.title}
              </div>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground/80"
                  >
                    <span className="size-1 rounded-full bg-accent/80" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
