// Reela Is Built for Speed & Results

import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];
import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-white via-white to-neutral-50 px-4 py-12 md:py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-[3rem] font-bold text-center mb-4'>
          Reela is Built for{' '}
          <span className='bg-gradient-to-r from-black via-neutral-800 to-black bg-clip-text text-transparent'>
            Speed &amp; Results
          </span>
        </h2>
        <p className='mx-auto mb-10 md:mb-12 max-w-4xl text-center text-base text-neutral-600 md:text-lg'>
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
        'rounded-lg text-neutral-950',
        'p-10 shadow-xl bg-white group relative overflow-hidden h-full shadow-black/5',
        'hover:shadow-2xl transition-all duration-500 hover:-translate-y-3'
      )}
    >
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-40 h-40 opacity-5'>
        <div className='w-full h-full bg-neutral-900 rounded-full transform translate-x-20 -translate-y-20'></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div className='w-24 h-24 bg-black rounded-3xl flex items-center justify-center text-white group-hover:scale-105 transition-all duration-500 shadow-xl'>
            <Icon name={icon} className='size-12 text-white' />
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-neutral-900 group-hover:text-neutral-800 transition-colors duration-300 leading-tight'>
              {title}
            </h3>
            <p className='text-neutral-600 leading-relaxed text-base max-w-sm mx-auto'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

