const monetizationPaths = [
  {
    title: 'Viral TikTok / Shorts',
    description: 'Launch short-form hooks with avatars, subtitles, and motion baked in.',
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
        <path d='M9 3h6v2'></path>
        <path d='M9 19v2h6v-2'></path>
        <path d='M4 7h16v10H4z'></path>
        <path d='m10 9 4 3-4 3z'></path>
      </svg>
    ),
  },
  {
    title: 'Product Ads',
    description: 'Auto-generate storyboards, B-roll, and pitch-perfect selling points.',
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
        <path d='m2 8 10-5 10 5-10 5-10-5z'></path>
        <path d='m2 17 10 5 10-5'></path>
        <path d='m2 12 10 5 10-5'></path>
      </svg>
    ),
  },
  {
    title: 'UGC Review Video',
    description: 'Turn testimonials into scripted avatar hosts with social proof overlays.',
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
        <path d='M12 20c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 2.143 1.017 4.076 2.667 5.434L6 21l4.053-1.624A8.93 8.93 0 0 0 12 20Z'></path>
      </svg>
    ),
  },
  {
    title: 'Long-form Explainer',
    description: 'Combine chapters, scenes, and localized voiceovers for in-depth videos.',
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
        <path d='M4 19h16'></path>
        <path d='M4 5h16'></path>
        <path d='M8 5v14'></path>
        <path d='M12 9h8'></path>
        <path d='M12 13h8'></path>
      </svg>
    ),
  },
];

const WhereCreators = () => {
  return (
    <section class='bg-white py-20' id='use-cases'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-12 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>Top Use Cases Powered by Reela</h2>
          <p class='mt-4 text-lg text-gray-600'>
            Deliver social, ad, and education-ready videos without touching a timeline — no matter the format.
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
