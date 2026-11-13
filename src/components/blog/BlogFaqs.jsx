
import { useState } from 'react'

// Stores the questions and answers displayed in the blog FAQ section.
const faqs = [
  {
    question: 'How is artificial intelligence transforming modern businesses?',
    answer:
      'Artificial intelligence helps businesses process information, automate repetitive operations, improve customer interactions and make more informed decisions. From intelligent assistants to predictive tools, the real value comes from applying AI to specific business challenges rather than adopting technology without a clear purpose.'
  },
  {
    question: 'What makes a website effective for business growth?',
    answer:
      'An effective business website combines clear communication, thoughtful user experience, fast performance, responsive design and a well-structured conversion journey. It should communicate your value, make information easy to access and guide visitors towards meaningful actions.'
  },
  {
    question: 'When does a business need custom software development?',
    answer:
      'Custom software becomes valuable when standard tools cannot properly support your workflows, integrations or operational requirements. A tailored solution can bring separate processes together, reduce manual work and give your organization greater control over how its digital systems operate.'
  },
  {
    question: 'What should be considered before developing a mobile application?',
    answer:
      'A successful mobile application begins with a defined purpose and a clear understanding of its users. Important considerations include functionality, platform selection, interface design, security, backend architecture, performance and the ability to maintain and expand the product as requirements evolve.'
  },
  {
    question: 'How can automation improve business operations?',
    answer:
      'Automation can reduce repetitive manual tasks, connect disconnected applications and create more consistent workflows. Businesses can use it for notifications, data processing, customer communication and internal operations, allowing teams to focus more time on work that requires human judgment.'
  },
  {
    question: 'How does search engine optimization support digital growth?',
    answer:
      'Search engine optimization improves how easily relevant audiences discover your website through organic search. Technical improvements, useful content, clear site structure and relevant keyword targeting work together to strengthen visibility and attract visitors who are already looking for solutions.'
  },
  {
    question: 'Why is professional video editing important for brands?',
    answer:
      'Professional video editing gives content a clear visual direction through storytelling, pacing, sound and consistent presentation. Well-produced videos can communicate complex ideas more effectively, maintain audience attention and create a stronger impression across digital platforms.'
  },
  {
    question: 'How does graphic design influence brand identity?',
    answer:
      'Graphic design shapes how people recognize and understand a brand. Consistent typography, color, imagery and visual systems create a recognizable identity across websites, social platforms, marketing materials and customer touchpoints.'
  },
  {
    question: 'How does Bitnex Technologies approach a new project?',
    answer:
      'We begin by understanding the business objectives, target audience and practical requirements behind an idea. From there, we define an appropriate direction and bring together strategy, design and engineering to develop a solution aligned with the project goals.'
  }
]

// Renders the interactive FAQ accordion for the blog page.
export default function BlogFaqs() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="relative overflow-hidden bg-[#000000] px-4 py-16 text-white sm:px-6 sm:py-20 xl:px-10">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-[#45BEB3]/[0.045] blur-[150px]" />

      <div className="relative mx-auto w-full max-w-[1180px]">

        <div className="max-w-3xl mb-9 sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
            Knowledge & Understanding
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Questions About the{' '}
            <span className="text-[#45BEB3]">Digital World.</span>
          </h2>

          <p className="max-w-2xl mt-4 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Explore useful insights on emerging technologies, digital
            development and the creative disciplines helping businesses
            move forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index
            const answerId = `blog-faq-answer-${index}`

            return (
              <article
                key={faq.question}
                className={`group h-fit overflow-hidden rounded-2xl border bg-[#080C0B] transition-all duration-400 ${
                  isOpen
                    ? 'border-[#45BEB3]/35 bg-[#0A100E]'
                    : 'border-white/[0.09] hover:border-[#45BEB3]/25'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="flex min-h-[82px] w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-[#45BEB3] sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`grid size-8 shrink-0 place-items-center rounded-full border text-xl font-light transition-all duration-300 ${
                      isOpen
                        ? 'rotate-45 border-[#45BEB3]/40 bg-[#45BEB3]/10 text-[#45BEB3]'
                        : 'border-white/10 text-white/50 group-hover:border-[#45BEB3]/35 group-hover:text-[#45BEB3]'
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-7 text-white/55 sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
