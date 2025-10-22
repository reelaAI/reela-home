const Section3 = () => {
  const comparison = [
    {
      label: 'Max video length',
      reela: 'Reela 2.0 Pro delivers scenario-ready stories up to 10 minutes long.',
      sora: 'Sora outputs top out at 25 seconds per render.',
    },
    {
      label: 'Character fidelity',
      reela: 'Identity-perfect avatars and multi-character consistency across every shot.',
      sora: 'Single-subject focus with limited control over recurring talent.',
    },
    {
      label: 'Creative inventory',
      reela: 'Hundreds of ready-to-cast virtual humans and branded personas.',
      sora: 'Requires building your own characters from scratch.',
    },
    {
      label: 'Production flexibility',
      reela: 'Blend AI footage, virtual humans, remix clips, and product renders in one workflow.',
      sora: 'Generates standalone clips without multimodal layering.',
    },
  ];

  return (
    <section class='w-full bg-white py-24 px-4'>
      <div class='mx-auto flex max-w-6xl flex-col gap-12 rounded-[32px] bg-gradient-to-br from-white via-[#fff7fa] to-[#fef0f4] p-10 shadow-xl md:flex-row md:items-center md:p-16'>
        <div class='flex-1 text-left'>
          <p class='font-semibold uppercase tracking-[0.2em] text-brand'>New in Reela</p>
          <h2 class='font-inter mt-4 text-4xl font-bold md:text-6xl'>
            Generate Sora-length stories
            <span class='text-brand'> with Reela automation</span>
          </h2>
          <p class='mt-6 text-lg text-gray-600 md:text-xl'>
            Connect the latest Sora model to Reela to spin up cinematic videos that run for a minute or more.
            Start with your storyboard, keep avatars and products perfectly consistent, and let Reela stitch the
            full sequence while Sora handles long-form visuals.
          </p>
          <div class='mt-8 grid gap-4 rounded-2xl bg-white/80 p-6 shadow-md'>
            {comparison.map((item) => (
              <div class='grid gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 md:grid-cols-2' key={item.label}>
                <div>
                  <p class='text-sm font-semibold uppercase tracking-wide text-gray-500'>{item.label}</p>
                  <p class='mt-2 text-base font-semibold text-gray-900'>Reela 2.0 Pro</p>
                  <p class='text-gray-600'>{item.reela}</p>
                </div>
                <div class='rounded-xl bg-gray-50 p-4'>
                  <p class='text-base font-semibold text-gray-900'>Sora</p>
                  <p class='text-gray-600'>{item.sora}</p>
                </div>
              </div>
            ))}
          </div>
          <a href='https://app.reela.com/workspace' class='mt-10 inline-flex items-center rounded-full bg-brand px-6 py-3 text-lg font-medium text-white transition-transform hover:scale-105'>
            Launch a Reela + Sora project
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
        <div class='flex-1 rounded-3xl bg-black/90 p-1 shadow-2xl'>
          <div class='relative overflow-hidden rounded-[28px] bg-black'>
            <div class='absolute inset-0 bg-gradient-to-b from-white/5 via-white/0 to-black/50'></div>
            <img
              src='https://files.reela.com/assets/images/sora-showcase-frame.png'
              alt='Storyboard preview showing Reela 2.0 Pro directing a Sora render sequence'
              class='h-full w-full object-cover opacity-90'
            />
          </div>
          <p class='mt-6 text-center text-sm font-medium uppercase tracking-[0.3em] text-white/70'>
            Seamless handoff between Reela and Sora
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
