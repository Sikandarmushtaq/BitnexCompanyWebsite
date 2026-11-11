
import Streaks from '../Streaks.jsx'
import Counter from '../Counter.jsx'
import { stats } from '../../data/content.js'

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-[#050807] py-16 text-white sm:py-20">
      {/* Background streaks */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Streaks
          count={90}
          speed={12}
          length={130}
          colors={['#ffffff', '#45BEB3']}
          opacity={0.55}
          glow={12}
          thickness={1}
          direction="left"
          interactive={false}
        />
      </div>

      {/* Subtle green atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_65%_50%,rgba(69,190,179,0.10),transparent_60%)]"
      />

      <div className="container-x relative z-10">
        <div className="grid min-w-0 items-center gap-9 md:grid-cols-[0.8fr_2.2fr] md:gap-10 lg:gap-14">
          {/* Heading */}
          <div className="min-w-0">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-[#45BEB3]">
              Our Impact
            </span>

            <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[0.9] tracking-[-0.055em] text-white">
              Delivered
              <span className="block text-white/55">Work.</span>
            </h2>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Results that reflect our commitment to meaningful digital
              experiences.
            </p>
          </div>

          {/* Statistics cards */}
          <dl className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#45BEB3]/45 hover:bg-[#45BEB3]/[0.08] hover:shadow-[0_12px_35px_rgba(69,190,179,0.08)] sm:p-5 lg:p-6"
              >
                {/* Card hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#45BEB3]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#45BEB3]/15"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#45BEB3]/75">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-12 group-hover:bg-[#45BEB3]" />
                  </div>

                  <dd className="mt-7 font-display text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold leading-none tracking-[-0.055em] text-white transition-colors duration-300 group-hover:text-[#45BEB3]">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </dd>

                  <dt className="mt-3 text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white/80">
                    {stat.label}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
