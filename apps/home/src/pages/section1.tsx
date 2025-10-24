import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const heroHighlights: Array<{
  title: string;
  icon: IconName;
}> = [
  {
    title: 'Build Your Avatar IP',
    icon: 'avatar',
  },
  {
    title: 'Promote Your Products',
    icon: 'analytics',
  },
  {
    title: 'Monetize Your Channels',
    icon: 'dollar',
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
    <section class='fade-in-up relative z-10 container mx-auto px-4 py-20 text-center text-white'>
      <div class='mx-auto flex max-w-6xl flex-col items-center text-center'>
        <h1 class='font-inter font-bold leading-tight tracking-tight text-[4.5rem] text-balance'>
          Video Creation, <span class='bg-gradient-to-r from-brand/90 via-brand to-brand/70 bg-clip-text text-transparent'>Automated.</span>
        </h1>
        <p class='font-inter mt-6 max-w-4xl text-base text-gray-300 md:text-lg'>
          The first autonomous AI agent that turns any idea into publish-ready videos with AI visuals,
          avatars, dubbing, and smart editing.
        </p>
        <div class='mt-12 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3'>
          {heroHighlights.map((highlight) => (
            <div
              key={highlight.title}
              class='group flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_24px_80px_rgba(255,0,88,0.25)] md:p-5'
            >
              <div class='flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-brand transition-all duration-300 group-hover:bg-brand/30 group-hover:text-white'>
                <Icon
                  name={highlight.icon}
                  className='h-8 w-8'
                />
              </div>
              <p class='text-base font-semibold text-white md:text-lg'>{highlight.title}</p>
            </div>
          ))}
        </div>
        <div class='mt-10 flex flex-col items-center gap-6'>
          <a
            class='inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(255,0,88,0.35)] transition-transform duration-200 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050507]'
            href='https://app.reela.com/workspace'
          >
            Create with Reela AI
          </a>
        </div>
        <div class='mt-14 flex w-full items-center justify-center px-4'>
          <div class='flex flex-wrap items-center justify-center gap-6'>
            <p class='shrink-0 whitespace-nowrap font-medium text-brand'>Powered by industry-leading AI models:</p>
            <div class='hidden h-6 border-l border-white/10 md:block'></div>
            <div class='relative max-w-[90vw] overflow-x-hidden md:max-w-2xl'>
              <div class='animate-infinite-scroll mt-10 flex w-[1000%] md:mt-0'>
                {[brands, brands, brands].flat().map((brand, index) => (
                  <div
                    class='mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-2 text-gray-400'
                    key={`${brand.name}-${index}`}
                  >
                    <img
                      alt={`${brand.name} logo`}
                      class='h-8 w-20 object-contain'
                      decoding='async'
                      height='32'
                      loading='lazy'
                      src={brand.src}
                      style='color: transparent; filter: brightness(0) saturate(100%) invert(100%) sepia(5%) saturate(7072%) hue-rotate(300deg) brightness(95%) contrast(95%);'
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
