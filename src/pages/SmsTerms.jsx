import { Link } from 'react-router-dom'
import LegalLayout, { Callout, ContactBlock } from '../components/LegalLayout.jsx'
import site, { smsMessages } from '../config/site.js'

export default function SmsTerms() {
  const B = site.name
  const sections = [
    {
      id: 'program', title: 'Program overview',
      body: <>
        <p><strong>Program name:</strong> {site.smsProgram}</p>
        <p><strong>Brand:</strong> {B}{B !== site.legalName && <> ({site.legalName})</>}</p>
        <p><strong>What you will receive:</strong> customer care replies to your inquiry, project updates, appointment and consultation reminders, and account notifications.{site.smsMarketing && ' If you check the separate marketing box, you may also receive marketing messages such as special offers and service announcements.'}</p>
      </>,
    },
    {
      id: 'opt-in', title: 'How to opt in',
      body: <>
        <p>You opt in on our website by going to the <Link to={site.routes.contact}>Contact page</Link> ({site.url}{site.routes.contact}), entering your mobile number in the “Get in touch” form, and checking {site.smsMarketing ? 'one or both of the optional SMS consent boxes (one for customer care messages, one for marketing messages)' : 'the optional SMS consent box'} before clicking Submit.</p>
        <ul>
          <li>{site.smsMarketing ? 'Both SMS consent boxes are' : 'The SMS consent box is'} <strong>optional</strong> and <strong>unchecked by default</strong>. You can submit the form without agreeing to texts.</li>
          <li>SMS consent is separate from any other agreement and is not a condition of purchase.</li>
          {site.smsMarketing && <li>Marketing messages have their own separate checkbox. You will only receive marketing texts if you check that box.</li>}
        </ul>
        <p>After you opt in, you will receive a confirmation message:</p>
        <Callout><p>“{smsMessages.optIn}”</p></Callout>
      </>,
    },
    {
      id: 'frequency-cost', title: 'Message frequency and cost',
      body: <ul>
        <li>Message frequency may vary depending on your inquiry and project activity.</li>
        <li>Message and data rates may apply. Please check with your mobile carrier for details of your plan.</li>
      </ul>,
    },
    {
      id: 'opt-out', title: 'How to opt out',
      body: <>
        <p>You can cancel at any time. Reply <strong>STOP</strong> (or UNSUBSCRIBE, CANCEL, END, QUIT or STOPALL) to any message, or text STOP to {site.smsNumber}. You will receive one final message confirming you have been unsubscribed, and no further messages will be sent:</p>
        <Callout><p>“{smsMessages.optOut}”</p></Callout>
        <p>To start receiving messages again, reply <strong>START</strong>.</p>
      </>,
    },
    {
      id: 'help', title: 'Getting help',
      body: <>
        <p>Reply <strong>HELP</strong> to any message for help. You will receive:</p>
        <Callout><p>“{smsMessages.help}”</p></Callout>
        <p>You can also reach us at <a href={`mailto:${site.email}`}>{site.email}</a> or <a href={site.phoneHref}>{site.phone}</a>, {site.hours}.</p>
      </>,
    },
    {
      id: 'examples', title: 'Example messages',
      body: <ul>
        {smsMessages.samples.map((m) => <li key={m}>“{m}”</li>)}
        {site.smsMarketing && smsMessages.marketingSamples.map((m) => <li key={m}>“{m}” <em className="text-slate-500">(only if you opted in to marketing)</em></li>)}
      </ul>,
    },
    {
      id: 'privacy', title: 'Privacy',
      body: <>
        <Callout>
          <p><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Text messaging originator opt-in data and consent will not be shared with any third parties.</p>
        </Callout>
        <p>Your phone number is used only to send you the messages you agreed to receive. Read our full <Link to={site.routes.privacy}>Privacy Policy</Link>.</p>
      </>,
    },
    {
      id: 'carriers', title: 'Carrier disclaimer',
      body: <p>Carriers are not liable for delayed or undelivered messages. Delivery of messages is subject to effective transmission from your wireless carrier.</p>,
    },
    {
      id: 'more', title: 'Terms and contact',
      body: <><p>These SMS Terms are part of our <Link to={site.routes.terms}>Terms & Conditions</Link>. Questions? Contact us:</p><ContactBlock /></>,
    },
  ]
  return <LegalLayout title="SMS Terms" intro={`Everything about the ${B} text message program: what we send, how often, and how to opt in or out.`} sections={sections} />
}
