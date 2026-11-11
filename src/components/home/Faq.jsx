
import { useState } from 'react'
import { faqs } from '../../data/content.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section scroll-mt-20 bg-[#050807] text-[#f2f6f3]">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mt-4 text-lg text-[#9aa9a0]">
            A few helpful answers about our services, process and the way we
            work with businesses.
          </p>
        </div>

        <ul className="divide-y divide-[#24362d] border-y border-[#24362d]">
          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <li key={faq.q}>
                <button
                  className="flex items-center w-full gap-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-bold text-[#69c6a1]">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 font-semibold text-white font-display">
                    {faq.q}
                  </span>

                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-transform ${
                      isOpen
                        ? 'rotate-45 border-[#69c6a1] bg-[#69c6a1] text-[#050807]'
                        : 'border-[#456052] text-[#69c6a1]'
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <p className="pb-6 pl-9 pr-12 leading-relaxed text-[#9aa9a0]">
                    {faq.a}
                  </p>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
