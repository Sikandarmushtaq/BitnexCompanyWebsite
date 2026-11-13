
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Navbar from '../components/Navbar.jsx'
import Streaks from '../components/Streaks.jsx'
import CursorFollower from '../components/CursorFollower.jsx'

import BlogPageShowcase from '../components/blog/BlogPageShowcase.jsx'
import BlogFaqs from '../components/blog/BlogFaqs.jsx'

const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

// Introduces the Blog Page with the site's existing streak animation.
function BlogHero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        {
          y: 24,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out'
        }
      )
    }, contentRef)

    return () => context.revert()
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-5 py-16 sm:px-8">
      <div className="absolute inset-0 z-0 pointer-events-none">
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
      className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center"
      >
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#45BEB3] sm:text-sm">
          Bitnex Technologies Blogs
        </span>

        <h1 className="max-w-5xl text-balance text-[clamp(3.2rem,10vw,8rem)] font-bold leading-[0.97] tracking-[-0.06em] text-white">
          Insights That
          <span className="block text-[#45BEB3]">Inspire Progress.</span>
        </h1>

        <p className="max-w-3xl mt-6 text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg">
          Explore practical ideas, technology perspectives and digital
          strategies covering AI, software engineering, web development,
          mobile applications and the future of business.
        </p>
      </div>
    </section>
  )
}

// Combines the blog introduction, article collection and existing FAQs.
export default function Blog() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#000000]">
      <CursorFollower enabled={true} />
      <Navbar />

      <BlogHero />

      <BlogPageShowcase />

      <BlogFaqs />
    </main>
  )
}
