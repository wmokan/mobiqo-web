type Props = {
  size?: number;
  className?: string;
};

export function Logo({ size = 36, className }: Props) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="mq-grad"
            x1="0"
            y1="0"
            x2="32"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#00E5FF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#mq-grad)" />
        <text
          x="16"
          y="25"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          fontFamily='var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          fill="#0a0b0f"
        >
          m
        </text>
      </svg>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        mobiqo
      </span>
    </div>
  );
}
