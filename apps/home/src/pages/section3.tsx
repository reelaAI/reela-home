const Section3 = () => {
  const highlights = [
    'Multi-image prompts pin characters, wardrobe, and lighting for frame-perfect continuity.',
    'Route your prompt to Sora, then let Reela automate pacing, subtitles, and delivery.',
    'Swap between horizontal and vertical outputs with one click while preserving references.',
  ];

  const metrics = [
    { value: '10 min+', label: 'Cinematic sequences delivered through Reela + Sora' },
    { value: '65% less', label: 'Average cost per finished video compared to Sora-only runs' },
    { value: 'Multi-ref', label: 'Consistent faces, products, and scenes across shots' },
  ];

  return (
    <section class='container mx-auto px-4 py-16' id='sora-pipeline'>
      <div class='mb-12 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          Reela x Sora:
          <span class='text-brand'> cinematic automation</span>
        </h2>
        <p class='mx-auto mt-6 max-w-3xl text-lg text-gray-600'>
          Feed Reela your brief, brand kit, and visual references. We orchestrate Sora generation, enforce
          consistency, and deliver ready-to-publish edits in minutes.
        </p>
      </div>
      <div class='grid gap-12 lg:grid-cols-2 lg:items-start'>
        <div class='space-y-6'>
          <div class='rounded-3xl border border-gray-200 bg-white p-8 shadow-lg'>
            <h3 class='text-left text-2xl font-bold text-gray-900'>From references to finished films</h3>
            <ul class='mt-6 space-y-4 text-left text-lg text-gray-700'>
              {highlights.map((item) => (
                <li class='flex items-start gap-3' key={item}>
                  <span class='mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-brand'>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div class='grid gap-4 md:grid-cols-3'>
            {metrics.map((metric) => (
              <div
                class='rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center shadow-sm'
                key={metric.label}
              >
                <p class='text-2xl font-bold text-brand'>{metric.value}</p>
                <p class='mt-2 text-sm font-medium text-gray-600'>{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div class='grid gap-8'>
          <div class='overflow-hidden rounded-3xl border border-gray-200 bg-black shadow-xl'>
            <div class='relative aspect-video w-full'>
              <video
                src='https://files.reela.com/reelanything/tasks/1967299690420559872/output_stream.mp4'
                class='h-full w-full object-cover'
                loop
                preload='metadata'
                controls
              ></video>
            </div>
            <div class='bg-white px-6 py-4 text-left'>
              <h4 class='text-lg font-semibold text-gray-900'>Long-form launch sequence</h4>
              <p class='mt-1 text-sm text-gray-600'>
                Automated Sora footage stitched with Reela voice, captions, and branded lower thirds.
              </p>
            </div>
          </div>
          <div class='rounded-3xl border border-gray-200 bg-white p-6 shadow-lg'>
            <div class='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div>
                <h4 class='text-lg font-semibold text-gray-900'>Vertical launch-ready preview</h4>
                <p class='mt-1 text-sm text-gray-600'>
                  Repurpose the same prompt for vertical feeds while Reela keeps talent, wardrobe, and layout locked.
                </p>
              </div>
              <div class='overflow-hidden rounded-2xl border border-gray-100 bg-black p-2'>
                <div class='relative h-64 w-36 mx-auto'>
                  <video
                    src='https://files.reela.com/reelanything/tasks/1975624543519170560/output_stream.mp4'
                    class='h-full w-full rounded-xl object-cover'
                    loop
                    preload='metadata'
                    controls
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
