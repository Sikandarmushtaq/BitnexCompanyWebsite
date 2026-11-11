
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import { services, process } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

const categoryOrder = [
  'Development & Technology',
  'Digital Marketing & Growth',
  'Creative & Visual Design',
]

export default function Services() {
  const pageRef = useRef(null)

  // Reveal service cards as they enter the viewport.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.service-card',
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.process-step',
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, pageRef)

    return () => ctx.revert()
  }, [])

  const categories = categoryOrder.map((category) => ({
    title: category,
    services: services.filter((service) => service.category === category),
  }))

  return (
    <div ref={pageRef}>
      <PageHero
        title="Our Services"
        text="We combine technology, strategy and creative thinking to build digital solutions that help businesses operate smarter, connect with their audiences and grow with confidence."
      />

      <section className="relative overflow-hidden bg-[#07130F] py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-teal/10 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-teal/10 blur-[130px]" />

        <div className="container-x relative">
          <div className="mb-14 max-w-3xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.28em] text-teal">
              What We Deliver
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Expertise that moves
              <span className="block text-teal">your business forward.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
              From digital foundations to advanced technology and creative
              experiences, our services are designed around your business
              objectives.
            </p>
          </div>

          <div className="sticky top-20 z-30 mb-16 -mx-5 border-y border-white/10 bg-[#07130F]/90 px-5 py-4 backdrop-blur-xl sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
            <nav
              aria-label="Service categories"
              className="flex gap-3 overflow-x-auto"
            >
              {categories.map((category, index) => (
                <a
                  key={category.title}
                  href={`#category-${index}`}
                  className="shrink-0 rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-slate-300 transition-all duration-300 hover:border-teal/50 hover:bg-teal/10 hover:text-teal sm:text-sm"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-24">
            {categories.map((category, categoryIndex) => (
              <section
                key={category.title}
                id={`category-${categoryIndex}`}
                className="scroll-mt-40"
              >
                <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-teal">
                      0{categoryIndex + 1} / Service Division
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      {category.title}
                    </h3>
                  </div>

                  <span className="text-sm text-slate-500">
                    {String(category.services.length).padStart(2, '0')} Services
                  </span>
                </div>

                <div className="services-grid grid gap-5 lg:grid-cols-2">
                  {category.services.map((service, index) => (
                    <article
                      key={service.slug}
                      id={service.slug}
                      className="service-card group relative scroll-mt-36 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:bg-white/[0.06] sm:p-8"
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-teal/[0.06] blur-3xl transition-all duration-500 group-hover:bg-teal/[0.13]" />

                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <span className="grid h-14 w-14 place-items-center rounded-2xl border border-teal/20 bg-teal/10 text-teal transition-all duration-300 group-hover:border-teal/40 group-hover:bg-teal group-hover:text-[#07130F]">
                            <Icon
                              name={service.icon}
                              className="h-7 w-7"
                            />
                          </span>

                          <span className="font-display text-sm font-semibold text-slate-600">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h4 className="mt-7 text-xl font-bold text-white transition-colors duration-300 group-hover:text-teal sm:text-2xl">
                          {service.title}
                        </h4>

                        <p className="mt-3 min-h-[72px] max-w-xl text-sm leading-7 text-slate-400">
                          {service.desc}
                        </p>

                        <div className="mt-7">
                          <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                            What we deliver
                          </h5>

                          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm leading-6 text-slate-400"
                              >
                                <svg
                                  viewBox="0 0 20 20"
                                  className="mt-1 h-4 w-4 shrink-0 text-teal"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                >
                                  <path d="m4 10.5 4 4 8-9" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-8 border-t border-white/10 pt-6">
                          <h5 className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                            Technologies & Tools
                          </h5>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {service.tech.map((technology) => (
                              <span
                                key={technology}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 hover:border-teal/30 hover:text-teal"
                              >
                                {technology.trim()}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-6">
                          <Link
                            to={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 font-display text-sm font-semibold text-teal transition-all duration-300 hover:gap-3"
                          >
                            Discuss your project
                            <span aria-hidden="true">→</span>
                          </Link>

                          <span className="text-xs text-slate-600">
                            Bitnex Technologies
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="font-display text-xs font-bold uppercase tracking-[0.25em] text-teal">
              Our Approach
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
              A clear process.
              <span className="block text-teal">A stronger outcome.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Every successful project starts with a clear understanding of
              the goal. Our structured process keeps each stage focused,
              collaborative and purposeful.
            </p>
          </div>

          <ol className="process-grid mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <li
                key={step.title}
                className="process-step border-t border-teal/50 pt-6"
              >
                <span className="font-display text-sm font-bold text-teal">
                  STEP 0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-400">
                  {step.sub}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-20 sm:pt-24" />
      <CTA />
    </div>
  )
}
