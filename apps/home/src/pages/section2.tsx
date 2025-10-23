// Reela Is Built for Speed & Results

import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-gray-50 to-white px-4 py-12 md:py-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-4xl font-bold md:text-6xl text-center mb-4'>
          Reela is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-10 md:mb-12 max-w-4xl text-center text-xl text-gray-600'>
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
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-timer size-8'
    >
      <path d='M9.5 3.5h5'></path>
      <path d='M6.2 6.2L4.4 4.4'></path>
      <path d='M12 6.5a 7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0 -15 Z'></path>
      <path d='M12 10.5v4l3 2'></path>
      <path d='M3 12.5h2.5'></path>
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
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-sparkles size-8'
    >
      <path d='M12 5.5a 3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0 -7 Z'></path>
      <path d='M4.5 19.5c1.4-4.2 4.8-6 7.5-6s6.1 1.8 7.5 6'></path>
      <path d='M19 5.5L22 2.5'></path>
      <path d='M22 6V2.5'></path>
      <path d='M19 2.5h3'></path>
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
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-boxes size-8'
    >
      <path d='M4.5 8.5L12 4.5l7.5 4-7.5 4Z'></path>
      <path d='M4.5 8.5v8L12 20.5l7.5-4v-8'></path>
      <path d='M4.5 16.5L12 13l7.5 3.5'></path>
      <path d='M12 12.5v8'></path>
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
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-layers size-8'
    >
      <path d='M4 11h10l2 2-2 2H4Z'></path>
      <path d='M7 7h10l2 2-2 2H7Z'></path>
      <path d='M10 15h10l2 2-2 2H10Z'></path>
  </svg>
  ),
};

