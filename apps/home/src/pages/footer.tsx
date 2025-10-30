import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-gray-900 text-white pt-16 pb-8'>
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
            <p class='mt-4 text-gray-400 max-w-md'>
              AI-powered video creation platform for teams. Create professional videos from text in
              minutes.
            </p>
          </div>
          <div class='flex flex-wrap gap-4'>
            <a
              class='bg-gray-800 hover:bg-[#F7265B] p-3 rounded-full transition-colors duration-300'
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
              class='bg-gray-800 hover:bg-[#F7265B] p-3 rounded-full transition-colors duration-300'
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
        <div class='py-8 border-t border-b border-gray-800'>
          <div class='flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
            <div class='flex-1 rounded-2xl border border-[#F7265B]/50 bg-gray-800/60 p-6 shadow-[0_0_25px_rgba(247,38,91,0.2)]'>
              <h4 class='text-lg font-semibold text-white mb-4'>Product</h4>
              <ul class='space-y-3 text-gray-300'>
                {products.map(item => (
                  <li key={item.href}>
                    <a
                      class='inline-flex items-center gap-2 rounded-lg px-3 py-1 transition-colors duration-200 hover:bg-[#F7265B] hover:text-white'
                      target='_blank'
                      href={item.href}
                    >
                      <span class='h-1.5 w-1.5 rounded-full bg-[#F7265B]'></span>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class='flex-1 md:max-w-sm'>
              <h4 class='text-sm font-semibold text-gray-500 mb-4'>Popular Topics</h4>
              <div class='flex flex-wrap gap-2'>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  AI Video Creation
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Generator
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  AI Avatar
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Text to Video
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Editing
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Subtitle Generator
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Marketing
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Content Creation
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Social Media Videos
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Templates
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  AI B-Roll
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Remix
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Enterprise Video
                </a>
                <a
                  class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
                  href='#'
                >
                  Video Collaboration
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='pt-8 text-center text-gray-500 text-sm'>
          <a target='_blank' href='/legal/terms-of-service'>
            Terms of Service
          </a>
          <span> · </span>
          <a target='_blank' href='/legal/privacy-policy'>
            Privacy Policy
          </a>
          <p>© 2025 Reela AI. Inc.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
