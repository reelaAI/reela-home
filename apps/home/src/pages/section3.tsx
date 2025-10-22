// You imagine it. Reela AI directs it.

import VideoTab from './video-tab';

const config = [
  {
    title: 'AI Avatar Video',
    button: 'Create Your Avatar Video',
    videos: [
      {
        title: 'AI Avatar Narration',
        description: 'Scripted avatar videos in multiple styles and languages.',
        src: 'https://files.reela.com/assets/videos/369886bf-8dbd-4353-b74b-a60ce6c81c86.mp4',
      },
      {
        title: 'Multi-Scene & Multi-Cam',
        description: 'Auto-switch scenes and camera angles for cinematic avatar delivery.',
        src: 'https://files.reela.com/assets/videos/650f8889-9c4d-4653-a080-1e936d787460.mp4',
      },
      {
        title: 'Multilingual Lip Sync',
        description: 'Accurate lip sync in 140+ languages with natural expression.',
        src: 'https://files.reela.com/assets/videos/11dc6a0b-81dc-49a9-aa53-32b00c7e2aa5.mp4',
      },
    ],
  },
  {
    title: 'AI Video Generation',
    button: 'Start with Your Idea',
    videos: [
      {
        title: 'Creative-to-Video',
        description: 'Turn ideas into high-quality videos with AI — no editing needed.',
        src: 'https://files.reela.com/assets/videos/e9f9d167-97d2-436c-9c2d-088c8dd77e8f.mp4',
      },
      {
        title: 'Image-Guided Product Video',
        description: 'Upload images to create videos with accurate product visuals.',
        src: 'https://files.reela.com/assets/videos/c0135f8f-fe66-4ae2-b189-6e20f4f58a89.mp4',
      },
      {
        title: 'AI Storybook Generator',
        description: 'Convert text into visual storybooks with voiceover.',
        src: 'https://files.reela.com/assets/videos/ebac1bc1-96ae-41ab-87a7-6bb208eaa827.mp4',
      },
    ],
  },
  {
    title: 'AI-Powered Video Remixes',
    button: 'Remix Your Video with AI',
    videos: [
      {
        title: 'Visual-Only Remix',
        description:
          'Mute original audio and recombine only the video layer — ideal for clean-cut montage creation.',
        src: 'https://files.reela.com/assets/videos/63bf450b-a007-4de7-819e-6a443b18d394.mp4',
      },
      {
        title: 'Audio-Intergrated Remix',
        description:
          'Remix scenes with synchronized original audio to retain voice, tone, and narrative flow.',
        src: 'https://files.reela.com/assets/videos/765026be-861e-4de1-b1ab-fe2c1eed9b75.mp4',
      },
    ],
  },
];

const Section3 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          You imagine it.
          <span class='text-brand'> Reela AI </span>
          directs it.
        </h2>
      </div>
      <section class='container mx-auto px-4'>
        {config.map((section) => (
          <>
            <div
              class='mx-auto max-w-[1200px] overflow-hidden rounded-3xl'
              style='background: linear-gradient(to bottom left, #ffeef1, #f5f7fa)'
            >
              <VideoTab
                tabTitle={section.title}
                tabButton={section.button}
                tabButtonSrc={'/workspace'}
                videos={section.videos}
              />
            </div>
            <div class='h-[40px]'></div>
          </>
        ))}
      </section>
    </>
  );
};

export default Section3;
