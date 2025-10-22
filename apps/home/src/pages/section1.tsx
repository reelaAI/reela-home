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
    <section class='container mx-auto px-4 py-16 text-center'>
      <div class='mx-auto max-w-fit rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-brand'>
        New · Sora-ready cinematic AI by Reela
      </div>
      <h1 class='font-inter mx-auto mt-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight md:text-7xl'>
        Sora-level visuals.
        <span class='text-brand'> Reela-level consistency.</span>
      </h1>
      <p class='font-inter mx-auto mt-6 max-w-3xl text-xl text-gray-600'>
        Launch the upgraded Reela Consistency Engine with multi-image references and direct Sora integration.
        Create long-form campaigns faster, keep every frame on-brand, and outrun the hype with results your team can ship today.
      </p>
      <div class='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
        <a href='/workspace'>
          <div class='bg-brand ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-6 text-base font-medium text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
            Launch Reela for Sora
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-chevron-right ml-1 h-4 w-4 shrink-0'
            >
              <path d='m9 18 6-6-6-6'></path>
            </svg>
          </div>
        </a>
        <a
          class='inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gray-200 px-8 py-6 text-base font-medium text-gray-900 transition-transform hover:scale-105'
          href='#reela-vs-sora'
        >
          See Reela vs. Sora
        </a>
      </div>
      <div class='mt-8 flex flex-col items-center gap-4 text-left sm:flex-row sm:justify-center'>
        <div class='rounded-2xl border border-gray-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur'>
          <p class='text-sm font-semibold uppercase tracking-wide text-gray-500'>Consistency Engine 2.0</p>
          <p class='mt-1 text-lg font-medium text-gray-800'>Reference-locked characters and products in every scene.</p>
        </div>
        <div class='rounded-2xl border border-gray-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur'>
          <p class='text-sm font-semibold uppercase tracking-wide text-gray-500'>Sora Integration</p>
          <p class='mt-1 text-lg font-medium text-gray-800'>Generate cinematic videos up to 10 minutes with Reela automations.</p>
        </div>
        <div class='rounded-2xl border border-gray-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur'>
          <p class='text-sm font-semibold uppercase tracking-wide text-gray-500'>ROI for Teams</p>
          <p class='mt-1 text-lg font-medium text-gray-800'>Up to 65% lower cost per video versus Sora-only workflows.</p>
        </div>
      </div>
      <div class='mt-10 flex items-center justify-center px-4'>
        <div class='flex flex-wrap items-center justify-center gap-6'>
          <p class='shrink-0 whitespace-nowrap font-medium text-gray-700'>
            Trusted by Leading Brands
          </p>
          <div class='hidden h-6 border-l border-gray-300 md:block'></div>
          <div class='relative max-w-[90vw] overflow-x-hidden md:max-w-2xl'>
            <div class='animate-infinite-scroll mt-10 flex w-[1000%] md:mt-0'>
              {[brands, brands, brands].flat().map((b, index) => (
                <div class='mx-8 flex flex-shrink-0 items-center justify-center' key={index}>
                  <img
                    alt='logo'
                    loading='lazy'
                    width='120'
                    height='40'
                    decoding='async'
                    data-nimg='1'
                    class='h-6 object-contain opacity-70 grayscale filter transition-opacity hover:opacity-100'
                    style='color: transparent'
                    src={b}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
