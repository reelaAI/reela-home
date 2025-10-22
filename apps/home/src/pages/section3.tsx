const comparison = [
  {
    feature: 'Max video length',
    reela: 'Generate stitched narratives up to 10 minutes with Sora segments orchestrated by Reela.',
    sora: 'Up to 25 seconds per generation.',
  },
  {
    feature: 'Talent & product options',
    reela: 'Tap into hundreds of Reela virtual humans or upload your licensed actors for SKU-perfect storytelling.',
    sora: 'Only supports characters you personally upload and authorize.',
  },
];

const highlights = [
  'Multi-reference continuity stays locked, so multi-product sequences stay true to your brief.',
  'Blend virtual humans, AI-generated footage, and live assets in one adaptive timeline.',
  'Deliver long-form videos and vertical cutdowns simultaneously without rebuilding edits.',
];

const steps = [
  {
    title: 'Upload products, avatars, and guidance',
    description:
      'Drop in SKU shots, character notes, and brand directions so Reela keeps every frame identity-perfect.',
  },
  {
    title: 'Let Reela direct Sora scenes and edits',
    description:
      'Our agents choreograph Sora footage, AI avatars, and remix clips into cohesive stories ready for launch.',
  },
  {
    title: 'Publish or fine-tune instantly',
    description:
      'Deliver finished cuts in minutes or keep editing inside Reela for captions, music, and channel-ready exports.',
  },
];

const Section3 = () => {
  return (
    <section class='bg-slate-950 text-white'>
      <div class='container mx-auto px-4 py-16'>
        <div class='mx-auto max-w-4xl text-center text-white'>
          <span class='inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-pink-100'>
            New · Sora Model Integration
          </span>
          <h2 class='mt-6 font-inter text-[32px] font-bold md:text-[40px] lg:text-[48px]'>Reela Workflow Highlights</h2>
        </div>
        <div class='mt-12 grid gap-6 lg:grid-cols-2'>
          <div class='flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur'>
            <div class='space-y-4 text-left'>
              <h3 class='font-inter text-2xl font-semibold md:text-[28px]'>Launch Sora Stories with Reela</h3>
              <p class='text-base text-white/70 md:text-lg'>
                Combine Reela&apos;s autonomous directing with OpenAI&apos;s Sora model to ship cinematic videos beyond one minute.
                Every brief maps avatars, product cues, and storyline beats before a single frame renders.
              </p>
              <ol class='space-y-4 text-white/80'>
                {steps.map((step, index) => (
                  <li class='flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5' key={step.title}>
                    <span class='mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white'>
                      {index + 1}
                    </span>
                    <div>
                      <p class='font-semibold text-white'>{step.title}</p>
                      <p class='mt-2 text-sm md:text-base'>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div class='mt-6'>
              <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
                <button class='inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105'>
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
          <div class='flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur'>
            <div class='space-y-4 text-left'>
              <h3 class='font-inter text-2xl font-semibold md:text-[28px]'>Keep Every Scene On-Brand</h3>
              <ul class='space-y-3 text-sm text-white/80 md:text-base'>
                {highlights.map((item) => (
                  <li class='flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5' key={item}>
                    <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/40 text-sm font-semibold text-white'>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div class='rounded-2xl border border-white/15 bg-black/30 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.35)]'>
              <h4 class='text-sm font-semibold uppercase tracking-wide text-pink-100'>Reela vs. Sora</h4>
              <div class='mt-4 space-y-4 text-sm text-white/80 md:text-base'>
                {comparison.map((item) => (
                  <div class='rounded-xl border border-white/10 bg-white/5 p-5' key={item.feature}>
                    <p class='text-xs font-semibold uppercase tracking-wide text-white/60'>{item.feature}</p>
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
      </div>
    </section>
  );
};

export default Section3;
