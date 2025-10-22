const cards = [
  {
    title: 'Build Your Own Avatar IP',
    description:
      'Design a spokesperson that stays on-brand forever. Reela keeps faces, voices, and wardrobe consistent across every scene.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4',
    cta: 'Start Building Your Avatar IP',
  },
  {
    title: 'Drive More Sales with Product Videos',
    description:
      'Turn product shots and SKU references into persuasive explainers. Reela blends AI avatars, branded motion graphics, and auto-generated B-roll automatically.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4',
    cta: 'Create Product Videos',
  },
  {
    title: 'Earn More from Social Media',
    description:
      'Publish platform-ready stories every day. Remix multi-modal footage, auto-caption, and localize for new audiences with one click.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/1431a1ef-7d5f-41a3-97ca-f966b71011c8.mp4',
    cta: 'Launch Social Campaigns',
  },
];

const WhyCreators = () => {
  return (
    <section class='bg-[#FFF6F8] py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-14 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl md:whitespace-nowrap'>
            Why Creators Choose <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-lg text-gray-600'>
            Transform ideas into income streams with multi-reference accuracy, multimodal storytelling, and ready-to-publish edits.
          </p>
        </div>
        <div class='space-y-8'>
          {cards.map((card) => (
            <div
              key={card.title}
              class='grid gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl md:grid-cols-[1fr_1fr] md:p-8 lg:p-10'
            >
              <div class='space-y-4 self-center'>
                <h3 class='text-2xl font-bold text-gray-900 md:text-3xl'>{card.title}</h3>
                <p class='text-lg text-gray-600'>{card.description}</p>
                <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
                  <button class='inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105'>
                    {card.cta}
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
              <div class='relative overflow-hidden rounded-2xl bg-white shadow-lg' data-video-card>
                <div class='relative aspect-video w-full overflow-hidden md:mx-auto md:max-w-[520px]'>
                  <video
                    src={card.video}
                    class='absolute inset-0 h-full w-full object-cover'
                    playsinline
                    controls
                    preload='metadata'
                    onplay='handleVideoPlay(this)'
                    onpause='handleVideoPause(this)'
                    onended='handleVideoEnded(this)'
                  ></video>
                  <div
                    class='absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 transition-opacity duration-200'
                    data-overlay
                  >
                    <button
                      type='button'
                      class='flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-lg transition-transform duration-200 hover:scale-105'
                      onclick='playVideoFromOverlay(this)'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='32'
                        height='32'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        class='ml-1'
                      >
                        <path d='m9 7 8 5-8 5V7z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCreators;
