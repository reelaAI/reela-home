import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-white text-gray-700 border-t border-gray-100 pt-16 pb-8'>
      <div class='max-w-[1200px] mx-auto px-4'>
        <div class='flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8'>
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
              class='flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white'
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
              class='flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-900 transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white'
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
        <div class='grid grid-cols-2 gap-8 border-y border-gray-100 py-8 md:grid-cols-4'>
          <div>
            <div class='text-sm font-semibold text-gray-900 uppercase tracking-wide'>Product</div>
            <ul class='mt-4 space-y-2 text-gray-600'>
              {products.map(item => (
                <li
                  key={item.href}
                  class='max-w-max transition-colors duration-200 hover:text-brand'
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
          <h4 class='mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900'>Popular Topics</h4>
          <div class='flex flex-wrap gap-2'>
            {[
              'AI Video Creation',
              'Video Generator',
              'AI Avatar',
              'Text to Video',
              'Video Editing',
              'Subtitle Generator',
              'Video Marketing',
              'Content Creation',
              'Social Media Videos',
              'Video Templates',
              'AI B-Roll',
              'Video Remix',
              'Video Transcription',
              'Video Translation',
              'Video Dubbing',
              'Video Hosting',
              'Video Analytics',
              'Video API',
              'Enterprise Video',
              'Video Collaboration',
            ].map(topic => (
              <a
                key={topic}
                class='rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white'
                href='#'
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
        <div class='pt-8 text-center text-sm text-gray-500'>
          <a class='hover:text-brand' target='_blank' href='/legal/terms-of-service'>
            Terms of Service
          </a>
          <span> · </span>
          <a class='hover:text-brand' target='_blank' href='/legal/privacy-policy'>
            Privacy Policy
          </a>
          <p class='mt-2 text-gray-400'>© 2025 Reela AI. Inc.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
