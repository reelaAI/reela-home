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
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M4 6.5h16l-2 9H8l-2-9Z'></path>
        <path d='M7 6.5L6 3.5H3.5'></path>
        <path d='M8.2 19.8a 1.8 1.8 0 1 1 -3.6 0 1.8 1.8 0 0 1 3.6 0 Z'></path>
        <path d='M19 19.8a 1.8 1.8 0 1 1 -3.6 0 1.8 1.8 0 0 1 3.6 0 Z'></path>
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
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M3.5 6h17v12h-17Z'></path>
        <path d='M11 11.5L15.5 14l-4.5 2.5Z'></path>
        <path d='M9 19.5h6'></path>
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
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M16 4h5v5'></path>
        <path d='M8 20H3v-5'></path>
        <path d='M16 9L6.5 18.5'></path>
        <path d='M11.5 9.5L8 13'></path>
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
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='text-brand'
      >
        <path d='M4 5h16v14H4Z'></path>
        <path d='M10 5v14'></path>
        <path d='M15.5 11.5L13.5 13l2 1.5'></path>
        <path d='M7 9.5h3'></path>
        <path d='M7 13.5h3'></path>
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
      </div>
    </section>
  );
};

export default WhereCreators;
