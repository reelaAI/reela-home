const heroHighlights = [
  {
    title: 'Build Your Avatar IP',
    description: 'Grow your personal brand with consistent talking videos.',
    icon: (
      <svg
        class='h-10 w-10 text-[#F7265B]'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='18' cy='16' r='8' stroke='currentColor' stroke-width='2.5'></circle>
        <path
          d='M6 38c1.4-7.2 6.4-11 12-11s10.6 3.8 12 11'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linecap='round'
        ></path>
        <path
          d='M34 12v9m0 0 4-4m-4 4-4-4'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
  },
  {
    title: 'Promote Your Products',
    description: 'Generate ad-ready videos that sell.',
    icon: (
      <svg
        class='h-10 w-10 text-[#F7265B]'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          x='6'
          y='10'
          width='18'
          height='28'
          rx='4'
          stroke='currentColor'
          stroke-width='2.5'
        ></rect>
        <path
          d='M32 14h10v8h-10z'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linejoin='round'
        ></path>
        <path
          d='M32 26h10l-2 8H32z'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linejoin='round'
        ></path>
        <path d='M12 20h6M12 26h6M12 32h6' stroke='currentColor' stroke-width='2.5' stroke-linecap='round'></path>
      </svg>
    ),
  },
  {
    title: 'Monetize Your Channels',
    description: 'Turn your content into income across every platform.',
    icon: (
      <svg
        class='h-10 w-10 text-[#F7265B]'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='16' cy='30' r='10' stroke='currentColor' stroke-width='2.5'></circle>
        <path
          d='M16 22v16'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linecap='round'
        ></path>
        <path
          d='M11 27c1.4-1.5 3.6-2.5 5-.9 1.3 1.4.2 3.4-1.8 4.1-1.9.7-3.4 1.8-2.6 3.6.9 2.1 4.1 2.2 6.4.3'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linecap='round'
        ></path>
        <path
          d='M28 14h14m-7-7v14'
          stroke='currentColor'
          stroke-width='2.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
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
                {highlight.icon}
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
