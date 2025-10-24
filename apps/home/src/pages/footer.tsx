import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='border-t border-gray-200 bg-white pt-16 pb-8 text-gray-900'>
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
              class='rounded-full bg-gray-100 p-3 text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white'
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
              class='rounded-full bg-gray-100 p-3 text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white'
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
        <div class='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-200'>
          <div>
            <div>Product</div>
            <ul class='mt-4 space-y-2 text-gray-600'>
              {products.map(item => (
                <li
                  key={item.href}
                  class='max-w-max transition-colors duration-200 hover:text-gray-900 hover:underline'
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
          <h4 class='mb-4 text-sm font-semibold text-gray-500'>Popular Topics</h4>
          <div class='flex flex-wrap gap-2'>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              AI Video Creation
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Generator
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              AI Avatar
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Text to Video
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Editing
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Subtitle Generator
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Marketing
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Content Creation
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Social Media Videos
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Templates
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              AI B-Roll
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Remix
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Transcription
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Translation
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Dubbing
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Hosting
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video Analytics
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Video API
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
              href='#'
            >
              Enterprise Video
            </a>
            <a
              class='text-xs rounded-full bg-gray-100 px-3 py-1 text-gray-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white'
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
