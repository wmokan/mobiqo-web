import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { marks, markMeta, type MarkVariant } from "@/components/logos/marks";

const variants: MarkVariant[] = ["A", "B", "C", "D", "E"];

export const metadata = {
  title: "Logo alternatifleri",
  robots: { index: false, follow: false },
};

export default async function LogosPage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Logo lab
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Alternatif logo seçenekleri
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Her birini favicon (16px), navbar (28px) ve büyük (64px) boyutlarda gör.
          Beğendiğin harfi söyle — site geneline o uygulansın.
        </p>
      </div>

      <div className="grid gap-6">
        {variants.map((v) => {
          const Mark = marks[v];
          const meta = markMeta[v];
          return (
            <article
              key={v}
              className="grid gap-6 rounded-2xl border border-border bg-background-elev/40 p-6 sm:grid-cols-[1fr_2fr]"
            >
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{meta.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {meta.desc}
                </p>
              </div>
              <div className="flex flex-wrap items-end justify-around gap-6 rounded-xl bg-background/60 p-6">
                <div className="flex flex-col items-center gap-2">
                  <Mark size={16} />
                  <span className="text-[10px] uppercase tracking-wider text-muted">16</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mark size={28} />
                  <span className="text-[10px] uppercase tracking-wider text-muted">28</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mark size={64} />
                  <span className="text-[10px] uppercase tracking-wider text-muted">64</span>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-border bg-background-elev/60 px-3 py-1.5">
                  <Mark size={20} />
                  <span className="text-sm font-semibold tracking-tight text-foreground">
                    mobiqo
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elev/60 px-5 py-2 text-sm text-foreground/80 transition hover:border-accent/40 hover:text-foreground"
        >
          ← Ana sayfaya dön
        </Link>
      </div>
    </section>
  );
}
