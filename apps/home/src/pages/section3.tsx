import { Icon } from '../components/Icon';

const Section3 = () => {
  return (
    <>
      <section class='hidden bg-gradient-to-br from-[#0d0f1f] via-[#07070d] to-[#09090f] text-white'>
        <div class='container mx-auto px-4 py-14'>
          <div class='mx-auto max-w-5xl space-y-5 text-white'>
            <span class='inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-brand'>
              New · Sora Model Integration
            </span>
            <h2 class='font-inter text-[3rem] font-bold'>
              Generate Long-Form Videos with Sora via Reela
            </h2>
            <p class='text-base text-white/80 md:text-lg'>
              Access Sora’s long-form generation directly inside Reela — no complex setup or API needed. Just type your prompt,
              and Reela handles the full workflow.
            </p>
            <ul class='space-y-3 text-base text-white/80'>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,0,88,0.35)]'>
                  1
                </span>
                <span>
                  Direct Sora Integration
                  <br />
                  Use the Sora model seamlessly within Reela to produce cinematic, story-driven videos.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,0,88,0.35)]'>
                  2
                </span>
                <span>
                  Full-Length Generation
                  <br />
                  Create extended scenes and continuous storytelling far beyond typical short-form limits.
                </span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,0,88,0.35)]'>
                  3
                </span>
                <span>
                  Simplified Workflow
                  <br />
                  Reela manages Sora prompts, timing, and output — so creators can focus purely on ideas.
                </span>
              </li>
            </ul>
            <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer'>
              <button class='mt-6 inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(255,0,88,0.35)] transition-transform hover:scale-105'>
                Launch a Sora Project
                <Icon name='arrowRight' className='ml-2 h-5 w-5' />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
