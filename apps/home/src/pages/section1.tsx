const features = [
  {
    title: 'AI Avatars that speak, sell, and scale your content',
    description:
      'Launch branded hosts in any language and keep their voice, tone, and styling consistent across every drop.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0v4.5a3.5 3.5 0 0 1-3.5 3.5H6.8'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M18 8.5v2.25M18 14v1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='M20.5 9.75H18M20 15.5h-2' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
  {
    title: 'Product-consistent video generation that keeps every detail accurate',
    description:
      'Upload SKU shots, swatches, and packaging—Reela keeps colors, materials, and copy aligned from intro to outro.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m4 7 8-4 8 4v7l-8 4-8-4z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='m12 3v14' stroke-linecap='round' stroke-linejoin='round'></path>
        <path d='m4 14 8 4 8-4' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
  {
    title: 'Multi-reference & multimodal support for avatars, scenes, and footage',
    description:
      'Blend live-action clips, AI-generated visuals, and multiple talent references with continuity baked in.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 7.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM11 16l-2 4'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M11 16H3l2-4h4zM14.5 5.5h6M17.5 2.5v6M21 20a3.5 3.5 0 1 1-3.5-3.5A3.5 3.5 0 0 1 21 20z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
  },
  {
    title: 'Publish-ready exports for TikTok, YouTube, and Instagram',
    description:
      'Render vertical, square, and widescreen edits simultaneously—each with captions, hooks, and music locked.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 4h6v16H5zM13 7h6v10h-6z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='M5 13h6M13 11h6' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
];

const Section1 = () => {
  const brands = [
    '/brands/meta.png',
    '/brands/amazon.png',
    '/brands/google.png',
    '/brands/netflix.png',
    '/brands/opt.svg',
    '/brands/pias.png',
    '/brands/microsoft.png',
    '/brands/byteplus.svg',
  ];

  return (
    <section class='fade-in-up container mx-auto px-4 py-20 text-center'>
      <div class='mx-auto flex max-w-6xl flex-col items-center text-center'>
        <h1 class='font-inter font-bold leading-tight tracking-tight text-[44px] md:text-[70px]'>
          Turn Products, Ideas &amp; Avatars into Profitable Videos — Instantly.
        </h1>
        <p class='font-inter mt-6 max-w-4xl text-[18px] text-gray-600 md:text-[24px]'>
          Reela 2.0 combines AI avatars, product references, and smart scene generation to create
          monetizable videos in minutes — for creators, sellers, and brands who want growth without
          production limits.
        </p>
        <div class='mt-10 grid w-full max-w-5xl gap-4 text-left sm:grid-cols-2'>
          {features.map((feature) => (
            <div
              key={feature.title}
              class='flex h-full flex-col gap-3 rounded-3xl border border-gray-200/70 bg-white/80 p-6 text-left shadow-sm backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg'
            >
              <div class='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7265B]/10'>
                {feature.icon}
              </div>
              <p class='text-lg font-semibold text-gray-900'>{feature.title}</p>
              <p class='text-sm text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
        <div class='mt-10 flex w-full max-w-xs flex-col items-center gap-6 sm:max-w-md'>
          <a
            class='w-full rounded-full bg-[#F7265B] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7265B] focus-visible:ring-offset-2'
            href='https://app.reela.com/workspace'
          >
            Create with Reela AI
          </a>
        </div>
        <div class='mt-14 flex w-full items-center justify-center px-4'>
          <div class='flex flex-wrap items-center justify-center gap-6'>
            <p class='shrink-0 whitespace-nowrap font-medium text-gray-700'>Trusted by Leading Brands</p>
            <div class='hidden h-6 border-l border-gray-300 md:block'></div>
            <div class='relative max-w-[90vw] overflow-x-hidden md:max-w-2xl'>
              <div class='animate-infinite-scroll mt-10 flex w-[1000%] md:mt-0'>
                {[brands, brands, brands].flat().map((b, index) => (
                  <div class='mx-8 flex flex-shrink-0 items-center justify-center' key={`${b}-${index}`}>
                    <img
                      alt='logo'
                      class='h-6 object-contain opacity-70 grayscale transition-opacity hover:opacity-100'
                      decoding='async'
                      height='40'
                      loading='lazy'
                      src={b}
                      style='color: transparent'
                      width='120'
                    />
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
