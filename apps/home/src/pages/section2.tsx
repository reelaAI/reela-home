// Reela Is Built for Speed & Results

import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];
import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-[#0b0b13] via-[#0f0f18] to-[#151522] px-4 py-16 md:py-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-[3rem] font-bold text-center mb-4 text-white'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-10 md:mb-12 max-w-4xl text-center text-base text-slate-300 md:text-lg'>
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
        'group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-slate-100 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-md',
        'transition-all duration-500 hover:-translate-y-3 hover:border-brand/50 hover:shadow-[0_40px_120px_rgba(255,0,88,0.2)]'
      )}
    >
      <div className='pointer-events-none absolute inset-x-[-40%] bottom-[-40%] aspect-square rounded-full bg-brand/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100'></div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div className='flex h-24 w-24 items-center justify-center rounded-3xl bg-brand text-white shadow-[0_10px_30px_rgba(255,0,88,0.35)] transition-all duration-500 group-hover:scale-105'>
            <Icon name={icon} className='size-12' />
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white leading-tight'>
              {title}
            </h3>
            <p className='mx-auto max-w-sm text-base leading-relaxed text-slate-300'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

