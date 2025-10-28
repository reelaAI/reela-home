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
              class='group relative flex h-full items-stretch overflow-hidden rounded-[32px] bg-gradient-to-br from-[#F7265B]/18 via-white/60 to-[#0F172A]/10 p-[1px] shadow-[0_25px_55px_-35px_rgba(15,23,42,0.85)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_35px_75px_-30px_rgba(15,23,42,0.75)]'
            >
              <div class='relative flex h-full w-full items-center gap-5 rounded-[30px] bg-white/95 p-5 pr-6 md:p-6'>
                <div class='relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#F7265B] via-[#ff6f94] to-[#ff3f6c] p-[2px] shadow-[0_18px_30px_-18px_rgba(247,38,91,0.8)] transition-transform duration-300 group-hover:scale-105'>
                  <div class='flex h-full w-full items-center justify-center rounded-[26px] bg-white/90 text-[#F7265B]'>
                    <Icon
                      name={highlight.icon}
                      className='h-7 w-7 text-[#F7265B]'
                    />
                  </div>
                  <div class='absolute inset-0 -z-10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60' />
                </div>
                <p class='text-base font-semibold leading-snug text-gray-900 md:text-lg'>
                  {highlight.title}
                </p>
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
