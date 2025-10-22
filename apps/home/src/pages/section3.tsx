import { Fragment } from 'hono/jsx';

const whyCards = [
  {
    eyebrow: 'Build Your Own Avatar IP',
    title: 'Launch a branded digital spokesperson that never drifts off-message.',
    description:
      'Train Reela 2.0 Pro on your product shots and talent references to deliver pixel-perfect persona consistency across every campaign.',
    highlights: [
      'Lock wardrobe, makeup, and tone with flawless multi-reference matching.',
      'Spin up seasonal avatar stories in minutes — no reshoots, no stage time.',
    ],
    cta: 'Start Building Your Avatar',
    video:
      'https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4',
  },
  {
    eyebrow: 'Drive More Sales with Product Videos',
    title: 'Turn catalog drops into shoppable explainers at commerce speed.',
    description:
      'Blend virtual hosts, AI-styled product close-ups, and motion graphics that adapt to every channel automatically.',
    highlights: [
      'Guarantee hero shots stay true-to-life with product-to-avatar consistency.',
      'Generate multilingual variants instantly — subtitles, dubbing, pacing included.',
    ],
    cta: 'Create Product Videos',
    video:
      'https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4',
  },
  {
    eyebrow: 'Earn More from Social Media',
    title: 'Drop daily social cuts with one-click remixing and AI scene swaps.',
    description:
      'Remix podcasts, livestreams, or blogs into scroll-stopping series with virtual humans, AI footage, and mixed edits in one pass.',
    highlights: [
      'Keep recurring characters identical across platforms with multi-avatar sync.',
      'Schedule vertical, square, and horizontal versions simultaneously.',
    ],
    cta: 'Create Social Videos',
    video:
      'https://files.reela.com/workspace/uploads/202509/15/1431a1ef-7d5f-41a3-97ca-f966b71011c8.mp4',
  },
];

const monetizeCards = [
  {
    title: 'E-Commerce Sellers',
    description:
      'Avatar try-ons, unboxings, and sales demos that match your product library frame-for-frame to boost conversions.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='h-10 w-10 text-brand'
      >
        <path d='m3 3 1 7h16l1-7Z'></path>
        <path d='M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10'></path>
        <path d='m9 14 2 2 4-4'></path>
      </svg>
    ),
  },
  {
    title: 'YouTubers',
    description:
      'Faceless or avatar-hosted explainers with long-form runtime support — keep every episode on-model and monetizable.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='h-10 w-10 text-brand'
      >
        <path d='m10 8 6 4-6 4V8Z'></path>
        <rect width='20' height='14' x='2' y='5' rx='2'></rect>
      </svg>
    ),
  },
  {
    title: 'Social Influencers',
    description:
      'AI-generated TikTok and Instagram stories that remix your footage with virtual co-hosts — fully aligned with your personal brand.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='h-10 w-10 text-brand'
      >
        <path d='m4 4 5 2 4-2 7 3-7 3-4-2-5 2V4z'></path>
        <path d='m4 15 5-2 4 2 7-3v6l-7 3-4-2-5 2v-6z'></path>
      </svg>
    ),
  },
  {
    title: 'Agencies & Freelancers',
    description:
      'Deliver scalable ads, promos, and branded storytelling with multi-client avatar libraries and API automation.',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='h-10 w-10 text-brand'
      >
        <path d='M12 12c2.828 0 8 1.343 8 4v2H4v-2c0-2.657 5.172-4 8-4Z'></path>
        <circle cx='12' cy='7' r='4'></circle>
        <path d='M22 11v2'></path>
        <path d='M2 11v2'></path>
        <path d='M22 19v2'></path>
        <path d='M2 19v2'></path>
      </svg>
    ),
  },
];

const Section3 = () => {
  return (
    <Fragment>
      <section class='w-full bg-white py-24 px-4'>
        <div class='mx-auto max-w-6xl space-y-16'>
          <div class='text-center'>
            <h2 class='font-inter text-4xl font-bold md:text-6xl'>
              Why Creators Choose <span class='text-brand'>Reela</span>
            </h2>
            <p class='mx-auto mt-6 max-w-3xl text-lg text-gray-600'>
              Transform your content engine with application-ready workflows — from avatar IP to shoppable videos — all driven by
              Reela’s multimodal automation.
            </p>
          </div>
          <div class='space-y-10'>
            {whyCards.map((card, index) => (
              <div
                key={card.eyebrow}
                class={`flex flex-col gap-8 overflow-hidden rounded-3xl bg-white shadow-xl shadow-rose-500/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div class='video-wrapper relative w-full md:w-1/2'>
                  <div class='aspect-video w-full overflow-hidden bg-black'>
                    <video
                      src={card.video}
                      class='h-full w-full cursor-pointer object-cover'
                      preload='metadata'
                      muted
                      playsinline
                      onclick='toggleVideoPlayback(this)'
                      onended='resetVideoOverlay(this)'
                    ></video>
                  </div>
                  <button
                    type='button'
                    class='video-overlay absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition hover:scale-105'
                    onclick='toggleVideoOverlay(this)'
                    aria-label='Play video'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      class='h-8 w-8'
                    >
                      <path d='M8 5v14l11-7z'></path>
                    </svg>
                  </button>
                </div>
                <div class='flex w-full flex-col justify-center gap-6 p-8 md:w-1/2 md:p-12'>
                  <span class='text-sm font-semibold uppercase tracking-[0.25em] text-gray-500'>{card.eyebrow}</span>
                  <h3 class='text-3xl font-bold text-gray-900'>{card.title}</h3>
                  <p class='text-lg text-gray-600'>{card.description}</p>
                  <ul class='space-y-3 text-left text-base text-gray-600'>
                    {card.highlights.map((highlight) => (
                      <li key={highlight} class='flex items-start gap-3'>
                        <span class='mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-brand'></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a
                      href='https://app.reela.com/workspace'
                      class='inline-flex items-center rounded-full bg-brand px-6 py-3 text-base font-semibold text-white transition-transform hover:scale-105'
                    >
                      {card.cta}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class='w-full bg-gradient-to-b from-gray-50 to-white py-24 px-4'>
        <div class='mx-auto max-w-6xl'>
          <div class='text-center'>
            <h2 class='font-inter text-4xl font-bold md:text-6xl'>
              Where Creators <span class='text-brand'>Monetize</span> with Reela
            </h2>
            <p class='mx-auto mt-6 max-w-3xl text-lg text-gray-600'>
              Reela adapts to every growth play — selling products, building audiences, or scaling client content.
            </p>
          </div>
          <div class='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {monetizeCards.map((card) => (
              <div
                key={card.title}
                class='flex flex-col gap-4 rounded-2xl bg-white p-8 text-left shadow-lg shadow-rose-500/5 transition hover:-translate-y-2 hover:shadow-2xl'
              >
                <div class='inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FFE7EF]'>{card.icon}</div>
                <h3 class='text-xl font-bold text-gray-900'>{card.title}</h3>
                <p class='text-base text-gray-600'>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section3;
