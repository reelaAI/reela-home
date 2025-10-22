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
      <h1 class='font-inter mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl'>
        Video Creation,
        <span class='text-brand'> Automated.</span>
      </h1>
      <p class='font-inter mx-auto mt-6 max-w-2xl text-xl text-gray-600'>
        The first autonomous AI agent that turns any idea into publish-ready videos with AI visuals,
        avatars, dubbing, and smart editing.
      </p>
      <div class='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
        <a href='/workspace'>
          <div class='bg-brand ring-offset-background focus-visible:ring-ring inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full px-8 py-6 text-base font-medium text-white transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
            Create with Reela AI
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
