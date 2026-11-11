import { Link } from 'react-router-dom'
import LegalLayout, { Callout, ContactBlock } from '../components/LegalLayout.jsx'
import site from '../config/site.js'

export default function PrivacyPolicy() {
  const B = site.name
  const sections = [
    {
      id: 'introduction', title: 'Introduction',
      body: <>
        <p>This Privacy Policy explains how {site.legalName} ({B !== site.legalName && <>“{B}”, </>}“we”, “us” or “our”) collects, uses, shares and protects personal information when you visit <a href={site.url}>{site.domain}</a>, contact us, use our services, or take part in our SMS text messaging program.</p>
        <p>By using our website or services, you agree to the practices described in this policy.</p>
      </>,
    },
    {
      id: 'information-we-collect', title: 'Information we collect',
      body: <>
        <p><strong>Information you give us</strong>, for example when you fill out our contact form, request a quote, call or email us:</p>
        <ul>
          <li>Name, email address, mobile phone number and company name</li>
          <li>Details about your project or inquiry</li>
          <li>Your SMS consent choices, including the date, time and wording you agreed to</li>
          <li>Billing details if you become a client</li>
        </ul>
        <p><strong>Information collected automatically</strong>, such as your IP address, browser type, device information, pages visited and referring website, collected through cookies and similar technologies.</p>
      </>,
    },
    {
      id: 'how-we-use', title: 'How we use your information',
      body: <ul>
        <li>To respond to your inquiries and provide the services you request</li>
        <li>To send you project updates, appointment reminders, account notifications and customer care messages</li>
        <li>To send SMS text messages <strong>only if you have opted in</strong> (see Section 4)</li>
        <li>To send marketing messages only where you have given separate consent</li>
        <li>To improve our website and services and keep them secure</li>
        <li>To meet our legal obligations</li>
      </ul>,
    },
    {
      id: 'sms', title: 'SMS text messaging',
      body: <>
        <p>If you opt in to receive text messages from {B}, we use your mobile phone number only to send you the messages you agreed to receive, such as customer care replies, project updates, appointment reminders, account notifications and, if you separately opted in, marketing messages.</p>
        <ul>
          <li><strong>How you opt in:</strong> on our <Link to={site.routes.contact}>contact form</Link> ({site.url}{site.routes.contact}), enter your mobile number and check {site.smsMarketing ? 'one or both of the optional SMS consent boxes: one for customer care messages and a separate one for marketing messages. Both boxes are' : 'the optional SMS consent box. The box is'} unchecked by default and not required to submit the form.</li>
          <li><strong>Message frequency</strong> may vary.</li>
          <li><strong>Message and data rates</strong> may apply according to your mobile carrier’s plan.</li>
          <li><strong>Opt out</strong> at any time by replying <strong>STOP</strong>. You will receive one final message confirming you are unsubscribed.</li>
          <li><strong>Help:</strong> reply <strong>HELP</strong>, email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phoneHref}>{site.phone}</a>.</li>
          <li>Consent to receive text messages is not a condition of purchase.</li>
        </ul>
        <Callout>
          <p><strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.</strong> Information will not be sold or shared with third parties for promotional or marketing purposes.</p>
          <p className="mt-3">All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
        </Callout>
        <p>We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. The only outside parties involved in our text messages are the messaging platform and phone carriers that technically deliver them on our behalf. They receive only what is needed to deliver your messages and may not use it for any other purpose.</p>
        <p>For full program details, see our <Link to={site.routes.sms}>SMS Terms</Link>.</p>
      </>,
    },
    {
      id: 'sharing', title: 'How we share information',
      body: <>
        <p>We do not sell, rent or trade your personal information. We share it only with:</p>
        <ul>
          <li><strong>Service providers</strong> who help us run our business (for example hosting, email, and SMS delivery providers), under agreements that limit their use of your data to providing services to us</li>
          <li><strong>Legal authorities</strong> when required by law, court order or to protect our rights and safety</li>
          <li><strong>A successor business</strong> in the event of a merger or sale, subject to this policy</li>
        </ul>
        <p>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
      </>,
    },
    {
      id: 'cookies', title: 'Cookies',
      body: <p>We use cookies to keep the website working, remember your preferences and understand how visitors use our site. You can control or delete cookies through your browser settings. Blocking some cookies may affect how the website works.</p>,
    },
    {
      id: 'security', title: 'Data security and retention',
      body: <>
        <p>We use reasonable administrative, technical and physical safeguards, including encrypted (HTTPS) connections, to protect your information. No method of transmission over the internet is completely secure, so we cannot guarantee absolute security.</p>
        <p>We keep personal information only as long as needed for the purposes described in this policy or as required by law. SMS consent records are kept for as long as needed to show that consent was given.</p>
      </>,
    },
    {
      id: 'your-rights', title: 'Your choices and rights',
      body: <>
        <p>You may ask us to access, correct or delete your personal information, or to stop sending you marketing communications. To stop text messages, reply <strong>STOP</strong> to any message. For other requests, email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. Depending on where you live (for example California or the EU), you may have additional rights under local law, and we will honor those requests as required.</p>
      </>,
    },
    {
      id: 'children', title: 'Children’s privacy',
      body: <p>Our website and services are not directed to children under 13 (or 16 where required by law), and we do not knowingly collect their personal information. If you believe a child has given us information, contact us and we will delete it.</p>,
    },
    {
      id: 'changes', title: 'Changes to this policy',
      body: <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a new effective date.</p>,
    },
    {
      id: 'contact', title: 'Contact us',
      body: <><p>If you have questions about this Privacy Policy, contact us:</p><ContactBlock /></>,
    },
  ]
  return <LegalLayout title="Privacy Policy" intro={`How ${B} collects, uses and protects your information, including your SMS consent and mobile number.`} sections={sections} />
}
