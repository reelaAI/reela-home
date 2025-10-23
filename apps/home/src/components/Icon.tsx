const ICONS = {
  ArrowRight: (
    <>
      <path d='M5 12h14'></path>
      <path d='m12 5 7 7-7 7'></path>
    </>
  ),
  ArrowUpRight: (
    <>
      <path d='M7 7h10v10'></path>
      <path d='M7 17 17 7'></path>
    </>
  ),
  Boxes: (
    <>
      <path d='M3 7.5V21l9 2 9-2V7.5'></path>
      <path d='M3 7.5 12 10l9-2.5'></path>
      <path d='M12 10v13'></path>
      <path d='m7.5 4.27 4.5 1.23 4.5-1.23L12 3Z'></path>
    </>
  ),
  Building2: (
    <>
      <path d='M4 4h16v16H4z'></path>
      <path d='M9 4v16'></path>
      <path d='m15 10-2 2 2 2'></path>
    </>
  ),
  ChevronDown: (
    <>
      <path d='m6 9 6 6 6-6'></path>
    </>
  ),
  ChevronLeft: (
    <>
      <path d='m15 18-6-6 6-6'></path>
    </>
  ),
  ChevronRight: (
    <>
      <path d='m9 18 6-6-6-6'></path>
    </>
  ),
  Coins: (
    <>
      <ellipse cx='12' cy='6' rx='6' ry='3'></ellipse>
      <path d='M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6'></path>
      <path d='M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6'></path>
    </>
  ),
  Globe: (
    <>
      <circle cx='12' cy='12' r='10'></circle>
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'></path>
      <path d='M2 12h20'></path>
    </>
  ),
  Languages: (
    <>
      <path d='m5 8 6 6'></path>
      <path d='m4 14 6-6 2-3'></path>
      <path d='M2 5h12'></path>
      <path d='M7 2h1'></path>
      <path d='m22 22-5-10-5 10'></path>
      <path d='M14 18h6'></path>
    </>
  ),
  Layers: (
    <>
      <path d='m12.17 5.5 6.94 3.47-7.11 3.46-6.87-3.44 7.04-3.49a.5.5 0 0 1 .43 0Z'></path>
      <path d='m3.96 10.91 7.04 3.58'></path>
      <path d='m14.87 14.5 5.16-2.62'></path>
      <path d='M3.96 15.81 11 19'></path>
      <path d='m14.87 19 5.16-2.62'></path>
    </>
  ),
  Megaphone: (
    <>
      <path d='M3 11v2c0 2.2 1.3 4 3 4h2l4 5v-6'></path>
      <path d='m18 12 4-2V6l-4-2-8 3v6l8 3V12Z'></path>
    </>
  ),
  MoveUpRight: (
    <>
      <path d='M16 3h5v5'></path>
      <path d='M8 21H3v-5'></path>
      <path d='M16 8 5 19'></path>
    </>
  ),
  Music: (
    <>
      <path d='M9 18V5l12-2v13'></path>
      <path d='m9 9 12-2'></path>
      <circle cx='6' cy='18' r='3'></circle>
      <circle cx='18' cy='16' r='3'></circle>
    </>
  ),
  Palette: (
    <>
      <path d='M17.5 17.5a3.5 3.5 0 0 0-3.5-3.5H11a6 6 0 1 1 6 6'></path>
      <circle cx='12' cy='7.5' r='0.5' fill='currentColor'></circle>
      <circle cx='16' cy='9.5' r='0.5' fill='currentColor'></circle>
      <circle cx='7' cy='10.5' r='0.5' fill='currentColor'></circle>
      <circle cx='7' cy='14.5' r='0.5' fill='currentColor'></circle>
    </>
  ),
  Play: (
    <>
      <path fill='currentColor' d='m9 7 8 5-8 5V7z'></path>
    </>
  ),
  Ratio: (
    <>
      <rect width='12' height='20' x='6' y='2' rx='2'></rect>
      <rect width='20' height='12' x='2' y='6' rx='2'></rect>
    </>
  ),
  ShoppingCart: (
    <>
      <path d='M5.5 7h13l-1.5 9h-10z'></path>
      <path d='M7 7l-1-4H4'></path>
      <circle cx='9' cy='20' r='1'></circle>
      <circle cx='17' cy='20' r='1'></circle>
    </>
  ),
  Sparkles: (
    <>
      <path d='M12 3v6'></path>
      <path d='M16.2 7.8 12 12'></path>
      <path d='M22 12h-6'></path>
      <path d='M18.2 16.2 12 12'></path>
      <path d='M12 18v-6'></path>
      <path d='M7.8 16.2 12 12'></path>
      <path d='M2 12h6'></path>
      <path d='M7.8 7.8 12 12'></path>
    </>
  ),
  Timer: (
    <>
      <path d='M10 2h4'></path>
      <path d='M12 14v-4'></path>
      <path d='M4.93 4.93 7.76 7.76'></path>
      <path d='M12 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z'></path>
    </>
  ),
  Twitter: (
    <>
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
    </>
  ),
  UserRound: (
    <>
      <circle cx='12' cy='10' r='4'></circle>
      <path d='M6 20a6 6 0 0 1 12 0'></path>
    </>
  ),
  Volume2: (
    <>
      <path d='M11 5 6 9H3v6h3l5 4V5Z'></path>
      <path d='M19 5c1.5 2 1.5 12 0 14'></path>
      <path d='M15.5 8.5c.75 1 1 6.5 0 7.5'></path>
    </>
  ),
  VolumeX: (
    <>
      <path d='M11 5 6 9H3v6h3l5 4V5Z'></path>
      <path d='m16 9 6 6'></path>
      <path d='m22 9-6 6'></path>
    </>
  ),
  Youtube: (
    <>
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'></path>
      <path d='m10 15 5-3-5-3z'></path>
    </>
  ),
} as const;

export type IconName = keyof typeof ICONS;

type BaseIconProps = {
  name: IconName;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
};

export type IconProps = BaseIconProps & Record<string, unknown>;

export function Icon({
  name,
  size = 24,
  strokeWidth = 2,
  class: classAttr,
  className,
  ...rest
}: IconProps) {
  const content = ICONS[name];

  if (!content) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  const mergedClass = [classAttr, className].filter(Boolean).join(' ') || undefined;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width={strokeWidth}
      stroke-linecap='round'
      stroke-linejoin='round'
      {...rest}
      class={mergedClass}
    >
      {content}
    </svg>
  );
}

