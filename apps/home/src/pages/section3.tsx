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

const highlights = [
  'Multi-reference continuity stays locked, so multi-product sequences stay true to your brief.',
  'Blend virtual humans, AI-generated footage, and live assets in one adaptive timeline.',
  'Deliver long-form videos and vertical cutdowns simultaneously without rebuilding edits.',
];

const Section3 = () => {
  return (
    <section class='bg-slate-950 text-white'>
      <div class='container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start'>
        <div class='space-y-4'>
          <span class='inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-pink-100'>
            New · Sora Model Integration
          </span>
          <h2 class='font-inter text-[28px] font-bold md:text-[36px] lg:text-[44px]'>
            Generate Long-Form Sora Videos with Reela 2.0 Pro
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
          <ul class='space-y-2 text-sm text-white/70 md:text-base'>
            {highlights.map((item) => (
              <li class='flex items-start gap-3' key={item}>
                <span class='mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-white/30 text-xs font-semibold text-white'>
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
            <button class='mt-4 inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-105'>
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
        <div class='space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:p-7'>
          <h3 class='font-inter text-2xl font-semibold text-white md:text-3xl'>Reela 2.0 Pro vs. Sora</h3>
          <div class='space-y-3'>
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
                    <p class='text-xs font-semibold text-white/60'>Reela 2.0 Pro</p>
                    <p class='text-base font-medium text-white'>{item.reela}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
