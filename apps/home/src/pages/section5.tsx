const Section5 = () => {
  return (
    <>
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
                Edit scenes, subtitles, voiceovers and music with Reela's intuitive timeline editor
                — no editing experience required.
              </p>
              <p class='mb-6 text-lg text-gray-600'>
                Export your project directly as a full video or as editable files for Premiere Pro
                and CapCut for advanced editing.
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
                  src='https://files.reela.com/assets/images/edit.png'
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-globe text-brand h-8 w-8'
                >
                  <path d='M12 2.5a 9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0 -19 Z'></path>
                  <path d='M12 2.5c 2.6 3.1 3.8 6.6 3.8 9.5s -1.2 6.4 -3.8 9.5'></path>
                  <path d='M12 2.5c -2.6 3.1 -3.8 6.6 -3.8 9.5s 1.2 6.4 3.8 9.5'></path>
                  <path d='M2.5 12h19'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Multilingual Video Support</h3>
              <p class='text-gray-600'>
                Create videos in over 140 languages to reach global audiences.
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-ratio text-brand h-8 w-8'
                >
                  <path d='M5 5h14v10H5Z'></path>
                  <path d='M9 9h10v10H9Z'></path>
                  <path d='M9 14h3'></path>
                  <path d='M14 9v3'></path>
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-languages text-brand h-8 w-8'
                >
                  <path d='M4.5 18.5L8.5 6.5l4 12'></path>
                  <path d='M5.7 14.5h5.6'></path>
                  <path d='M16 6.5h4.5v12'></path>
                  <path d='M16 12.5h4.5'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Multilingual Subtitles</h3>
              <p class='text-gray-600'>
                Add single-language or bilingual subtitles with one click.
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-music text-brand h-8 w-8'
                >
                  <path d='M10 6.5L19 5v10.5'></path>
                  <path d='M8.5 18.5a 2.5 2.5 0 1 1 -5 0 2.5 2.5 0 0 1 5 0 Z'></path>
                  <path d='M19 15.5a 2.5 2.5 0 1 1 -5 0 2.5 2.5 0 0 1 5 0 Z'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>AI Background Music</h3>
              <p class='text-gray-600'>
                Generate and sync background music tailored to your video scenes.
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-palette text-brand h-8 w-8'
                >
                  <path d='M12 3.5c -4.7 0 -8.5 3.8 -8.5 8.5s 3.8 8.5 8.5 8.5c 1.5 0 2.6 -.9 2.6 -2.2 0 -.6 -.2 -1.1 -.6 -1.5 -.4 -.4 -.7 -.9 -.7 -1.6 a 2.3 2.3 0 0 1 2.3 -2.3h 1.6c 2.8 0 5.1 -2.3 5.1 -5.1C 22.3 6.9 17.8 3.5 12 3.5Z'></path>
                  <path d='M8.5 9.2a .8 .8 0 1 1 0 1.6 .8 .8 0 0 1 0 -1.6 Z'></path>
                  <path d='M15 8.2a .8 .8 0 1 1 0 1.6 .8 .8 0 0 1 0 -1.6 Z'></path>
                  <path d='M10.5 6.2a .8 .8 0 1 1 0 1.6 .8 .8 0 0 1 0 -1.6 Z'></path>
                  <path d='M6.8 12.8a .8 .8 0 1 1 0 1.6 .8 .8 0 0 1 0 -1.6 Z'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>Style Variations</h3>
              <p class='text-gray-600'>
                Choose from a variety of video styles to match your brand tone.
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
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-volume2 text-brand h-8 w-8'
                >
                  <path d='M11 6L7 9H4v6h3l4 3V6Z'></path>
                  <path d='M17 9.5a 3.5 3.5 0 0 1 0 5'></path>
                  <path d='M19.5 7a 6 6 0 0 1 0 10'></path>
                </svg>
              </div>
              <h3 class='mb-2 text-xl font-bold'>AI Sound Effects</h3>
              <p class='text-gray-600'>
                Auto-generate sound effects that match scenes and actions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
