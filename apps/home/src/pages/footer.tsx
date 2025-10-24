import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-[#05030d] pt-16 pb-8 text-white'>
      <div class='max-w-[1200px] mx-auto px-4'>
        <div class='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
          <div class='mb-6 md:mb-0'>
            <a class='flex items-center' href='/'>
              <img
                alt='Reela AI'
                loading='lazy'
                width='180'
                height='50'
                decoding='async'
                data-nimg='1'
                class='h-12 w-auto'
                style='color: transparent'
                src='/logo-white.svg'
              />
            </a>
            <p class='mt-4 text-slate-400 max-w-md'>
              AI-powered video creation platform for teams. Create professional videos from text in
              minutes.
            </p>
          </div>
          <div class='flex flex-wrap gap-4'>
            <a
              class='rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#ff0058]/60 hover:text-white hover:shadow-[0_20px_60px_-40px_rgba(255,0,88,0.6)]'
              aria-label='Twitter'
              target='_blank'
              rel='noopener noreferrer'
              href='https://x.com/ReelaAI'
            >
              <Icon
                name='twitter'
                className='lucide lucide-twitter h-5 w-5'
              />
            </a>
            <a
              class='rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#ff0058]/60 hover:text-white hover:shadow-[0_20px_60px_-40px_rgba(255,0,88,0.6)]'
              aria-label='YouTube'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.youtube.com/@ReelaAI'
            >
              <Icon
                name='youtube'
                className='lucide lucide-youtube h-5 w-5'
              />
            </a>
          </div>
        </div>
        <div class='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10'>
          <div>
            <div class='text-sm uppercase tracking-wide text-slate-300'>Product</div>
            <ul class='mt-4 space-y-2 text-slate-400'>
              {products.map(item => (
                <li
                  key={item.href}
                  class='max-w-max transition-colors duration-200 hover:text-white'
                >
                  <a target='_blank' href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div class='py-8'>
          <h4 class='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-400'>Popular Topics</h4>
          <div class='flex flex-wrap gap-2'>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              AI Video Creation
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Generator
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              AI Avatar
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Text to Video
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Editing
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Subtitle Generator
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Marketing
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Content Creation
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Social Media Videos
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Templates
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              AI B-Roll
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Remix
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Transcription
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Translation
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Dubbing
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Hosting
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Analytics
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video API
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Enterprise Video
            </a>
            <a
              class='text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-300 transition-colors duration-200 hover:border-[#ff0058]/40 hover:text-white'
              href='#'
            >
              Video Collaboration
            </a>
          </div>
        </div>
        <div class='pt-8 text-center text-slate-500 text-sm'>
          <a target='_blank' href='/legal/terms-of-service'>
            Terms of Service
          </a>
          <span> · </span>
          <a target='_blank' href='/legal/privacy-policy'>
            Privacy Policy
          </a>
          <p class='mt-2 text-xs text-slate-600'>© 2025 Reela AI. Inc.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
