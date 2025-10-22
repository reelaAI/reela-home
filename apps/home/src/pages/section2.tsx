// Reela Is Built for Speed & Results

import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-gray-50 to-white px-4 py-16 md:py-20'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-4xl font-bold md:text-6xl text-center mb-4'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-16 max-w-4xl text-center text-xl text-gray-600'>
          Reela turns your ideas, avatars, and products into consistent, studio-quality videos in minutes — with perfect visual
          and character continuity throughout.
        </p>

        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-4 max-w-6xl xl:max-w-none mx-auto'>
          <FeatureCard
            title='Minutes to Full Videos'
            description='From prompt to polished video in minutes — no setup, no editing.'
            icon='timer'
          />
          <FeatureCard
            title='AI Avatars that Speak and Sell'
            description='Branded hosts in any language, with voice and style that stay consistent.'
            icon='sparkles'
          />
          <FeatureCard
            title='Product-Consistent Generation'
            description='Keep every color, texture, and detail true to your product visuals.'
            icon='boxes'
          />
          <FeatureCard
            title='Multi-Reference & Multimodal Creation'
            description='Combine real footage, AI visuals, and reference images with perfect continuity.'
            icon='layers'
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
  icon: keyof typeof iconMap;
}) {
  return (
    <div
      className={cn(
        'rounded-lg text-slate-950',
        'p-10 shadow-xl bg-white group relative overflow-hidden h-full shadow-rose-500/10',
        'hover:shadow-2xl transition-all duration-500 hover:-translate-y-3'
      )}
    >
      {/* Background decoration */}
      <div className='absolute top-0 right-0 w-40 h-40 opacity-5'>
        <div className='w-full h-full bg-brand rounded-full transform translate-x-20 -translate-y-20'></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div className='w-24 h-24 bg-brand rounded-3xl flex items-center justify-center text-white group-hover:scale-105 transition-all duration-500 shadow-xl'>
            {iconMap[icon]}
          </div>

          <div className='space-y-4'>
            <h3 className='text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 leading-tight'>
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

const iconMap = {
  timer: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-timer size-8'
    >
      <path d='M10 2h4' />
      <path d='M12 14v-4' />
      <path d='M4.93 4.93 7.76 7.76' />
      <path d='M12 8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z' />
    </svg>
  ),
  sparkles: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-sparkles size-8'
    >
      <path d='M12 3v6' />
      <path d='M16.2 7.8 12 12' />
      <path d='M22 12h-6' />
      <path d='M18.2 16.2 12 12' />
      <path d='M12 18v-6' />
      <path d='M7.8 16.2 12 12' />
      <path d='M2 12h6' />
      <path d='M7.8 7.8 12 12' />
    </svg>
  ),
  boxes: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-boxes size-8'
    >
      <path d='M3 7.5V21l9 2 9-2V7.5' />
      <path d='M3 7.5 12 10l9-2.5' />
      <path d='M12 10v13' />
      <path d='m7.5 4.27 4.5 1.23 4.5-1.23L12 3Z' />
    </svg>
  ),
  layers: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-layers size-8'
    >
      <path d='m12.17 5.5 6.94 3.47-7.11 3.46-6.87-3.44 7.04-3.49a.5.5 0 0 1 .43 0Z' />
      <path d='m3.96 10.91 7.04 3.58' />
      <path d='m14.87 14.5 5.16-2.62' />
      <path d='M3.96 15.81 11 19' />
      <path d='m14.87 19 5.16-2.62' />
    </svg>
  ),
};

