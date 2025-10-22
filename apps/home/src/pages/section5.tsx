const Section5 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>Production tools for Sora-scale launches</h2>
      </div>
      <div class='mx-auto mb-16 max-w-[1200px] px-4'>
        <div class='overflow-hidden rounded-3xl bg-white shadow-lg'>
          <div class='flex flex-col lg:flex-row'>
            <div class='flex flex-col justify-center p-6 lg:w-1/2 lg:p-12'>
              <h2 class='mb-6 text-3xl font-bold md:text-4xl'>
                Reela Studio — orchestrate every Sora render
              </h2>
              <p class='mb-4 text-lg text-gray-600'>
                Review Sora generations, Reela scenes, and AI voice in one collaborative board. Swap references, lock the best
                takes, and re-render without losing continuity.
              </p>
              <p class='mb-6 text-lg text-gray-600'>
                Export long-form timelines directly or hand off layered files for Premiere Pro and CapCut when teams need
                manual polish.
              </p>
              <div class='mt-2 flex items-center gap-6'>
                <img
                  src='/pr.svg'
                  alt='Adobe Premiere Pro'
                  class='h-8 w-auto opacity-80 grayscale'
                />
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
              <h3 class='mb-2 text-xl font-bold'>Multi-reference boards</h3>
              <p class='text-gray-600'>
                Upload hero shots, product stills, and wardrobe looks to anchor every shot across Sora and Reela renders.
              </p>
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
              <h3 class='mb-2 text-xl font-bold'>Auto aspect remixes</h3>
              <p class='text-gray-600'>
                Generate horizontal, square, and vertical cuts from the same prompt without breaking brand guidelines.
              </p>
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
              <h3 class='mb-2 text-xl font-bold'>Localized voice + captions</h3>
              <p class='text-gray-600'>
                Auto-generate dubbing and subtitles in 140+ languages to keep your Sora stories global-ready.
              </p>
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
              <p class='text-gray-600'>
                Generate adaptive scores that react to Sora scene changes and narrative beats.
              </p>
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
              <h3 class='mb-2 text-xl font-bold'>Reusable style presets</h3>
              <p class='text-gray-600'>
                Save approved looks and instantly reapply them to new Sora prompts, remixes, or avatar shoots.
              </p>
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
                  <path d='M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z'></path>
                  <path d='M16 9a5 5 0 0 1 0 6'></path>
                  <path d='M19.364 18.364a9 9 0 0 0 0-12.728'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>AI Sound Effects</h3>
              <p class='text-gray-600'>
                Auto-generate foley and motion cues that align with your Sora footage in a single click.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
