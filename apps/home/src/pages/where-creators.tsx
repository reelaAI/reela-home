import { Icon, type IconName } from '../components/Icon';

type MonetizationPath = {
  title: string;
  description: string;
  icon: IconName;
};

const monetizationPaths: MonetizationPath[] = [
  {
    title: 'E-commerce Stores',
    description: 'Create persuasive product videos for Amazon, Shopify, and TikTok Shop to boost clicks and conversions.',
    icon: 'ShoppingCart',
  },
  {
    title: 'YouTube Channels',
    description: 'Generate long-form explainers, reviews, and educational content that grow your audience and ad revenue.',
    icon: 'Youtube',
  },
  {
    title: 'Social Media Platforms',
    description: 'Produce short, scroll-stopping videos for TikTok and Instagram to attract followers and sponsorships.',
    icon: 'MoveUpRight',
  },
  {
    title: 'Agencies & Enterprises',
    description: 'Deliver ad-ready videos at scale for clients — faster, cheaper, and more consistent than traditional production.',
    icon: 'Building2',
  },
];

const WhereCreators = () => {
  return (
    <section class='bg-white py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-12 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>
            Where Creators Monetize with <span class='text-brand'>Reela</span>
          </h2>
          <p class='mt-4 text-lg text-gray-600'>
            Reela turns your videos into income — from personal brands to e-commerce stores and marketing campaigns.
          </p>
        </div>
        <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {monetizationPaths.map((path) => (
            <div
              key={path.title}
              class='flex h-full flex-col rounded-3xl border border-gray-100 bg-gray-50 p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'
            >
              <div class='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFE3EA]'>
                <Icon name={path.icon} class='h-7 w-7 text-brand' />
              </div>
              <h3 class='text-xl font-semibold text-gray-900'>{path.title}</h3>
              <p class='mt-3 text-base text-gray-600'>{path.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereCreators;
