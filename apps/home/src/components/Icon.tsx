import type { JSX } from 'hono/jsx';

const ICONS = {
  'arrow-right': {
    content: (
      <>
        <path d='M5 12h14' />
        <path d='m12 5 7 7-7 7' />
      </>
    ),
  },
  'arrow-up-right': {
    content: (
      <>
        <path d='M7 17 17 7' />
        <path d='M7 7h10v10' />
      </>
    ),
  },
  boxes: {
    content: (
      <>
        <path d='m7.5 4.3 4.5 1.2 4.5-1.2L12 3Z' />
        <path d='M3 7.5 12 10l9-2.5' />
        <path d='M3 7.5V21l9 2 9-2V7.5' />
        <path d='M12 10v13' />
      </>
    ),
  },
  'chevron-down': {
    content: <path d='m6 9 6 6 6-6' />,
  },
  'chevron-left': {
    content: <path d='m15 18-6-6 6-6' />,
  },
  'chevron-right': {
    content: <path d='m9 6 6 6-6 6' />,
  },
  expand: {
    content: (
      <>
        <path d='M16 3h5v5' />
        <path d='M8 21H3v-5' />
        <path d='M16 8 5 19' />
      </>
    ),
  },
  globe: {
    content: (
      <>
        <circle cx='12' cy='12' r='10' />
        <path d='M2 12h20' />
        <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
      </>
    ),
  },
  languages: {
    content: (
      <>
        <path d='m5 8 6 6' />
        <path d='m4 14 6-6 2-3' />
        <path d='M2 5h12' />
        <path d='M7 2h1' />
        <path d='m22 22-5-10-5 10' />
        <path d='M14 18h6' />
      </>
    ),
  },
  layers: {
    content: (
      <>
        <path d='m12.2 5.5 6.9 3.5-7.1 3.5-6.9-3.5 7-3.5a.5.5 0 0 1 .4 0Z' />
        <path d='m3.9 10.9 7.1 3.6' />
        <path d='m14.9 14.5 5.2-2.6' />
        <path d='M3.9 15.8 11 19' />
        <path d='m14.9 19 5.2-2.6' />
      </>
    ),
  },
  'monitor-play': {
    content: (
      <>
        <rect x='2.5' y='5.5' width='19' height='13' rx='2.5' />
        <path d='m11 15 4.5-3L11 9z' fill='currentColor' stroke='none' />
        <path d='M8 21h8' />
      </>
    ),
    strokeWidth: 1.5,
  },
  music: {
    content: (
      <>
        <path d='M9 18V5l12-2v13' />
        <circle cx='6' cy='18' r='3' />
        <circle cx='18' cy='16' r='3' />
      </>
    ),
  },
  palette: {
    content: (
      <>
        <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1A1.6 1.6 0 0 1 14.5 16h2c3 0 5.5-2.5 5.5-5.6C22 6 17.5 2 12 2Z' />
        <circle cx='13.5' cy='6.5' r='.7' fill='currentColor' stroke='none' />
        <circle cx='17.5' cy='10.5' r='.7' fill='currentColor' stroke='none' />
        <circle cx='8.5' cy='7.5' r='.7' fill='currentColor' stroke='none' />
        <circle cx='6.5' cy='12.5' r='.7' fill='currentColor' stroke='none' />
      </>
    ),
  },
  play: {
    content: <path d='m9 7 8 5-8 5z' fill='currentColor' stroke='none' />,
    stroke: 'none',
  },
  'aspect-ratio': {
    content: (
      <>
        <rect x='3' y='5' width='18' height='14' rx='2' />
        <path d='M9 10h1' />
        <path d='M9 14h1' />
        <path d='M14 10h1' />
        <path d='M14 14h1' />
      </>
    ),
  },
  'panel-right-open': {
    content: (
      <>
        <rect x='3' y='4' width='18' height='16' rx='2' />
        <path d='M9 4v16' />
        <path d='m15 10-2 2 2 2' />
      </>
    ),
  },
  sparkles: {
    content: (
      <>
        <path d='M12 3v6' />
        <path d='M16.2 7.8 12 12' />
        <path d='M22 12h-6' />
        <path d='M18.2 16.2 12 12' />
        <path d='M12 21v-6' />
        <path d='M7.8 16.2 12 12' />
        <path d='M2 12h6' />
        <path d='M7.8 7.8 12 12' />
      </>
    ),
  },
  'shopping-cart': {
    content: (
      <>
        <path d='M6 6h15l-1.5 9h-10L7 3H4' />
        <circle cx='9' cy='20' r='1.5' />
        <circle cx='18' cy='20' r='1.5' />
      </>
    ),
  },
  check: {
    content: <path d='m20 6-11 11-5-5' />,
  },
  timer: {
    content: (
      <>
        <path d='M10 2h4' />
        <path d='M12 14V8' />
        <path d='m4.9 4.9 2.9 2.9' />
        <path d='M12 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z' />
      </>
    ),
  },
  'volume-2': {
    content: (
      <>
        <path d='M11 5 6 9H3v6h3l5 4z' />
        <path d='M16 9a5 5 0 0 1 0 6' />
        <path d='M19.4 6.6a9 9 0 0 1 0 10.8' />
      </>
    ),
  },
  'volume-x': {
    content: (
      <>
        <path d='M11 5 6 9H3v6h3l5 4V5Z' />
        <path d='m16 9 6 6' />
        <path d='m22 9-6 6' />
      </>
    ),
  },
  'brand-x': {
    content: (
      <>
        <path d='m4 4 16 16' />
        <path d='m20 4-16 16' />
      </>
    ),
  },
  youtube: {
    content: (
      <>
        <rect x='3' y='7' width='18' height='10' rx='4' />
        <path d='m10 9 6 3-6 3z' fill='currentColor' stroke='none' />
      </>
    ),
  },
} as const satisfies Record<string, { content: JSX.Element; viewBox?: string; stroke?: string; strokeWidth?: number }>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  class?: string;
  className?: string;
} & Omit<JSX.IntrinsicElements['svg'], 'name' | 'width' | 'height' | 'class'>;

export function Icon({
  name,
  size = 24,
  strokeWidth,
  class: classAttr,
  className,
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...rest
}: IconProps) {
  const icon = ICONS[name];

  if (!icon) {
    return null;
  }

  const resolvedStroke = icon.stroke ?? 'currentColor';
  const resolvedStrokeWidth =
    resolvedStroke === 'none' ? undefined : strokeWidth ?? icon.strokeWidth ?? 1.5;
  const combinedClass = ['reela-icon inline-block align-middle text-current transition-colors duration-200 ease-out', classAttr, className]
    .filter(Boolean)
    .join(' ');

  const computedAriaHidden = ariaHidden ?? (ariaLabel ? undefined : 'true');
  const { role, ...svgProps } = rest;

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={icon.viewBox ?? '0 0 24 24'}
      fill={icon.stroke === 'none' ? 'currentColor' : 'none'}
      stroke={resolvedStroke}
      stroke-width={resolvedStrokeWidth}
      stroke-linecap={resolvedStroke === 'none' ? undefined : 'round'}
      stroke-linejoin={resolvedStroke === 'none' ? undefined : 'round'}
      aria-label={ariaLabel}
      aria-hidden={computedAriaHidden}
      role={ariaLabel ? 'img' : role}
      class={combinedClass || undefined}
      {...svgProps}
    >
      {icon.content}
    </svg>
  );
}

