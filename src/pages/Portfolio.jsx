import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import CTA from '../components/CTA.jsx'
import { portfolioCategories, projects } from '../data/content.js'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const list = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <PageHero title="Bitnex Technologies Portfolio" text="A selection of websites, apps, campaigns and brand work we’ve delivered for our clients." />
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {portfolioCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 font-display text-sm font-medium transition-colors ${active === c ? 'bg-navy text-white' : 'bg-mist text-navy hover:bg-teal-light'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <li key={p.title} className="group">
                {/* Replace this gradient block with a real project screenshot: <img src={...} /> */}
                <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${p.hue}`}>
                  <div className="absolute inset-6 rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1" />
                  <div className="absolute bottom-10 left-10 right-10 space-y-2" aria-hidden="true">
                    <div className="h-2 w-2/3 rounded-full bg-white/60" />
                    <div className="h-2 w-1/3 rounded-full bg-white/40" />
                  </div>
                </div>
                <p className="mt-4 text-sm text-teal-dark">{p.category}</p>
                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </>
  )
}
