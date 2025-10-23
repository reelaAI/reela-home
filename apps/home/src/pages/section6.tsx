// A new vision for video creation

const VIDEO_PLACEHOLDER =
  'https://files.reela.com/assets/videos/TalkingAvatar-Ads-1.mp4';

const testimonials = [
  {
    category: 'E-COMMERCE',
    avatar: '/user-1.png',
    quote:
      'Reela lets us produce localized product videos for 10+ markets weekly — no agency needed.',
    highlight: 'Time-to-market is 70% faster and ad CTR is up by 35%.',
    role: 'Digital Marketing Manager @ E-commerce Brand',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'EDUCATION',
    avatar: '/user-2.png',
    quote:
      'With AI avatars and multilingual support, I now teach students in three languages without recording anything.',
    highlight: 'Reela became my full production team — and my class went global.',
    role: 'Online Course Creator',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'SOCIAL MEDIA',
    avatar: '/user-3.png',
    quote:
      "I paste a link, remix it, and drop — that's how I post daily with AI B-roll magic.",
    highlight: 'Reela keeps my content flow fast, fresh, and monetizable.',
    role: 'TikTok Content Creator',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'CREATIVE',
    avatar: '/user-4.png',
    quote:
      "Reela's AI storyboard and scene builder turns rough ideas into full visual drafts in 10 minutes.",
    highlight: 'We now prototype campaigns without touching a camera.',
    role: 'Creative Director @ Media Studio',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'CONTENT CREATOR',
    avatar: '/user-5.png',
    quote:
      "I turned my blogs into videos with Reela's voiceover and illustration modes — my channel exploded.",
    highlight: 'It saved me 15+ hours per week and tripled my views.',
    role: 'Health & Wellness Influencer',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'RETAIL',
    avatar: '/user-6.png',
    quote:
      'Reela maps every product angle and character note into the script, so our catalog videos feel shot on location.',
    highlight: 'Multi-reference alignment keeps 40+ SKUs pixel-perfect across variants.',
    role: 'Head of Content @ Retail Marketplace',
    video: VIDEO_PLACEHOLDER,
  },
  {
    category: 'AGENCY',
    avatar: '/user-7.png',
    quote:
      'We storyboard hero shots, drop in AI B-roll, and Reela blends avatars with graphics without leaving the timeline.',
    highlight: 'Mixed-media sequences now take hours, not days.',
    role: 'Executive Producer @ Creative Agency',
    video: VIDEO_PLACEHOLDER,
  },
];

const Section6 = () => {
  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          A new vision for
          <span class='text-brand'> video creation </span>
        </h2>
      </div>
      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div class='flex flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-center'>
          {visibleTestimonials.map((testimonial, index) => {
            const isFeatured = index === 1;

            return (
              <div
                key={testimonial.quote}
                class={`testimonial-card relative flex h-full flex-1 flex-row items-start gap-6 rounded-xl bg-white/95 p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                  isFeatured
                    ? 'lg:-mx-6 lg:-translate-y-4 lg:flex-[1.2] lg:shadow-2xl lg:ring-2 lg:ring-brand/20 lg:z-10'
                    : 'lg:flex-1 lg:translate-y-4 lg:bg-white'
                }`}
                data-video-card={isFeatured ? '' : undefined}
              >
                <div
                  class={`relative aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-xl bg-black sm:w-28 md:w-32 ${
                    isFeatured ? 'md:w-36 lg:w-40 xl:w-48' : 'lg:w-32'
                  }`}
                  data-video-autoplay={isFeatured ? '' : undefined}
                >
                  <video
                    src={testimonial.video}
                    playsinline
                    controls
                    class='h-full w-full object-cover'
                    {...(isFeatured
                      ? {
                          autoplay: true,
                          loop: true,
                          muted: true,
                          'data-video-element': '',
                        }
                      : {})}
                  />
                  {isFeatured && (
                    <button
                      type='button'
                      class='absolute right-2 top-2 rounded-full bg-black/60 p-2 text-white transition hover:bg-black/80'
                      onclick='toggleVideoSound(this)'
                      aria-label='Toggle sound'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='icon-sound-on hidden h-4 w-4'
                      >
                        <path d='M11 5 6 9H2v6h4l5 4z'></path>
                        <path d='M19 5c1.5 1.5 2.5 3.5 2.5 5.5S20.5 14.5 19 16'></path>
                        <path d='M15.5 8.5c.5.5 1 1.5 1 2.5s-.5 2-1 2.5'></path>
                      </svg>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='icon-sound-off h-4 w-4'
                      >
                        <path d='M11 5 6 9H2v6h4l5 4z'></path>
                        <path d='m19 9-4 4'></path>
                        <path d='m15 9 4 4'></path>
                      </svg>
                    </button>
                  )}
                </div>
                <div class='flex flex-1 flex-col gap-4'>
                  <div class='flex items-start justify-between gap-4'>
                    <span class='inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white'>
                      {testimonial.category}
                    </span>
                    <div class='border-brand relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 shadow-md'>
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
                  <div class='space-y-3'>
                    <p class='text-base font-medium text-slate-700 md:text-lg'>"{testimonial.quote}"</p>
                    <p class='text-sm font-semibold uppercase tracking-wide text-brand'>{testimonial.highlight}</p>
                  </div>
                  <div class='mt-auto'>
                    <p class='inline-block rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section6;
