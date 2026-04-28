type MarkProps = {
  size?: number;
  className?: string;
};

const ACCENT = "#00E5FF";

/* CURRENT — gradient rounded-square with "mq" sigil (live on site) */
export function MarkCurrent({ size = 32, className }: MarkProps) {
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
        <linearGradient id="mc-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00E5FF" />
          <stop offset="1" stopColor="#7C5CFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#mc-grad)" />
      <path
        d="M9 21V11h2.4l3 5.2 3-5.2H19.8v10h-2.2v-5.6l-2.4 4.2h-1.6l-2.4-4.2V21H9zm14 0v-1.6c-.7.7-1.6 1.1-2.7 1.1-2.3 0-4.1-1.8-4.1-4.5s1.8-4.5 4.1-4.5c1.1 0 2 .4 2.7 1.1V11h2.2v10H23z"
        fill="#0a0b0f"
      />
    </svg>
  );
}

/* F — Speech bubble + thinking dot. Communication + a single thought. */
export function MarkF({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 9a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7l-5 5v-5a3 3 0 0 1-3-3V9z"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="13" r="1.8" fill={ACCENT} />
    </svg>
  );
}

/* G — Oversized lowercase "i" — the IQ glyph isolated. */
export function MarkG({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="7" r="3.6" fill={ACCENT} />
      <rect x="13.2" y="13.6" width="5.6" height="14.4" rx="2.8" fill={ACCENT} />
    </svg>
  );
}

/* H — Square brackets framing a single block. Code / encapsulation. */
export function MarkH({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 6H6v20h4M22 6h4v20h-4"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="13.5" y="13.5" width="5" height="5" rx="1" fill={ACCENT} />
    </svg>
  );
}

/* I — 6-point asterisk / star. Hub, anchor, beginning. */
export function MarkI({ size = 32, className }: MarkProps) {
  const lines = [0, 60, 120].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const dx = Math.cos(rad) * 9;
    const dy = Math.sin(rad) * 9;
    return { x1: 16 - dx, y1: 16 - dy, x2: 16 + dx, y2: 16 + dy };
  });
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {lines.map((l, idx) => (
        <line
          key={idx}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={ACCENT}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

/* J — 3x3 dot grid with focused center. Pixels + intelligence. */
export function MarkJ({ size = 32, className }: MarkProps) {
  const positions = [4, 12, 20].flatMap((y) =>
    [4, 12, 20].map((x) => ({ x: x + 4, y: y + 4 })),
  );
  const center = { x: 16, y: 16 };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {positions.map((p, idx) => {
        const isCenter = p.x === center.x && p.y === center.y;
        return (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r={isCenter ? 2.6 : 1.4}
            fill={ACCENT}
            opacity={isCenter ? 1 : 0.45}
          />
        );
      })}
    </svg>
  );
}

/* K — Concentric arcs opening upward. Signal / motion / mobile. */
export function MarkK({ size = 32, className }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 22a10 10 0 0 1 20 0"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M10 22a6 6 0 0 1 12 0"
        stroke={ACCENT}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="16" cy="22" r="2.2" fill={ACCENT} />
    </svg>
  );
}

export type MarkVariant = "current" | "F" | "G" | "H" | "I" | "J" | "K";

export const marks: Record<MarkVariant, (props: MarkProps) => React.JSX.Element> = {
  current: MarkCurrent,
  F: MarkF,
  G: MarkG,
  H: MarkH,
  I: MarkI,
  J: MarkJ,
  K: MarkK,
};

export const markMeta: Record<MarkVariant, { name: string; desc: string; tag?: string }> = {
  current: {
    name: "Şu anki logo",
    desc: "Cyan→mor gradient kart üstüne 'mq'. Karşılaştırma için.",
    tag: "live",
  },
  F: {
    name: "F — konuşma + tek nokta",
    desc: "Outline konuşma balonu içinde tek bir nokta. Mobil iletişim + bir düşünce. Çerçevesiz, sadece çizgi.",
  },
  G: {
    name: "G — büyütülmüş 'i'",
    desc: "mob[i]qo'nun 'i' harfi izole edilip büyütülmüş hali. IQ vurgusu, saf tipografi, gradient yok.",
  },
  H: {
    name: "H — köşeli parantez",
    desc: "[ ] arasında küçük bir blok. Kod / kapsama. Geliştirici hissi olan, monospace tonunda bir mark.",
  },
  I: {
    name: "I — 6 uçlu yıldız",
    desc: "Tek merkezden açılan 6 ışın. Soyut, simetrik, herhangi bir harfe bağlı değil — saf işaret.",
  },
  J: {
    name: "J — 3x3 piksel grid",
    desc: "9 nokta, ortadaki büyük ve odaklı, diğerleri sönük. Mobil ekran / dokunmatik metaforu.",
  },
  K: {
    name: "K — sinyal yayı",
    desc: "Üst üste iki yay + altta nokta. Mobil sinyal / yayılan etki. Hareket hissi.",
  },
};
