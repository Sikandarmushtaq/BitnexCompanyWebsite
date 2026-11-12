import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Streaks from '../components/Streaks.jsx'
import CursorFollower from '../components/CursorFollower.jsx'

const STREAK_COLORS = ['#ffffff', '#45BEB3']

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path
        d="M7 17L17 7M7 7H17V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-black">
      {/* Streaks background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Streaks
          count={145}
          speed={14}
          length={155}
          colors={STREAK_COLORS}
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

      {/* Top-right teal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_88%_0%,rgba(69,190,179,0.28),transparent_45%)]"
      />

      {/* Top-left soft glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_4%_6%,rgba(255,255,255,0.06),transparent_22%)]"
      />

      {/* Bottom glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-t from-[#45BEB3]/20 via-[#45BEB3]/5 to-transparent"
      />

      <CursorFollower enabled={true} />
      <Navbar />

      <section className="relative z-10 flex flex-1 items-center px-5 pb-12 pt-28 sm:px-8 sm:pt-32 xl:px-12">
        <div className="mx-auto w-full max-w-[1480px]">
          {/* Label with line */}
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-white/40 sm:w-14" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-xs">
              Error 404 · Page not found
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 max-w-5xl font-display text-[clamp(4.2rem,13vw,12rem)] font-extrabold leading-[0.85] tracking-[-0.065em] text-white sm:mt-8">
            Lost in
            <span className="block">
              space
              <span className="ml-[0.04em] inline-block h-[0.14em] w-[0.14em] bg-[#45BEB3]" />
            </span>
          </h1>

          {/* Paragraph + buttons */}
          <div className="mt-10 flex flex-col gap-8 sm:mt-12 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:text-xl lg:leading-9">
              This page drifted out of orbit, or it never existed.
              Everything else on Bitnex is right where you left it.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#45BEB3] py-2 pl-6 pr-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-white"
              >
                Back to home
                <span className="grid h-8 w-8 place-items-center rounded-full bg-black/15">
                  <ArrowIcon />
                </span>
              </Link>

              <Link
                to="/services"
                className="group inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 bg-transparent py-2 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                Our services
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 group-hover:bg-black/10">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}