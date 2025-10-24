import type { FC } from 'hono/jsx';

import { Icon } from '../components/Icon';
import { cn } from '../utils/cn';

interface Props {
  id?: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  period?: 'year' | 'month';
}

const PricingCard: FC<Props> = ({
  id,
  title,
  description,
  price,
  features,
  isPopular = false,
  period = 'year',
}) => {
  return (
    <div
      className={cn(
        'relative space-y-4 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0f1d]/85 p-5 text-slate-200 backdrop-blur-lg shadow-[0_35px_120px_-70px_rgba(0,0,0,0.95)]',
        {
          'hover:border-[#ff0058]/40 hover:shadow-[0_45px_140px_-70px_rgba(255,0,88,0.45)] transition-all duration-300': true,
          'gradient-border': isPopular,
        },
      )}
    >
      {/* chips */}
      {isPopular && (
        <div className='absolute left-0 top-0 rounded-br-xl bg-[#ff0058] px-3 py-1 text-xs font-semibold text-white tracking-wide'>
          Popular
        </div>
      )}

      {/* card headers */}
      <div className='h-28 lg:h-32 xl:h-28'>
        <div className='mt-3'>
          <h5 className='text-2xl font-semibold capitalize text-white'>{title}</h5>
          <p className='text-base text-slate-300'>{description}</p>
        </div>

        <div className='my-auto mt-4 flex gap-2'>
          <div className='text-3xl font-semibold text-white'>${price}</div>
          <div className='text-xs text-slate-400'>
            <div>per user per month</div>
            <div className='mt-1 text-[11px] uppercase tracking-wide'>
              {period === 'month' ? 'billed monthly' : `billed annually as \$${price * 12} / year`}
            </div>
          </div>
        </div>
      </div>

      <div className='h-px w-full bg-white/10' />

      {/* subscribe button */}

      <a
        href='/pricing'
        className={cn(
          'block w-full rounded-full py-2.5 text-sm text-center font-medium transition-all duration-200 shadow-[0_18px_60px_-45px_rgba(0,0,0,0.8)]',
          {
            'bg-white/10 text-white hover:bg-white/20': !isPopular,
            'bg-[#ff0058] text-white hover:bg-[#ff2670] shadow-[0_30px_90px_-60px_rgba(255,0,88,0.6)]': isPopular,
          },
          'disabled:cursor-wait disabled:opacity-50',
        )}
        value={id}
        name='id'
        type='submit'
      >
        Subscribe
      </a>

      {/* features */}
      <div className='space-y-3 text-sm text-slate-200'>
        {features.map((feature, index) => {
          const [title, desc] = feature.split('_');
          return (
            <div key={index} className='my-2 flex items-center gap-2'>
              <Icon name='check' className='h-4 w-4 shrink-0 text-brand' />
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
