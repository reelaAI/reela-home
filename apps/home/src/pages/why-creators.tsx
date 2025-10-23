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
    <section class='bg-[#FFF6F8] py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-14 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl md:whitespace-nowrap'>
            Why Creators Choose <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-lg text-gray-600'>
            Reela helps creators, brands, and professionals turn ideas into high-impact videos that grow influence and drive results.
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
                    <Icon name='arrowRight' className='ml-2 h-5 w-5' aria-hidden />
                  </button>
                </a>
              </div>
              <div
                class='relative aspect-[16/9] w-full self-center overflow-hidden rounded-2xl bg-white shadow-lg md:mx-auto md:max-w-[540px]'
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
                      class='pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition-transform duration-200 hover:scale-105'
                      onclick='playVideoFromOverlay(this)'
                    >
                      <Icon name='play' className='ml-1 h-8 w-8' aria-hidden />
                    </button>
                  </div>
                  <button
                    type='button'
                    class='pointer-events-auto absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg transition-transform duration-200 hover:scale-105'
                    aria-label='Toggle sound'
                    onclick='toggleVideoSound(this)'
                  >
                    <Icon name='volume' className='icon-sound-on' aria-hidden />
                    <Icon name='mute' className='icon-sound-off hidden' aria-hidden />
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
