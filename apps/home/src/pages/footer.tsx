import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-gray-900 text-white pt-12 pb-6'>
      <div class='max-w-[1200px] mx-auto px-4'>
        <div class='flex flex-col md:flex-row justify-between items-start md:items-center mb-10'>
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
        <div class='grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-8 py-6 border-t border-b border-gray-800'>
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
          <div class='md:pl-6'>
            <h4 class='text-sm font-semibold text-gray-300 uppercase tracking-wide'>Popular Topics</h4>
            <p class='mt-3 text-xs text-gray-500'>Discover the tools and workflows creators love when producing content with Reela.</p>
            <div class='mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
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
                  class='text-xs sm:text-[13px] bg-white/5 hover:bg-[#F7265B] text-gray-300 hover:text-white px-3 py-2 rounded-full border border-white/10 transition-colors duration-200 text-center'
                  href='#'
                >
                  {topic}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div class='pt-6 text-center text-gray-500 text-sm'>
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
