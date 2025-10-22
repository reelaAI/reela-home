const comparison = [
  {
    feature: 'Max video length',
    reela: 'Generates 60-second-plus Sora scenes and stitches up to 10-minute narratives.',
    sora: 'Up to 25 seconds per generation.',
  },
  {
    feature: 'Talent & product options',
    reela:
      'Choose from hundreds of Reela virtual humans or bring your licensed actors for SKU-perfect storytelling.',
    sora: 'Only supports characters you personally upload and authorize.',
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
              Generate Long-Form Videos with Sora via Reela
            </h2>
            <p class='text-base text-white/80 md:text-lg'>
              Access Sora’s long-form generation directly inside Reela — no complex setup or API needed. Just type your prompt,
              and Reela handles the full workflow.
            </p>
            <ul class='space-y-3 text-base text-white/80'>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  1
                </span>
                <span>
                  Direct Sora Integration
                  <br />
                  Use the Sora model seamlessly within Reela to produce cinematic, story-driven videos.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  2
                </span>
                <span>
                  Full-Length Generation
                  <br />
                  Create extended scenes and continuous storytelling far beyond typical short-form limits.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                  3
                </span>
                <span>
                  Simplified Workflow
                  <br />
                  Reela manages Sora prompts, timing, and output — so creators can focus purely on ideas.
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
            <div class='rounded-3xl border border-white/15 bg-white/5 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.35)] lg:p-7'>
              <h3 class='font-inter text-2xl font-semibold text-white md:text-3xl'>Reela vs. Sora</h3>
              <div class='mt-4 space-y-3 text-sm text-white/70 md:text-base'>
                {comparison.map((item) => (
                  <div class='rounded-2xl border border-white/10 bg-white/5 p-5' key={item.feature}>
                    <p class='text-sm font-semibold uppercase tracking-wide text-pink-100'>
                      {item.feature}
                    </p>
                    <div class='mt-3 grid gap-4 md:grid-cols-2'>
                      <div>
                        <p class='text-xs font-semibold text-white/60'>Sora</p>
                        <p class='text-base font-medium text-white'>{item.sora}</p>
                      </div>
                      <div>
                        <p class='text-xs font-semibold text-white/60'>Reela</p>
                        <p class='text-base font-medium text-white'>{item.reela}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
