const cards = [
  {
    title: 'Product Spokesperson',
    description: 'Vertical demo videos that introduce offers with a human face.',
    badge: 'Vertical video',
    video: 'https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4',
  },
  {
    title: 'Course Instructor',
    description: 'Landscape lessons, onboarding, and walkthroughs with virtual educators.',
    badge: 'Landscape',
    video: 'https://files.reela.com/workspace/uploads/202509/15/4cad780e-2cc6-485f-bd24-3359bbd5a3c1.mp4',
  },
  {
    title: 'Story Narrator',
    description: 'Stylized animations and explainers for storytelling-heavy content.',
    badge: 'Animation style',
    video: 'https://files.reela.com/workspace/uploads/202509/15/1431a1ef-7d5f-41a3-97ca-f966b71011c8.mp4',
  },
];

const WhyCreators = () => {
  return (
    <section class='bg-white py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-14 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl md:whitespace-nowrap'>
            Use AI Avatars to Host, Explain, Narrate
          </h2>
          <p class='mt-4 text-lg text-gray-600'>
            Deploy ready-to-speak AI presenters for every channel — swap styles, orientations, and languages in seconds.
          </p>
        </div>
        <div class='grid gap-8 md:grid-cols-3'>
          {cards.map((card) => (
            <div
              key={card.title}
              class='group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl'
            >
              <div
                class='relative aspect-[4/5] w-full overflow-hidden bg-black text-white'
                data-video-card
                onmouseenter='playOnHover(this)'
                onmouseleave='pauseOnLeave(this)'
              >
                <video
                  class='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  src={card.video}
                  playsinline
                  preload='metadata'
                  muted
                  loop
                  data-video-element
                ></video>
              </div>
              <div class='flex flex-1 flex-col gap-4 p-6'>
                <span class='inline-flex w-max items-center rounded-full bg-[#ff0058]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ff0058]'>
                  {card.badge}
                </span>
                <div>
                  <h3 class='text-2xl font-bold text-gray-900'>{card.title}</h3>
                  <p class='mt-3 text-base text-gray-600'>{card.description}</p>
                </div>
                <a
                  class='mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#ff0058] transition-colors duration-200 hover:text-[#d70047]'
                  href='https://app.reela.com/workspace'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Try Reela for Free
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
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
    </section>
  );
};

export default WhyCreators;
