
import PageHero from './PageHero.jsx'
import site from '../config/site.js'

export default function LegalLayout({
  title,
  intro,
  sections,
  darkTheme = false
}) {
  return (
    <>
      <PageHero
        title={title}
        text={intro}
        animated={darkTheme}
      />

      <section
        className={
          darkTheme
            ? 'bg-[#000000] px-5 py-12 text-white sm:px-8 sm:py-16'
            : 'section'
        }
      >
        <div className="container-x grid gap-10 lg:grid-cols-[15rem_1fr] lg:gap-12">
<nav
  aria-label="On this page"
  className="lg:sticky lg:top-28 lg:self-start"
>
            <p
              className={`font-display text-sm font-semibold ${
                darkTheme ? 'text-white' : 'text-navy'
              }`}
            >
              On this page
            </p>

            <ol className="mt-4 space-y-1 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`flex gap-2 rounded-lg px-2 py-2 transition-colors ${
                      darkTheme
                        ? 'text-white/55 hover:bg-white/[0.05] hover:text-[#45BEB3]'
                        : 'hover:bg-mist'
                    }`}
                  >
                    <span className={darkTheme ? 'text-[#45BEB3]' : 'text-teal-dark'}>
                      {index + 1}.
                    </span>

                    <span className={darkTheme ? 'text-inherit' : 'text-navy'}>
                      {section.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="max-w-3xl">
            <p
              className={`text-xs ${
                darkTheme ? 'text-white/35' : 'text-slate-500'
              }`}
            >
              Effective date: {site.effectiveDate}
              {' · '}
              Last updated: {site.effectiveDate}
            </p>

            <div className="mt-8 space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2
                    className={`text-xl font-bold sm:text-2xl ${
                      darkTheme ? 'text-white' : ''
                    }`}
                  >
                    {index + 1}. {section.title}
                  </h2>

                  <div
                    className={
                      darkTheme
                        ? 'legal mt-4 space-y-4 leading-relaxed text-sm text-white/65 sm:text-base [&_strong]:text-white [&_a]:text-[#45BEB3] [&_a:hover]:text-white [&_li]:marker:text-[#45BEB3]'
                        : 'legal mt-4 space-y-4 leading-relaxed'
                    }
                  >
                    {section.body}
                  </div>
                </section>
              ))}
            </div>
          </article>

        </div>
      </section>
    </>
  )
}

export function Callout({ children, dark = false }) {
  return (
    <div
      className={
        dark
          ? 'rounded-2xl border border-[#45BEB3]/20 bg-[#45BEB3]/[0.07] px-5 py-4 text-white/75'
          : 'rounded-2xl border-l-4 border-teal bg-teal-light/60 px-5 py-4 text-navy'
      }
    >
      {children}
    </div>
  )
}

export function ContactBlock({ dark = false }) {
  return (
    <ul
      className={`!list-none space-y-2 !pl-0 ${
        dark ? 'text-white/65 [&_strong]:text-white' : ''
      }`}
    >
      <li>
        <strong className={dark ? 'text-white' : 'text-navy'}>
          {site.legalName}
        </strong>

        {site.name !== site.legalName && <> (“{site.name}”)</>}
      </li>

      {site.offices.map((office) => (
        <li key={office.label}>
          {office.label}: {office.address}
        </li>
      ))}

      <li>
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </li>

      <li>
        Phone: <a href={site.phoneHref}>{site.phone}</a>
      </li>

      <li>
        Website: <a href={site.url}>{site.url}</a>
      </li>
    </ul>
  )
}
