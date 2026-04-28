type Props = {
  size?: number;
  className?: string;
};

export function Logo({ size = 28, className }: Props) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mq-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E5FF" />
            <stop offset="1" stopColor="#7C5CFF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#mq-grad)" />
        <path
          d="M9 21V11h2.4l3 5.2 3-5.2H19.8v10h-2.2v-5.6l-2.4 4.2h-1.6l-2.4-4.2V21H9zm14 0v-1.6c-.7.7-1.6 1.1-2.7 1.1-2.3 0-4.1-1.8-4.1-4.5s1.8-4.5 4.1-4.5c1.1 0 2 .4 2.7 1.1V11h2.2v10H23z"
          fill="#0a0b0f"
        />
      </svg>
      <span className="font-semibold tracking-tight text-foreground">
        mobiqo
      </span>
    </div>
  );
}
