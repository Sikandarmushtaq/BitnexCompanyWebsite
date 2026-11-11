import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { Link } from 'react-router-dom'
import ContactForm from '../components/contact/ContactForm.jsx'
import site from '../config/site.js'
import './Contact.css'

export default function Contact() {
  const items = [
    { icon: 'phone', label: 'Phone', value: site.phone, href: site.phoneHref },
    { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
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
    <>
      <PageHero
        title="Let’s talk about your project"
        text={`Call, email, or send the form below. The ${site.name} team usually replies within one business day.`}
      />

      <section className="contact-page-section">
        <div className="container-x contact-page-layout">
          <aside className="contact-page-details">
            <ul>
              {items.map((item) => (
                <li key={item.label}>
                  <span className="contact-detail-icon">
                    <Icon name={item.icon} />
                  </span>

                  <div>
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
    </>
  )
}
