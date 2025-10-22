const AvatarIpSection = () => {
  return (
    <section class='bg-[#FFF6F8] py-20'>
      <div class='container mx-auto px-4'>
        <div class='grid gap-10 overflow-hidden rounded-3xl bg-white p-8 shadow-xl md:grid-cols-[1fr_1fr] md:p-12'>
          <div class='space-y-6 self-center'>
            <span class='inline-flex items-center rounded-full bg-[#ff0058]/10 px-4 py-1 text-sm font-semibold text-[#ff0058] uppercase tracking-wide'>
              Build Your Own Avatar IP
            </span>
            <h2 class='font-inter text-3xl font-bold text-gray-900 md:text-5xl'>
              Launch a branded face that scales every video
            </h2>
            <p class='text-lg text-gray-600'>
              Reela clones your voice, outfits, and persona so every avatar-led scene feels consistently on-brand across channels.
            </p>
            <ul class='space-y-3 text-base text-gray-700'>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ff0058]/15 text-sm font-bold text-[#ff0058]'>
                  1
                </span>
                <span>Upload references for face, wardrobe, and tone — Reela keeps continuity locked.</span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ff0058]/15 text-sm font-bold text-[#ff0058]'>
                  2
                </span>
                <span>Generate scripts and scene directions that match your avatar&apos;s brand persona.</span>
              </li>
              <li class='flex items-start gap-3'>
                <span class='mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#ff0058]/15 text-sm font-bold text-[#ff0058]'>
                  3
                </span>
                <span>Deploy across social, ads, and courses with instant multilingual versions.</span>
              </li>
            </ul>
            <a href='https://app.reela.com/workspace' target='_blank' rel='noopener noreferrer' class='inline-flex items-center rounded-full bg-[#ff0058] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff0058] focus-visible:ring-offset-2'>
              Start Building Your Avatar IP
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
                class='ml-2 h-5 w-5'
              >
                <path d='M5 12h14'></path>
                <path d='m12 5 7 7-7 7'></path>
              </svg>
            </a>
          </div>
          <div class='relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-black/90 shadow-2xl' data-video-card>
            <video
              class='h-full w-full object-cover'
              src='https://files.reela.com/workspace/uploads/202509/15/d992af1b-0721-4ece-aa6e-f04af3e59f80.mp4'
              playsinline
              preload='metadata'
              muted
              autoplay
              loop
            ></video>
            <div class='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvatarIpSection;
