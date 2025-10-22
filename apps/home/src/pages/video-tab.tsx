import crypto from 'crypto';

interface VideoWithDetails {
  src: string;
  title: string;
  description: string;
}

interface Props {
  videos: VideoWithDetails[];
  tabTitle: string;
  tabButton: string;
  tabButtonSrc: string;
}

const VideoTab = ({ videos, tabTitle, tabButton, tabButtonSrc }: Props) => {
  const videoWithId = videos.map((video, index) => ({
    ...video,
    id: crypto.createHash('md5').update(video.src).digest('hex').slice(0, 8), // Generate a unique ID for each video
  }));

  const tabName = tabTitle.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <div class='p-6 md:p-12'>
        <h2 class='mb-12 text-4xl font-bold'>{tabTitle}</h2>
        <div class='grid gap-8 md:grid-cols-2'>
          <div class='flex flex-col'>
            <div class='space-y-6'>
              {videoWithId.map((video, index) => (
                <label
                  key={video.id}
                  class={`${tabName} ${index === 0 ? 'border-brand bg-white border-l-4' : 'bg-white/50'} block w-full rounded-xl p-5 text-left shadow-md transition-all duration-200 hover:bg-white hover:shadow-sm`}
                  for={video.id}
                  onclick={`videoTabClick(this, '${tabName}')`}
                >
                  <h3
                    class={
                      'mb-2 text-xl font-bold text-gray-800 ' + (index === 0 ? 'text-brand' : '')
                    }
                  >
                    {video.title}
                  </h3>
                  <p class='text-sm text-gray-600'>{video.description}</p>
                </label>
              ))}
            </div>
          </div>

          <div class='flex flex-col'>
            {videoWithId.map((video, index) => (
              <div
                key={video.id}
                class='has-checked:block relative hidden overflow-hidden rounded-[24px] bg-black'
                data-video-container
              >
                <input
                  type='radio'
                  name={tabName}
                  id={video.id}
                  class='hidden'
                  checked={index === 0}
                />
                <div class='aspect-video w-full'>
                  <video
                    src={video.src}
                    class='h-full w-full rounded-[24px] object-cover'
                    preload='metadata'
                    muted
                    playsinline
                    data-autoplay-video
                    data-reset-on-pause='false'
                  ></video>
                  <button
                    type='button'
                    class='absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80'
                    data-sound-toggle
                    onclick='toggleVideoMute(this)'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='h-5 w-5'
                      data-sound-icon='muted'
                    >
                      <path d='m9 9-6 6h4l5 5V4l-5 5H3l6 6'></path>
                      <line x1='23' x2='17' y1='9' y2='15'></line>
                      <line x1='17' x2='23' y1='9' y2='15'></line>
                    </svg>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      class='hidden h-5 w-5'
                      data-sound-icon='unmuted'
                    >
                      <path d='M11 5 6 9H2v6h4l5 4V5z'></path>
                      <path d='M19 5c1.5 1.5 2 3 2 7s-.5 5.5-2 7'></path>
                      <path d='M15.5 8.5a5 5 0 0 1 0 7'></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            <div class='mt-6 flex justify-end'>
              <a href='/workspace'>
                <a
                  class='bg-brand rounded-full px-8 py-3 font-medium text-white transition-transform hover:scale-110'
                  href={tabButtonSrc}
                >
                  {tabButton}
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTab;
