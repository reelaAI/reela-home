import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const featureDetails: Array<{ icon: IconName; title: string; description: string }> = [
  {
    icon: 'api',
    title: 'Multilingual Video Support',
    description: 'Create videos in over 140 languages to reach global audiences.',
  },
  {
    icon: 'template',
    title: 'Flexible Aspect Ratios',
    description: 'Support 16:9, 9:16, and 1:1 formats for any platform.',
  },
  {
    icon: 'remix',
    title: 'Multilingual Subtitles',
    description: 'Add single-language or bilingual subtitles with one click.',
  },
  {
    icon: 'play',
    title: 'AI Background Music',
    description: 'Generate and sync background music tailored to your video scenes.',
  },
  {
    icon: 'star',
    title: 'Style Variations',
    description: 'Choose from a variety of video styles to match your brand tone.',
  },
  {
    icon: 'volume',
    title: 'AI Sound Effects',
    description: 'Auto-generate sound effects that match scenes and actions.',
  },
];

const Section5 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center text-white'>
        <h2 class='font-inter text-[3rem] font-bold'>Universal Video Capabilities</h2>
      </div>
      <div class='mx-auto mb-16 max-w-[1200px] px-4'>
        <div class='overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-lg'>
          <div class='flex flex-col lg:flex-row'>
            <div class='flex flex-col justify-center p-6 text-slate-200 lg:w-1/2 lg:p-12'>
              <h2 class='mb-6 text-[3rem] font-bold text-white'>
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
              <div class='mt-2 flex items-center gap-6 text-white/70'>
                <img
                  src='/pr.svg'
                  alt='Adobe Premiere Pro'
                  class='h-8 w-auto opacity-80 grayscale'
                />
                <img
                  src='/capcut.png'
                  alt='CapCut'
                  class='h-6 w-auto opacity-80'
                  style='
                    filter: brightness(0) saturate(100%) invert(79%) sepia(2%)
                      saturate(568%) hue-rotate(302deg) brightness(107%)
                      contrast(91%);
                  '
                />
              </div>
            </div>
            <div class='p-6 lg:w-1/2 lg:p-12 lg:pl-0'>
              <div class='relative overflow-hidden rounded-xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/10'>
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
          {featureDetails.map((feature) => (
            <div
              key={feature.title}
              class='group rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-[0_30px_90px_rgba(255,0,88,0.2)]'
            >
              <div class='flex flex-col items-start gap-4 text-slate-200'>
                <div class='rounded-lg bg-brand/15 p-3 text-brand ring-1 ring-brand/20 transition-all duration-300 group-hover:bg-brand group-hover:text-white'>
                  <Icon
                    name={feature.icon}
                    className='lucide h-8 w-8'
                  />
                </div>
                <h3 class='text-xl font-bold text-white'>{feature.title}</h3>
                <p class='text-slate-300'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section5;
