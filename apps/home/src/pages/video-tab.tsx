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
      <div class='rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-lg md:p-12'>
        <h2 class='mb-12 text-[3rem] font-bold text-white'>{tabTitle}</h2>
        <div class='grid gap-8 md:grid-cols-2'>
          <div class='flex flex-col'>
            <div class='space-y-6'>
              {videoWithId.map((video, index) => (
                <label
                  key={video.id}
                  class={`${tabName} block w-full rounded-xl border p-5 text-left transition-all duration-200 hover:border-brand/40 hover:bg-white/10 ${
                    index === 0
                      ? 'border-brand/60 bg-white/10 text-white shadow-xl'
                      : 'border-white/10 bg-white/5 text-slate-200'
                  }`}
                  for={video.id}
                  onclick={`videoTabClick(this, '${tabName}')`}
                >
                  <h3
                    class={
                      'mb-2 text-xl font-bold ' + (index === 0 ? 'text-brand' : 'text-white/90')
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
                class='has-checked:block relative hidden overflow-hidden rounded-xl border border-white/10 bg-black/70 shadow-[0_20px_70px_rgba(0,0,0,0.6)]'
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
              <a
                class='inline-flex items-center rounded-full bg-brand px-8 py-3 font-medium text-white shadow-[0_0_25px_rgba(255,0,88,0.3)] transition-transform hover:scale-105'
                href={tabButtonSrc}
              >
                {tabButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoTab;
