type IconProps = Record<string, unknown> & {
  className?: string;
};

type IconFactoryOptions = {
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: "round" | "butt" | "square";
  strokeLinejoin?: "round" | "arcs" | "bevel" | "miter" | "miter-clip";
};

const DEFAULT_STROKE_WIDTH = 4 / 3;

function createIcon(children: any[], options: IconFactoryOptions = {}) {
  return function Icon({ className, ...rest }: IconProps) {
    const strokeWidth =
      options.strokeWidth ??
      (options.fill && options.fill !== "none" ? undefined : DEFAULT_STROKE_WIDTH);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={options.viewBox ?? "0 0 24 24"}
        fill={options.fill ?? "none"}
        stroke={options.stroke ?? "currentColor"}
        stroke-width={strokeWidth}
        stroke-linecap={options.strokeLinecap ?? "round"}
        stroke-linejoin={options.strokeLinejoin ?? "round"}
        class={className}
        {...rest}
      >
        {children}
      </svg>
    );
  };
}

export const Play = createIcon([
  <path d="m9 7 8 5-8 5V7z" />,
], { fill: "currentColor", stroke: "none" });

export const Pause = createIcon([
  <rect x="6" y="4" width="4" height="16" rx="1" />,
  <rect x="14" y="4" width="4" height="16" rx="1" />,
]);

export const Volume2 = createIcon([
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />,
  <path d="M19 9c1.5 1.5 1.5 4.5 0 6" />,
  <path d="M15.54 8.46a5 5 0 0 1 0 7.08" />,
]);

export const VolumeX = createIcon([
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />,
  <path d="m22 9-6 6" />,
  <path d="m16 9 6 6" />,
]);

export const Video = createIcon([
  <rect x="2" y="5" width="16" height="14" rx="2" />,
  <polygon points="22 8 18 11 18 13 22 16 22 8" />,
]);

export const UserCircle2 = createIcon([
  <circle cx="12" cy="12" r="9" />,
  <circle cx="12" cy="10" r="3" />,
  <path d="M7 20c1.5-2.5 3.5-4 5-4s3.5 1.5 5 4" />,
]);

export const FileStack = createIcon([
  <rect x="8" y="4" width="12" height="14" rx="2" />,
  <path d="M4 8h4" />,
  <path d="M4 12h4" />,
  <path d="M4 16h4" />,
]);

export const Shuffle = createIcon([
  <path d="m17 3 4 4-4 4" />,
  <path d="M3 5h6c4 0 5 6 9 6h3" />,
  <path d="m17 21 4-4-4-4" />,
  <path d="M3 19h6c4 0 5-6 9-6h3" />,
]);

export const BarChart3 = createIcon([
  <path d="M3 3v18h18" />,
  <rect x="7" y="6" width="3" height="9" rx="1" />,
  <rect x="12" y="3" width="3" height="12" rx="1" />,
  <rect x="17" y="9" width="3" height="6" rx="1" />,
]);

export const Network = createIcon([
  <circle cx="12" cy="12" r="6" />,
  <path d="M16.24 7.76 19.07 4.93" />,
  <path d="M14.12 14.12 16.95 16.95" />,
  <path d="M7.76 16.24 4.93 19.07" />,
  <path d="M9.88 9.88 7.05 7.05" />,
  <path d="M12 2v4" />,
  <path d="M12 18v4" />,
  <path d="M2 12h4" />,
  <path d="M18 12h4" />,
]);

export const Check = createIcon([
  <path d="M20 6 9 17l-5-5" />,
]);

export const X = createIcon([
  <path d="m18 6-12 12" />,
  <path d="m6 6 12 12" />,
]);

export const ArrowRight = createIcon([
  <path d="M5 12h14" />,
  <path d="m12 5 7 7-7 7" />,
]);

export const ChevronDown = createIcon([
  <path d="m6 9 6 6 6-6" />,
]);

export const ExternalLink = createIcon([
  <path d="M15 3h6v6" />,
  <path d="m10 14 11-11" />,
  <path d="M21 10v10H3V3h10" />,
]);

export const Search = createIcon([
  <circle cx="11" cy="11" r="7" />,
  <path d="m20 20-3.5-3.5" />,
]);

export const Star = createIcon([
  <path d="m12 2 2.7 6.6 7.3.6-5.5 4.7 1.7 7.1L12 17.8l-6.2 4.2 1.7-7.1-5.5-4.7 7.3-.6z" />,
], { fill: "none", strokeLinejoin: "round" });

export const ShieldCheck = createIcon([
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />,
  <path d="m9 12 2 2 4-4" />,
]);

export const CreditCard = createIcon([
  <rect x="2" y="4" width="20" height="16" rx="2" />,
  <path d="M2 10h20" />,
  <path d="M6 16h2" />,
  <path d="M10 16h4" />,
]);

export const Wallet = createIcon([
  <path d="M6 20h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2Z" />,
  <path d="M20 12h-4a2 2 0 0 0 0 4h4" />,
]);

export const DollarSign = createIcon([
  <line x1="12" x2="12" y1="2" y2="22" />,
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 1 1 0 7H7" />,
]);

export const Github = createIcon([
  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.77 5.07 5.07 0 0 0 18.91.64S17.73.29 15 2.11a13.38 13.38 0 0 0-6 0C6.27.29 5.09.64 5.09.64A5.07 5.07 0 0 0 5 3.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
]);

export const Twitter = createIcon([
  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
], { fill: "none" });

export const Linkedin = createIcon([
  <rect x="3" y="3" width="18" height="18" rx="2" />,
  <path d="M8 11v5" />,
  <path d="M8 8v.01" />,
  <path d="M12 16v-5" />,
  <path d="M16 16v-3a2 2 0 0 0-4 0" />,
]);

export const Instagram = createIcon([
  <rect x="3" y="3" width="18" height="18" rx="5" />,
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />,
  <path d="M17.5 6.5h.01" />,
]);

export const Youtube = createIcon([
  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />,
  <path d="m10 15 5-3-5-3z" />,
], { fill: "none" });
