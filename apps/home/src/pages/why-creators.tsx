import { Icon } from '../components/Icon';

const cards = [
  {
    title: 'Build Your Own Avatar IP',
    description:
      'Turn your photo and voice into a digital host that speaks for your brand — ideal for real estate agents, lawyers, and creators building authority online.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4',
    cta: 'Start Building Your Avatar IP',
  },
  {
    title: 'Drive More Sales with Product Videos',
    description:
      'Generate story-based videos that highlight your products with accurate visuals, consistent branding, and persuasive storytelling.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4',
    cta: 'Create Product Videos',
  },
  {
    title: 'Earn More from Social Media',
    description:
      'Produce scroll-stopping videos for TikTok, YouTube, and Instagram — made faster, cheaper, and perfectly on-brand with Reela AI.',
    video: 'https://files.reela.com/workspace/uploads/202509/15/1431a1ef-7d5f-41a3-97ca-f966b71011c8.mp4',
    cta: 'Launch Social Campaigns',
  },
];

const WhyCreators = () => {
  return (
    <section class='bg-gradient-to-b from-[#090910] via-[#0d0d17] to-[#111229] py-20 text-white'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-14 max-w-3xl text-center'>
          <h2 class='font-inter text-[3rem] font-bold md:whitespace-nowrap'>
            Why Creators Choose <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-base text-gray-300 md:text-lg'>
            Reela helps creators, brands, and professionals turn ideas into high-impact videos that grow influence and drive results.
          </p>
        </div>
        <div class='space-y-8'>
          {cards.map((card) => (
            <div
              key={card.title}
              class='grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_28px_90px_rgba(5,6,14,0.6)] transition-transform duration-300 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_45px_140px_rgba(255,0,88,0.3)] md:grid-cols-[1fr_1fr] md:p-8 lg:p-10'
            >
              <div class='space-y-4 self-center'>
                <h3 class='text-2xl font-bold text-white md:text-3xl'>{card.title}</h3>
                <p class='text-lg text-gray-300'>{card.description}</p>
                <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
                  <button class='inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(255,0,88,0.35)] transition-transform hover:scale-105'>
                    {card.cta}
                    <Icon name='arrowRight' className='ml-2 h-5 w-5' />
                  </button>
                </a>
              </div>
              <div
                class='relative aspect-[16/9] w-full self-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(5,6,14,0.6)] md:mx-auto md:max-w-[540px]'
                data-video-card
              >
                <div class='absolute inset-0' data-video-autoplay>
                  <video
                    src={card.video}
                    class='h-full w-full object-cover'
                    playsinline
                    preload='metadata'
                    muted
                    data-video-element
                    onclick='pauseVideoOnClick(this)'
                    onplay='handleVideoPlay(this)'
                    onpause='handleVideoPause(this)'
                    onended='handleVideoEnded(this)'
                  ></video>
                  <div
                    class='pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200'
                    data-overlay
                  >
                    <button
                      type='button'
                      class='pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white shadow-[0_18px_40px_rgba(0,0,0,0.45)] transition-transform duration-200 hover:scale-105'
                      onclick='playVideoFromOverlay(this)'
                    >
                      <Icon name='play' className='ml-1 h-8 w-8' />
                    </button>
                  </div>
                  <button
                    type='button'
                    class='pointer-events-auto absolute right-3 top-3 rounded-full border border-white/20 bg-black/60 p-2 text-white shadow-[0_12px_30px_rgba(0,0,0,0.4)] transition hover:bg-black/80'
                    aria-label='Toggle sound'
                    onclick='toggleVideoSound(this)'
                  >
                    <Icon name='volume' className='icon-sound-on hidden h-4 w-4' />
                    <Icon name='mute' className='icon-sound-off h-4 w-4' />
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
