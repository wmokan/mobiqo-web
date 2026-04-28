import { Logo } from "./Logo";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type Props = {
  dict: Dictionary;
};

export function Footer({ dict }: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background-elev/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-sm text-muted">{dict.footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-muted sm:items-end">
          <a href={`mailto:${dict.contact.email}`} className="transition hover:text-foreground">
            {dict.contact.email}
          </a>
          <p>
            © {year} mobiqo. {dict.footer.rights}
          </p>
          <p className="text-xs opacity-60">{dict.footer.made_in}</p>
        </div>
      </div>
    </footer>
  );
}
