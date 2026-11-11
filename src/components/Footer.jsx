
import { Link } from 'react-router-dom'
import logo from '../assets/logo-light.png'
import Icon from './Icon.jsx'
import { contact } from '../data/content.js'
import site from '../config/site.js'

const company = [
  { to: '/about', label: 'About Us' },
  { to: '/blog', label: 'Blog' },
  { to: '/services', label: 'Our Services' },
  // { to: '/services#web-development', label: 'Landing Pages' },
  { to: '/blog', label: 'Latest News' },
]

const support = [
  { to: '/contact', label: 'Contact' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/sms-terms', label: 'SMS Terms' },
  { to: '/#faq', label: "FAQ's" },
]

const socials = [
  {
    label: 'Facebook',
    href: site.socials.facebook,
    d: 'M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2H8v3.5h2.5V20H14v-6.5h2.5L17 10h-3V8Z',
  },
  {
    label: 'Instagram',
    href: site.socials.instagram,
    d: 'M8 3.5h8A4.5 4.5 0 0 1 20.5 8v8a4.5 4.5 0 0 1-4.5 4.5H8A4.5 4.5 0 0 1 3.5 16V8A4.5 4.5 0 0 1 8 3.5Zm4 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5-1.5h.01',
  },
  {
    label: 'LinkedIn',
    href: site.socials.linkedin,
    d: 'M6 9.5V19M6 5.5v.01M10.5 19v-5.5a3 3 0 0 1 6 0V19M10.5 9.5V19',
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#000000] text-slate-300">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.6fr]">

        <div>
          <Link
            to="/"
            aria-label={`${site.name} home`}
            className="inline-flex items-center min-h-14"
          >
            <img
              src={logo}
              alt={site.name}
              className="block h-12 w-auto max-w-[190px] object-contain object-left md:h-14 md:max-w-[210px]"
            />
          </Link>

          <ul className="flex gap-3 mt-7">
            {socials.filter((s) => s.href).map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                  className="grid w-10 h-10 text-white transition-colors duration-200 border rounded-full place-items-center border-white/15 hover:border-teal hover:text-teal"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.d} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {[['Company', company], ['Support', support]].map(([title, items]) => (
          <div key={title}>
            <h3 className="text-base font-semibold text-white">
              {title}
            </h3>

            <ul className="mt-5 space-y-3">
              {items.map((i) => (
                <li key={i.label}>
                  <Link
                    to={i.to}
                    className="transition-colors duration-200 hover:text-teal"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-base font-semibold text-white">
            Contact Info
          </h3>

          <ul className="mt-5 space-y-4 text-sm">
            {contact.offices.map((o) => (
              <li key={o.label} className="flex gap-3">
                <Icon
                  name="pin"
                  className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                />
                <span>
                  <span className="text-white">{o.label}:</span> {o.address}
                </span>
              </li>
            ))}

            <li className="flex gap-3">
              <Icon
                name="mail"
                className="mt-0.5 h-5 w-5 shrink-0 text-teal"
              />
              <a
                href={`mailto:${contact.email}`}
                className="break-all hover:text-teal"
              >
                {contact.email}
              </a>
            </li>

            <li className="flex gap-3">
              <Icon
                name="alert"
                className="mt-0.5 h-5 w-5 shrink-0 text-teal"
              />
              <a
                href={`mailto:${contact.complaints}`}
                className="break-all hover:text-teal"
              >
                {contact.complaints}
              </a>
            </li>

            <li className="flex gap-3">
              <Icon
                name="phone"
                className="mt-0.5 h-5 w-5 shrink-0 text-teal"
              />
              <a
                href={contact.phoneHref}
                className="hover:text-teal"
              >
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="py-6 text-sm container-x text-slate-400">
          © 2026 Bitnex Technologies LLC.All rights reserved.
        </p>
      </div>
    </footer>
  )
}
