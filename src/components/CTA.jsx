
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-[#000000] px-5 py-7 sm:px-8 sm:py-9">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-7 sm:rounded-3xl sm:px-9 sm:py-9 md:flex md:items-center md:justify-between md:gap-8 md:px-12">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(69,190,179,0.16), transparent 70%)'
          }}
        />

        <div className="relative z-10 max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#45BEB3] sm:text-xs">
            Let's Create Something Meaningful
          </span>

          <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Your Next Big Idea Starts Here.
          </h2>

          <p className="mt-2 max-w-xl text-xs leading-6 text-white/60 sm:text-sm sm:leading-7">
            Let's turn your vision into technology that makes a difference.
            Partner with Bitnex Technologies to build smarter solutions,
            create meaningful experiences, and move your business forward.
          </p>
        </div>

        <div className="relative z-10 mt-5 shrink-0 md:mt-0">
          <Link
            to="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-xs font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:text-sm"
          >
            Let's Build Together
          </Link>
        </div>
      </div>
    </section>
  )
}
