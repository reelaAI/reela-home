import { Icon, ICONS } from '../components/Icon';

const ICON_NAMES = Object.keys(ICONS);

const SIZES: Array<{ label: string; className: string }> = [
  { label: '16px', className: 'size-4' },
  { label: '20px', className: 'size-5' },
  { label: '24px', className: 'size-6' },
  { label: '32px', className: 'size-8' },
];

const COLORS: Array<{ label: string; className: string; description: string }> = [
  { label: 'Default', className: 'text-gray-900', description: 'Inherit current text color.' },
  { label: 'Primary', className: 'text-brand', description: 'Use brand pink for emphasis.' },
  { label: 'Muted', className: 'text-gray-400', description: 'Subtle icons for secondary actions.' },
];

export default function IconsDemo() {
  return (
    <section class='mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16'>
      <header class='space-y-4 text-center'>
        <h1 class='text-4xl font-bold md:text-5xl'>Icon System Demo</h1>
        <p class='mx-auto max-w-2xl text-lg text-gray-600'>
          Consistent sizes and color tokens make lucide icons feel at home across the Reela interface.
        </p>
      </header>

      <div class='grid gap-8 md:grid-cols-2'>
        <article class='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm'>
          <h2 class='text-xl font-semibold text-gray-900'>Standard Sizes</h2>
          <p class='mt-2 text-sm text-gray-500'>
            Apply the utility classes below to render icons at 16, 20, 24, or 32 pixels.
          </p>
          <div class='mt-6 grid gap-4 sm:grid-cols-2'>
            {SIZES.map((size) => (
              <div
                key={size.label}
                class='flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3'
              >
                <div class='flex items-center gap-3'>
                  <Icon name='play' className={`${size.className} text-gray-900`} aria-hidden />
                  <span class='text-sm font-medium text-gray-900'>{size.label}</span>
                </div>
                <code class='rounded-full bg-white px-3 py-1 text-xs text-gray-500'>{size.className}</code>
              </div>
            ))}
          </div>
        </article>

        <article class='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm'>
          <h2 class='text-xl font-semibold text-gray-900'>Brand Colors</h2>
          <p class='mt-2 text-sm text-gray-500'>Use color utilities with currentColor strokes—no fill classes needed.</p>
          <div class='mt-6 space-y-4'>
            {COLORS.map((color) => (
              <div
                key={color.label}
                class='flex items-center justify-between rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3'
              >
                <div class='flex items-center gap-3'>
                  <Icon name='star' className={`size-6 ${color.className}`} aria-hidden />
                  <div>
                    <div class='text-sm font-medium text-gray-900'>{color.label}</div>
                    <p class='text-xs text-gray-500'>{color.description}</p>
                  </div>
                </div>
                <code class='rounded-full bg-white px-3 py-1 text-xs text-gray-500'>{color.className}</code>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article class='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm'>
        <h2 class='text-xl font-semibold text-gray-900'>Available Icons</h2>
        <p class='mt-2 text-sm text-gray-500'>Reference the name below when using &lt;Icon name='…' /&gt;.</p>
        <div class='mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {ICON_NAMES.map((icon) => (
            <div
              key={icon}
              class='flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3'
            >
              <Icon name={icon} className='size-6 text-gray-900' aria-hidden />
              <code class='text-sm text-gray-600'>{icon}</code>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
