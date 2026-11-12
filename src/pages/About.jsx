
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Navbar from '../components/Navbar.jsx'
import Streaks from '../components/Streaks.jsx'
import CursorFollower from '../components/CursorFollower.jsx'
import WhyChooseBitnex from '../components/about/WhyChooseBitnex.jsx'
import WhatDrivesBitnex from '../components/about/WhatDrivesBitnex.jsx'
import AboutServices from '../components/about/AboutServices.jsx'
import CTA from '../components/CTA.jsx'


const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

function AboutHero() {
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
          Who We Are
        </span>

        <h1 className="whitespace-nowrap text-[clamp(3.8rem,10vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-white">
          About <span className="text-[#45BEB3]">Bitnex</span>
        </h1>

        <p className="mt-5 max-w-4xl text-sm leading-7 text-white/65 sm:mt-6 sm:text-base sm:leading-8 md:text-xl">
          We don't just build digital products. We create reliable
          technology solutions that help businesses move forward,
          operate smarter, and grow with confidence.
        </p>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <main className="min-h-screen  bg-[#000000]">
      <CursorFollower enabled={true} />

      <Navbar  />
      <AboutHero />
      <WhyChooseBitnex />
      <WhatDrivesBitnex />
      <AboutServices />
      <CTA />
  
    </main>
  )
}
