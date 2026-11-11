import { useState } from 'react'
import { Link } from 'react-router-dom'
import SuccessModal from '../SuccessModal.jsx'
import { services } from '../../data/content.js'
import site, { smsConsentText } from '../../config/site.js'
import './ContactForm.css'

const initial = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  smsTransactional: false,
  smsMarketing: false,
}

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [submittedName, setSubmittedName] = useState('')

  const wantsSms = form.smsTransactional || form.smsMarketing

  // Updates a form field while preserving the other values.
  const update = (e) => {
    const { name, type, checked, value } = e.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  // Checks the required fields and optional SMS phone requirement.
  const validate = () => {
    const errs = {}

    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = 'Please enter a valid email.'
    }
    if (form.phone && form.phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number.'
    }
    if (wantsSms && !form.phone.trim()) {
      errs.phone = 'Enter your mobile number to receive text messages.'
    }
    if (!form.message.trim()) {
      errs.message = 'Please tell us a little about your project.'
    }

    return errs
  }

  // Sends the same contact payload to the existing configured endpoint.
  const submit = async (e) => {
    e.preventDefault()

    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length) return

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
      sms_consent: {
        transactional: form.smsTransactional,
        marketing: site.smsMarketing ? form.smsMarketing : false,
        transactional_text: form.smsTransactional
          ? smsConsentText.transactional
          : null,
        marketing_text: form.smsMarketing ? smsConsentText.marketing : null,
        consented_at: wantsSms ? new Date().toISOString() : null,
        source_url: window.location.href,
        user_agent: navigator.userAgent,
      },
    }

    setStatus('sending')

    try {
      if (!site.formEndpoint) {
        throw new Error('VITE_CONTACT_FORM_ENDPOINT is not set in .env')
      }

      const res = await fetch(site.formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json().catch(() => ({}))

      if (import.meta.env.DEV && !data.ok) {
        console.info(
          '[dev] contact.php is not running locally — showing the success popup for testing.',
          payload
        )
      } else if (!res.ok || !data.ok) {
        throw new Error(data.error || `HTTP ${res.status}`)
      }

      setSubmittedName(form.name)
      setStatus('sent')
      setForm(initial)
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className={`contact-form-theme ${compact ? 'contact-form-compact' : ''}`}>
      {status === 'error' && (
        <p className="contact-form-error" role="alert">
          Sorry, something went wrong. Please try again or email us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <form onSubmit={submit} noValidate className="contact-form-grid">
        <Field
          label="Full name"
          name="name"
          autoComplete="name"
          value={form.name}
          onChange={update}
          error={errors.name}
        />

        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={update}
          error={errors.email}
        />

        <Field
          label={wantsSms ? 'Mobile phone number' : 'Mobile phone number (optional)'}
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 123-4567"
          value={form.phone}
          onChange={update}
          error={errors.phone}
        />

        <label className="contact-form-field">
          <span>Service</span>
          <select name="service" value={form.service} onChange={update} className="field">
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="contact-form-field contact-form-full">
          <span>Message</span>
          <textarea
            name="message"
            rows={compact ? 3 : 5}
            value={form.message}
            onChange={update}
            className="field resize-y"
            aria-invalid={!!errors.message}
          />
          {errors.message && <small>{errors.message}</small>}
        </label>

        <fieldset className="contact-form-consent contact-form-full">
          <legend>Text message updates (optional)</legend>

          <Consent
            name="smsTransactional"
            checked={form.smsTransactional}
            onChange={update}
            text={smsConsentText.transactional}
          />

          {site.smsMarketing && (
            <Consent
              name="smsMarketing"
              checked={form.smsMarketing}
              onChange={update}
              text={smsConsentText.marketing}
            />
          )}

          <p className="contact-form-legal">
            Carriers are not liable for delayed or undelivered messages. Text HELP to{' '}
            {site.smsNumber} for help. See our{' '}
            <Link to={site.routes.privacy} target="_blank">Privacy Policy</Link>,{' '}
            <Link to={site.routes.terms} target="_blank">Terms &amp; Conditions</Link> and{' '}
            <Link to={site.routes.sms} target="_blank">SMS Terms</Link>.
          </p>
        </fieldset>

        <div className="contact-form-submit contact-form-full">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary"
          >
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          <span>Your information is safe and secure with us.</span>
        </div>
      </form>

      <SuccessModal
        open={status === 'sent'}
        name={submittedName}
        onClose={() => setStatus('idle')}
      />
    </div>
  )
}

function Consent({ name, checked, onChange, text }) {
  return (
    <label className="contact-consent-option">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span>{text}</span>
    </label>
  )
}

function Field({ label, error, ...props }) {
  return (
    <label className="contact-form-field">
      <span>{label}</span>
      <input {...props} className="field" aria-invalid={!!error} />
      {error && <small>{error}</small>}
    </label>
  )
}
