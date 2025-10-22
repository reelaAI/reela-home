const Section4 = () => {
  const cards = [
    {
      title: 'Build Your Own Avatar IP',
      description:
        'Cast lifelike spokespeople that stay consistent across every series, live stream, and product drop.',
      cta: 'Start Building Now',
      href: 'https://app.reela.com/workspace',
      video: 'https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4',
    },
    {
      title: 'Drive More Sales with Product Videos',
      description: 'Turn product references into shoppable stories with perfectly matched visuals and dialogue.',
      cta: 'Create Product Videos',
      href: 'https://app.reela.com/workspace',
      video: 'https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4',
    },
    {
      title: 'Earn More from Social Media',
      description: 'Remix trending content, swap avatars, and publish multi-format clips without losing brand identity.',
      cta: 'Grow with Reela AI',
      href: 'https://app.reela.com/workspace',
      video: 'https://files.reela.com/workspace/uploads/202509/15/1431a1ef-7d5f-41a3-97ca-f966b71011c8.mp4',
    },
  ];

  return (
    <section class='bg-gray-50 py-24 px-4'>
      <div class='container mx-auto max-w-6xl'>
        <div class='mb-12 text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>Why Creators Choose <span class='text-brand'>Reela</span></h2>
          <p class='mt-4 text-lg text-gray-600 md:text-xl'>
            Transform ideas into consistent, monetizable video series with AI-directed production.
          </p>
        </div>
        <div class='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card, index) => (
            <div
              class='flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2'
              data-video-card
              key={card.title}
            >
              <div class='relative w-full'>
                <div class='relative block w-full overflow-hidden rounded-t-3xl bg-black pb-[56.25%]'>
                  <video
                    class='absolute inset-0 h-full w-full object-cover'
                    preload='metadata'
                    playsinline
                    data-video
                    data-card-index={index}
                    src={card.video}
                  ></video>
                  <button
                    type='button'
                    class='absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-xl transition-all hover:scale-105'
                    data-play-button
                    aria-label={`Play ${card.title}`}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='28'
                      height='28'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <polygon points='5 3 19 12 5 21 5 3'></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div class='flex flex-1 flex-col p-8'>
                <h3 class='text-2xl font-bold text-gray-900'>{card.title}</h3>
                <p class='mt-3 text-base text-gray-600'>{card.description}</p>
                <a
                  href={card.href}
                  class='mt-6 inline-flex items-center text-base font-semibold text-brand transition-colors hover:text-brand/80'
                >
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <script>
        {`
          (function () {
            if (typeof window === 'undefined') return;
            const activate = (video, button) => {
              if (!video || !button) return;
              const setToPlay = () => {
                button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='5 3 19 12 5 21 5 3'></polygon></svg>";
              };
              const setToPause = () => {
                button.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='6' y='4' width='4' height='16'></rect><rect x='14' y='4' width='4' height='16'></rect></svg>";
              };
              button.addEventListener('click', () => {
                if (video.paused) {
                  document.querySelectorAll('[data-video]').forEach((v) => {
                    if (v !== video) {
                      v.pause();
                    }
                  });
                  video.play();
                } else {
                  video.pause();
                }
              });
              video.addEventListener('click', () => {
                if (video.paused) {
                  video.play();
                } else {
                  video.pause();
                }
              });
              video.addEventListener('play', () => {
                setToPause();
              });
              video.addEventListener('pause', () => {
                setToPlay();
              });
            };

            document.addEventListener('DOMContentLoaded', () => {
              const cards = document.querySelectorAll('[data-video-card]');
              cards.forEach((card) => {
                const video = card.querySelector('[data-video]');
                const button = card.querySelector('[data-play-button]');
                activate(video, button);
              });
            });
          })();
        `}
      </script>
    </section>
  );
};

export default Section4;
