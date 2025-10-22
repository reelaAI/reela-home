const comparison = [
  {
    feature: 'Max video length',
    reela: 'Up to 10 min per video with orchestrated Sora clips 1+ minutes long.',
    sora: 'Up to 25 seconds per generation.',
  },
  {
    feature: 'Talent & product options',
    reela: 'Hundreds of avatar identities plus your own uploads for product-perfect scenes.',
    sora: 'Limited to custom uploads and single-character control.',
  },
  {
    feature: 'Pricing',
    reela: 'Usage-based plans optimized for frequent publishing.',
    sora: 'High experimental costs per render.',
  },
  {
    feature: 'Multi-reference stability',
    reela: 'Locks multi-personas, props, and SKUs across every scene.',
    sora: 'Struggles with multi-reference continuity.',
  },
];

const Section3 = () => {
  return (
    <section class='bg-slate-950 text-white'>
      <div class='container mx-auto grid gap-16 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
        <div class='space-y-6'>
          <span class='inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-pink-100'>
            New · Sora Model Integration
          </span>
          <h2 class='font-inter text-4xl font-bold md:text-5xl lg:text-6xl'>
            Generate Long-Form Sora Videos with Reela 2.0
          </h2>
          <p class='text-lg text-white/80 md:text-xl'>
            Combine Reela&apos;s autonomous directing with OpenAI&apos;s Sora model to produce cinematic videos
            over one minute long. Start with brand guidelines, product references, or storyboards, and
            our multi-agent workflow choreographs avatars, Sora footage, and AI edits into a single
            output.
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
            <button class='mt-6 inline-flex items-center rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105'>
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
        <div class='space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur'>
          <h3 class='text-2xl font-semibold text-white md:text-3xl'>Reela 2.0 vs. Sora</h3>
          <p class='text-white/70'>
            Tap into Sora&apos;s hype while proving why creators scale with Reela.
          </p>
          <div class='space-y-4'>
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
                    <p class='text-xs font-semibold text-white/60'>Reela 2.0</p>
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
