
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Virtuoso() {
  const sectionRef = useRef(null)
  const topTextRef = useRef(null)
  const bottomTextRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          end: 'center 45%',
          scrub: 0.6,
        },
      })

      timeline
        .to(
          topTextRef.current,
          {
            yPercent: -24,
            ease: 'none',
          },
          0
        )
        .to(
          bottomTextRef.current,
          {
            yPercent: 24,
            ease: 'none',
          },
          0
        )
        .fromTo(
          paragraphRef.current,
          {
            autoAlpha: 0,
            scale: 0.96,
          },
          {
            autoAlpha: 1,
            scale: 1,
            ease: 'none',
          },
          0.25
        )
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050807]"
    >
      {/* Subtle green atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_48%,rgba(69,190,179,0.07),transparent_48%)]"
      />

      <div className="container-x relative flex min-h-[100svh] items-center justify-center">
        {/* Split About typography */}
        <div className="relative flex h-[clamp(10rem,29vw,28rem)] w-full items-center justify-center">
          <span
            ref={topTextRef}
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap [clip-path:inset(0_0_50%_0)] font-display text-[clamp(7rem,25vw,27rem)] font-extrabold leading-[0.85] tracking-[-0.055em] text-white"
          >
            About
          </span>

          <span
            ref={bottomTextRef}
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap [clip-path:inset(50%_0_0_0)] font-display text-[clamp(7rem,25vw,27rem)] font-extrabold leading-[0.85] tracking-[-0.055em] text-white"
          >
            About
          </span>

          {/* Revealed introduction */}
          <div
            ref={paragraphRef}
            className="invisible absolute inset-0 z-10 flex items-center justify-center px-5"
          >
            <p className="max-w-[680px] text-center text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg">
              Bitnex Technologies engineers software, security and growth
              for ambitious businesses. From a first idea to a scaled
              product, we design, build and market solutions that deliver
              <span className="text-[#45BEB3]"> measurable results.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
