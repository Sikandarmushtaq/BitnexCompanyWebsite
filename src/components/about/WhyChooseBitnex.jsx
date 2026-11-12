
const reasons = [
  {
    label: 'Our Foundation',
    title: 'Built on Trust. Driven by Commitment.',
    description:
      'Strong partnerships are built through honesty, consistency, and mutual respect. We believe in understanding our clients, respecting their ideas, and delivering on every commitment we make. From the initial conversation to the final delivery, we take ownership of our work and build relationships based on confidence, transparency, and long-term success.'
  },
  {
    label: 'Our Approach',
    title: 'Strategic Thinking. Structured Execution.',
    description:
      'Every project deserves a thoughtful process and a clear direction. We combine business understanding, technical expertise, and careful planning to turn ideas into well-executed digital solutions. With a structured workflow and attention to every stage, we ensure that each decision supports your objectives and brings your vision closer to reality.'
  },
  {
    label: 'Our Standards',
    title: 'Engineering Excellence. Without Compromise.',
    description:
      'We believe great technology should be reliable, efficient, and built to last. From architecture and development to performance and user experience, we pay attention to the details that make a real difference. By following modern engineering practices and maintaining high quality standards, we create scalable solutions designed for dependable performance and future growth.'
  },
  {
    label: 'Our Mindset',
    title: 'Innovation That Creates Real Impact.',
    description:
      'We see challenges as opportunities to think differently and create something better. Our team explores new possibilities, questions conventional approaches, and combines creativity with technical knowledge to solve real problems. We focus on meaningful innovation that improves experiences, simplifies processes, and creates lasting value for businesses.'
  },
  {
    label: 'Our Promise',
    title: 'Transparent Communication. Complete Ownership.',
    description:
      'A successful partnership requires clarity, trust, and accountability. We keep you informed through every stage, communicate progress honestly, and make sure expectations remain clear. Our team takes responsibility for the quality of its work and stays committed to delivering what was agreed, so you can move forward with complete confidence.'
  },
  {
    label: 'Our Purpose',
    title: 'Your Growth Is Our Priority.',
    description:
      'Our purpose is to help businesses make meaningful progress through technology. We build digital products and solutions that strengthen operations, improve customer experiences, and create new opportunities. Whether you are starting a new venture or scaling an established business, our focus remains on delivering technology that supports your ambitions and long-term success.'
  }
]

export default function WhyChooseBitnex() {
  return (
    <section className="bg-[#000000] px-4 py-12 sm:px-6 sm:py-16 xl:px-10">
      <div className="mx-auto w-full max-w-[1480px]">

        <div className="mb-9 text-center sm:mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
            The Bitnex Difference
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Why Choose <span className="text-[#45BEB3]">Bitnex</span> Technologies?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {reasons.map((reason, index) => (
            <article
              key={reason.label}
              className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080C0B] p-6 transition-all duration-500 ease-out transform-gpu hover:-translate-y-1 hover:-rotate-1 hover:border-[#45BEB3]/45 hover:shadow-[0_18px_50px_rgba(69,190,179,0.10)] sm:p-7 lg:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#45BEB3]/[0.04] blur-3xl transition-all duration-500 group-hover:bg-[#45BEB3]/[0.12]" />

              <div className="relative z-10 mb-7 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#45BEB3]">
                  {reason.label}
                </span>

                <span className="text-sm font-medium tabular-nums text-white/25 transition-colors duration-300 group-hover:text-[#45BEB3]">
                  0{index + 1}
                </span>
              </div>

              <div className="relative z-10">
               

                <h3 className="max-w-md text-xl font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#45BEB3] sm:text-2xl">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 sm:text-[15px]">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
