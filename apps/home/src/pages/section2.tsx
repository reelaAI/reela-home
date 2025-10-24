// Reela Is Built for Speed & Results

import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];
import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-[radial-gradient(circle_at_top,_#1b1b2f,_#07050f_55%)] px-4 py-16 md:py-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='font-inter text-[3rem] font-bold text-center text-white mb-4'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-10 md:mb-12 max-w-4xl text-center text-base text-slate-300 md:text-lg'>
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
        'rounded-2xl text-white',
        'group relative h-full overflow-hidden border border-white/10 bg-white/[0.04] p-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl',
        'transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_140px_rgba(255,0,88,0.25)]'
      )}
    >
      {/* Background decoration */}
      <div className='pointer-events-none absolute -right-20 -top-24 h-48 w-48 opacity-40'>
        <div className='h-full w-full -translate-y-6 translate-x-10 rounded-full bg-[radial-gradient(circle,_rgba(255,0,88,0.45)_0%,_rgba(15,10,30,0)_70%)] blur-2xl'></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div className='flex h-24 w-24 items-center justify-center rounded-3xl bg-brand text-white shadow-[0_20px_60px_rgba(255,0,88,0.4)] transition-all duration-500 group-hover:scale-105'>
            <Icon name={icon} className='size-12 text-white drop-shadow-[0_6px_18px_rgba(255,0,88,0.45)]' />
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-white transition-colors duration-300 leading-tight'>
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

