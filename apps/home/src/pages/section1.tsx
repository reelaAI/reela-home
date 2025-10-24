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
    <section class='fade-in-up relative overflow-hidden'>
      <div class='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1e1e2a_0%,#07070c_55%,#050505_100%)] opacity-90'></div>
      <div class='container mx-auto px-4 py-24 text-center'>
        <div class='mx-auto flex max-w-6xl flex-col items-center text-center'>
          <h1 class='font-inter text-balance font-bold leading-tight tracking-tight text-[3.5rem] text-white md:text-[4.5rem]'>
            Video Creation, <span class='bg-gradient-to-r from-brand via-[#ff4f86] to-brand bg-clip-text text-transparent'>Automated.</span>
          </h1>
          <p class='font-inter mt-6 max-w-4xl text-base text-slate-300 md:text-lg'>
            The first autonomous AI agent that turns any idea into publish-ready videos with AI visuals,
            avatars, dubbing, and smart editing.
          </p>
          <div class='mt-12 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3'>
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.title}
                class='group relative flex h-full items-center gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-[0_40px_120px_rgba(255,0,88,0.25)]'
              >
                <div class='flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/20 transition-colors duration-300 group-hover:bg-brand group-hover:text-white'>
                  <Icon
                    name={highlight.icon}
                    className='h-6 w-6'
                  />
                </div>
                <p class='text-base font-semibold text-slate-100 md:text-lg'>{highlight.title}</p>
                <div class='pointer-events-none absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100' style='background: radial-gradient(circle at top left, rgba(255,0,88,0.35), transparent 60%);'></div>
              </div>
            ))}
          </div>
          <div class='mt-10 flex flex-col items-center gap-6'>
            <a
              class='inline-flex items-center justify-center rounded-full bg-brand px-10 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(255,0,88,0.35)] transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_0_45px_rgba(255,0,88,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f15]'
              href='https://app.reela.com/workspace'
            >
              Create with Reela AI
            </a>
          </div>
          <div class='mt-16 flex w-full items-center justify-center px-4'>
            <div class='flex flex-wrap items-center justify-center gap-6 text-slate-300'>
              <p class='shrink-0 whitespace-nowrap font-medium text-brand'>Powered by industry-leading AI models:</p>
              <div class='hidden h-6 border-l border-white/20 md:block'></div>
              <div class='relative max-w-[90vw] overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-4 md:max-w-2xl md:px-10'>
                <div class='animate-infinite-scroll flex w-[1000%] items-center gap-14'>
                  {[brands, brands, brands].flat().map((brand, index) => (
                    <div
                      class='flex flex-shrink-0 flex-col items-center justify-center gap-2 text-slate-400'
                      key={`${brand.name}-${index}`}
                    >
                      <img
                        alt={`${brand.name} logo`}
                        class='h-8 w-20 object-contain opacity-80 transition-opacity duration-200 hover:opacity-100'
                        decoding='async'
                        height='32'
                        loading='lazy'
                        src={brand.src}
                        style='color: transparent; filter: brightness(0) saturate(100%) invert(83%) sepia(2%) saturate(800%) hue-rotate(305deg) brightness(105%) contrast(95%);'
                        width='80'
                      />
                      <span class='text-[10px] font-medium uppercase tracking-wide'>{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
