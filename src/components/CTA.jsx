import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="container-x pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-teal px-8 py-12 sm:px-14 sm:py-16">
        <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-navy/10" aria-hidden="true" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Let’s build the future together.</h2>
            <p className="mt-3 max-w-lg text-navy/80">Tell us about your project and we’ll come back with a plan and a quote within one business day.</p>
          </div>
          <Link to="/contact" className="btn shrink-0 bg-navy text-white hover:bg-white hover:text-navy">Start a project</Link>
        </div>
      </div>
    </section>
  )
}
