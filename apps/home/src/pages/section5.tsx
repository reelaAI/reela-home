const monetizationPaths = [
  {
    title: 'E-Commerce Sellers',
    description: 'Avatar try-ons, unboxings, and sales demos that drive instant product conversion.',
    icon: (
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
        class='h-8 w-8 text-brand'
      >
        <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' />
        <path d='M3.29 7 12 12l8.71-5' />
        <path d='M12 22V12' />
      </svg>
    ),
  },
  {
    title: 'YouTubers',
    description: 'Faceless or avatar-hosted explainers that stay monetization-safe and binge-worthy.',
    icon: (
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
        class='h-8 w-8 text-brand'
      >
        <rect width='20' height='14' x='2' y='5' rx='2' />
        <path d='m10 9 5 3-5 3V9Z' />
      </svg>
    ),
  },
  {
    title: 'Social Influencers',
    description: 'AI-generated TikTok and Instagram clips that remix trends with signature personas.',
    icon: (
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
        class='h-8 w-8 text-brand'
      >
        <circle cx='18' cy='15' r='3' />
        <circle cx='6' cy='9' r='3' />
        <path d='M9 9h8a3 3 0 0 1 3 3v3' />
        <path d='M15 15H7a3 3 0 0 1-3-3V9' />
      </svg>
    ),
  },
  {
    title: 'Agencies & Freelancers',
    description: 'Deliver scalable ads, promos, and branded storytelling at client speed.',
    icon: (
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
        class='h-8 w-8 text-brand'
      >
        <path d='M10 14 21 3' />
        <path d='m21 3-6 18-4-8-8-4Z' />
      </svg>
    ),
  },
];

const Section5 = () => {
  return (
    <>
      <section class='bg-white py-24 px-4'>
        <div class='container mx-auto max-w-6xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>Where Creators Monetize <span class='text-brand'>with Reela</span></h2>
          <p class='mx-auto mt-4 max-w-3xl text-lg text-gray-600 md:text-xl'>
            Reela adapts to every creator journey — from selling products to building communities and pitching clients.
            Choose your revenue path and let automation handle the rest.
          </p>
          <div class='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {monetizationPaths.map((item) => (
              <div
                key={item.title}
                class='flex h-full flex-col items-start rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition-shadow duration-300 hover:shadow-lg'
              >
                <div class='mb-4 rounded-xl bg-[#FFF0F3] p-3'>{item.icon}</div>
                <h3 class='text-xl font-bold text-gray-900'>{item.title}</h3>
                <p class='mt-2 text-base text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>Universal Video Capabilities</h2>
      </div>
      <div class='mx-auto mb-16 max-w-[1200px] px-4'>
        <div class='overflow-hidden rounded-3xl bg-white shadow-lg'>
          <div class='flex flex-col lg:flex-row'>
            <div class='flex flex-col justify-center p-6 lg:w-1/2 lg:p-12'>
              <h2 class='mb-6 text-3xl font-bold md:text-4xl'>
                Reela Editor - Smart, Flexible, Ready to Export
              </h2>
              <p class='mb-4 text-lg text-gray-600'>
                Edit scenes, subtitles, voiceovers and music with Reela's intuitive timeline editor — no editing experience required.
              </p>
              <p class='mb-6 text-lg text-gray-600'>
                Export your project directly as a full video or as editable files for Premiere Pro and CapCut for advanced editing.
              </p>
              <div class='mt-2 flex items-center gap-6'>
                <img src='/pr.svg' alt='Adobe Premiere Pro' class='h-8 w-auto opacity-80 grayscale' />
                <img
                  src='/capcut.png'
                  alt='CapCut'
                  class='h-6 w-auto'
                  style='
                    filter: brightness(0) saturate(100%) invert(22%) sepia(0%)
                      saturate(0%) hue-rotate(0deg) brightness(95%)
                      contrast(89%);
                  '
                />
              </div>
            </div>
            <div class='p-6 lg:w-1/2 lg:p-12 lg:pl-0'>
              <div class='relative overflow-hidden rounded-xl shadow-lg'>
                <img
                  src='/editor.png'
                  alt='Reela Editor interface showing video editing timeline and preview'
                  class='h-auto w-full object-cover'
                  style='max-height: none'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='mx-auto mb-16 max-w-[1200px] px-4'>
        <div class='grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-globe text-brand h-8 w-8'
                >
                  <circle cx='12' cy='12' r='10'></circle>
                  <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20'></path>
                  <path d='M2 12h20'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Multilingual Video Support</h3>
              <p class='text-gray-600'>Create videos in over 140 languages to reach global audiences.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-ratio text-brand h-8 w-8'
                >
                  <rect width='12' height='20' x='6' y='2' rx='2'></rect>
                  <rect width='20' height='12' x='2' y='6' rx='2'></rect>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Flexible Aspect Ratios</h3>
              <p class='text-gray-600'>Support 16:9, 9:16, and 1:1 formats for any platform.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-languages text-brand h-8 w-8'
                >
                  <path d='m5 8 6 6'></path>
                  <path d='m4 14 6-6 2-3'></path>
                  <path d='M2 5h12'></path>
                  <path d='M7 2h1'></path>
                  <path d='m22 22-5-10-5 10'></path>
                  <path d='M14 18h6'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Multilingual Subtitles</h3>
              <p class='text-gray-600'>Add single-language or bilingual subtitles with one click.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-music text-brand h-8 w-8'
                >
                  <path d='M9 18V5l12-2v13'></path>
                  <circle cx='6' cy='18' r='3'></circle>
                  <circle cx='18' cy='16' r='3'></circle>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>AI Background Music</h3>
              <p class='text-gray-600'>Generate and sync background music tailored to your video scenes.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-palette text-brand h-8 w-8'
                >
                  <circle cx='13.5' cy='6.5' r='.5' fill='currentColor'></circle>
                  <circle cx='17.5' cy='10.5' r='.5' fill='currentColor'></circle>
                  <circle cx='8.5' cy='7.5' r='.5' fill='currentColor'></circle>
                  <circle cx='6.5' cy='12.5' r='.5' fill='currentColor'></circle>
                  <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Style Variations</h3>
              <p class='text-gray-600'>Choose from a variety of video styles to match your brand tone.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
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
                  class='lucide lucide-volume2 text-brand h-8 w-8'
                >
                  <path d='M11 5 6 9H2v6h4l5 4V5Z'></path>
                  <path d='M19.07 4.93a10 10 0 0 1 0 14.14'></path>
                  <path d='M15.54 8.46a5 5 0 0 1 0 7.07'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Voice &amp; Audio Control</h3>
              <p class='text-gray-600'>Fine-tune voices, emphasis, and mix stems to match your brand cadence.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
