import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-white pt-16 pb-8 text-gray-900'>
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
                src='/logo.svg'
              />
            </a>
            <p class='mt-4 max-w-md text-gray-600'>
              AI-powered video creation platform for teams. Create professional videos from text in
              minutes.
            </p>
          </div>
          <div class='flex flex-wrap gap-4'>
            <a
              class='rounded-full bg-black p-3 text-white transition-colors duration-300 hover:bg-brand'
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
              class='rounded-full bg-black p-3 text-white transition-colors duration-300 hover:bg-brand'
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
        <div class='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-black/10'>
          <div>
            <div>Product</div>
            <ul class='mt-4 space-y-2 text-gray-600'>
              {products.map(item => (
                <li
                  key={item.href}
                  class='max-w-max transition-colors duration-200 hover:text-brand hover:underline'
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
          <h4 class='text-sm font-semibold text-gray-500 mb-4'>Popular Topics</h4>
          <div class='flex flex-wrap gap-2'>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              AI Video Creation
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Generator
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              AI Avatar
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Text to Video
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Editing
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Subtitle Generator
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Marketing
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Content Creation
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Social Media Videos
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Templates
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              AI B-Roll
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Remix
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Transcription
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Translation
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Dubbing
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Hosting
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Analytics
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video API
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Enterprise Video
            </a>
            <a
              class='rounded-full bg-black/5 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:bg-black/10 hover:text-black'
              href='#'
            >
              Video Collaboration
            </a>
          </div>
        </div>
        <div class='pt-8 text-center text-sm text-gray-500'>
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
