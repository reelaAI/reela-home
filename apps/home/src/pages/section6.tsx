// A new vision for video creation

const testimonials = [
  {
    category: 'E-COMMERCE',
    avatar: '/user-1.png',
    quote:
      "Reela 2.0 keeps every SKU and spokesmodel identical across our 12-market launches — that's impossible with manual shoots.",
    highlight: 'Time-to-market is 70% faster and ad CTR is up by 35%.',
    role: 'Digital Marketing Manager @ E-commerce Brand',
  },
  {
    category: 'EDUCATION',
    avatar: '/user-2.png',
    quote: "Multilingual avatars and AI scene swaps let me teach in three languages without re-recording once.",
    highlight: 'Enrollment doubled after adding localized video lessons.',
    role: 'Online Course Creator',
  },
  {
    category: 'SOCIAL MEDIA',
    avatar: '/user-3.png',
    quote: 'I paste a product link, pick a Reela host, and the platform remixes Sora clips + B-roll for daily drops.',
    highlight: 'Now I schedule a week of content in under an hour.',
    role: 'TikTok Content Creator',
  },
  {
    category: 'CREATIVE',
    avatar: '/user-4.png',
    quote: "Reela's multi-reference storyboard locks every costume and prop before Sora renders a single frame.",
    highlight: 'We prototype campaigns without touching a camera.',
    role: 'Creative Director @ Media Studio',
  },
  {
    category: 'INFLUENCER',
    avatar: '/user-5.png',
    quote: 'Voice cloning plus illustration mode turns my blogs into animated explainers overnight.',
    highlight: 'It saved me 15+ hours per week and tripled my views.',
    role: 'Health & Wellness Influencer',
  },
  {
    category: 'PRODUCTION',
    avatar: '/user-6.png',
    quote: 'Long-form Sora sequences stitched in Reela cover 8-minute brand documentaries without reshoots.',
    highlight: 'Clients love that we deliver 1-minute Sora cuts and 10-minute edits from one brief.',
    role: 'Producer @ Boutique Studio',
  },
];

const Section6 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          A new vision for
          <span class='text-brand'> video creation </span>
        </h2>
      </div>
      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div class='relative'>
          <div
            class='hide-scrollbar scroll-container flex snap-x snap-mandatory gap-6 overflow-x-auto py-8'
            style='scrollbar-width: none; -ms-overflow-style: none'
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.quote}
                class='testimonial-card w-full flex-shrink-0 snap-start rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
              >
                <div class='mb-6 flex items-start justify-between'>
                  <span class='inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white'>
                    {testimonial.category}
                  </span>
                  <div class='border-brand relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-md'>
                    <img
                      alt={`${testimonial.role} avatar`}
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      class='object-cover'
                      style='
                        position: absolute;
                        height: 100%;
                        width: 100%;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        color: transparent;
                      '
                      src={testimonial.avatar}
                    />
                  </div>
                </div>
                <div class='mb-6'>
                  <p class='mb-4 text-lg font-medium'>"{testimonial.quote}"</p>
                  <p class='text-brand font-bold'>{testimonial.highlight}</p>
                </div>
                <div class='mt-auto'>
                  <p class='font-bold'>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            class='absolute left-0 top-1/2 z-10 -ml-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100'
            aria-label='Scroll left'
            onclick="horizontalScroll(this.parentElement, 'left')"
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-chevron-left h-6 w-6 text-gray-700'
            >
              <path d='m15 18-6-6 6-6'></path>
            </svg>
          </button>

          <button
            class='absolute right-0 top-1/2 z-10 -mr-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100'
            type='button'
            aria-label='Next testimonial'
            onclick="horizontalScroll(this.parentElement, 'right')"
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              class='lucide lucide-chevron-right h-6 w-6 text-gray-700'
            >
              <path d='m9 18 6-6-6-6'></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Section6;
