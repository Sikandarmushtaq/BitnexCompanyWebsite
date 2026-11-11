
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Icon from '../Icon.jsx'
import { services } from '../../data/content.js'

gsap.registerPlugin(ScrollTrigger)

// Renders services in an alternating timeline with scroll animations.
export default function HomeServices() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const context = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      )

      cardsRef.current.forEach((card, index) => {
        if (!card) return

        const isLeft = index % 2 === 0

        gsap.fromTo(
          card,
          {
            autoAlpha: 0,
            x: isLeft ? -40 : 40,
          },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#050807] py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_35%,rgba(69,190,179,0.07),transparent_48%)]"
      />

      <div className="container-x relative z-10">
        {/* Services heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.055em]">
            Our{' '}
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: '1.5px rgba(255,255,255,0.85)',
              }}
            >
              Services
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Software, security, marketing and creative work, delivered by
            one team.
          </p>
        </div>

        {/* Alternating services timeline */}
        <div className="relative mx-auto mt-20 max-w-6xl pb-12 sm:mt-28">
          {/* Timeline background */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1px] top-0 w-[2px] bg-white/10 md:left-1/2 md:-translate-x-1/2"
          />

          {/* Animated timeline progress */}
          <div
            ref={lineRef}
            aria-hidden="true"
            className="absolute bottom-0 left-[1px] top-0 w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#45BEB3] via-[#45BEB3] to-[#45BEB3] shadow-[0_0_12px_rgba(69,190,179,0.45)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-8 md:space-y-12">
            {services.map((service, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={service.slug}
                  className="relative grid min-h-[190px] grid-cols-[2px_minmax(0,1fr)] items-center gap-0 md:grid-cols-[minmax(0,1fr)_2px_minmax(0,1fr)]"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center md:col-start-2">
                    <span className="h-3 w-3 rounded-full border-2 border-[#45BEB3] bg-[#050807] shadow-[0_0_12px_rgba(69,190,179,0.25)] transition-all duration-500" />
                  </div>

                  {/* Service card */}
                  <div
                    ref={(element) => {
                      if (element) cardsRef.current[index] = element
                    }}
                    className={`group col-start-2 row-start-1 py-8 pl-8 md:col-span-1 md:py-10 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-1 md:pr-12 md:text-right'
                        : 'md:col-start-3 md:pl-12 md:text-left'
                    }`}
                  >
                    <Link
                      to={`/services#${service.slug}`}
                      className={`block ${
                        isLeft ? 'md:ml-auto' : 'md:mr-auto'
                      } max-w-[460px]`}
                    >
                      <div
                        className={`flex items-center gap-4 ${
                          isLeft ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#45BEB3]/25 bg-[#45BEB3]/[0.08] text-[#45BEB3] transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg] group-hover:border-[#45BEB3]/60 group-hover:bg-[#45BEB3]/15">
                          <Icon name={service.icon} />
                        </span>

                        <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#45BEB3]/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#45BEB3] sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70 sm:text-base">
                        {service.desc}
                      </p>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
