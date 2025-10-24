import { Icon } from '../components/Icon';

const Section5 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-[3rem] font-bold text-white'>Universal Video Capabilities</h2>
      </div>
      <div class='mx-auto mb-16 max-w-[1200px] px-4'>
        <div class='overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl'>
          <div class='flex flex-col lg:flex-row'>
            <div class='flex flex-col justify-center p-6 text-white lg:w-1/2 lg:p-12'>
              <h2 class='mb-6 text-[3rem] font-bold'>
                Reela Editor - Smart, Flexible, Ready to Export
              </h2>
              <p class='mb-4 text-base text-slate-300 md:text-lg'>
                Edit scenes, subtitles, voiceovers and music with Reela's intuitive timeline editor
                — no editing experience required.
              </p>
              <p class='mb-6 text-base text-slate-300 md:text-lg'>
                Export your project directly as a full video or as editable files for Premiere Pro
                and CapCut for advanced editing.
              </p>
              <div class='mt-2 flex items-center gap-6'>
                <img
                  src='/pr.svg'
                  alt='Adobe Premiere Pro'
                  class='h-8 w-auto opacity-90'
                />
                <img
                  src='/capcut.png'
                  alt='CapCut'
                  class='h-6 w-auto'
                  style='
                    filter: brightness(0) saturate(100%) invert(100%) sepia(2%)
                      saturate(0%) hue-rotate(318deg) brightness(108%)
                      contrast(101%);
                  '
                />
              </div>
            </div>
            <div class='p-6 lg:w-1/2 lg:p-12 lg:pl-0'>
              <div class='relative overflow-hidden rounded-xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.55)]'>
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
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='api'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>Multilingual Video Support</h3>
              <p class='text-slate-300'>
                Create videos in over 140 languages to reach global audiences.
              </p>
            </div>
          </div>
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='template'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>Flexible Aspect Ratios</h3>
              <p class='text-slate-300'>Support 16:9, 9:16, and 1:1 formats for any platform.</p>
            </div>
          </div>
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='remix'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>Multilingual Subtitles</h3>
              <p class='text-slate-300'>
                Add single-language or bilingual subtitles with one click.
              </p>
            </div>
          </div>
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='play'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>AI Background Music</h3>
              <p class='text-slate-300'>
                Generate and sync background music tailored to your video scenes.
              </p>
            </div>
          </div>
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='star'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>Style Variations</h3>
              <p class='text-slate-300'>
                Choose from a variety of video styles to match your brand tone.
              </p>
            </div>
          </div>
          <div class='rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-shadow duration-300 hover:shadow-[0_30px_110px_rgba(255,0,88,0.25)]'>
            <div class='flex flex-col items-start'>
              <div class='mb-4 rounded-lg bg-[#ff0058]/20 p-3 text-brand'>
                <Icon
                  name='volume'
                  className='lucide h-8 w-8 text-brand'
                />
              </div>
              <h3 class='mb-2 text-xl font-bold text-white'>AI Sound Effects</h3>
              <p class='text-slate-300'>
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
