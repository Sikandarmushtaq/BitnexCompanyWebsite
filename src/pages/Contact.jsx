
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

// Displays the contact title and description over the animated streak background.
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
    <section className="contact-hero">
      <div className="contact-hero-streaks">
        <Streaks
          count={145}
          speed={14}
          length={155}
          colors={HERO_STREAK_COLORS}
          opacity={0.9}
          glow={17}
          thickness={1.3}
          direction="right"
          interactive={true}
          pointerGlow={true}
          repelRadius={160}
          repelStrength={35}
        />
      </div>

      <div className="contact-hero-overlay" />

      <div ref={contentRef} className="contact-hero-container">
        <h1>
          Contact <span>Bitnex</span>
        </h1>

        <p>
          Call, email, or send us a message using the form below.
          The Bitnex Technologies LLC team usually replies within
          one business day.
        </p>
      </div>
    </section>
  )
}

// Displays contact information and the existing contact form on a solid black background.
function ContactDetails({ items }) {
  return (
    <section className="contact-content-section">
      <div className="container-x contact-page-layout">
        <aside className="contact-page-details">
          <div className="contact-details-heading">
            <span>CONTACT INFORMATION</span>
            <h2>Let's start a conversation.</h2>
            <p>
              Have a project in mind or need help with your digital
              requirements? Get in touch with our team.
            </p>
          </div>

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
          <div className="contact-form-heading">
            <span>GET IN TOUCH</span>
            <h2>Tell us about your project.</h2>
            <p>
              Share a few details and our team will get back to you.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}

// Combines the animated contact hero with the black contact information section.
export default function Contact() {
  const items = [
    {
      icon: 'phone',
      label: 'Phone',
      value: site.phone,
      href: site.phoneHref,
    },
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
    <main className="min-h-screen overflow-x-clip bg-[#000000]">
      <CursorFollower enabled={true} />

      <Navbar />

      <ContactHero />

      <ContactDetails items={items} />
    </main>
  )
}
