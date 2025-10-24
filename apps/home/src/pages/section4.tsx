// Unified Multimodal Video Creation

import { Fragment } from 'hono/jsx';

import { Icon } from '../components/Icon';

const Section4 = () => {
  const config = [
    {
      name: 'Avatar + AI B-Roll',
      url: 'https://files.reela.com/assets/videos/97ec5506-716c-4218-b415-a75305754d65.mp4',
    },
    {
      name: 'Remix + AI B-Roll',
      url: 'https://files.reela.com/assets/videos/692960a2-1b64-464e-8be3-d5f32bef2dac.mp4',
    },
    {
      name: 'Avatar + Remix',
      url: 'https://files.reela.com/assets/videos/6fcb9566-099e-4b63-9297-6059531ddc2f.mp4',
    },
    {
      name: 'AI Video + Image-to-Video',
      url: 'https://files.reela.com/assets/videos/883f524f-357b-4a1b-bfc8-2c5a8610ec83.mp4',
    },
    {
      name: 'Avatar + Avatar',
      url: 'https://files.reela.com/assets/videos/de717acc-af87-47a0-9a79-1f4544cfc113.mp4',
    },
  ];

  return (
    <Fragment>
      <div class='relative mb-12 overflow-hidden py-20'>
        <div class='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1b1b2a_0%,#0b0b12_60%,#050507_100%)] opacity-95'></div>
        <div class='container mx-auto px-4 text-center text-white'>
          <h2 class='text-[3rem] font-bold font-inter'>
            Unified <span class='text-brand'>Multimodal </span>
            Video Creation
          </h2>
          <p class='mt-6 mx-auto max-w-3xl text-base font-inter font-medium text-slate-300 md:text-lg'>
            Create seamless videos by combining avatars, AI scenes, video clips, illustrations, and
            B-roll — all in one unified workflow.
          </p>
        </div>
      </div>

      <section class='container mx-auto mb-8 px-4 text-slate-200'>
        <div class='mx-auto max-w-[1200px]'>
          <div class='grid-cols-1 mb-8 grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-lg md:p-12 lg:grid-cols-[minmax(100px,250px)_1fr]'>
            {config.map((item, index) => (
              <div key={String(index)} class='contents group'>
                <label class='label-sm col-start-1 max-h-max w-full overflow-hidden rounded-lg border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10'>
                  <span class='text-sm font-medium text-slate-200 has-checked:text-brand'>
                    {item.name}
                  </span>
                  <input
                    type='radio'
                    name='video-combination'
                    class='hidden'
                    checked={index === 0}
                    onchange='pauseAllVideos()'
                  />
                </label>
                <div class='relative row-span-10 row-start-6 hidden h-full w-full overflow-hidden rounded-xl bg-black/70 shadow-[0_20px_60px_rgba(0,0,0,0.65)] ring-1 ring-white/10 transition-all duration-300 group-has-checked:block lg:col-start-2 lg:row-start-1'>
                  <div class='aspect-video w-full'>
                    <video
                      src={item.url}
                      class='w-full h-full object-cover hidden group-has-checked:block'
                      loop
                      preload='metadata'
                      controls
                    ></video>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div class='flex flex-wrap items-center justify-center gap-2 text-center text-white'>
            <h3 class='text-2xl font-bold text-white'>
              More <span class='text-brand'>multimodal </span>
              AI video combinations
            </h3>
            <a href='/workspace'>
              <button class='inline-flex items-center rounded-full bg-brand px-6 py-3 font-medium text-white shadow-[0_0_25px_rgba(255,0,88,0.3)] transition-transform hover:scale-105'>
                are waiting for you
                <Icon name='arrowRight' className='ml-2 h-5 w-5' />
              </button>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section4;
