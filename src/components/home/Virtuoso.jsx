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

    const mm = gsap.matchMedia()

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isDesktop: '(min-width: 768px)',
      },
      (context) => {
        const { isMobile } = context.conditions

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: isMobile ? 'top 70%' : 'top 75%',
            end: isMobile ? 'center 40%' : 'center 45%',
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        })

        // Mobile: movement kam karne ke liye
        const gap = 6          // heading aur paragraph ke beech gap
        const spread = 0.85    // 1 = poora, chota number = kam movement

        const topMove = isMobile
          ? { y: () => -(paragraphRef.current.offsetHeight / 2) * spread - gap }
          : { yPercent: -24 }
        const bottomMove = isMobile
          ? { y: () => (paragraphRef.current.offsetHeight / 2) * spread + gap }
          : { yPercent: 24 }

        timeline
          .to(topTextRef.current, { ...topMove, ease: 'none' }, 0)
          .to(bottomTextRef.current, { ...bottomMove, ease: 'none' }, 0)
          .fromTo(
            paragraphRef.current,
            { autoAlpha: 0, scale: 0.96 },
            { autoAlpha: 1, scale: 1, ease: 'none' },
            0.25
          )
      },
      section
    )

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-0 items-center justify-center overflow-hidden bg-[#050807] py-10 md:min-h-[100svh] md:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_48%,rgba(69,190,179,0.07),transparent_48%)]"
      />

      <div className="container-x relative flex min-h-0 w-full items-center justify-center py-0 md:min-h-[100svh]">
        <div className="relative flex h-[19rem] w-full items-center justify-center md:h-[clamp(10rem,29vw,28rem)]">
          <span
            ref={topTextRef}
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap [clip-path:inset(0_0_50%_0)] font-display text-[clamp(5rem,25vw,27rem)] font-extrabold leading-[0.85] tracking-[-0.055em] text-white md:text-[clamp(7rem,25vw,27rem)]"
          >
            About
          </span>

          <span
            ref={bottomTextRef}
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap [clip-path:inset(50%_0_0_0)] font-display text-[clamp(5rem,25vw,27rem)] font-extrabold leading-[0.85] tracking-[-0.055em] text-white md:text-[clamp(7rem,25vw,27rem)]"
          >
            About
          </span>

          <div
            ref={paragraphRef}
            className="invisible absolute inset-0 z-10 flex items-center justify-center px-5"
          >
            <p className="w-full max-w-[34rem] text-center text-sm leading-7 text-white/80 sm:text-base sm:leading-8 sm:text-white/65 lg:text-lg">
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