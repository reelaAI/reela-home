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
        'relative space-y-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:border-brand/50',
        {
          'gradient-border': isPopular,
        },
      )}
    >
      {/* chips */}
      {isPopular && (
        <div className='absolute left-0 top-0 rounded-br-xl bg-brand px-3 py-1 text-xs font-medium text-white'>
          Popular
        </div>
      )}

      {/* card headers */}
      <div className='h-28 lg:h-32 xl:h-28'>
        <div className='mt-3'>
          <h5 className='text-2xl font-semibold capitalize text-white'>{title}</h5>
          <p className='text-base text-slate-300'>{description}</p>
        </div>

        <div className='my-auto mt-4 flex gap-2 text-slate-200'>
          <div className='text-3xl font-medium text-white'>${price}</div>
          <div className='text-xs text-slate-300'>
            <div> per user per month </div>
            <div className='text-[11px] uppercase tracking-wide text-slate-400'>
              {period === 'month' ? 'billed monthly' : `billed annually as \$${price * 12} / year`}
            </div>
          </div>
        </div>
      </div>

      <div className='divider' />

      {/* subscribe button */}

      <a
        href='/pricing'
        className={cn(
          'block w-full rounded-full py-3 text-sm text-white text-center transition-shadow',
          {
            'bg-white/10 hover:bg-white/20': !isPopular,
            'bg-brand text-white shadow-[0_0_30px_rgba(255,0,88,0.35)] hover:shadow-[0_0_45px_rgba(255,0,88,0.45)]': isPopular,
          },
          'disabled:cursor-wait disabled:opacity-50'
        )}
        value={id}
        name='id'
        type='submit'
      >
        Subscribe
      </a>

      {/* features */}
      <div className='space-y-3 text-sm text-slate-300'>
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
