import { Icon, type IconName } from '../components/Icon';

const heroHighlights: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: 'Build Your Avatar IP',
    description: 'Grow your personal brand with consistent talking videos.',
    icon: 'user-round-plus',
  },
  {
    title: 'Promote Your Products',
    description: 'Generate ad-ready videos that sell.',
    icon: 'shopping-bag',
  },
  {
    title: 'Monetize Your Channels',
    description: 'Turn your content into income across every platform.',
    icon: 'coins',
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
        <h1 class='font-inter font-bold leading-tight tracking-tight text-[44px] md:text-[70px]'>
          Turn <span class='text-[#F7265B]'>Products, Ideas &amp; Avatars</span> into
          <span class='text-[#F7265B]'> Profitable Videos</span>
        </h1>
        <p class='font-inter mt-6 max-w-4xl text-[18px] text-gray-600 md:text-[24px]'>
          Create viral-ready videos for TikTok, YouTube, and ads — all powered by Reela’s AI studio.
          From your idea to a finished video in minutes.
        </p>
        <div class='mt-12 grid w-full max-w-5xl gap-6 text-left md:grid-cols-3'>
          {heroHighlights.map((highlight) => (
            <div
              key={highlight.title}
              class='flex h-full flex-col gap-4 rounded-3xl border border-gray-200/70 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg'
            >
              <div class='flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7265B]/10'>
                <Icon
                  name={highlight.icon}
                  size={40}
                  class='h-10 w-10 text-[#F7265B]'
                />
              </div>
              <p class='text-lg font-semibold text-gray-900'>{highlight.title}</p>
              <p class='text-sm text-gray-600'>{highlight.description}</p>
            </div>
          ))}
        </div>
        <div class='mt-10 flex w-full max-w-xs flex-col items-center gap-6 sm:max-w-md'>
          <a
            class='w-full rounded-full bg-[#F7265B] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7265B] focus-visible:ring-offset-2'
            href='https://app.reela.com/workspace'
          >
            Try Reela for Free
          </a>
        </div>
        <div class='mt-14 flex w-full items-center justify-center px-4'>
          <div class='flex flex-wrap items-center justify-center gap-6'>
            <p class='shrink-0 whitespace-nowrap font-medium text-gray-700'>Powered by industry-leading AI models:</p>
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
                      style='color: transparent; filter: brightness(0) saturate(100%) invert(67%) sepia(0%) saturate(0%) hue-rotate(179deg) brightness(94%) contrast(86%);'
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
