// Reela Is Built for Speed & Results

import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];
import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-[#07060a] via-[#0a0b12] to-[#101222] px-4 py-16 text-gray-200 md:py-24'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-4 text-center font-inter text-[3rem] font-bold text-white'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-10 max-w-4xl text-center text-base text-gray-300 md:mb-12 md:text-lg'>
          Reela turns your ideas, avatars, and products into consistent, studio-quality videos in minutes — with perfect visual
          and character continuity throughout.
        </p>

        <div className='mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:max-w-none xl:grid-cols-4'>
          <FeatureCard
            title='Minutes to Full Videos'
            description='From prompt to polished video in minutes — no setup, no editing.'
            icon='video'
          />
          <FeatureCard
            title='AI Avatars that Speak and Sell'
            description='Branded hosts in any language, with voice and style that stay consistent.'
            icon='avatar'
          />
          <FeatureCard
            title='Product-Consistent Generation'
            description='Keep every color, texture, and detail true to your product visuals.'
            icon='template'
          />
          <FeatureCard
            title='Multi-Reference & Multimodal Creation'
            description='Combine real footage, AI visuals, and reference images with perfect continuity.'
            icon='remix'
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconName;
}) {
  return (
    <div
      className={cn(
        'relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-white shadow-[0_24px_60px_rgba(3,4,8,0.45)] transition-all duration-500 hover:-translate-y-3 hover:border-white/25 hover:shadow-[0_40px_120px_rgba(255,0,88,0.25)]',
      )}
    >
      {/* Background decoration */}
      <div className='pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-40'>
        <div className='h-full w-full -translate-y-20 translate-x-20 rounded-full bg-brand/40 blur-3xl'></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center space-y-8 text-center'>
          <div className='flex h-24 w-24 items-center justify-center rounded-3xl bg-brand text-white shadow-[0_20px_45px_rgba(255,0,88,0.45)] transition-transform duration-500 group-hover:scale-105'>
            <Icon name={icon} className='size-12 text-white' />
          </div>

          <div className='space-y-4'>
            <h3 className='leading-tight text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand'>
              {title}
            </h3>
            <p className='mx-auto max-w-sm text-base leading-relaxed text-gray-300'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

