import PageHero from './PageHero.jsx'
import site from '../config/site.js'

/**
 * Shared layout for the legal pages.
 * sections: [{ id, title, body: ReactNode }]
 */
export default function LegalLayout({ title, intro, sections }) {
  return (
    <>
      <PageHero title={title} text={intro} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[15rem_1fr]">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-display text-sm font-semibold text-navy">On this page</p>
            <ol className="mt-4 space-y-1 text-sm">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="flex gap-2 rounded-lg px-2 py-1.5 hover:bg-mist">
                    <span className="text-teal-dark">{i + 1}.</span>
                    <span className="text-navy">{s.title}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl">
            <p className="text-sm text-slate-500">Effective date: {site.effectiveDate} · Last updated: {site.effectiveDate}</p>
            <div className="mt-8 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold">{i + 1}. {s.title}</h2>
                  <div className="legal mt-4 space-y-4 leading-relaxed">{s.body}</div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export function Callout({ children }) {
  return <div className="rounded-2xl border-l-4 border-teal bg-teal-light/60 px-5 py-4 text-navy">{children}</div>
}

export function ContactBlock() {
  return (
    <ul className="!list-none space-y-1 !pl-0">
      <li><strong className="text-navy">{site.legalName}</strong>{site.name !== site.legalName && <> (“{site.name}”)</>}</li>
      {site.offices.map((o) => <li key={o.label}>{o.label}: {o.address}</li>)}
      <li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li>
      <li>Phone: <a href={site.phoneHref}>{site.phone}</a></li>
      <li>Website: <a href={site.url}>{site.url}</a></li>
    </ul>
  )
}
