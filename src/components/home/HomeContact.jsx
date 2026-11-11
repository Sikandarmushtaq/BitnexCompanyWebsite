import ContactForm from '../contact/ContactForm.jsx'
import './HomeContact.css'

export default function HomeContact() {
  return (
    <section id="home-contact" className="home-contact-section">
      <div className="container-x home-contact-container">
        <header className="home-contact-heading">
          <span>LET’S CONNECT</span>
          <h2>Contact Us</h2>
          <p>Fill out the form below to get in touch with our team.</p>
        </header>

        <div className="home-contact-card">
          <ContactForm compact />
        </div>
      </div>
    </section>
  )
}
