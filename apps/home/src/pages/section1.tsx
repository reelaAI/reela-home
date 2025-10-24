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
    <section class='fade-in-up container mx-auto px-4 py-20'>
      <div class='relative z-0 mx-auto flex max-w-6xl flex-col items-center overflow-hidden rounded-[42px] border border-white/10 bg-white/5 px-6 py-16 text-center shadow-[0_45px_120px_-70px_rgba(8,9,20,0.9)] backdrop-blur-xl sm:px-10 lg:px-16'>
        <div class='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,0,88,0.18),_transparent_55%)] opacity-70'></div>
        <h1 class='font-inter relative text-balance text-[3.5rem] font-bold leading-tight tracking-tight text-white md:text-[4rem] xl:text-[4.5rem]'>
          Video Creation, <span class='bg-gradient-to-r from-[#ff0058] to-[#7f5bff] bg-clip-text text-transparent'>Automated.</span>
        </h1>
        <p class='font-inter relative mt-6 max-w-3xl text-base text-slate-300 md:text-lg'>
          The first autonomous AI agent that turns any idea into publish-ready videos with AI visuals,
          avatars, dubbing, and smart editing.
        </p>
        <div class='relative mt-12 grid w-full max-w-5xl gap-4 text-left md:grid-cols-3'>
          {heroHighlights.map((highlight) => (
            <div
              key={highlight.title}
              class='flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-[#090b18]/80 p-4 text-left shadow-[0_25px_90px_-70px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[#ff0058]/40 hover:shadow-[0_25px_90px_-55px_rgba(255,0,88,0.55)] md:p-5'
            >
              <div class='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff0058]/10 text-[#ff0058] shadow-[0_10px_30px_-20px_rgba(255,0,88,0.9)]'>
                <Icon
                  name={highlight.icon}
                  className='h-8 w-8'
                />
              </div>
              <p class='text-base font-semibold text-slate-100 md:text-lg'>{highlight.title}</p>
            </div>
          ))}
        </div>
        <div class='mt-10 flex flex-col items-center gap-6'>
          <a
            class='inline-flex items-center justify-center rounded-full bg-[#ff0058] px-8 py-4 text-base font-semibold text-white shadow-[0_25px_70px_-40px_rgba(255,0,88,0.9)] transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0058]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05030d]'
            href='https://app.reela.com/workspace'
          >
            Create with Reela AI
          </a>
        </div>
        <div class='relative mt-14 flex w-full items-center justify-center px-4'>
          <div class='flex flex-wrap items-center justify-center gap-6'>
            <p class='shrink-0 whitespace-nowrap font-medium text-[#ff0058]'>Powered by industry-leading AI models:</p>
            <div class='hidden h-6 border-l border-white/15 md:block'></div>
            <div class='relative max-w-[90vw] overflow-x-hidden md:max-w-2xl'>
              <div class='animate-infinite-scroll mt-10 flex w-[1000%] md:mt-0'>
                {[brands, brands, brands].flat().map((brand, index) => (
                  <div
                    class='mx-8 flex flex-shrink-0 flex-col items-center justify-center gap-2 text-slate-400'
                    key={`${brand.name}-${index}`}
                  >
                    <img
                      alt={`${brand.name} logo`}
                      class='h-8 w-20 object-contain opacity-80 transition-opacity hover:opacity-100'
                      decoding='async'
                      height='32'
                      loading='lazy'
                      src={brand.src}
                      style='color: transparent; filter: brightness(120%) contrast(105%);'
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
