
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import Navbar from '../components/Navbar.jsx'
import Streaks from '../components/Streaks.jsx'
import CursorFollower from '../components/CursorFollower.jsx'
import Icon from '../components/Icon.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import site from '../config/site.js'
import './Contact.css'

const HERO_STREAK_COLORS = ['#ffffff', '#45BEB3']

function ContactHero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
        },
      )
    }, contentRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#000000] px-4 py-12 sm:px-8">
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

      <div className="pointer-events-none absolute inset-0 z-[2] bg-black/20" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl -translate-y-6 flex-col items-center text-center sm:-translate-y-10 md:-translate-y-12"
      >
        <h1 className="w-full max-w-full text-balance text-[clamp(2.5rem,10vw,8.5rem)] font-bold leading-[1.05] tracking-[-0.055em] text-white sm:whitespace-nowrap sm:text-[clamp(4rem,11vw,8.5rem)] sm:leading-[0.95]">
          Contact <span className="text-[#45BEB3]">Bitnex</span>
        </h1>

        <p className="mt-4 max-w-4xl px-2 text-sm leading-7 text-white/65 sm:mt-6 sm:px-0 sm:text-base sm:leading-8 md:text-xl">
          Call, email, or send the form given below. The Bitnex Technologies LLC team
          usually replies within one business day.
        </p>
      </div>
    </section>
  )
}

export default function Contact() {
  const items = [
    { icon: 'phone', label: 'Phone', value: site.phone, href: site.phoneHref },
    {
      icon: 'mail',
      label: 'Email',
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: 'alert',
      label: 'Complaints',
      value: site.complaintsEmail,
      href: `mailto:${site.complaintsEmail}`,
    },
    ...site.offices.map((office) => ({
      icon: 'pin',
      label: office.label,
      value: office.address,
    })),
  ]

  return (
    <main className="min-h-screen overflow-hidden bg-[#000000]">
      <CursorFollower enabled={true} />

      <Navbar />

      <ContactHero />

      <section className="contact-page-section">
        <div className="container-x contact-page-layout">
          <aside className="contact-page-details">
            <ul>
              {items.map((item) => (
                <li key={item.label}>
                  <span className="contact-detail-icon">
                    <Icon name={item.icon} />
                  </span>

                  <div className="min-w-0">
                    <p>{item.label}</p>

                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <strong>{item.value}</strong>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="contact-business-hours">
              Business hours: {site.hours}
            </p>
          </aside>

          <div id="get-in-touch" className="contact-page-form">
            <h2>Get in touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
