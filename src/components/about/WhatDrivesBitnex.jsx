
const values = [
  {
    label: 'Our Vision',
    title: 'Technology With a Clear Direction.',
    description:
      'We bring technology and business vision together. Every solution starts with a clear understanding of what you want to achieve, followed by a thoughtful plan that turns your objectives into meaningful digital progress.'
  },
  {
    label: 'Our Expertise',
    title: 'Expertise Across the Digital Landscape.',
    description:
      'From web and software development to application experiences, automation, and digital design, we bring different areas of expertise together to create connected solutions for modern businesses.'
  },
  {
    label: 'Our Process',
    title: 'Designed Around Your Business.',
    description:
      'No two businesses have the same challenges. We take time to understand your requirements, identify opportunities, and shape solutions around your workflows, customers, and long-term objectives.'
  },
  {
    label: 'Our Innovation',
    title: 'Modern Thinking. Practical Solutions.',
    description:
      'We embrace modern tools and emerging technologies when they create genuine value. Our focus is on making technology useful, accessible, and effective rather than adding complexity for its own sake.'
  },
  {
    label: 'Our Delivery',
    title: 'From First Concept to Final Product.',
    description:
      'We approach every project with careful planning, thoughtful execution, and attention to detail. Our goal is to deliver dependable digital products that are ready to support real business needs.'
  },
  {
    label: 'Our Commitment',
    title: 'Built to Evolve With Your Business.',
    description:
      'Your business will continue to change, and your technology should be ready to grow with it. We build with flexibility, maintainability, and future requirements in mind, giving your digital foundation room to evolve.'
  }
]

export default function WhatDrivesBitnex() {
  return (
    <section className="bg-[#000000] px-4 py-12 sm:px-6 sm:py-16 xl:px-10">
      <div className="mx-auto w-full max-w-[1480px]">

        <div className="mb-9 text-center sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
            Our Philosophy
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            What Drives <span className="text-[#45BEB3]">Bitnex</span> Technologies.
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/55 sm:text-base">
            We combine strategic thinking, technical expertise, and purposeful
            innovation to create digital solutions built around your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {values.map((value, index) => (
            <article
              key={value.label}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080C0B] p-6 transition-all duration-500 ease-out transform-gpu hover:-translate-y-1 hover:-rotate-1 hover:border-[#45BEB3]/45 hover:shadow-[0_18px_50px_rgba(69,190,179,0.10)] sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#45BEB3]/[0.04] blur-3xl transition-all duration-500 group-hover:bg-[#45BEB3]/[0.12]" />

              <div className="relative z-10 mb-7 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#45BEB3]">
                  {value.label}
                </span>

                <span className="text-sm font-medium tabular-nums text-white/25 transition-colors duration-300 group-hover:text-[#45BEB3]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="max-w-md text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#45BEB3] sm:text-2xl">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-[15px]">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
