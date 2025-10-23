// A new vision for video creation

import { Icon } from '../components/Icon';

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

type CardPosition = 'active' | 'prev' | 'next' | 'inactive';

const initialActiveIndex = 1;

const getCardPosition = (index: number, activeIndex: number, total: number): CardPosition => {
  if (index === activeIndex) {
    return 'active';
  }

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

  if (index === prevIndex) {
    return 'prev';
  }

  if (index === nextIndex) {
    return 'next';
  }

  return 'inactive';
};

const baseCardClasses =
  'testimonial-card group relative flex w-full max-w-[960px] flex-col gap-6 overflow-hidden rounded-3xl bg-white/95 p-6 shadow-md transition-[transform,box-shadow,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex-row lg:items-start lg:gap-8 lg:p-8';

const positionClassMap: Record<CardPosition, string> = {
  active:
    'z-30 shadow-2xl ring-2 ring-brand/10 lg:-mx-16 lg:-mt-12 lg:flex lg:scale-[1.08]',
  prev:
    'hidden opacity-0 lg:pointer-events-auto lg:-mr-10 lg:flex lg:max-w-sm lg:mt-8 lg:scale-90 lg:opacity-60 lg:z-10',
  next:
    'hidden opacity-0 lg:pointer-events-auto lg:-ml-10 lg:flex lg:max-w-sm lg:mt-8 lg:scale-90 lg:opacity-60 lg:z-10',
  inactive: 'hidden opacity-0',
};

const baseVideoClasses =
  'relative mx-auto aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-28 md:w-32 lg:mx-0 lg:w-36 lg:self-start xl:w-40';

const textPanelBaseClasses =
  'flex flex-1 flex-col gap-3 text-left lg:gap-4 lg:max-w-[260px]';

const textPanelStateClassMap: Record<CardPosition, string> = {
  active: 'lg:max-w-[420px]',
  prev: 'lg:max-w-[280px]',
  next: 'lg:max-w-[280px]',
  inactive: '',
};

const quoteBaseClasses = 'text-[11px] leading-relaxed text-slate-700';

const quoteStateClassMap: Record<CardPosition, string> = {
  active: 'sm:text-sm md:text-[15px]',
  prev: 'text-[10px] sm:text-[10px] md:text-xs',
  next: 'text-[10px] sm:text-[10px] md:text-xs',
  inactive: '',
};

const highlightBaseClasses = 'text-[10px] text-brand';

const highlightStateClassMap: Record<CardPosition, string> = {
  active: 'sm:text-xs md:text-sm',
  prev: 'text-[9px] sm:text-[10px] md:text-xs',
  next: 'text-[9px] sm:text-[10px] md:text-xs',
  inactive: '',
};

const videoPositionClassMap: Record<CardPosition, string> = {
  active: 'scale-100',
  prev: 'scale-75',
  next: 'scale-75',
  inactive: 'scale-75',
};

const Section6 = () => {
  const totalTestimonials = testimonials.length;

  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          A new vision for
          <span class='text-brand'> video creation </span>
        </h2>
      </div>
      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div
          class='relative'
          data-testimonial-carousel=''
          data-interval='5000'
        >
          <div class='flex items-stretch justify-center gap-4 lg:items-end lg:gap-0'>
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index, initialActiveIndex, totalTestimonials);
              const cardClasses = `${baseCardClasses} ${positionClassMap[position]}`;
              const videoClasses = `${baseVideoClasses} ${videoPositionClassMap[position]}`;

              return (
                <article
                  key={testimonial.quote}
                  class={cardClasses}
                  data-carousel-card=''
                  data-index={index}
                  data-position={position}
                  data-base-class={baseCardClasses}
                  data-class-active={positionClassMap.active}
                  data-class-prev={positionClassMap.prev}
                  data-class-next={positionClassMap.next}
                  data-class-inactive={positionClassMap.inactive}
                  data-video-card={position === 'active' ? '' : undefined}
                >
                  <div
                    class={`${videoClasses} lg:mr-8`}
                    data-video-container=''
                    data-video-base-class={`${baseVideoClasses} lg:mr-8`}
                    data-video-class-active={videoPositionClassMap.active}
                    data-video-class-prev={videoPositionClassMap.prev}
                    data-video-class-next={videoPositionClassMap.next}
                    data-video-class-inactive={videoPositionClassMap.inactive}
                  >
                    <video
                      src={testimonial.video}
                      playsinline
                      class='h-full w-full object-cover'
                      style={{ aspectRatio: '9 / 16' }}
                      {...(position === 'active'
                        ? {
                            autoplay: true,
                            loop: true,
                            muted: true,
                            controls: true,
                            'data-video-element': '',
                          }
                        : {})}
                    />
                    <button
                      type='button'
                      class={`absolute right-3 top-3 rounded-full bg-black/65 p-2 text-white transition hover:bg-black/80 ${
                        position === 'active' ? '' : 'hidden'
                      }`}
                      data-sound-toggle=''
                      onclick='toggleVideoSound(this)'
                      aria-label='Toggle sound'
                    >
                      <Icon
                        name='volume-2'
                        class='icon-sound-on hidden h-4 w-4'
                        size={16}
                        aria-hidden='true'
                      />
                      <Icon
                        name='volume-x'
                        class='icon-sound-off h-4 w-4'
                        size={16}
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                  <div
                    class={`${textPanelBaseClasses} ${textPanelStateClassMap[position]}`}
                    data-text-panel=''
                    data-text-panel-base-class={textPanelBaseClasses}
                    data-text-panel-class-active={textPanelStateClassMap.active}
                    data-text-panel-class-prev={textPanelStateClassMap.prev}
                    data-text-panel-class-next={textPanelStateClassMap.next}
                    data-text-panel-class-inactive={textPanelStateClassMap.inactive}
                  >
                    <div class='flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between'>
                      <span class='inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white lg:text-[11px]'>
                        {testimonial.category}
                      </span>
                      <div class='border-brand relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 shadow-md lg:ml-auto'>
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
                    <div class='space-y-2 text-left'>
                      <p
                        class={`${quoteBaseClasses} ${quoteStateClassMap[position]}`}
                        data-quote=''
                        data-quote-base-class={quoteBaseClasses}
                        data-quote-class-active={quoteStateClassMap.active}
                        data-quote-class-prev={quoteStateClassMap.prev}
                        data-quote-class-next={quoteStateClassMap.next}
                        data-quote-class-inactive={quoteStateClassMap.inactive}
                      >
                        "{testimonial.quote}"
                      </p>
                      <p
                        class={`${highlightBaseClasses} ${highlightStateClassMap[position]}`}
                        data-highlight=''
                        data-highlight-base-class={highlightBaseClasses}
                        data-highlight-class-active={highlightStateClassMap.active}
                        data-highlight-class-prev={highlightStateClassMap.prev}
                        data-highlight-class-next={highlightStateClassMap.next}
                        data-highlight-class-inactive={highlightStateClassMap.inactive}
                      >
                        {testimonial.highlight}
                      </p>
                    </div>
                    <div class='flex justify-start pt-1'>
                      <p class='inline-block rounded-full bg-slate-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <button
                    type='button'
                    class='absolute inset-0 z-30 hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60'
                    data-carousel-activate=''
                    aria-label={`Show testimonial from ${testimonial.role}`}
                  />
                </article>
              );
            })}
          </div>
          <button
            type='button'
            class='group absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-3 text-black shadow-lg transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/40 sm:flex sm:z-30'
            data-carousel-prev=''
            aria-label='Show previous testimonial'
          >
            <Icon
              name='chevron-left'
              class='h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5'
              size={20}
              aria-hidden='true'
            />
          </button>
          <button
            type='button'
            class='group absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-3 text-black shadow-lg transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand/40 sm:flex sm:z-30'
            data-carousel-next=''
            aria-label='Show next testimonial'
          >
            <Icon
              name='chevron-right'
              class='h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5'
              size={20}
              aria-hidden='true'
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Section6;
