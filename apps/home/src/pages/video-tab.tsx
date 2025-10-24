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
        <h2 class='mb-12 text-[3rem] font-bold'>{tabTitle}</h2>
        <div class='grid gap-8 md:grid-cols-2'>
          <div class='flex flex-col'>
            <div class='space-y-6'>
              {videoWithId.map((video, index) => (
                <label
                  key={video.id}
                  class={`${tabName} ${index === 0 ? 'border-black bg-white border-l-4' : 'bg-white/50'} block w-full rounded-xl p-5 text-left shadow-md transition-all duration-200 hover:bg-white hover:shadow-sm`}
                  for={video.id}
                  onclick={`videoTabClick(this, '${tabName}')`}
                >
                  <h3
                    class={
                      'mb-2 text-xl font-bold text-gray-800 ' + (index === 0 ? 'text-black' : '')
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
                class='has-checked:block relative hidden overflow-hidden rounded-xl bg-black'
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
                  class='bg-black rounded-full px-8 py-3 font-medium text-white transition-transform hover:-translate-y-1'
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
