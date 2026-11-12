
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Streaks from './Streaks.jsx'

const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

export default function PageHero({ title, text, animated = false }) {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!animated || !contentRef.current) return

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
  }, [animated])

  if (animated) {
    const words = title.trim().split(' ')

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
            direction="left"
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
            Legal Information
          </span>

          <h1 className="max-w-full text-balance text-[clamp(3.5rem,10vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-white">
            {words.slice(0, -1).join(' ')}{' '}
            <span className="text-[#45BEB3]">
              {words[words.length - 1]}
            </span>
          </h1>

          {text && (
            <p className="mt-5 max-w-4xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 md:text-xl">
              {text}
            </p>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[40px] border-teal/15"
        aria-hidden="true"
      />

      <div className="container-x relative py-20 sm:py-24">
        <h1 className="max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>

        {text && (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            {text}
          </p>
        )}
      </div>

      <div className="h-1.5 w-full bg-teal" />
    </section>
  )
}
