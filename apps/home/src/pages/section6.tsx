// A new vision for video creation

const testimonials = [
  {
    tag: 'E-COMMERCE',
    quote:
      "Reela clones our hero product shots, keeps the avatar identical, and ships localized ads in hours instead of weeks.",
    highlight: 'Launch velocity jumped 4x once perfect identity matching went live.',
    name: 'VP Growth @ Direct-to-Consumer Brand',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=CommerceLeader',
  },
  {
    tag: 'LICENSING',
    quote:
      "We feed Reela our character bible plus wardrobe references and every episode stays on-model — no reshoots required.",
    highlight: 'Multi-reference fidelity keeps franchise partners thrilled and approvals fast.',
    name: 'Head of Content @ Entertainment Studio',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=FranchiseChief',
  },
  {
    tag: 'EDUCATION',
    quote:
      "With multilingual avatars and AI visuals in one flow, we release full courses for three markets at the same time.",
    highlight: 'Our enrollments doubled because every learner sees themselves in the content.',
    name: 'Founder @ Global Online Academy',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=EduCreator',
  },
  {
    tag: 'AGENCY',
    quote:
      "Reela 2.0 Pro blends virtual hosts, product renders, and remix footage into one deliverable for each client brief.",
    highlight: 'We cut editing time by 70% while expanding our multimodal service menu.',
    name: 'Executive Producer @ Creative Agency',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=AgencyLead',
  },
  {
    tag: 'SOCIAL MEDIA',
    quote:
      "Daily drops are easy — I queue scripts, select persona references, and Reela keeps the vibe consistent across feeds.",
    highlight: 'Audience watch time is up 48% thanks to steady character continuity.',
    name: 'Creator @ Lifestyle Channel',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=LifestyleCreator',
  },
  {
    tag: 'GAME STUDIOS',
    quote:
      "Multi-character storyboards import straight into Reela, and every NPC voice + look stays locked from trailer to patch notes.",
    highlight: 'Our content marketing team now launches simultaneously across five regions.',
    name: 'Marketing Director @ AAA Game Studio',
    avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=GameDirector',
  },
];

const Section6 = () => {
  return (
    <>
      <div class='container mx-auto mb-12 px-4 py-16 text-center'>
        <h2 class='font-inter text-4xl font-bold md:text-6xl'>
          A new vision for
          <span class='text-brand'> video creation </span>
        </h2>
      </div>
      <div class='mx-auto mb-20 max-w-[1200px] px-4'>
        <div class='relative'>
          <div
            class='hide-scrollbar scroll-container flex snap-x snap-mandatory gap-6 overflow-x-auto py-8'
            style='scrollbar-width: none; -ms-overflow-style: none'
          >
            {testimonials.map((item) => (
              <div class='testimonial-card w-full flex-shrink-0 snap-start rounded-xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]'>
                <div class='mb-6 flex items-start justify-between'>
                  <span class='inline-block rounded-full bg-black px-3 py-1 text-xs font-semibold text-white'>
                    {item.tag}
                  </span>
                  <div class='border-brand relative h-16 w-16 overflow-hidden rounded-full border-2 shadow-md'>
                    <img
                      alt={`${item.name} avatar`}
                      loading='lazy'
                      decoding='async'
                      data-nimg='fill'
                      class='object-cover'
                      style='position: absolute; height: 100%; width: 100%; left: 0; top: 0; right: 0; bottom: 0; color: transparent;'
                      src={item.avatar}
                    />
                  </div>
                </div>
                <div class='mb-6'>
                  <p class='mb-4 text-lg font-medium'>"{item.quote}"</p>
                  <p class='text-brand font-bold'>{item.highlight}</p>
                </div>
                <div class='mt-auto'>
                  <p class='font-bold'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
