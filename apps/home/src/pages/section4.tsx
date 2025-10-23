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
      <div class='container mx-auto px-4 text-center py-16 mb-12'>
        <h2 class='text-4xl md:text-6xl font-bold font-inter'>
          Unified <span class='text-brand'>Multimodal </span>
          Video Creation
          <p class='mt-6 text-xl text-gray-600 max-w-3xl mx-auto font-bold font-inter'>
            Create seamless videos by combining avatars, AI scenes, video clips, illustrations, and
            B-roll — all in one unified workflow.
          </p>
        </h2>
      </div>

      <section class='container mx-auto px-4 mb-8'>
        <div class='max-w-[1200px] mx-auto'>
          <div class='rounded-3xl overflow-hidden bg-white shadow-lg mb-8 grid lg:grid-cols-[minmax(100px,250px)_1fr] gird-cols-1 gap-4 p-6 md:p-12'>
            {config.map((item, index) => (
              <div key={String(index)} class='contents group'>
                <label class='w-full transition-all duration-200 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg overflow-hidden p-4 label-sm col-start-1 max-h-max'>
                  <span class='text-sm font-medium text-gray-700 has-checked:text-brand'>
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
                <div class='relative rounded-xl overflow-hidden shadow-lg bg-black w-full h-full lg:col-start-2 hidden group-has-checked:block row-span-10 lg:row-start-1 row-start-6'>
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
          <div class='flex flex-wrap items-center justify-center gap-2 text-center'>
            <h3 class='text-2xl font-bold'>
              More <span class='text-brand'>multimodal </span>
              AI video combinations
            </h3>
            <a href='/workspace'>
              <button class='bg-brand text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform inline-flex items-center'>
                are waiting for you
                <Icon name='ArrowRight' class='h-5 w-5 ml-2' />
              </button>
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Section4;
