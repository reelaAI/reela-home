import { h } from 'hono/jsx';

export type IconName = keyof typeof ICONS;

export type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  class?: string;
  className?: string;
} & Omit<h.JSX.SVGAttributes, 'width' | 'height' | 'stroke-width' | 'stroke-linecap' | 'stroke-linejoin'>;

type IconDefinition = {
  viewBox?: string;
  strokeWidth?: number;
  stroke?: string;
  fill?: string;
  children: Array<{
    tag: 'path' | 'circle' | 'line' | 'polyline' | 'rect';
    attrs: Record<string, unknown>;
  }>;
};

export function Icon({
  name,
  size = 24,
  strokeWidth,
  class: classProp,
  className,
  ...rest
}: IconProps) {
  const icon = ICONS[name];

  if (!icon) {
    return null;
  }

  const combinedClass = [classProp, className].filter(Boolean).join(' ') || undefined;

  const resolvedStrokeWidth = strokeWidth ?? icon.strokeWidth ?? 2;
  const stroke = icon.stroke ?? 'currentColor';
  const fill = icon.fill ?? 'none';
  const viewBox = icon.viewBox ?? '0 0 24 24';

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      stroke-width={resolvedStrokeWidth}
      stroke-linecap='round'
      stroke-linejoin='round'
      class={combinedClass}
      {...rest}
    >
      {icon.children.map((child, index) => {
        switch (child.tag) {
          case 'circle':
            return <circle key={index} {...child.attrs} />;
          case 'line':
            return <line key={index} {...child.attrs} />;
          case 'polyline':
            return <polyline key={index} {...child.attrs} />;
          case 'rect':
            return <rect key={index} {...child.attrs} />;
          default:
            return <path key={index} {...child.attrs} />;
        }
      })}
    </svg>
  );
}

const ICONS: Record<string, IconDefinition> = {
  'user-round-plus': {
    viewBox: '0 0 48 48',
    strokeWidth: 2.5,
    children: [
      { tag: 'circle', attrs: { cx: 18, cy: 16, r: 8 } },
      {
        tag: 'path',
        attrs: {
          d: 'M6 38c1.4-7.2 6.4-11 12-11s10.6 3.8 12 11',
        },
      },
      {
        tag: 'path',
        attrs: {
          d: 'M34 12v9m0 0 4-4m-4 4-4-4',
        },
      },
    ],
  },
  'shopping-bag': {
    viewBox: '0 0 48 48',
    strokeWidth: 2.5,
    children: [
      {
        tag: 'rect',
        attrs: { x: 6, y: 10, width: 18, height: 28, rx: 4 },
      },
      {
        tag: 'path',
        attrs: { d: 'M32 14h10v8H32z' },
      },
      {
        tag: 'path',
        attrs: { d: 'M32 26h10l-2 8H32z' },
      },
      {
        tag: 'path',
        attrs: { d: 'M12 20h6M12 26h6M12 32h6', strokeLinecap: 'round' },
      },
    ],
  },
  coins: {
    viewBox: '0 0 48 48',
    strokeWidth: 2.5,
    children: [
      { tag: 'circle', attrs: { cx: 16, cy: 30, r: 10 } },
      { tag: 'path', attrs: { d: 'M16 22v16', strokeLinecap: 'round' } },
      {
        tag: 'path',
        attrs: {
          d: 'M11 27c1.4-1.5 3.6-2.5 5-.9 1.3 1.4.2 3.4-1.8 4.1-1.9.7-3.4 1.8-2.6 3.6.9 2.1 4.1 2.2 6.4.3',
          strokeLinecap: 'round',
        },
      },
      { tag: 'path', attrs: { d: 'M28 14h14m-7-7v14', strokeLinecap: 'round', strokeLinejoin: 'round' } },
    ],
  },
  timer: {
    children: [
      { tag: 'path', attrs: { d: 'M10 2h4' } },
      { tag: 'path', attrs: { d: 'M12 14v-4' } },
      { tag: 'path', attrs: { d: 'M4.93 4.93 7.76 7.76' } },
      { tag: 'path', attrs: { d: 'M12 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z' } },
    ],
  },
  sparkles: {
    children: [
      { tag: 'path', attrs: { d: 'M12 3v6' } },
      { tag: 'path', attrs: { d: 'M16.2 7.8 12 12' } },
      { tag: 'path', attrs: { d: 'M22 12h-6' } },
      { tag: 'path', attrs: { d: 'M18.2 16.2 12 12' } },
      { tag: 'path', attrs: { d: 'M12 18v-6' } },
      { tag: 'path', attrs: { d: 'M7.8 16.2 12 12' } },
      { tag: 'path', attrs: { d: 'M2 12h6' } },
      { tag: 'path', attrs: { d: 'M7.8 7.8 12 12' } },
    ],
  },
  boxes: {
    children: [
      { tag: 'path', attrs: { d: 'M3 7.5V21l9 2 9-2V7.5' } },
      { tag: 'path', attrs: { d: 'M3 7.5 12 10l9-2.5' } },
      { tag: 'path', attrs: { d: 'M12 10v13' } },
      { tag: 'path', attrs: { d: 'm7.5 4.27 4.5 1.23 4.5-1.23L12 3Z' } },
    ],
  },
  layers: {
    children: [
      { tag: 'path', attrs: { d: 'm12.17 5.5 6.94 3.47-7.11 3.46-6.87-3.44 7.04-3.49a.5.5 0 0 1 .43 0Z' } },
      { tag: 'path', attrs: { d: 'm3.96 10.91 7.04 3.58' } },
      { tag: 'path', attrs: { d: 'm14.87 14.5 5.16-2.62' } },
      { tag: 'path', attrs: { d: 'M3.96 15.81 11 19' } },
      { tag: 'path', attrs: { d: 'm14.87 19 5.16-2.62' } },
    ],
  },
  'arrow-right': {
    children: [
      { tag: 'line', attrs: { x1: 5, y1: 12, x2: 19, y2: 12 } },
      { tag: 'polyline', attrs: { points: '12 5 19 12 12 19' } },
    ],
  },
  'arrow-up-right': {
    children: [
      { tag: 'polyline', attrs: { points: '7 7 17 7 17 17' } },
      { tag: 'line', attrs: { x1: 7, y1: 17, x2: 17, y2: 7 } },
    ],
  },
  globe: {
    children: [
      { tag: 'circle', attrs: { cx: 12, cy: 12, r: 10 } },
      { tag: 'path', attrs: { d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' } },
      { tag: 'path', attrs: { d: 'M2 12h20' } },
    ],
  },
  ratio: {
    children: [
      { tag: 'rect', attrs: { width: 12, height: 20, x: 6, y: 2, rx: 2 } },
      { tag: 'rect', attrs: { width: 20, height: 12, x: 2, y: 6, rx: 2 } },
    ],
  },
  languages: {
    children: [
      { tag: 'path', attrs: { d: 'm5 8 6 6' } },
      { tag: 'path', attrs: { d: 'm4 14 6-6 2-3' } },
      { tag: 'path', attrs: { d: 'M2 5h12' } },
      { tag: 'path', attrs: { d: 'M7 2h1' } },
      { tag: 'path', attrs: { d: 'm22 22-5-10-5 10' } },
      { tag: 'path', attrs: { d: 'M14 18h6' } },
    ],
  },
  music: {
    viewBox: '0 0 24 24',
    children: [
      { tag: 'path', attrs: { d: 'M9 18V5l12-2v13' } },
      { tag: 'circle', attrs: { cx: 6, cy: 18, r: 3 } },
      { tag: 'circle', attrs: { cx: 18, cy: 16, r: 3 } },
    ],
  },
  palette: {
    viewBox: '0 0 24 24',
    children: [
      { tag: 'circle', attrs: { cx: 13.5, cy: 6.5, r: 0.5, fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: 17.5, cy: 10.5, r: 0.5, fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: 8.5, cy: 7.5, r: 0.5, fill: 'currentColor', stroke: 'none' } },
      { tag: 'circle', attrs: { cx: 6.5, cy: 12.5, r: 0.5, fill: 'currentColor', stroke: 'none' } },
      {
        tag: 'path',
        attrs: {
          d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z',
        },
      },
    ],
  },
  'volume-2': {
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z',
        },
      },
      { tag: 'path', attrs: { d: 'M16 9a5 5 0 0 1 0 6' } },
      { tag: 'path', attrs: { d: 'M19.364 18.364a9 9 0 0 0 0-12.728' } },
    ],
  },
  'volume-x': {
    children: [
      {
        tag: 'path',
        attrs: { d: 'M11 5 6 9H2v6h4l5 4z' },
      },
      { tag: 'path', attrs: { d: 'm19 9-4 4' } },
      { tag: 'path', attrs: { d: 'm15 9 4 4' } },
    ],
  },
  'volume-on': {
    children: [
      {
        tag: 'path',
        attrs: { d: 'M11 5 6 9H3v6h3l5 4V5Z' },
      },
      { tag: 'path', attrs: { d: 'M19 5c1.5 2 1.5 12 0 14' } },
      { tag: 'path', attrs: { d: 'M15.5 8.5c.75 1 1 6.5 0 7.5' } },
    ],
  },
  'volume-off': {
    children: [
      { tag: 'path', attrs: { d: 'm16 9 6 6' } },
      { tag: 'path', attrs: { d: 'm22 9-6 6' } },
      { tag: 'path', attrs: { d: 'M11 5 6 9H3v6h3l5 4V5Z' } },
    ],
  },
  play: {
    viewBox: '0 0 24 24',
    stroke: 'none',
    fill: 'currentColor',
    children: [{ tag: 'path', attrs: { d: 'm9 7 8 5-8 5V7z' } }],
  },
  'shopping-cart': {
    children: [
      { tag: 'path', attrs: { d: 'M5.5 7h13l-1.5 9h-10z' } },
      { tag: 'path', attrs: { d: 'M7 7l-1-4H4' } },
      { tag: 'circle', attrs: { cx: 9, cy: 20, r: 1 } },
      { tag: 'circle', attrs: { cx: 17, cy: 20, r: 1 } },
    ],
  },
  'video-play': {
    children: [
      { tag: 'path', attrs: { d: 'm10 15 5.19-3L10 9v6Z' } },
      { tag: 'rect', attrs: { width: 20, height: 14, x: 2, y: 5, rx: 2 } },
    ],
  },
  'share-2': {
    children: [
      { tag: 'path', attrs: { d: 'M16 3h5v5' } },
      { tag: 'path', attrs: { d: 'M8 21H3v-5' } },
      { tag: 'path', attrs: { d: 'M16 8 5 19' } },
    ],
  },
  'building-2': {
    children: [
      { tag: 'path', attrs: { d: 'M4 4h16v16H4z' } },
      { tag: 'path', attrs: { d: 'M9 4v16' } },
      { tag: 'path', attrs: { d: 'm15 10-2 2 2 2' } },
    ],
  },
  'chevron-down': {
    children: [{ tag: 'polyline', attrs: { points: '6 9 12 15 18 9' } }],
  },
  'chevron-left': {
    children: [{ tag: 'polyline', attrs: { points: '15 18 9 12 15 6' } }],
  },
  'chevron-right': {
    children: [{ tag: 'polyline', attrs: { points: '9 18 15 12 9 6' } }],
  },
  'arrow-right-long': {
    children: [
      { tag: 'path', attrs: { d: 'M5 12h14' } },
      { tag: 'path', attrs: { d: 'm12 5 7 7-7 7' } },
    ],
  },
  'twitter-icon': {
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
        },
      },
    ],
  },
  'youtube-icon': {
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17',
        },
      },
      { tag: 'path', attrs: { d: 'm10 15 5-3-5-3z' } },
    ],
  },
};

