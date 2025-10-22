const highlights = [
  {
    title: 'Script-to-Video in minutes',
    description: 'Draft, generate, and publish long-form stories faster with Sora orchestration.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M4 17h16' />
        <path d='M7 7h10' />
        <path d='M9 12h6' />
        <path d='M5 3h14v18H5z' />
      </svg>
    ),
  },
  {
    title: 'No video skills required',
    description: 'Guided prompts and AI scene assembly keep your creative pipeline on autopilot.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M4 4h16v16H4z' />
        <path d='M8 8h8' />
        <path d='M8 12h5' />
        <path d='M8 16h4' />
      </svg>
    ),
  },
  {
    title: 'Effortless multilingual support',
    description: 'Auto-dub voices and captions so every market gets a localized edit instantly.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='28'
        height='28'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M5 8h8' />
        <path d='M7 6h4' />
        <path d='M5 12h8' />
        <path d='M5 16h6' />
        <path d='m16 6 3 6 3-6' />
        <path d='M19 18c-1.9 0-3.5-1.1-4-2.6' />
        <path d='M23 18c-1.9 0-3.5-1.1-4-2.6' />
      </svg>
    ),
  },
];

const Section3 = () => {
  return (
    <>
      <section class='bg-slate-950 text-white'>
        <div class='container mx-auto px-4 py-14'>
          <div class='mx-auto max-w-5xl space-y-5 text-white'>
            <span class='inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-pink-100'>
              New · Sora Model Integration
            </span>
            <h2 class='font-inter text-[28px] font-bold md:text-[36px] lg:text-[44px]'>
              Generate Long-Form Sora Videos with Reela
            </h2>
            <p class='text-base text-white/80 md:text-lg'>
              Combine Reela&apos;s autonomous directing with OpenAI&apos;s Sora model to produce cinematic videos over one minute long.
              Start with brand guidelines, product references, or storyboards, and our multi-agent workflow choreographs avatars,
              Sora footage, and AI edits into a single output.
            </p>
            <ul class='space-y-3 text-base text-white/80'>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  1
                </span>
                <span>
                  Upload products, characters, and motion cues — Reela preserves identity-perfect visuals
                  with multi-reference guidance.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  2
                </span>
                <span>
                  Reela orchestrates Sora scenes, AI avatars, and remix footage into cohesive sequences for
                  ads, tutorials, and launch films up to 10 minutes long.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  3
                </span>
                <span>
                  Deliver finalized cuts instantly, or continue editing inside Reela for subtitles, music,
                  and channel-ready exports.
                </span>
              </li>
            </ul>
            <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
              <button class='mt-6 inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105'>
                Launch a Sora Project
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='ml-2 h-5 w-5'
                >
                  <path d='M5 12h14'></path>
                  <path d='m12 5 7 7-7 7'></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>
      <section class='bg-slate-950 text-white'>
        <div class='container mx-auto px-4 pb-16'>
          <div class='rounded-3xl border border-white/10 bg-white/5 px-6 py-10 backdrop-blur lg:px-10'>
            <h3 class='font-inter text-2xl font-semibold text-white md:text-3xl'>Reela Workflow Highlights</h3>
            <div class='mt-8 grid gap-6 md:grid-cols-3'>
              {highlights.map((item) => (
                <div
                  key={item.title}
                  class='flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-1'
                >
                  <div class='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff0058]/20 text-white'>
                    {item.icon}
                  </div>
                  <div>
                    <h4 class='text-xl font-semibold text-white'>{item.title}</h4>
                    <p class='mt-2 text-base text-white/70'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
