import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-gray-900 text-white pt-16 pb-8'>
      <div class='max-w-[1200px] mx-auto px-4'>
        <div class='flex flex-col md:flex-row justify-between items-start md:items-center mb-12'>
          <div class='mb-6 md:mb-0'>
            <a class='flex items-center' href='/'>
              <img
                alt='Reela AI white logo'
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
                class='lucide lucide-twitter h-5 w-5'
              >
                <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
              </svg>
            </a>
            <a
              class='bg-gray-800 hover:bg-[#F7265B] p-3 rounded-full transition-colors duration-300'
              aria-label='YouTube'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.youtube.com/@ReelaAI'
            >
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
                class='lucide lucide-youtube h-5 w-5'
              >
                <path d='M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17'></path>
                <path d='m10 15 5-3-5-3z'></path>
              </svg>
            </a>
          </div>
        </div>
        <div class='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-gray-800'>
          <div>
            <div>Product</div>
            <ul class='mt-4 space-y-2 text-gray-400'>
              {products.map(item => (
                <li
                  key={item.href}
                  class='hover:underline hover:text-gray-300 transition-colors duration-200 max-w-max'
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
              Video Transcription
            </a>
            <a
              class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
              href='#'
            >
              Video Translation
            </a>
            <a
              class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
              href='#'
            >
              Video Dubbing
            </a>
            <a
              class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
              href='#'
            >
              Video Hosting
            </a>
            <a
              class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
              href='#'
            >
              Video Analytics
            </a>
            <a
              class='text-xs bg-gray-800 hover:bg-gray-700 text-gray-400 px-3 py-1 rounded-full transition-colors duration-200'
              href='#'
            >
              Video API
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
