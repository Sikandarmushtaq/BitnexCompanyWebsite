import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { posts } from '../data/content.js'

export default function Blog() {
  const [first, ...rest] = posts
  return (
    <>
      <PageHero title="Bitnex Technologies LLC Blogs" text="Notes on AI, web development and digital marketing from our team." />
      <section className="section">
        <div className="container-x">
          <article className="grid gap-8 rounded-3xl bg-navy p-8 text-slate-300 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm text-teal">Latest · {first.date}</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{first.title}</h2>
            </div>
            <div>
              <p className="leading-relaxed">{first.excerpt}</p>
              <Link to={`/blog/${first.slug}`} className="btn-primary mt-6">Read more</Link>
            </div>
          </article>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {rest.map((p) => (
              <article key={p.slug} className="flex flex-col border-t-2 border-navy pt-6">
                <p className="text-sm text-slate-500">{p.date}</p>
                <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                <p className="mt-3 line-clamp-4 flex-1 leading-relaxed">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="mt-5 font-display text-sm font-semibold text-teal-dark hover:text-navy">Read more</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
