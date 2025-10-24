// Reela Is Built for Speed & Results

import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];
import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-white via-white to-[#fff5fa] px-4 py-12 md:py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-[3rem] font-bold text-center mb-4'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-10 md:mb-12 max-w-4xl text-center text-base text-gray-600 md:text-lg'>
          Reela turns your ideas, avatars, and products into consistent, studio-quality videos in minutes — with perfect visual
          and character continuity throughout.
        </p>

        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-6xl xl:max-w-none mx-auto'>
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
        'rounded-2xl border border-gray-100 bg-white text-slate-950',
        'p-10 shadow-[0_18px_40px_rgba(255,0,88,0.07)] group relative overflow-hidden h-full',
        'transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]'
      )}
    >
      {/* Background decoration */}
      <div className='absolute top-0 right-0 h-40 w-40 opacity-10'>
        <div className='h-full w-full rounded-full bg-brand/20 blur-2xl transform translate-x-20 -translate-y-20'></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div className='flex h-20 w-20 items-center justify-center rounded-3xl border border-brand/40 bg-white text-brand transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(255,0,88,0.12)]'>
            <Icon name={icon} className='size-10 text-brand' />
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-gray-900 transition-colors duration-300 leading-tight group-hover:text-gray-800'>
              {title}
            </h3>
            <p className='text-gray-600 leading-relaxed text-base max-w-sm mx-auto'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

