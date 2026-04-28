type MarkProps = {
  size?: number;
  className?: string;
};

/* A — Current: gradient rounded-square with "mq" sigil */
export function MarkA({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="markA-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#markA-grad)" />
      <path
        d="M9 21V11h2.4l3 5.2 3-5.2H19.8v10h-2.2v-5.6l-2.4 4.2h-1.6l-2.4-4.2V21H9zm14 0v-1.6c-.7.7-1.6 1.1-2.7 1.1-2.3 0-4.1-1.8-4.1-4.5s1.8-4.5 4.1-4.5c1.1 0 2 .4 2.7 1.1V11h2.2v10H23z"
        fill="#0a0b0f"
      />
    </svg>
  );
}

/* B — Geometric "m" with thinking dot above */
export function MarkB({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="markB-grad" x1="4" y1="28" x2="28" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="5" r="2" fill="url(#markB-grad)" />
      <path
        d="M5 28V14a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v14M13 14a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v14M19 14a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v14"
        stroke="url(#markB-grad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* C — Lens / focus ring (symmetric, abstract) */
export function MarkC({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="markC-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="11" stroke="url(#markC-grad)" strokeWidth="2.6" />
      <circle cx="16" cy="16" r="3.5" fill="url(#markC-grad)" />
      <circle cx="24" cy="8" r="1.6" fill="#00E5FF" />
    </svg>
  );
}

/* D — App icon: rounded square with diagonal spark/bolt */
export function MarkD({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="markD-bg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#11131a" />
          <stop offset="1" stopColor="#1a1d28" />
        </linearGradient>
        <linearGradient id="markD-bolt" x1="10" y1="6" x2="22" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#markD-bg)" stroke="rgba(0,229,255,0.25)" />
      <path
        d="M18 6L9 18h5l-1 8 9-12h-5l1-8z"
        fill="url(#markD-bolt)"
      />
    </svg>
  );
}

/* E — Wordmark only: stylized "mobiqo" with glow dot on i */
export function MarkE({ size = 32, className }: MarkProps) {
  // square framing for parity with others
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="markE-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontSize="20"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fill="url(#markE-grad)"
        letterSpacing="-0.5"
      >
        m
      </text>
      <circle cx="22" cy="9" r="2" fill="#00E5FF" />
    </svg>
  );
}

export type MarkVariant = "A" | "B" | "C" | "D" | "E";

export const marks: Record<MarkVariant, (props: MarkProps) => React.JSX.Element> = {
  A: MarkA,
  B: MarkB,
  C: MarkC,
  D: MarkD,
  E: MarkE,
};

export const markMeta: Record<MarkVariant, { name: string; desc: string }> = {
  A: {
    name: "A — mq sigil (mevcut)",
    desc: "Cyan→mor gradyan kart üstüne 'mq' harfleri. Şu an site genelinde kullanılan logo.",
  },
  B: {
    name: "B — geometric m",
    desc: "Saf tipografi: lowercase 'm' + üstünde düşünce noktası. Çerçevesiz, sade, özel.",
  },
  C: {
    name: "C — lens",
    desc: "Halka + merkez nokta + parıltı. Odak/zekâ metaforu, harf yok. Çok küçük boyutta da okunaklı.",
  },
  D: {
    name: "D — bolt app icon",
    desc: "Karanlık rounded-square + cyan şimşek. App Store/Play simgesi gibi durur, ürün hissi yüksek.",
  },
  E: {
    name: "E — wordmark sade",
    desc: "Tek harf 'm' + nokta. Sadece tipografi, en minimalist.",
  },
};
