import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const heroHighlights: Array<{
  title: string;
  description: string;
  badge: string;
  icon: IconName;
  accentColor: string;
  accentLight: string;
  accentBorder: string;
}> = [
  {
    title: 'Build Your Avatar IP',
    description:
      'Craft photorealistic digital hosts with adaptive voices, emotive gestures, and cinematic lighting tuned to your story.',
    badge: 'Signature Avatars',
    icon: 'avatar',
    accentColor: '#F7265B',
    accentLight: 'rgba(247, 38, 91, 0.14)',
    accentBorder: 'rgba(247, 38, 91, 0.32)',
  },
  {
    title: 'Promote Your Products',
    description:
      'Launch dynamic product spots in minutes with layered motion graphics, brand kits, and multi-language localization.',
    badge: 'Campaign Studio',
    icon: 'analytics',
    accentColor: '#4B14F7',
    accentLight: 'rgba(75, 20, 247, 0.12)',
    accentBorder: 'rgba(75, 20, 247, 0.28)',
  },
  {
    title: 'Monetize Your Channels',
    description:
      'Automate shorts, livestream highlights, and membership content with predictive scheduling and performance insights.',
    badge: 'Revenue Engine',
    icon: 'dollar',
    accentColor: '#0EA5E9',
    accentLight: 'rgba(14, 165, 233, 0.14)',
    accentBorder: 'rgba(14, 165, 233, 0.3)',
  },
];

const Section1 = () => {
  const brands = [
    { src: 'https://files.reela.com/assets/images/claude.png', name: 'Claude' },
    { src: 'https://files.reela.com/assets/images/elevenlabs.png', name: 'Elevenlabs' },
    { src: 'https://files.reela.com/assets/images/flux.png', name: 'Flux' },
    { src: 'https://files.reela.com/assets/images/gemini.png', name: 'Gemini' },
    { src: 'https://files.reela.com/assets/images/jimeng.png', name: 'Jimeng' },
    { src: 'https://files.reela.com/assets/images/kling.png', name: 'Kling' },
    { src: 'https://files.reela.com/assets/images/meta.png', name: 'Meta' },
    { src: 'https://files.reela.com/assets/images/microsoft.png', name: 'Microsoft' },
    { src: 'https://files.reela.com/assets/images/midjourney.png', name: 'Midjourney' },
    { src: 'https://files.reela.com/assets/images/openai.png', name: 'Openai' },
    { src: 'https://files.reela.com/assets/images/runway.png', name: 'Runway' },
    { src: 'https://files.reela.com/assets/images/sora.png', name: 'Sora' },
    { src: 'https://files.reela.com/assets/images/suno.png', name: 'Suno' },
    { src: 'https://files.reela.com/assets/images/vidu.png', name: 'Vidu' },
    { src: 'https://files.reela.com/assets/images/volcengine.png', name: 'Volcengine' },
    { src: 'https://files.reela.com/assets/images/bytedance.png', name: 'Bytedance' },
  ];

  return (
    <section class='fade-in-up container mx-auto px-4 py-20 text-center'>
      <div class='mx-auto flex max-w-6xl flex-col items-center text-center'>
        <h1 class='font-inter font-bold leading-tight tracking-tight text-[4.5rem]'>
          Video Creation, <span class='text-[#F7265B]'>Automated.</span>
        </h1>
        <p class='font-inter mt-6 max-w-4xl text-base text-gray-600 md:text-lg'>
          The first autonomous AI agent that turns any idea into publish-ready videos with AI visuals,
          avatars, dubbing, and smart editing.
        </p>
        <div class='mt-12 grid w-full max-w-5xl gap-6 text-left md:grid-cols-3'>
          {heroHighlights.map((highlight) => (
            <div
              key={highlight.title}
              class='group relative flex h-full'
              style={`--accent-color:${highlight.accentColor}; --accent-light:${highlight.accentLight}; --accent-border:${highlight.accentBorder};`}
            >
              <div
                class='pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition duration-300 group-hover:opacity-100'
                style='background: radial-gradient(120% 120% at 100% 0%, var(--accent-color) 0%, transparent 65%); filter: blur(0px);'
              ></div>
              <div class='relative flex h-full flex-col gap-5 rounded-[28px] border border-white/70 bg-white/95 p-6 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.6)] backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:border-white group-hover:shadow-[0_28px_65px_-18px_rgba(15,23,42,0.55)]'>
                <span
                  class='inline-flex w-fit items-center rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gray-600 transition duration-300 group-hover:text-gray-700'
                  style='color: var(--accent-color); background-color: var(--accent-light); border: 1px solid var(--accent-border); letter-spacing: 0.24em;'
                >
                  {highlight.badge}
                </span>
                <div class='flex items-start gap-4'>
                  <div
                    class='flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-300'
                    style='
                      border-color: var(--accent-border);
                      background: var(--accent-light);
                      color: var(--accent-color);
                      box-shadow: 0 18px 40px -24px var(--accent-color);
                    '
                  >
                    <Icon
                      name={highlight.icon}
                      className='h-7 w-7'
                    />
                  </div>
                  <div class='flex flex-col gap-3'>
                    <h3 class='text-lg font-semibold text-gray-900 md:text-xl'>{highlight.title}</h3>
                    <p class='text-sm leading-relaxed text-gray-600 md:text-base'>
                      {highlight.description}
                    </p>
                  </div>
                </div>
                <div class='mt-auto flex items-center gap-2 text-xs font-medium text-gray-500'>
                  <span
                    class='h-px flex-1 rounded-full'
                    style='background: linear-gradient(90deg, var(--accent-light) 0%, #E5E7EB 55%, rgba(229, 231, 235, 0) 100%);'
                  ></span>
                  <span>Tap into intelligent automation</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class='mt-10 flex flex-col items-center gap-6'>
          <a
            class='inline-flex items-center justify-center rounded-full bg-[#F7265B] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7265B] focus-visible:ring-offset-2'
            href='https://app.reela.com/workspace'
          >
            Create with Reela AI
          </a>
        </div>
        <div class='mt-14 flex w-full items-center justify-center px-4'>
          <div class='flex flex-wrap items-center justify-center gap-6'>
            <p class='shrink-0 whitespace-nowrap font-medium text-[#F7265B]'>Powered by industry-leading AI models:</p>
            <div class='hidden h-6 border-l border-gray-300 md:block'></div>
            <div class='relative max-w-[90vw] overflow-x-hidden md:max-w-2xl'>
              <div class='animate-infinite-scroll mt-10 flex w-[1000%] md:mt-0'>
                {[brands, brands, brands].flat().map((brand, index) => (
                  <div
                    class='mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-2 text-[#AAAAAA]'
                    key={`${brand.name}-${index}`}
                  >
                    <img
                      alt={`${brand.name} logo`}
                      class='h-8 w-20 object-contain'
                      decoding='async'
                      height='32'
                      loading='lazy'
                      src={brand.src}
                      style='color: transparent; filter: brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(179deg) brightness(85%) contrast(95%);'
                      width='80'
                    />
                    <span class='text-xs font-medium'>{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
