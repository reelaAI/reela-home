const createAvatar = (initials: string, gradient: [string, string]) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='${gradient[0]}' /><stop offset='100%' stop-color='${gradient[1]}' /></linearGradient></defs><rect width='100' height='100' rx='50' fill='url(#grad)' /><text x='50' y='58' font-size='42' font-family='Inter, Arial, sans-serif' fill='white' text-anchor='middle' font-weight='700'>${initials}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const testimonials = [
  {
    category: 'E-COMMERCE',
    name: 'Leah Sanders · VP of Ecommerce @ Lumina Beauty',
    quote:
      '“Our weekly product drops now ship with avatar hosts that look identical to our real spokesmodels — every lipstick shade, hairstyle, and outfit stays locked in.”',
    highlight: 'Reela’s perfect consistency engine keeps our hero talent matched to new product shots across 12 markets.',
    avatar: createAvatar('LS', ['#F7265B', '#B01B43']),
  },
  {
    category: 'ENTERTAINMENT',
    name: 'Marco Ruiz · Creative Director @ StreamForge',
    quote:
      '“We storyboard, cast, and launch character-driven recaps in under an hour. Multi-reference control means the same hero appears in every language drop.”',
    highlight: 'Mixing virtual humans with cinematic generative scenes and remixed trailers happens in one automated timeline.',
    avatar: createAvatar('MR', ['#FF6F91', '#F6265C']),
  },
  {
    category: 'SOCIAL COMMERCE',
    name: 'Jasmine Cole · Founder @ ShopSeen Collective',
    quote:
      '“Catalog-to-video is finally instant. I pair influencer avatars with my UGC clips and Reela syncs their poses to every SKU.”',
    highlight: 'Multi-reference inputs make product try-ons pixel-accurate while AI B-roll fills the gaps.',
    avatar: createAvatar('JC', ['#FF9F68', '#F7426D']),
  },
  {
    category: 'EDUCATION',
    name: 'Dr. Aiden Brooks · Course Creator',
    quote:
      '“I deliver 8-minute micro-lessons with the same professor avatar across virtual labs and AI-illustrated explainers.”',
    highlight: 'Cross-modal support keeps narration, avatar, and animated scenes synced without touching a timeline.',
    avatar: createAvatar('AB', ['#F8638F', '#B01B43']),
  },
  {
    category: 'AGENCIES',
    name: 'Sophia Turner · Managing Partner @ NovaCraft',
    quote:
      '“Clients expect brand-safe AI. Reela gives us approval-ready avatars, multi-scene remixes, and long-form generative pipelines in one place.”',
    highlight: 'We deliver campaign reels 5× faster with consistent personas across every deliverable.',
    avatar: createAvatar('ST', ['#FF7D7D', '#F7265B']),
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
          <div class='hide-scrollbar scroll-container flex snap-x snap-mandatory gap-6 overflow-x-auto py-8' style='scrollbar-width: none; -ms-overflow-style: none'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                class='testimonial-card w-full flex-shrink-0 snap-start rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'
              >
                <div class='mb-6 flex items-start justify-between'>
                  <span class='inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white'>
                    {testimonial.category}
                  </span>
                  <div class='border-brand relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-md'>
                    <img
                      alt={`${testimonial.name} avatar`}
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      class='object-cover'
                      style='position: absolute; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; color: transparent;'
                      src={testimonial.avatar}
                    />
                  </div>
                </div>
                <div class='mb-6 space-y-4'>
                  <p class='text-left text-lg font-medium text-gray-900'>{testimonial.quote}</p>
                  <p class='text-left text-brand font-bold'>{testimonial.highlight}</p>
                </div>
                <div class='mt-auto text-left'>
                  <p class='font-bold text-gray-900'>{testimonial.name}</p>
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
            aria-label='Scroll right'
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
