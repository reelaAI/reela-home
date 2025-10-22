const Section4 = () => {
  const comparison = [
    {
      label: 'Max video length per render',
      reela: 'Up to 10 minutes with automated stitching',
      sora: 'Up to ~2 minutes in beta',
    },
    {
      label: 'Reference stability',
      reela: 'Multi-image consistency engine locks talent, wardrobe, and product shots',
      sora: 'Single-prompt variability leads to on-set drift',
    },
    {
      label: 'Average cost per finished minute',
      reela: 'From $2.10 with Plus plan credits',
      sora: 'Estimated $6.00+ per minute of final footage',
    },
    {
      label: 'Workflow automation',
      reela: 'Scripts, voiceover, subtitles, and edits assembled automatically',
      sora: 'Manual stitching across tools',
    },
    {
      label: 'Team collaboration',
      reela: 'Review links, version history, brand kits, and API access',
      sora: 'Individual experiments only',
    },
  ];

  const proofPoints = [
    {
      title: 'Launch faster',
      description: 'Ship campaigns in hours, not weeks, with pre-built automations and reusable brand kits.',
    },
    {
      title: 'Scale smarter',
      description: 'Extend every prompt into horizontal, square, and vertical cuts while keeping references locked.',
    },
    {
      title: 'Own the ROI',
      description: 'Lower cost-per-video and reduce revision cycles with frame-accurate consistency.',
    },
  ];

  return (
    <section class='container mx-auto px-4 py-16' id='reela-vs-sora'>
      <div class='mb-12 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          Reela vs. Sora
          <span class='text-brand'> — the production-ready choice</span>
        </h2>
        <p class='mx-auto mt-6 max-w-3xl text-lg text-gray-600'>
          Ride the Sora wave without sacrificing control. Reela delivers the consistency, run-time, and pricing teams need to
          ship cinematic work every day.
        </p>
      </div>

      <div class='mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[3fr_2fr]'>
        <div class='overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl'>
          <div class='bg-gray-900 px-8 py-6 text-white'>
            <div class='flex items-center justify-between text-sm uppercase tracking-wide'>
              <span>Production criteria</span>
              <div class='flex items-center gap-6'>
                <span class='font-semibold text-brand'>Reela</span>
                <span class='font-semibold text-gray-300'>Sora</span>
              </div>
            </div>
          </div>
          <ul class='divide-y divide-gray-100'>
            {comparison.map((row) => (
              <li class='grid gap-4 px-8 py-6 md:grid-cols-[1.2fr_1fr_1fr]' key={row.label}>
                <p class='text-base font-semibold text-gray-900'>{row.label}</p>
                <p class='text-sm text-gray-700 md:text-base'>{row.reela}</p>
                <p class='text-sm text-gray-500 md:text-base'>{row.sora}</p>
              </li>
            ))}
          </ul>
        </div>

        <div class='space-y-6'>
          {proofPoints.map((point) => (
            <div class='rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-md' key={point.title}>
              <h3 class='text-xl font-semibold text-gray-900'>{point.title}</h3>
              <p class='mt-3 text-sm text-gray-600 md:text-base'>{point.description}</p>
            </div>
          ))}
          <div class='rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-inner'>
            <h3 class='text-xl font-semibold text-brand'>Ready to outrun the hype?</h3>
            <p class='mt-2 text-sm text-rose-900 md:text-base'>
              Combine Reela automation with Sora creativity and keep your pipeline predictable.
            </p>
            <a
              href='/workspace'
              class='mt-6 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-white transition-transform hover:scale-105'
            >
              Start creating
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
