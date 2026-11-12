
import { Link } from 'react-router-dom'
import Streaks from '../Streaks.jsx'

import HeroGeometry from '../HeroGeometry.jsx'

const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

export default function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#050807]">
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_76%_48%,rgba(69,190,179,0.09),transparent_48%)]"
      />

    

      <div className="container-x relative z-10 grid min-h-[100svh] items-center gap-8 pb-12 pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 lg:py-24 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="relative z-10 max-w-[850px] pl-4 sm:pl-6 lg:pl-10 xl:pl-14 2xl:pl-20">
          <h1 className="mt-6 font-display text-[clamp(3.4rem,7.2vw,7.5rem)] font-extrabold leading-[0.91] tracking-[-0.055em] text-white">
            <span className="block">Digital</span>
            <span className="block">excellence</span>
          </h1>

          <div className="mt-7 space-y-1">
            <p className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.7rem]">
              Ideas into impact.
            </p>

            <p
              className="font-display text-3xl font-medium leading-tight tracking-tight text-transparent sm:text-4xl lg:text-[2.7rem]"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.78)',
              }}
            >
              Technology with purpose.
            </p>
          </div>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            We bring development, creative thinking and digital growth
            together to build meaningful solutions for ambitious businesses.
            From powerful software to standout digital experiences, we make
            technology work for your next move.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/55 bg-transparent px-6 py-3.5 font-display text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050807]"
            >
              Let's Connect
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-white/25 bg-transparent px-6 py-3.5 font-display text-sm font-semibold text-white/85 transition-all duration-300 hover:border-white hover:bg-white hover:text-[#050807]"
            >
              Explore Our Work
            </Link>
          </div>
        </div>

        <div className="relative z-10 mx-auto h-[330px] w-full max-w-[760px] sm:h-[430px] lg:h-[min(72svh,680px)] lg:min-h-[500px] xl:max-w-[850px]">
          <HeroGeometry />
        </div>
      </div>
    </section>
  )
}
