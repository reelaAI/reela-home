const monetizationPaths = [
  {
    title: 'E-Commerce Sellers',
    description: 'Avatar try-ons, unboxings, and sales ads that directly boost conversions.',
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
    title: 'YouTubers',
    description: 'Faceless or avatar-hosted explainers, plus identity-safe sponsorship videos.',
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
    title: 'Social Influencers',
    description: 'Avatar-generated TikTok and Instagram clips to grow followers and land brand deals.',
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
    title: 'Agencies & Freelancers',
    description: 'Deliver scalable ads, promos, and branded storytelling at speed.',
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
            Reela adapts to every creator journey — from selling products to building audiences. Choose your path to revenue.
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
