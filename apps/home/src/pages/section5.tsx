import { Icon } from '../components/Icon';

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
              <p class='mb-4 text-base text-gray-600 md:text-lg'>
                Edit scenes, subtitles, voiceovers and music with Reela's intuitive timeline editor
                — no editing experience required.
              </p>
              <p class='mb-6 text-base text-gray-600 md:text-lg'>
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
                <Icon
                  name='api'
                  className='lucide text-brand h-8 w-8'
                />
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
                <Icon
                  name='template'
                  className='lucide text-brand h-8 w-8'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold'>Flexible Aspect Ratios</h3>
              <p class='text-gray-600'>Support 16:9, 9:16, and 1:1 formats for any platform.</p>
            </div>
          </div>
          <div class='rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#FFF0F3] p-3'>
                <Icon
                  name='remix'
                  className='lucide text-brand h-8 w-8'
                />
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
                <Icon
                  name='play'
                  className='lucide text-brand h-8 w-8'
                />
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
                <Icon
                  name='star'
                  className='lucide text-brand h-8 w-8'
                />
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
                <Icon
                  name='volume'
                  className='lucide text-brand h-8 w-8'
                />
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
