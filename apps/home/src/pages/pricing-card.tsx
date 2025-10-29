import type { FC } from 'hono/jsx';

import { cn } from '../utils/cn';

interface Props {
  id?: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  period?: 'year' | 'month' | 'trial';
  cta?: string;
}

const PricingCard: FC<Props> = ({
  id,
  title,
  description,
  price,
  features,
  isPopular = false,
  period = 'year',
  cta = 'Subscribe',
}) => {
  return (
    <div
      className={cn(
        'relative space-y-4 overflow-hidden rounded-xl bg-white p-4 dark:border-transparent dark:bg-gray-50',
        {
          'border border-neutral-300': !isPopular,
          'gradient-border': isPopular,
        },
      )}
    >
      {/* chips */}
      {isPopular && (
        <div className='absolute left-0 top-0 rounded-br-xl bg-[#ff0058] px-2 py-1 text-xs text-white'>
          Popular
        </div>
      )}

      {/* card headers */}
      <div className='h-28 lg:h-32 xl:h-28'>
        <div className='mt-3'>
          <h5 className='text-2xl font-semibold capitalize'>{title}</h5>
          <p className='text-base text-gray-800'>{description}</p>
        </div>

        <div className='my-auto mt-4 flex gap-2'>
          <div className='text-3xl font-medium'>${price}</div>
          <div className='text-xs leading-snug'>
            {period === 'trial' ? (
              <>
                <div>Trial access</div>
                <div>No billing required</div>
              </>
            ) : (
              <>
                <div>per user per month</div>
                <div>
                  {period === 'month'
                    ? 'billed monthly'
                    : `billed annually as \$${price * 12} / year`}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className='divider' />

      {/* subscribe button */}

      <a
        href='/pricing'
        className={cn(
          'block w-full rounded-full py-2 text-center text-sm text-white',
          {
            'bg-black': !isPopular,
            'bg-[#ff0058] text-white': isPopular,
          },
          'disabled:cursor-wait disabled:opacity-50',
        )}
        value={id}
        name='id'
        type='submit'
      >
        {cta}
      </a>

      {/* features */}
      <div className='space-y-2 text-sm text-gray-800'>
        {features.map((feature, index) => {
          const [title] = feature.split('_');
          return (
            <div key={index} className='my-1 flex items-start gap-2'>
              <span className='mt-[0.53rem] h-[3px] w-[3px] shrink-0 rounded-full bg-brand' />
              <span key={index} className='flex-1'>
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
