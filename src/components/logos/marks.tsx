type MarkProps = {
  size?: number;
  className?: string;
};

const MQ_PATH =
  "M9 21V11h2.4l3 5.2 3-5.2H19.8v10h-2.2v-5.6l-2.4 4.2h-1.6l-2.4-4.2V21H9zm14 0v-1.6c-.7.7-1.6 1.1-2.7 1.1-2.3 0-4.1-1.8-4.1-4.5s1.8-4.5 4.1-4.5c1.1 0 2 .4 2.7 1.1V11h2.2v10H23z";

const SIGIL_FILL = "#0a0b0f";
const FRAME = { x: 2, y: 2, w: 28, h: 28, rx: 8 };
const SYSTEM_FONT =
  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

type FrameProps = MarkProps & {
  gradientId: string;
  c1: string;
  c2: string;
  radial?: boolean;
  children: React.ReactNode;
};

function GradientFrame({
  size = 32,
  className,
  gradientId,
  c1,
  c2,
  radial,
  children,
}: FrameProps) {
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
        {radial ? (
          <radialGradient id={gradientId} cx="0.3" cy="0.25" r="0.9">
            <stop stopColor={c1} />
            <stop offset="1" stopColor={c2} />
          </radialGradient>
        ) : (
          <linearGradient
            id={gradientId}
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={c1} />
            <stop offset="1" stopColor={c2} />
          </linearGradient>
        )}
      </defs>
      <rect
        x={FRAME.x}
        y={FRAME.y}
        width={FRAME.w}
        height={FRAME.h}
        rx={FRAME.rx}
        fill={`url(#${gradientId})`}
      />
      {children}
    </svg>
  );
}

/* CURRENT — Cyan → Purple diagonal, "mq" sigil (live on site) */
export function MarkCurrent(props: MarkProps) {
  return (
    <GradientFrame {...props} gradientId="mc-grad" c1="#00E5FF" c2="#7C5CFF">
      <path d={MQ_PATH} fill={SIGIL_FILL} />
    </GradientFrame>
  );
}

/* L — Mint → Cyan, same "mq" sigil. Lighter, fresher palette. */
export function MarkL(props: MarkProps) {
  return (
    <GradientFrame {...props} gradientId="ml-grad" c1="#5EEAD4" c2="#00E5FF">
      <path d={MQ_PATH} fill={SIGIL_FILL} />
    </GradientFrame>
  );
}

/* M — Magenta → Cyan, same sigil. Warmer, more energetic. */
export function MarkM(props: MarkProps) {
  return (
    <GradientFrame {...props} gradientId="mm-grad" c1="#F472B6" c2="#00E5FF">
      <path d={MQ_PATH} fill={SIGIL_FILL} />
    </GradientFrame>
  );
}

/* N — Sapphire → Cyan, same sigil. Deeper, calmer. */
export function MarkN(props: MarkProps) {
  return (
    <GradientFrame {...props} gradientId="mn-grad" c1="#1E40AF" c2="#22D3EE">
      <path d={MQ_PATH} fill={SIGIL_FILL} />
    </GradientFrame>
  );
}

/* O — Cyan → Purple (current palette), single lowercase "m". */
export function MarkO({ size = 32, className }: MarkProps) {
  return (
    <GradientFrame
      size={size}
      className={className}
      gradientId="mo-grad"
      c1="#00E5FF"
      c2="#7C5CFF"
    >
      <text
        x="16"
        y="24"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fontFamily={SYSTEM_FONT}
        fill={SIGIL_FILL}
      >
        m
      </text>
    </GradientFrame>
  );
}

/* P — Cyan → Purple radial, "mq" sigil. Same colors, dimensional gradient. */
export function MarkP(props: MarkProps) {
  return (
    <GradientFrame
      {...props}
      gradientId="mp-grad"
      c1="#00E5FF"
      c2="#5B21B6"
      radial
    >
      <path d={MQ_PATH} fill={SIGIL_FILL} />
    </GradientFrame>
  );
}

export type MarkVariant = "current" | "L" | "M" | "N" | "O" | "P";

export const marks: Record<MarkVariant, (props: MarkProps) => React.JSX.Element> = {
  current: MarkCurrent,
  L: MarkL,
  M: MarkM,
  N: MarkN,
  O: MarkO,
  P: MarkP,
};

export const markMeta: Record<MarkVariant, { name: string; desc: string; tag?: string }> = {
  current: {
    name: "Şu anki logo",
    desc: "Cyan → mor diagonal, 'mq' sigil. Karşılaştırma için.",
    tag: "live",
  },
  L: {
    name: "L — mint → cyan",
    desc: "Aynı 'mq' sigil, daha soğuk-taze palette. Yumuşak, doygun olmayan, sakin.",
  },
  M: {
    name: "M — magenta → cyan",
    desc: "Aynı sigil, sıcak pembe-cyan geçişi. Daha enerjik ve dikkat çekici.",
  },
  N: {
    name: "N — sapphire → cyan",
    desc: "Aynı sigil, derin lacivert → cyan. Daha kurumsal, oturmuş bir his.",
  },
  O: {
    name: "O — tek 'm'",
    desc: "Mevcut cyan-mor palette, ama 'mq' yerine sadece tek bir 'm'. Daha sade, daha çok nefes.",
  },
  P: {
    name: "P — radial gradient",
    desc: "Aynı sigil ve renkler, ama gradient sol-üstten radial. Daha üç boyutlu, ışıklı bir his.",
  },
};
