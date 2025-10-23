// pricing section

import { Icon } from '../components/Icon';
import PricingCard from './pricing-card';

const Section7 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          The right plans,
          <span class='text-brand'> for the right price</span>
        </h2>
      </div>

      <form action='/subscribe' method='post'>
        <div class='relative mx-auto mb-20 flex max-w-[1200px] flex-wrap justify-center px-4'>
          <label class='peer/y has-checked:bg-brand has-checked:text-white mb-4 rounded-full bg-gray-200 px-6 py-2 text-gray-800'>
            <input type='radio' name='plan' value='year' class='peer hidden' checked />
            <div>Yearly</div>
          </label>
          <div class='peer-has-checked/y:grid order-1 hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <PricingCard
              title='starter'
              description='Perfect for Individual Creators'
              features={[
                '700 monthly credits', // model tooltip
                'Reela 1.5 Lite Model_',
                'AI Remixing - Upload & edit your videos',
                'Basic Avatars - Fixed-camera, default look',
                'AI Voiceover - Multi-character narration',
                'Max video length: 5 min',
                '1 active job at a time',
                'AI Background Music',
                'Multi-aspect ratios (16:9, 9:16, 1:1)',
                'Buy extra credits anytime',
              ]}
              price={7}
              id='starter'
            />
            <PricingCard
              title='plus'
              description='Ideal for Content Professionals'
              features={[
                '2,500 credits/month',
                'Access to Lite, Pro & Identity Models_',
                '3 Custom Avatars (coming soon)',
                'Advanced Avatars - Multi-angle, adaptive look',
                '3 active jobs at a time',
                'AI-Enhanced Sound Effects',
                'Includes all Starter features',
                'Buy extra credits anytime',
              ]}
              price={31}
              isPopular
              id='plus'
            />
            <PricingCard
              title='ultra'
              description='The Ultimate Plan for Power Creators'
              features={[
                '6,500 credits/month',
                'Exclusive access to Reela Max for top-tier quality_',
                '10 Custom Avatars (coming soon)',
                '5 concurrent jobs - Work faster, create more',
                'Extended videos - Up to 10 min length',
                'Priority processing for faster delivery',
                'Includes all Plus features',
                'Buy extra credits anytime',
              ]}
              price={79}
              id='ultra'
            />
          </div>

          <label class='peer/m has-checked:bg-brand has-checked:text-white mb-4 ml-4 rounded-full bg-gray-200 px-6 py-2 text-gray-800'>
            <input type='radio' name='plan' value='month' class='hidden' />
            <div>Monthly</div>
          </label>
          <div class='peer-has-checked/m:grid order-1 hidden grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <PricingCard
              period='month'
              title='starter'
              description='Perfect for Individual Creators'
              features={[
                '700 monthly credits', // model tooltip
                'Reela 1.5 Lite Model_',
                'AI Remixing - Upload & edit your videos',
                'Basic Avatars - Fixed-camera, default look',
                'AI Voiceover - Multi-character narration',
                'Max video length: 5 min',
                '1 active job at a time',
                'AI Background Music',
                'Multi-aspect ratios (16:9, 9:16, 1:1)',
                'Buy extra credits anytime',
              ]}
              price={9}
              id='starter'
            />
            <PricingCard
              period='month'
              title='plus'
              description='Ideal for Content Professionals'
              features={[
                '2,500 credits/month',
                'Access to Lite, Pro & Identity Models_',
                '3 Custom Avatars (coming soon)',
                'Advanced Avatars - Multi-angle, adaptive look',
                '3 active jobs at a time',
                'AI-Enhanced Sound Effects',
                'Includes all Starter features',
                'Buy extra credits anytime',
              ]}
              price={39}
              id='plus'
              isPopular
            />
            <PricingCard
              period='month'
              title='ultra'
              description='The Ultimate Plan for Power Creators'
              features={[
                '6,500 credits/month',
                'Exclusive access to Reela Max for top-tier quality_',
                '10 Custom Avatars (coming soon)',
                '5 concurrent jobs - Work faster, create more',
                'Extended videos - Up to 10 min length',
                'Priority processing for faster delivery',
                'Includes all Plus features',
                'Buy extra credits anytime',
              ]}
              id='ultra'
              price={99}
            />
          </div>
        </div>
      </form>

      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div
          class='relative overflow-hidden rounded-3xl p-12 text-white md:p-16'
          style='background: linear-gradient(135deg, #f7265b 0%, #b01b43 100%)'
        >
          <div class='max-w-4xl'>
            <h2 class='mb-6 text-3xl font-bold md:text-4xl lg:text-5xl'>
              Enterprise-Ready AI Video Solutions
            </h2>
            <p class='mb-4 text-lg opacity-90 md:text-xl'>
              Whether you're scaling creative production, localizing content across regions, or
              generating hundreds of videos via API — Reela's enterprise solutions are built to
              adapt.
            </p>
            <p class='mb-8 text-lg opacity-90 md:text-xl'>
              Get custom avatars, private model training, API access, workflow integration, and
              white-glove support — all designed to fit your business.
            </p>
            <a href='mailto:contact@reela.ai'>
              <button class='group inline-flex items-center rounded-full bg-white px-6 py-3 text-lg font-medium text-brand transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80'>
                Contact Sales
                <Icon
                  name='arrow-up-right'
                  class='ml-2 h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  size={20}
                  aria-hidden='true'
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section7;
