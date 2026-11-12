
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from '../components/Navbar.jsx'
import Streaks from '../components/Streaks.jsx'
import CursorFollower from '../components/CursorFollower.jsx'
import Icon from '../components/Icon.jsx'
import CTA from '../components/CTA.jsx'
import { services } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

const categoryOrder = [
  'Development & Technology',
  'Digital Marketing & Growth',
  'Creative & Visual Design'
]

function ServicesHero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out'
        }
      )
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-5 py-12 sm:px-8">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Streaks
          count={145}
          speed={14}
          length={155}
          colors={HERO_STREAK_COLORS}
          opacity={0.9}
          glow={17}
          thickness={1.3}
          direction="right"
          interactive={true}
          pointerGlow={true}
          repelRadius={160}
          repelStrength={35}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-6xl -translate-y-8 flex-col items-center text-center sm:-translate-y-10 md:-translate-y-12"
      >
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#45BEB3] sm:mb-4 sm:text-sm">
          What We Do
        </span>

        <h1 className="text-balance text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-white">
          Our <span className="text-[#45BEB3]">Services</span>
        </h1>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 md:text-xl">
          We combine technology, strategy and creative thinking to build digital
          solutions that help businesses operate smarter, connect with their
          audiences and grow with confidence.
        </p>
      </div>
    </section>
  )
}

export default function Services() {
  const pageRef = useRef(null)

  useEffect(() => {
    const page = pageRef.current

    if (!page) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card')

      gsap.set(cards, {
        autoAlpha: 0,
        y: 28
      })

      ScrollTrigger.batch(cards, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true
          })
        }
      })
    }, page)

    return () => ctx.revert()
  }, [])

  const categories = categoryOrder.map((category) => ({
    title: category,
    services: services.filter(
      (service) => service.category === category
    )
  }))

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#000000]"
    >
      <CursorFollower enabled={true} />

      <Navbar />

      <ServicesHero />

      <section className="relative overflow-hidden bg-[#000000] px-4 py-12 text-white sm:px-6 sm:py-16 xl:px-10">
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[450px] w-[450px] rounded-full bg-[#45BEB3]/[0.045] blur-[150px]" />

        <div className="relative mx-auto w-full max-w-[1480px]">

          <div className="mb-9 sm:mb-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
              What We Deliver
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Expertise that moves
              <span className="block text-[#45BEB3]">
                your business forward.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              From digital foundations to advanced technology and creative
              experiences, our services are designed around your business
              objectives.
            </p>
          </div>

          <div className="sticky top-20 z-30 mb-12 bg-black/90 py-3 backdrop-blur-xl sm:mb-14">
            <nav
              aria-label="Service categories"
              className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3"
            >
              {categories.map((category, index) => (
                <a
                  key={category.title}
                  href={`#category-${index}`}
                  className="flex min-h-[62px] min-w-0 items-center justify-center rounded-xl bg-[#080C0B] px-2 py-2.5 text-center text-[10px] font-semibold leading-tight text-white/60 transition-all duration-300 hover:bg-[#45BEB3]/10 hover:text-[#45BEB3] sm:min-h-0 sm:w-auto sm:rounded-full sm:px-5 sm:py-3 sm:text-sm"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-20 sm:space-y-24">
            {categories.map((category, categoryIndex) => (
              <section
                key={category.title}
                id={`category-${categoryIndex}`}
                className="scroll-mt-36"
              >
                <div className="mb-7 flex flex-wrap items-end justify-between gap-4 sm:mb-9">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
                      0{categoryIndex + 1} / Service Division
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                      {category.title}
                    </h3>
                  </div>

                  <span className="text-sm text-white/40">
                    {String(category.services.length).padStart(2, '0')} Services
                  </span>
                </div>

                <div className="services-grid grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                  {category.services.map((service, index) => (
                    <article
                      key={service.slug}
                      id={service.slug}
                      className="service-card group relative flex min-h-[390px] scroll-mt-36 transform-gpu flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080C0B] p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:-rotate-1 hover:border-[#45BEB3]/45 hover:shadow-[0_18px_50px_rgba(69,190,179,0.10)] sm:p-7"
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#45BEB3]/[0.04] blur-3xl transition-all duration-500 group-hover:bg-[#45BEB3]/[0.12]" />

                      <div className="relative z-10 flex flex-1 flex-col">
                        <div className="flex items-center justify-between">
                          <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#45BEB3]/20 bg-[#45BEB3]/[0.08] text-[#45BEB3] transition-all duration-300 group-hover:border-[#45BEB3]/40 group-hover:bg-[#45BEB3]/15">
                            <Icon
                              name={service.icon}
                              className="h-5 w-5"
                            />
                          </span>

                          <span className="text-sm font-medium tabular-nums text-white/25 transition-colors duration-300 group-hover:text-[#45BEB3]">
                            0{index + 1}
                          </span>
                        </div>

                        <h4 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#45BEB3] sm:text-xl">
                          {service.title}
                        </h4>

                        <p className="mt-3 text-xs leading-6 text-white/55 sm:text-sm">
                          {service.desc}
                        </p>

                        <div className="mt-6">
                          <h5 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
                            What We Deliver
                          </h5>

                          <ul className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2">
                            {service.includes.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs leading-5 text-white/50"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-0.5 shrink-0 text-sm font-bold text-[#45BEB3]"
                                >
                                  ✓
                                </span>

                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-auto pt-6">
                          <Link
                            to={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#45BEB3] transition-all duration-300 hover:gap-3"
                          >
                            Discuss your project
                            <span aria-hidden="true">→</span>
                          </Link>
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

      {/* <CTA /> */}
    </main>
  )
}
