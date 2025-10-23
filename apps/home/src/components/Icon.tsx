import type { JSX } from 'hono/jsx';

type IconDefinition = {
  viewBox?: string;
  stroke?: string | false;
  fill?: string;
  strokeLinecap?: 'round' | 'butt' | 'square';
  strokeLinejoin?: 'round' | 'arcs' | 'bevel' | 'miter' | 'miter-clip';
  elements: JSX.Element[];
};

const icons = {
  'arrow-right': {
    elements: [
      <path d='M5 12h14' />,
      <path d='m12 5 7 7-7 7' />,
    ],
  },
  'arrow-up-right': {
    elements: [
      <path d='M7 7h10v10' />,
      <path d='M7 17 17 7' />,
    ],
  },
  boxes: {
    elements: [
      <path d='M3 7.5V21l9 2 9-2V7.5' />,
      <path d='M3 7.5 12 10l9-2.5' />,
      <path d='M12 10v13' />,
      <path d='m7.5 4.27 4.5 1.23 4.5-1.23L12 3Z' />,
    ],
  },
  'chevron-down': {
    elements: [<path d='m6 9 6 6 6-6' />],
  },
  'chevron-left': {
    elements: [<polyline points='15 18 9 12 15 6' />],
  },
  'chevron-right': {
    elements: [<polyline points='9 18 15 12 9 6' />],
  },
  'expand': {
    elements: [
      <path d='M16 3h5v5' />,
      <path d='M8 21H3v-5' />,
      <path d='M16 8 5 19' />,
    ],
  },
  globe: {
    elements: [
      <circle cx='12' cy='12' r='10' />,
      <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />,
      <path d='M2 12h20' />,
    ],
  },
  languages: {
    elements: [
      <path d='m5 8 6 6' />,
      <path d='m4 14 6-6 2-3' />,
      <path d='M2 5h12' />,
      <path d='M7 2h1' />,
      <path d='m22 22-5-10-5 10' />,
      <path d='M14 18h6' />,
    ],
  },
  layers: {
    elements: [
      <path d='m12.17 5.5 6.94 3.47-7.11 3.46-6.87-3.44 7.04-3.49a.5.5 0 0 1 .43 0Z' />,
      <path d='m3.96 10.91 7.04 3.58' />,
      <path d='m14.87 14.5 5.16-2.62' />,
      <path d='M3.96 15.81 11 19' />,
      <path d='m14.87 19 5.16-2.62' />,
    ],
  },
  'monitor-play': {
    elements: [
      <rect x='2' y='5' width='20' height='14' rx='2' />,
      <path d='m10 15 5.19-3L10 9v6Z' />,
    ],
  },
  music: {
    elements: [
      <path d='M9 18V5l12-2v13' />,
      <circle cx='6' cy='18' r='3' />,
      <circle cx='18' cy='16' r='3' />,
    ],
  },
  palette: {
    elements: [
      <circle cx='13.5' cy='6.5' r='.5' fill='currentColor' />,
      <circle cx='17.5' cy='10.5' r='.5' fill='currentColor' />,
      <circle cx='8.5' cy='7.5' r='.5' fill='currentColor' />,
      <circle cx='6.5' cy='12.5' r='.5' fill='currentColor' />,
      <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z' />,
    ],
  },
  play: {
    stroke: false,
    fill: 'currentColor',
    elements: [<path d='m9 7 8 5-8 5V7z' />],
  },
  ratio: {
    elements: [
      <rect x='6' y='2' width='12' height='20' rx='2' />,
      <rect x='2' y='6' width='20' height='12' rx='2' />,
    ],
  },
  'panel-right-open': {
    elements: [
      <path d='M4 4h16v16H4z' />,
      <path d='M9 4v16' />,
      <path d='m15 10-2 2 2 2' />,
    ],
  },
  sparkles: {
    elements: [
      <path d='M12 3v6' />,
      <path d='M16.2 7.8 12 12' />,
      <path d='M22 12h-6' />,
      <path d='M18.2 16.2 12 12' />,
      <path d='M12 18v-6' />,
      <path d='M7.8 16.2 12 12' />,
      <path d='M2 12h6' />,
      <path d='M7.8 7.8 12 12' />,
    ],
  },
  'shopping-cart': {
    elements: [
      <path d='M5.5 7h13l-1.5 9h-10z' />,
      <path d='M7 7l-1-4H4' />,
      <circle cx='9' cy='20' r='1' />,
      <circle cx='17' cy='20' r='1' />,
    ],
  },
  check: {
    elements: [<path d='M20 6 9 17l-5-5' />],
  },
  timer: {
    elements: [
      <path d='M10 2h4' />,
      <path d='M12 14v-4' />,
      <path d='M4.93 4.93 7.76 7.76' />,
      <path d='M12 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z' />,
    ],
  },
  twitter: {
    elements: [<path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />],
  },
  'volume-2': {
    elements: [
      <path d='M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z' />,
      <path d='M16 9a5 5 0 0 1 0 6' />,
      <path d='M19.364 18.364a9 9 0 0 0 0-12.728' />,
    ],
  },
  'volume-x': {
    elements: [
      <path d='m16 9 6 6' />,
      <path d='m22 9-6 6' />,
      <path d='M11 5 6 9H3v6h3l5 4V5Z' />,
    ],
  },
  youtube: {
    elements: [
      <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17' />,
      <path d='m10 15 5-3-5-3z' />,
    ],
  },
} satisfies Record<string, IconDefinition>;

type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
} & Omit<JSX.IntrinsicElements['svg'], 'name' | 'width' | 'height'>;

export function Icon({ name, size = 24, strokeWidth = 2, ...rest }: IconProps) {
  const icon = icons[name];

  if (!icon) {
    return null;
  }

  const stroke = icon.stroke === false ? 'none' : icon.stroke ?? 'currentColor';
  const fill = icon.fill ?? (icon.stroke === false ? 'currentColor' : 'none');
  const strokeLinecap = icon.stroke === false ? undefined : icon.strokeLinecap ?? 'round';
  const strokeLinejoin = icon.stroke === false ? undefined : icon.strokeLinejoin ?? 'round';

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={icon.viewBox ?? '0 0 24 24'}
      fill={fill}
      stroke={stroke}
      stroke-width={icon.stroke === false ? undefined : strokeWidth}
      stroke-linecap={strokeLinecap}
      stroke-linejoin={strokeLinejoin}
      {...rest}
    >
      {icon.elements}
    </svg>
  );
}

export type { IconName };
