import { Icon } from '../components/Icon';
import type { IconName } from '../components/Icon';

const ICON_SET: IconName[] = [
  'arrow-right',
  'arrow-up-right',
  'sparkles',
  'monitor-play',
  'shopping-cart',
  'timer',
  'boxes',
  'layers',
  'globe',
  'aspect-ratio',
  'languages',
  'music',
  'palette',
  'volume-2',
  'volume-x',
  'check',
  'brand-x',
  'youtube',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'expand',
  'panel-right-open',
  'play',
];

const SIZES = [16, 20, 24, 32] as const;

const COLOR_VARIANTS = [
  { name: 'Default', className: 'text-gray-900', description: 'Inherits surrounding text color.' },
  { name: 'Primary', className: 'text-brand', description: 'Uses the brand token for emphasis.' },
  { name: 'Muted', className: 'text-gray-400', description: 'Subtle presentation for supporting UI.' },
] as const;

export default function IconsDemo() {
  return (
    <section class='container mx-auto flex flex-col gap-12 px-4 py-16'>
      <header class='space-y-4 text-center'>
        <p class='inline-flex rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600'>
          Icon System
        </p>
        <h1 class='text-3xl font-bold text-gray-900 md:text-4xl'>
          Thin-Line Icon Demo
        </h1>
        <p class='mx-auto max-w-2xl text-sm text-gray-600 md:text-base'>
          All icons inherit <code>currentColor</code>, default to 24px, and use 1.5px strokes with rounded corners.
          Use this page to preview sizing and color tokens applied consistently across the site.
        </p>
      </header>

      <section aria-labelledby='icon-sizes'>
        <div class='flex items-center justify-between gap-4'>
          <h2 id='icon-sizes' class='text-2xl font-semibold text-gray-900'>
            Size Scale
          </h2>
          <p class='text-sm text-gray-500'>Each card demonstrates the same icons rendered at the specified size token.</p>
        </div>
        <div class='mt-6 grid gap-6 md:grid-cols-2'>
          {SIZES.map((size) => (
            <div key={size} class='rounded-2xl border border-gray-200 bg-white p-6 shadow-sm'>
              <div class='flex items-center justify-between'>
                <span class='text-sm font-medium text-gray-700'>{size}px</span>
                <span class='text-xs uppercase tracking-wide text-gray-400'>Size token</span>
              </div>
              <div class='mt-4 flex flex-wrap gap-4'>
                {ICON_SET.map((icon) => (
                  <figure key={`${icon}-${size}`} class='flex w-20 flex-col items-center gap-2 text-center'>
                    <Icon name={icon} size={size} aria-hidden='true' />
                    <figcaption class='text-[10px] uppercase tracking-wide text-gray-400'>{icon}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby='icon-colors'>
        <div class='flex items-center justify-between gap-4'>
          <h2 id='icon-colors' class='text-2xl font-semibold text-gray-900'>
            Color Tokens
          </h2>
          <p class='text-sm text-gray-500'>Icons adopt semantic colors and retain AA contrast across hover, focus, and active states.</p>
        </div>
        <div class='mt-6 grid gap-6 md:grid-cols-3'>
          {COLOR_VARIANTS.map((variant) => (
            <div
              key={variant.name}
              class='flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm'
            >
              <div class='space-y-1'>
                <h3 class='text-lg font-semibold text-gray-900'>{variant.name}</h3>
                <p class='text-xs text-gray-500'>{variant.description}</p>
              </div>
              <div class={`flex flex-wrap items-center justify-center gap-4 ${variant.className}`}>
                {ICON_SET.slice(0, 8).map((icon) => (
                  <Icon key={`${variant.name}-${icon}`} name={icon} size={24} aria-hidden='true' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

