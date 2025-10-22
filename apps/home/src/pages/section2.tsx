// Reela Is Built for Speed & Results

import { cn } from '../utils/cn';

const Section2 = () => {
  return (
    <section className='w-full bg-gradient-to-b from-gray-50 to-white px-4 py-24'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-inter text-4xl font-bold md:text-6xl text-center mb-4'>
          Reela Is Built for <span className='text-brand'>Speed &amp; Results</span>
        </h2>
        <p className='mx-auto mb-20 max-w-4xl text-center text-xl text-gray-600'>
          Ship channel-specific videos from a single brief — with the speed of automation and the fidelity brands demand.
        </p>

        <div className='grid md:grid-cols-3 gap-10 max-w-6xl mx-auto'>
          <FeatureCard
            title='5-Minute Go-Live Videos'
            description='Upload product references, campaign talking points, and avatar preferences — Reela assembles a publish-ready cut with perfect SKU and talent alignment.'
            icon='zap'
          />
          <FeatureCard
            title='Hands-Off, Brand-Perfect Consistency'
            description='No timelines, no reshoots. Multi-reference identity tracking keeps every avatar, product, and storyline locked to your brief across scenes and versions.'
            icon='scissors'
          />
          <FeatureCard
            title='All-in-One Multimodal Storytelling'
            description='Blend virtual humans, AI-crafted scenes, product B-roll, and remix clips in a single workflow — ready to export for ads, ecommerce, and social.'
            icon='brain'
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
  icon: string;
}) {
  const iconMap = {
    zap: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='lucide lucide-zap-icon lucide-zap size-8'
      >
        <path d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z' />
      </svg>
    ),
    scissors: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='lucide lucide-scissors-icon lucide-scissors size-8'
      >
        <circle cx='6' cy='6' r='3' />
        <path d='M8.12 8.12 12 12' />
        <path d='M20 4 8.12 15.88' />
        <circle cx='6' cy='18' r='3' />
        <path d='M14.8 14.8 20 20' />
      </svg>
    ),
    brain: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        class='lucide lucide-brain-icon lucide-brain size-8'
      >
        <path d='M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z' />
        <path d='M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z' />
        <path d='M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4' />
        <path d='M17.599 6.5a3 3 0 0 0 .399-1.375' />
        <path d='M6.003 5.125A3 3 0 0 0 6.401 6.5' />
        <path d='M3.477 10.896a4 4 0 0 1 .585-.396' />
        <path d='M19.938 10.5a4 4 0 0 1 .585.396' />
        <path d='M6 18a4 4 0 0 1-1.967-.516' />
        <path d='M19.967 17.484A4 4 0 0 1 18 18' />
      </svg>
    ),
  };

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
        <div
          className={`w-full h-full bg-brand rounded-full transform translate-x-20 -translate-y-20`}
        ></div>
      </div>

      <div className='relative z-10'>
        <div className='flex flex-col items-center text-center space-y-8'>
          <div
            className={`w-24 h-24 bg-brand rounded-3xl flex items-center justify-center text-white group-hover:scale-105 transition-all duration-500 shadow-xl`}
          >
            {iconMap[icon as keyof typeof iconMap]}
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
