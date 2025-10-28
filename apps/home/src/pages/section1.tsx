import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const heroHighlights: Array<{
  title: string;
  description: string;
  icon: IconName;
  accent: string;
  tag: string;
}> = [
  {
    title: 'Build Your Avatar IP',
    description:
      'Design signature digital personas with cinematic fidelity and keep their look consistent across every storyline.',
    icon: 'avatar',
    accent: 'from-[#F7265B] via-[#FF7A99] to-[#FFE5EC]',
    tag: 'Avatar Studio',
  },
  {
    title: 'Promote Your Products',
    description:
      'Generate on-brand launch videos, social teasers, and explainers in minutes with automated scripts and scene layouts.',
    icon: 'analytics',
    accent: 'from-[#7C3AED] via-[#A855F7] to-[#E9D5FF]',
    tag: 'Growth Engine',
  },
  {
    title: 'Monetize Your Channels',
    description:
      'Optimize every upload with AI-driven pacing, subtitles, and CTA experiments tailored to your audience analytics.',
    icon: 'dollar',
    accent: 'from-[#0EA5E9] via-[#38BDF8] to-[#E0F2FE]',
    tag: 'Revenue Lab',
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
              class='group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_24px_100px_rgba(247,38,91,0.18)] md:p-7'
            >
              <div class='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                <div
                  class={`absolute -left-20 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-gradient-to-br ${highlight.accent} opacity-50 blur-3xl`}
                />
                <div
                  class={`absolute -right-16 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${highlight.accent} opacity-40 blur-3xl`}
                />
              </div>
              <div class='relative flex items-center gap-4'>
                <div class={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${highlight.accent} text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)]`}>
                  <Icon
                    name={highlight.icon}
                    className='h-7 w-7'
                  />
                </div>
                <p class='text-sm font-semibold uppercase tracking-[0.2em] text-gray-500'>{highlight.tag}</p>
              </div>
              <p class='relative mt-5 text-lg font-semibold text-gray-900 md:text-2xl'>{highlight.title}</p>
              <p class='relative mt-3 text-sm text-gray-600 md:text-base'>{highlight.description}</p>
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
