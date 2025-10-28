import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const heroHighlights: Array<{
  title: string;
  description: string;
  icon: IconName;
  gradient: string;
  glow: string;
}> = [
  {
    title: 'Build Your Avatar IP',
    description:
      'Craft cinematic, on-brand digital personas that feel alive with studio lighting, motion direction, and expressive AI performances.',
    icon: 'avatar',
    gradient: 'linear-gradient(135deg, #F7265B 0%, #FF8A3D 100%)',
    glow: 'rgba(247, 38, 91, 0.45)',
  },
  {
    title: 'Promote Your Products',
    description:
      'Spin up launch-ready campaigns with multi-scene storyboards, dynamic product spotlights, and instant localization in 30+ languages.',
    icon: 'analytics',
    gradient: 'linear-gradient(135deg, #5D5FEF 0%, #8B5CF6 100%)',
    glow: 'rgba(93, 95, 239, 0.45)',
  },
  {
    title: 'Monetize Your Channels',
    description:
      'Deploy revenue-first content engines that learn audience signals, optimize hooks, and deliver finished edits across every platform.',
    icon: 'dollar',
    gradient: 'linear-gradient(135deg, #00B59C 0%, #4ADE80 100%)',
    glow: 'rgba(0, 181, 156, 0.45)',
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
              class='group relative flex h-full flex-col overflow-hidden rounded-3xl p-[1px] transition-all duration-300 hover:-translate-y-2'
              style={`background-image: ${highlight.gradient}; box-shadow: 0 40px 85px -55px ${highlight.glow};`}
            >
              <div class='relative flex h-full flex-col justify-between gap-6 rounded-[calc(1.5rem-1px)] bg-white/95 p-6 shadow-[0_28px_60px_-45px_rgba(15,23,42,0.38)] backdrop-blur-xl transition-colors duration-300 group-hover:bg-white/75 md:p-7'>
                <div class='flex items-start justify-between gap-4'>
                  <div
                    class='flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-[0_22px_45px_-28px_rgba(15,23,42,0.55)] transition-transform duration-300 group-hover:scale-110'
                    style={`background: ${highlight.gradient};`}
                  >
                    <Icon
                      name={highlight.icon}
                      className='h-7 w-7 text-white'
                    />
                  </div>
                  <span class='rounded-full border border-white/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gray-500 transition-colors duration-300 group-hover:text-gray-700'>
                    Signature Flow
                  </span>
                </div>
                <div class='space-y-3'>
                  <h3 class='text-xl font-semibold leading-tight text-gray-900 md:text-2xl'>
                    {highlight.title}
                  </h3>
                  <p class='text-sm leading-relaxed text-gray-600 md:text-base'>
                    {highlight.description}
                  </p>
                </div>
                <div class='flex items-center gap-3 pt-4'>
                  <div
                    class='h-[2px] w-14 rounded-full transition-all duration-300 group-hover:w-20'
                    style={`background: ${highlight.gradient}; box-shadow: 0 10px 25px -18px ${highlight.glow};`}
                  ></div>
                  <span class='text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-gray-400'>
                    Elevate
                  </span>
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
