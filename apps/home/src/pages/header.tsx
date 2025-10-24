import { Fragment } from 'hono/jsx';

import { Icon } from '../components/Icon';

export const products = [
  { name: 'AI Video Generator', href: '/workspace' },
  {
    name: 'Talking Avatar',
    href: '/talking-avatar',
  },
  {
    name: 'Video Remixer',
    href: '/video-remixer',
  },
  // {
  //   name: 'Photo Animation',
  //   href: '/photo-animation',
  // },
];

export default function header({ avatarUrl }: { avatarUrl?: string }) {
  let user = (
    <Fragment>
      <a class='hidden text-gray-700 hover:text-black md:block' href='/workspace'>
        Login
      </a>
      <a href='/workspace'>
        <button class='ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'>
          Sign Up
        </button>
      </a>
    </Fragment>
  );

  if (avatarUrl) {
    user = (
      <img
        src={avatarUrl}
        alt='Avatar'
        class='hidden h-10 w-10 rounded-full border border-gray-200 shadow-sm md:block'
      />
    );
  }

  return (
    <header class='container mx-auto px-4 py-4'>
      <nav class='flex items-center justify-between'>
        <div class='flex items-end gap-8'>
          <a class='flex items-center' href='/'>
            <img
              alt='Reela'
              loading='lazy'
              width='120'
              height='40'
              decoding='async'
              data-nimg='1'
              class='h-8 w-auto'
              style='color: transparent'
              src='/logo.svg'
            />
          </a>
          <div class='hidden items-center gap-6 md:flex'>
            <DropDown title='Reela AI' id='reela-dropdown' items={products} />
            <a
              class='text-gray-700 hover:text-brand'
              target='_blank'
              rel='noopener noreferrer'
              href='/benchmark'
            >
              Benchmark
            </a>
            <DropDown
              id='help-dropdown'
              title='Help'
              items={[
                {
                  name: 'About Reela',
                  href: '/help#introduction',
                },
                {
                  name: 'Starter Guide',
                  href: '/help#starter',
                },
                {
                  name: 'Prompt 101',
                  href: '/help#prompt',
                },
                {
                  name: 'FAQ',
                  href: '/help#faq',
                },
              ]}
            />
            <a
              class='text-gray-700 hover:text-brand'
              target='_blank'
              rel='noopener noreferrer'
              href='/pricing'
            >
              Pricing
            </a>
          </div>
        </div>

        <div class='flex items-center gap-4'>{user}</div>
      </nav>
    </header>
  );
}

function DropDown({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: Array<{ name: string; href: string }>;
}) {
  return (
    <details
      id={id}
      class='dropdown cursor-pointer text-gray-700 hover:text-black focus:outline-none'
      aria-expanded='false'
      aria-haspopup='true'
    >
      <summary class='flex items-center gap-1'>
        <div>{title}</div>
        <Icon
          name='chevronDown'
          className='lucide lucide-chevron-down h-4 w-4 transition-transform'
        />
      </summary>
      <ul class='menu dropdown-content bg-white text-gray-700 rounded-box z-1 w-52 border border-gray-100 p-2 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)]'>
        {items.map((item) => (
          <li onclick={`document.getElementById('${id}').removeAttribute('open')`} key={item.href}>
            <a class='hover:text-brand' target='_blank' href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
