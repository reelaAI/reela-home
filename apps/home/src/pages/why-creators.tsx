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
              <div class='relative overflow-hidden rounded-[24px] bg-white shadow-lg md:mx-auto md:max-w-[520px]' data-video-container>
                <div class='relative aspect-video w-full overflow-hidden'>
                  <video
                    src={card.video}
                    class='absolute inset-0 h-full w-full rounded-[24px] object-cover'
                    playsinline
                    loop
                    preload='metadata'
                    muted
                    data-autoplay-video
                    data-reset-on-pause='false'
                  ></video>
                  <button
                    type='button'
                    class='absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80'
                    data-sound-toggle
                    onclick='toggleVideoMute(this)'
                  >
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
                      class='h-5 w-5'
                      data-sound-icon='muted'
                    >
                      <path d='m9 9-6 6h4l5 5V4l-5 5H3l6 6'></path>
                      <line x1='23' x2='17' y1='9' y2='15'></line>
                      <line x1='17' x2='23' y1='9' y2='15'></line>
                    </svg>
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
                      class='hidden h-5 w-5'
                      data-sound-icon='unmuted'
                    >
                      <path d='M11 5 6 9H2v6h4l5 4V5z'></path>
                      <path d='M19 5c1.5 1.5 2 3 2 7s-.5 5.5-2 7'></path>
                      <path d='M15.5 8.5a5 5 0 0 1 0 7'></path>
                    </svg>
                  </button>
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
