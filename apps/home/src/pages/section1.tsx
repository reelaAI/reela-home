const Section1 = () => {
  const brands = [
    '/brands/netflix.png',
    '/brands/google.png',
    '/brands/byteplus.svg',
    '/brands/meta.png',
    '/brands/amazon.png',
  ];

  return (
    <section class='fade-in-up container mx-auto px-4 py-20 text-center'>
      <div class='mx-auto flex max-w-5xl flex-col items-center text-center'>
        <h1 class='font-inter font-bold leading-tight tracking-tight text-[44px] md:text-[70px]'>
          Turn Products, Ideas &amp; Avatars into Profitable Videos — Instantly.
        </h1>
        <p class='font-inter mt-6 max-w-3xl text-[18px] text-gray-600 md:text-[24px]'>
          Reela 2.0 combines AI avatars, product references, and smart scene generation to create
          monetizable videos in minutes — for creators, sellers, and brands who want growth without
          production limits.
        </p>
        <ul class='mt-8 grid w-full max-w-3xl gap-3 text-left text-base text-gray-600 md:text-lg'>
          <li class='flex items-start gap-3'>
            <span class='mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#F7265B]'></span>
            <span>AI Avatars that speak, sell, and scale your content</span>
          </li>
          <li class='flex items-start gap-3'>
            <span class='mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#F7265B]'></span>
            <span>Product-consistent video generation that keeps every detail accurate</span>
          </li>
          <li class='flex items-start gap-3'>
            <span class='mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#F7265B]'></span>
            <span>Multi-reference &amp; multimodal support for avatars, scenes, and footage</span>
          </li>
          <li class='flex items-start gap-3'>
            <span class='mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#F7265B]'></span>
            <span>Publish-ready exports for TikTok, YouTube, and Instagram</span>
          </li>
        </ul>
        <div class='mt-10 flex w-full max-w-md flex-col items-center gap-6'>
          <a
            class='w-full rounded-full bg-[#F7265B] px-8 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7265B] focus-visible:ring-offset-2'
            href='https://app.reela.com/workspace'
          >
            Create with Reela AI
          </a>
          <a
            class='w-full rounded-full border border-[#F7265B] px-8 py-4 text-base font-semibold text-[#F7265B] transition-all duration-200 hover:bg-[#F7265B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7265B] focus-visible:ring-offset-2'
            href='https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4'
            rel='noreferrer'
            target='_blank'
          >
            Watch Demo
          </a>
        </div>
        <div class='mt-12 flex w-full flex-col items-center gap-6'>
          <p class='font-inter text-sm font-medium uppercase tracking-[0.2em] text-gray-500'>
            Trusted by 10,000+ creators and teams worldwide
          </p>
          <div class='flex flex-wrap items-center justify-center gap-8 md:gap-12'>
            {brands.map((b) => (
              <img
                key={b}
                alt='brand logo'
                class='h-8 w-auto opacity-70 grayscale transition-opacity hover:opacity-100'
                height='40'
                loading='lazy'
                src={b}
                width='120'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
