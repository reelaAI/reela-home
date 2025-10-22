const features = [
  {
    title: 'AI Avatars that speak, sell, and scale your content',
    description:
      'Launch branded hosts in any language and keep their voice, tone, and styling consistent across every drop.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0v4.5a3.5 3.5 0 0 1-3.5 3.5H6.8'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M18 8.5v2.25M18 14v1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='M20.5 9.75H18M20 15.5h-2' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
  {
    title: 'Product-consistent video generation that keeps every detail accurate',
    description:
      'Upload SKU shots, swatches, and packaging—Reela keeps colors, materials, and copy aligned from intro to outro.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='m4 7 8-4 8 4v7l-8 4-8-4z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='m12 3v14' stroke-linecap='round' stroke-linejoin='round'></path>
        <path d='m4 14 8 4 8-4' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
  {
    title: 'Multi-reference & multimodal support for avatars, scenes, and footage',
    description:
      'Blend live-action clips, AI-generated visuals, and multiple talent references with continuity baked in.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 7.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zM11 16l-2 4'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path
          d='M11 16H3l2-4h4zM14.5 5.5h6M17.5 2.5v6M21 20a3.5 3.5 0 1 1-3.5-3.5A3.5 3.5 0 0 1 21 20z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
      </svg>
    ),
  },
  {
    title: 'Publish-ready exports for TikTok, YouTube, and Instagram',
    description:
      'Render vertical, square, and widescreen edits simultaneously—each with captions, hooks, and music locked.',
    icon: (
      <svg
        class='h-8 w-8 text-[#F7265B]'
        fill='none'
        stroke='currentColor'
        stroke-width='1.8'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 4h6v16H5zM13 7h6v10h-6z'
          stroke-linecap='round'
          stroke-linejoin='round'
        ></path>
        <path d='M5 13h6M13 11h6' stroke-linecap='round' stroke-linejoin='round'></path>
      </svg>
    ),
  },
];

const PreFooterFeatures = () => {
  return (
    <section class='container mx-auto px-4 py-16'>
      <div class='mx-auto max-w-6xl rounded-3xl bg-white/90 p-10 shadow-lg backdrop-blur-sm md:p-16'>
        <div class='mb-12 max-w-3xl'>
          <h2 class='text-3xl font-bold text-gray-900 md:text-5xl'>
            AI engines built to keep every frame on-brand
          </h2>
          <p class='mt-4 text-base text-gray-600 md:text-lg'>
            Reela aligns avatars, products, and scenes automatically so every deliverable matches the brief — from intro to sign-off.
          </p>
        </div>
        <div class='grid gap-6 md:grid-cols-2'>
          {features.map((feature) => (
            <div
              key={feature.title}
              class='flex h-full flex-col gap-4 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg'
            >
              <div class='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7265B]/10'>
                {feature.icon}
              </div>
              <p class='text-lg font-semibold text-gray-900'>{feature.title}</p>
              <p class='text-sm text-gray-600'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreFooterFeatures;
