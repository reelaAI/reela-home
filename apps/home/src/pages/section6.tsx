// See What Creators Made with Reela

import type { JSX } from 'hono/jsx';

import { Icon } from '../components/Icon';

type Testimonial = {
  category: string;
  avatar: string;
  quote: string;
  highlight: JSX.Element | string;
  role: string;
  video: string;
};

const testimonials: Testimonial[] = [
  {
    category: 'REAL ESTATE',
    avatar: 'https://files.reela.com/assets/images/a1.png',
    quote:
      'Reela lets me create listing videos in just 10 minutes — fast, clear, and consistent with my brand.',
    highlight: (
      <>
        <strong>Property inquiries tripled</strong> and video views are up <strong>420%</strong>.{' '}
        <strong>What used to take a team now takes minutes.</strong>
      </>
    ),
    role: 'Alexis — Realtor',
    video: 'https://files.reela.com/assets/videos/a1.mp4',
  },
  {
    category: 'E-COMMERCE',
    avatar: 'https://files.reela.com/assets/images/a2.png',
    quote:
      'Reela makes stylish try-on videos for every drop in minutes, keeping our visuals consistent and on-brand.',
    highlight: (
      <>
        <strong>Ad CTR hit 8.2%</strong> and monthly GMV grew <strong>3.6×</strong> — no production team needed.
      </>
    ),
    role: 'Emma — Fashion Seller',
    video: 'https://files.reela.com/assets/videos/a2.mp4',
  },
  {
    category: 'ADVERTISING',
    avatar: 'https://files.reela.com/assets/images/a4.png',
    quote:
      'Reela lets me create full ad samples in just 5 minutes — I can deliver a complete pitch within an hour.',
    highlight: (
      <>
        <strong>Clients are amazed by the speed and quality.</strong> Reela turned my workflow into{' '}
        <strong>pure creative efficiency.</strong>
      </>
    ),
    role: 'Sophie — Ad Producer',
    video: 'https://files.reela.com/assets/videos/a4.mp4',
  },
  {
    category: 'CREATOR',
    avatar: 'https://files.reela.com/assets/images/a5.png',
    quote:
      'I used to spend a full day editing each TikTok video — now Reela lets me finish in just 10 minutes.',
    highlight:
      'My latest video hit over 1M views, and I’m creating faster than ever before.',
    role: 'Lena — TikTok Creator',
    video: 'https://files.reela.com/assets/videos/a5.mp4',
  },
  {
    category: 'CREATOR',
    avatar: 'https://files.reela.com/assets/images/a3.png',
    quote:
      'Reela turns short scripts into full animated Shorts in minutes — smooth, cinematic, and ready to post.',
    highlight: (
      <>
        <strong>Weekly views top 400K</strong> and <strong>subscribers doubled</strong> in a month — all powered by
        Reela.
      </>
    ),
    role: 'Jason — YouTuber',
    video: 'https://files.reela.com/assets/videos/a3.mp4',
  },
  {
    category: 'E-COMMERCE',
    avatar: 'https://files.reela.com/assets/images/a8.png',
    quote:
      'Reelaを使えば、売上につながる商品動画を1時間に10本以上も作れます。どの動画も一貫したクオリティで仕上がります。',
    highlight: '導入からわずか2週間で売上が3倍に。新しい動画を投稿するたびに確実に成果が出ています。',
    role: 'Mia — TikTokセラー',
    video: 'https://files.reela.com/assets/videos/a8.mp4',
  },
  {
    category: 'FITNESS',
    avatar: 'https://files.reela.com/assets/images/a7.png',
    quote:
      'Reela lets me create calm, beautiful promo videos for my yoga studio in minutes — no camera crew, no editing stress.',
    highlight:
      'Our TikTok videos reached 500K+ views this month, and class bookings have doubled since I started using Reela.',
    role: 'Aisha — Yoga Studio Owner',
    video: 'https://files.reela.com/assets/videos/a7.mp4',
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
  'testimonial-card group relative flex w-full max-w-[960px] flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-5 text-slate-100 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-[transform,box-shadow,opacity,margin] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:flex-row lg:items-start lg:gap-6 lg:p-5';

const positionClassMap: Record<CardPosition, string> = {
  active:
    'z-30 gap-6 p-6 shadow-[0_40px_160px_rgba(255,0,88,0.25)] ring-2 ring-brand/40 lg:-mx-16 lg:flex lg:items-center lg:gap-8 lg:p-8',
  prev:
    'hidden opacity-0 lg:pointer-events-auto lg:-mr-10 lg:flex lg:max-w-sm lg:items-center lg:opacity-70 lg:z-10 lg:!gap-3 lg:!p-4 lg:!pb-1.5',
  next:
    'hidden opacity-0 lg:pointer-events-auto lg:-ml-10 lg:flex lg:max-w-sm lg:items-center lg:opacity-70 lg:z-10 lg:!gap-3 lg:!p-4 lg:!pb-1.5',
  inactive: 'hidden opacity-0 lg:!gap-3 lg:!p-4 lg:!pb-1.5',
};

const baseVideoClasses =
  'relative mx-auto aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-2xl transition-[transform,width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top-left sm:w-28 md:w-32 lg:mx-0 lg:w-36 lg:self-start xl:w-40';

const textPanelBaseClasses =
  'flex flex-1 flex-col gap-3 text-left lg:gap-4 lg:max-w-[260px]';

const textPanelStateClassMap: Record<CardPosition, string> = {
  active: 'lg:max-w-[420px]',
  prev: 'lg:max-w-[280px] !gap-2 lg:!gap-2.5',
  next: 'lg:max-w-[280px] !gap-2 lg:!gap-2.5',
  inactive: '!gap-2 lg:!gap-2.5',
};

const quoteBaseClasses = 'text-[11px] leading-relaxed text-slate-300';

const quoteStateClassMap: Record<CardPosition, string> = {
  active: 'sm:text-sm md:text-[15px]',
  prev: 'text-[6px] sm:text-[7px] md:text-[7px]',
  next: 'text-[6px] sm:text-[7px] md:text-[7px]',
  inactive: '',
};

const highlightBaseClasses = 'text-[10px] text-brand font-medium';

const highlightStateClassMap: Record<CardPosition, string> = {
  active: 'sm:text-xs md:text-sm',
  prev: 'text-[5px] sm:text-[6px] md:text-[7px]',
  next: 'text-[5px] sm:text-[6px] md:text-[7px]',
  inactive: '',
};

const videoPositionClassMap: Record<CardPosition, string> = {
  active: 'lg:mr-8',
  prev: '!w-20 sm:!w-24 md:!w-28 lg:mr-2 lg:!w-28 xl:!w-32',
  next: '!w-20 sm:!w-24 md:!w-28 lg:mr-2 lg:!w-28 xl:!w-32',
  inactive: '!w-20 sm:!w-24 md:!w-28 lg:mr-2 lg:!w-28 xl:!w-32',
};

const avatarBaseClasses =
  'border-brand relative shrink-0 overflow-hidden rounded-full border-2 shadow-[0_10px_40px_rgba(255,0,88,0.4)] transition-[width,height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:ml-auto';

const avatarStateClassMap: Record<CardPosition, string> = {
  active: 'h-16 w-16 sm:h-20 sm:w-20',
  prev: 'h-10 w-10 sm:h-12 sm:w-12',
  next: 'h-10 w-10 sm:h-12 sm:w-12',
  inactive: 'h-10 w-10 sm:h-12 sm:w-12',
};

const Section6 = () => {
  const totalTestimonials = testimonials.length;

  return (
    <>
      <div class='container mx-auto mb-6 px-4 py-8 text-center'>
        <h2 class='font-inter text-[3rem] font-bold text-white'>
          See What <span class='text-brand'>Creators</span> Made with <span class='text-brand'>Reela</span>
        </h2>
        <p class='mx-auto mt-2 max-w-2xl text-base text-slate-300 md:text-lg'>
          Real creators, real results — all made in minutes with Reela’s AI studio.
        </p>
      </div>
      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div
          class='relative'
          data-testimonial-carousel=''
          data-interval='5000'
        >
          <div class='flex items-stretch justify-center gap-4 lg:items-center lg:gap-0'>
            {testimonials.map((testimonial, index) => {
              const position = getCardPosition(index, initialActiveIndex, totalTestimonials);
              const cardClasses = `${baseCardClasses} ${positionClassMap[position]}`;
              const videoClasses = baseVideoClasses;

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
                    class={`${videoClasses} ${videoPositionClassMap[position]}`}
                    data-video-container=''
                    data-video-base-class={baseVideoClasses}
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
                      class={`absolute right-3 top-3 rounded-full border border-white/20 bg-black/70 p-2 text-white transition hover:bg-black/80 ${
                        position === 'active' ? '' : 'hidden'
                      }`}
                      data-sound-toggle=''
                      onclick='toggleVideoSound(this)'
                      aria-label='Toggle sound'
                    >
                      <Icon
                        name='volume'
                        className='icon-sound-on hidden h-4 w-4'
                      />
                      <Icon
                        name='mute'
                        className='icon-sound-off h-4 w-4'
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
                      <span class='inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white lg:text-[11px]'>
                        {testimonial.category}
                      </span>
                      <div
                        class={`${avatarBaseClasses} ${avatarStateClassMap[position]}`}
                        data-avatar-container=''
                        data-avatar-base-class={avatarBaseClasses}
                        data-avatar-class-active={avatarStateClassMap.active}
                        data-avatar-class-prev={avatarStateClassMap.prev}
                        data-avatar-class-next={avatarStateClassMap.next}
                        data-avatar-class-inactive={avatarStateClassMap.inactive}
                      >
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
                      <p class='inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white'>
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
            class='absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition hover:bg-white/20 sm:flex sm:z-30'
            data-carousel-prev=''
            aria-label='Show previous testimonial'
          >
            <Icon name='arrowRight' className='h-5 w-5 -scale-x-100' />
          </button>
          <button
            type='button'
            class='absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/10 p-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition hover:bg-white/20 sm:flex sm:z-30'
            data-carousel-next=''
            aria-label='Show next testimonial'
          >
            <Icon name='arrowRight' className='h-5 w-5' />
          </button>
        </div>
      </div>
    </>
  );
};

export default Section6;
