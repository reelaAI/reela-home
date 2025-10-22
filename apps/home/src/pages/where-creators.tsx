const monetizationPaths = [
  {
    title: 'E-commerce Stores',
    description: 'Create persuasive product videos for Amazon, Shopify, and TikTok Shop to boost clicks and conversions.',
    icon: (
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
        class='text-brand'
      >
        <path d='M5.5 7h13l-1.5 9h-10z'></path>
        <path d='M7 7l-1-4H4'></path>
        <circle cx='9' cy='20' r='1'></circle>
        <circle cx='17' cy='20' r='1'></circle>
      </svg>
    ),
  },
  {
    title: 'YouTube Channels',
    description: 'Generate long-form explainers, reviews, and educational content that grow your audience and ad revenue.',
    icon: (
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
        class='text-brand'
      >
        <path d='m10 15 5.19-3L10 9v6Z'></path>
        <rect width='20' height='14' x='2' y='5' rx='2'></rect>
      </svg>
    ),
  },
  {
    title: 'Social Media Platforms',
    description: 'Produce short, scroll-stopping videos for TikTok and Instagram to attract followers and sponsorships.',
    icon: (
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
        class='text-brand'
      >
        <path d='M16 3h5v5'></path>
        <path d='M8 21H3v-5'></path>
        <path d='M16 8 5 19'></path>
      </svg>
    ),
  },
  {
    title: 'Agencies & Enterprises',
    description: 'Deliver ad-ready videos at scale for clients — faster, cheaper, and more consistent than traditional production.',
    icon: (
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
        class='text-brand'
      >
        <path d='M4 4h16v16H4z'></path>
        <path d='M9 4v16'></path>
        <path d='m15 10-2 2 2 2'></path>
      </svg>
    ),
  },
];

const WhereCreators = () => {
  return (
    <section class='bg-white py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-12 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>
            Where Creators Monetize with <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-lg text-gray-600'>
            Reela turns your videos into income — from personal brands to e-commerce stores and marketing campaigns.
          </p>
        </div>
        <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {monetizationPaths.map((path) => (
            <div
              key={path.title}
              class='flex h-full flex-col rounded-3xl border border-gray-100 bg-gray-50 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'
            >
              <div class='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE3EA]'>
                {path.icon}
              </div>
              <h3 class='text-xl font-semibold text-gray-900'>{path.title}</h3>
              <p class='mt-3 text-base text-gray-600'>{path.description}</p>
            </div>
          ))}
        </div>
        <p class='mt-10 text-center text-base font-semibold text-gray-900'>
          → See how creators turn every video into opportunity with Reela.
        </p>
      </div>
    </section>
  );
};

export default WhereCreators;
