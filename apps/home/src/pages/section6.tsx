// A new vision for video creation

import { Icon } from '../components/Icon';

const testimonials = [
  {
    category: 'E-COMMERCE',
    avatar: '/user-1.png',
    quote:
      'Reela lets us produce localized product videos for 10+ markets weekly — no agency needed.',
    highlight: 'Time-to-market is 70% faster and ad CTR is up by 35%.',
    role: 'Digital Marketing Manager @ E-commerce Brand',
  },
  {
    category: 'EDUCATION',
    avatar: '/user-2.png',
    quote:
      'With AI avatars and multilingual support, I now teach students in three languages without recording anything.',
    highlight: 'Reela became my full production team — and my class went global.',
    role: 'Online Course Creator',
  },
  {
    category: 'SOCIAL MEDIA',
    avatar: '/user-3.png',
    quote:
      "I paste a link, remix it, and drop — that's how I post daily with AI B-roll magic.",
    highlight: 'Reela keeps my content flow fast, fresh, and monetizable.',
    role: 'TikTok Content Creator',
  },
  {
    category: 'CREATIVE',
    avatar: '/user-4.png',
    quote:
      "Reela's AI storyboard and scene builder turns rough ideas into full visual drafts in 10 minutes.",
    highlight: 'We now prototype campaigns without touching a camera.',
    role: 'Creative Director @ Media Studio',
  },
  {
    category: 'CONTENT CREATOR',
    avatar: '/user-5.png',
    quote:
      "I turned my blogs into videos with Reela's voiceover and illustration modes — my channel exploded.",
    highlight: 'It saved me 15+ hours per week and tripled my views.',
    role: 'Health & Wellness Influencer',
  },
  {
    category: 'RETAIL',
    avatar: '/user-6.png',
    quote:
      'Reela maps every product angle and character note into the script, so our catalog videos feel shot on location.',
    highlight: 'Multi-reference alignment keeps 40+ SKUs pixel-perfect across variants.',
    role: 'Head of Content @ Retail Marketplace',
  },
  {
    category: 'AGENCY',
    avatar: '/user-7.png',
    quote:
      'We storyboard hero shots, drop in AI B-roll, and Reela blends avatars with graphics without leaving the timeline.',
    highlight: 'Mixed-media sequences now take hours, not days.',
    role: 'Executive Producer @ Creative Agency',
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
        <div class='relative' data-auto-scroll>
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
            type='button'
            aria-label='Scroll left'
            onclick="horizontalScroll(this.parentElement, 'left')"
          >
            <Icon name='ChevronLeft' class='h-6 w-6 text-gray-700' />
          </button>

          <button
            class='absolute right-0 top-1/2 z-10 -mr-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100'
            type='button'
            aria-label='Next testimonial'
            onclick="horizontalScroll(this.parentElement, 'right')"
          >
            <Icon name='ChevronRight' class='h-6 w-6 text-gray-700' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Section6;
