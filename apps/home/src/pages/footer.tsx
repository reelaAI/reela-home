import { Icon } from '../components/Icon';
import { products } from './header';

const Footer = () => {
  return (
    <footer class='bg-gray-900 text-white pt-12 pb-6'>
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
        <div class='grid grid-cols-1 md:grid-cols-4 gap-8 py-6 border-t border-b border-gray-800'>
          <div class='space-y-6'>
            <div>
              <div class='text-sm font-semibold uppercase tracking-wider text-gray-400'>Product</div>
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
            <div class='rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/90 via-gray-900 to-black/70 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.35)]'>
              <div class='flex items-center justify-between gap-4'>
                <div>
                  <p class='text-xs font-semibold uppercase tracking-[0.35em] text-gray-500'>Popular Topics</p>
                  <p class='mt-2 text-sm text-gray-400'>Discover what teams create with Reela.</p>
                </div>
                <span class='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F7265B]/15 text-[#F7265B]'>
                  <Icon name='star' className='lucide lucide-star h-5 w-5' aria-hidden />
                </span>
              </div>
              <div class='mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2'>
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
                    class='group relative flex items-center justify-center rounded-full border border-gray-800/80 bg-gray-900/60 px-3 py-1.5 text-xs font-medium text-gray-300 transition-all duration-200 hover:border-[#F7265B]/60 hover:text-white hover:shadow-[0_0_15px_rgba(247,38,91,0.25)]'
                    href='#'
                  >
                    <span class='relative z-10'>{topic}</span>
                    <span class='absolute inset-0 rounded-full bg-[#F7265B]/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100' />
                  </a>
                ))}
              </div>
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
