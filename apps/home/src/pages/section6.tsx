const testimonials = [
  {
    name: 'Maya Lee',
    industry: 'DTC Beauty',
    country: 'Singapore',
    avatar: '/user-1.png',
    quote: 'We launch TikTok ads with Reela avatars twice as fast — every script already has captions and hooks.',
  },
  {
    name: 'Jordan Smith',
    industry: 'Online Education',
    country: 'United States',
    avatar: '/user-2.png',
    quote: 'I narrate entire lesson tracks in English and Spanish without re-recording a single take.',
  },
  {
    name: 'Ines Romero',
    industry: 'Agency Production',
    country: 'Spain',
    avatar: '/user-4.png',
    quote: 'Clients love seeing storyboards become avatar-led videos overnight — no studio bookings needed.',
  },
  {
    name: 'Marcus Chen',
    industry: 'SaaS Marketing',
    country: 'Canada',
    avatar: '/user-5.png',
    quote: 'Localized launch explainers ship the same day. Reela handles subtitles and B-roll automatically.',
  },
  {
    name: 'Lina Abasi',
    industry: 'E-commerce',
    country: 'UAE',
    avatar: '/user-6.png',
    quote: 'Avatar product demos boosted conversions 32% once we swapped our static product pages for video.',
  },
];

const Section6 = () => {
  return (
    <section class='bg-[#FFF6F8] py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-12 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>Loved by Creators Worldwide</h2>
          <p class='mt-4 text-lg text-gray-600'>
            Hear how teams across industries publish more video, faster, with AI-first workflows.
          </p>
        </div>
        <div class='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              class='flex h-full flex-col gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'
            >
              <div class='flex items-center gap-4'>
                <div class='relative h-14 w-14 overflow-hidden rounded-full border border-[#ff0058]/40 shadow-sm'>
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile`}
                    class='h-full w-full object-cover'
                    loading='lazy'
                  />
                </div>
                <div>
                  <h3 class='text-lg font-semibold text-gray-900'>{testimonial.name}</h3>
                  <p class='text-sm text-gray-500'>
                    {testimonial.industry} · {testimonial.country}
                  </p>
                </div>
              </div>
              <blockquote class='text-base text-gray-700'>“{testimonial.quote}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;
