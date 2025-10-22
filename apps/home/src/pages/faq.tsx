const faqs = [
  {
    question: 'Can I use my own footage?',
    answer: 'Yes, Reela supports uploads.',
  },
  {
    question: 'Do I own the generated videos?',
    answer: 'Yes, all content is yours.',
  },
  {
    question: 'Is it safe for commercial use?',
    answer: '100%.',
  },
  {
    question: 'Does it support subtitles?',
    answer: 'Yes, automatic dual-language subtitles.',
  },
];

const FAQSection = () => {
  return (
    <section class='bg-white py-20'>
      <div class='container mx-auto px-4'>
        <div class='mx-auto mb-10 max-w-3xl text-center'>
          <h2 class='font-inter text-4xl font-bold md:text-6xl'>Frequently Asked Questions</h2>
          <p class='mt-4 text-lg text-gray-600'>
            Everything you need to know about producing AI videos with Reela.
          </p>
        </div>
        <div class='mx-auto max-w-4xl space-y-4'>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              class='group rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-shadow duration-200 hover:shadow-md'
            >
              <summary class='flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-gray-900'>
                {faq.question}
                <span class='text-2xl font-bold text-[#ff0058] group-open:rotate-45 transition-transform duration-200'>+</span>
              </summary>
              <p class='mt-3 text-base text-gray-600'>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
