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
        <h2 class='mb-12 text-[3rem] font-bold text-white'>{tabTitle}</h2>
        <div class='grid gap-8 md:grid-cols-2'>
          <div class='flex flex-col'>
            <div class='space-y-6'>
              {videoWithId.map((video, index) => (
                <label
                  key={video.id}
                  class={`${tabName} video-tab-label block w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left shadow-[0_25px_80px_-70px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(255,0,88,0.4)] hover:bg-white/10 hover:shadow-[0_35px_110px_-80px_rgba(255,0,88,0.45)] ${index === 0 ? 'is-active border-l-4 border-[#ff0058] bg-white/10' : ''}`}
                  for={video.id}
                  data-active={index === 0}
                  onclick={`videoTabClick(this, '${tabName}')`}
                >
                  <h3
                    class={
                      'video-tab-title mb-2 text-xl font-bold ' + (index === 0 ? 'text-brand' : 'text-slate-200')
                    }
                  >
                    {video.title}
                  </h3>
                  <p class='text-sm text-slate-300'>{video.description}</p>
                </label>
              ))}
            </div>
          </div>

          <div class='flex flex-col'>
            {videoWithId.map((video, index) => (
              <div
                key={video.id}
                class='has-checked:block relative hidden overflow-hidden rounded-3xl border border-white/5 bg-black/70 shadow-[0_35px_120px_-80px_rgba(255,0,88,0.55)]'
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
                    class='h-full w-full object-cover'
                    preload='metadata'
                    controls
                    controlsList='nodownload'
                  ></video>
                </div>
              </div>
            ))}
            <div class='mt-6 flex justify-end'>
              <a href='/workspace'>
                <a
                  class='bg-brand rounded-full px-8 py-3 font-medium text-white shadow-[0_25px_90px_-60px_rgba(255,0,88,0.6)] transition-transform hover:scale-110'
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
