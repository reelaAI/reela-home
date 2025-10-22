const Section4 = () => {
  const comparison = [
    {
      label: 'Maximum runtime',
      sora: 'Up to 25 seconds',
      reela: 'Up to 10 minutes of continuous storytelling',
    },
    {
      label: 'Character library',
      sora: 'Single self-trained identity',
      reela: 'Extensive virtual human library + custom avatar training',
    },
    {
      label: 'Reference control',
      sora: 'Single prompt guidance',
      reela: 'Multi-reference alignment for products, people, and style boards',
    },
    {
      label: 'Multimodal mixing',
      sora: 'Video-only generations',
      reela: 'Blend Sora scenes with avatars, remixes, and AI B-roll in one timeline',
    },
  ];

  return (
    <section class='w-full bg-white py-24 px-4'>
      <div class='mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#FFE7EF] via-white to-[#F5F7FA] p-10 md:p-16 shadow-xl shadow-rose-500/10'>
        <div class='grid gap-12 lg:grid-cols-[1.05fr_0.95fr]'>
          <div class='space-y-6'>
            <span class='inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-brand'>
              Long-Form AI Video Studio
            </span>
            <h2 class='font-inter text-4xl font-bold md:text-6xl'>
              Reela 2.0 Pro + Sora
              <span class='text-brand'> Long-Form Lab</span>
            </h2>
            <p class='text-lg text-gray-700'>
              Bring Sora’s cinematic scenes into Reela and extend them into 1–10 minute narratives. Generate long-form videos that keep avatars, voiceovers, and product visuals perfectly consistent from start to finish.
            </p>
            <ul class='space-y-3 text-base text-gray-700'>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand'></span>
                <span>Chain multiple Sora clips with Reela timelines to surpass the one-minute mark effortlessly.</span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand'></span>
                <span>Lock identity and wardrobe with Reela’s perfect consistency engine, even as you swap sets or props.</span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand'></span>
                <span>Mix virtual humans, AI-generated environments, and remixed footage without touching a timeline.</span>
              </li>
            </ul>
            <div>
              <a
                href='https://app.reela.com/workspace'
                class='inline-flex items-center rounded-full bg-brand px-7 py-3 text-base font-semibold text-white transition-transform hover:scale-105'
              >
                Launch a Long-Form Video
                <svg
                  xmlns='http://www.w3.org/2000/svg'
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
              </a>
            </div>
          </div>

          <div class='rounded-3xl bg-white p-6 shadow-lg shadow-rose-500/10'>
            <h3 class='text-2xl font-bold text-gray-900'>Reela 2.0 Pro vs. Sora</h3>
            <p class='mt-2 text-sm uppercase tracking-[0.25em] text-gray-500'>Only available inside Reela</p>
            <div class='mt-6 overflow-hidden rounded-2xl border border-gray-200'>
              <div class='grid grid-cols-2 bg-gray-50 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-600'>
                <span>Reela 2.0 Pro</span>
                <span class='text-right'>Sora</span>
              </div>
              <div class='divide-y divide-gray-100'>
                {comparison.map((row) => (
                  <div key={row.label} class='grid grid-cols-2 gap-6 px-6 py-5 text-sm text-gray-700'>
                    <div class='col-span-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500'>{row.label}</div>
                    <div>
                      <p class='text-xs font-semibold uppercase tracking-[0.15em] text-gray-500'>Reela 2.0 Pro</p>
                      <p class='mt-2 text-base text-gray-700'>{row.reela}</p>
                    </div>
                    <div class='text-right'>
                      <p class='text-xs font-semibold uppercase tracking-[0.15em] text-gray-400'>Sora</p>
                      <p class='mt-2 text-base text-gray-500'>{row.sora}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class='mt-6 rounded-2xl bg-[#FFE7EF] p-6 text-sm text-gray-700'>
              <p>
                Reela orchestrates Sora-powered visuals with avatars, audio, and captions so you can deliver revenue-ready videos that stay on-brand from first frame to final CTA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
