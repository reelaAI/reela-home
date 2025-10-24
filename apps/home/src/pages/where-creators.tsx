import { Icon } from '../components/Icon';

type IconName = Parameters<typeof Icon>[0]['name'];

const monetizationPaths: Array<{
  title: string;
  description: string;
  icon: IconName;
}> = [
  {
    title: 'E-commerce Stores',
    description: 'Create persuasive product videos for Amazon, Shopify, and TikTok Shop to boost clicks and conversions.',
    icon: 'dollar',
  },
  {
    title: 'YouTube Channels',
    description: 'Generate long-form explainers, reviews, and educational content that grow your audience and ad revenue.',
    icon: 'video',
  },
  {
    title: 'Social Media Platforms',
    description: 'Produce short, scroll-stopping videos for TikTok and Instagram to attract followers and sponsorships.',
    icon: 'external',
  },
  {
    title: 'Agencies & Enterprises',
    description: 'Deliver ad-ready videos at scale for clients — faster, cheaper, and more consistent than traditional production.',
    icon: 'analytics',
  },
];

const WhereCreators = () => {
  return (
    <section class='bg-gradient-to-b from-[#08080c] via-[#0a0a12] to-[#101020] py-20 text-white'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-12 max-w-3xl text-center'>
          <h2 class='font-inter text-[3rem] font-bold'>
            Where Creators Monetize with <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-base text-gray-300 md:text-lg'>
            Reela turns your videos into income — from personal brands to e-commerce stores and marketing campaigns.
          </p>
        </div>
        <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {monetizationPaths.map((path) => (
            <div
              key={path.title}
              class='flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_70px_rgba(5,6,14,0.55)] transition-all duration-300 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_35px_120px_rgba(255,0,88,0.25)]'
            >
              <div class='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-brand'>
                <Icon name={path.icon} className='h-7 w-7' />
              </div>
              <h3 class='text-xl font-semibold text-white'>{path.title}</h3>
              <p class='mt-3 text-base text-gray-300'>{path.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereCreators;
