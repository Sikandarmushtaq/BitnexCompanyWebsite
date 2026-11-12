
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const skills = [
  { title: 'IT Solutions & Consulting', value: 95 },
  { title: 'Software & Web Development', value: 90 },
  { title: 'UI/UX Design & Experiences', value: 88 },
  { title: 'Brand & Product Identity', value: 85 },
  { title: 'Digital Innovation & Strategy', value: 92 }
]

export default function AboutServices() {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          barsRef.current.forEach((bar) => {
            if (!bar) return

            const value = bar.dataset.value

            gsap.to(bar, {
              width: `${value}%`,
              duration: 1.2,
              ease: 'power3.out'
            })
          })

          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[#000000] px-5 py-8 sm:px-8 sm:py-10"
    >
      <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 md:items-center md:gap-12">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
            What We Do
          </span>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            We Handle and Solve Your{' '}
            <span className="text-[#45BEB3]">IT Problems.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            From building powerful digital products to optimizing existing
            systems, we turn complex IT challenges into practical, scalable
            solutions. Our team brings design, development, and technology
            together to help your business work smarter and grow faster.
          </p>
        </div>

        <div className="space-y-5">
          {skills.map((skill, index) => (
            <div key={skill.title}>
              <div className="mb-2 flex items-center justify-between gap-3">
                <h3 className="text-xs font-medium text-white sm:text-sm">
                  {skill.title}
                </h3>

                <span className="shrink-0 text-xs font-semibold tabular-nums text-[#45BEB3] sm:text-sm">
                  {skill.value}%
                </span>
              </div>

              <div className="h-[5px] overflow-hidden rounded-full bg-white/10">
                <div
                  ref={(element) => {
                    barsRef.current[index] = element
                  }}
                  data-value={skill.value}
                  className="h-full w-0 rounded-full bg-[#45BEB3]"
                  style={{
                    boxShadow: '0 0 12px rgba(69,190,179,0.35)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
