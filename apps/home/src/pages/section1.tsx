import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const heroHighlights: Array<{
  title: string;
  icon: IconName;
  description: string;
  badge: string;
  badgeClass: string;
  borderClass: string;
  iconClass: string;
  dotClass: string;
  caption: string;
}> = [
  {
    title: 'Build Your Avatar IP',
    icon: 'avatar',
    description:
      'Design signature digital humans with cinematic lighting presets, animation-ready rigs, and perpetual usage rights — all generated in minutes.',
    badge: 'Signature Identity',
    badgeClass: 'text-[#F7265B]',
    borderClass: 'from-[#F7265B] via-[#FF8A99] to-[#FFE3ED]',
    iconClass: 'from-[#F7265B]/15 via-[#FF8A99]/20 to-[#FFE3ED]/30 text-[#F7265B]',
    dotClass: 'bg-[#F7265B]',
    caption: 'Custom looks • Consistent quality',
  },
  {
    title: 'Promote Your Products',
    icon: 'analytics',
    description:
      'Automate product storytelling with data-driven scripts, AI presenters, and localized assets that stay on-brand for every launch.',
    badge: 'Campaign Engine',
    badgeClass: 'text-[#5B3DF7]',
    borderClass: 'from-[#5B3DF7] via-[#8A6CFF] to-[#E3E1FF]',
    iconClass: 'from-[#5B3DF7]/15 via-[#8A6CFF]/20 to-[#E3E1FF]/30 text-[#5B3DF7]',
    dotClass: 'bg-[#5B3DF7]',
    caption: 'Omni-channel promos • Localized at scale',
  },
  {
    title: 'Monetize Your Channels',
    icon: 'dollar',
    description:
      'Launch monetizable video funnels with adaptive AI hosts, automated offers, and channel-specific optimization baked in.',
    badge: 'Revenue Suite',
    badgeClass: 'text-[#0BAE7A]',
    borderClass: 'from-[#0BAE7A] via-[#5CD6AE] to-[#E3FFF4]',
    iconClass: 'from-[#0BAE7A]/15 via-[#5CD6AE]/20 to-[#E3FFF4]/30 text-[#0BAE7A]',
    dotClass: 'bg-[#0BAE7A]',
    caption: 'Smart conversion loops • Subscription-ready',
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
              class={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${highlight.borderClass} p-[1px] shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_32px_80px_-44px_rgba(15,23,42,0.65)]`}
            >
              <div class='flex h-full flex-col gap-6 rounded-[26px] bg-white/95 p-6 backdrop-blur-sm md:p-7'>
                <div class='flex items-start justify-between gap-4'>
                  <div class='flex flex-col gap-2'>
                    <span class={`text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 ${highlight.badgeClass}`}>
                      {highlight.badge}
                    </span>
                    <h3 class='text-xl font-semibold leading-tight text-gray-900 md:text-[1.35rem]'>
                      {highlight.title}
                    </h3>
                  </div>
                  <div class={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.iconClass}`}>
                    <Icon
                      name={highlight.icon}
                      className='h-7 w-7'
                    />
                  </div>
                </div>
                <p class='text-sm leading-relaxed text-gray-600 md:text-base'>
                  {highlight.description}
                </p>
                <div class='mt-auto flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-gray-400 md:text-[0.72rem]'>
                  <span class={`inline-flex h-2 w-2 rounded-full ${highlight.dotClass}`}></span>
                  <span class='text-gray-500'>{highlight.caption}</span>
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
