
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import CursorFollower from '../components/CursorFollower.jsx'
import LegalLayout, {
  Callout,
  ContactBlock,
} from '../components/LegalLayout.jsx'

import site from '../config/site.js'

// Builds the Terms and Conditions page using the shared dark legal layout.
export default function Terms() {
  const B = site.name

  const sections = [
    {
      id: 'agreement',
      title: 'Agreement to these terms',
      body: (
        <p>
          These Terms and Conditions (“Terms”) govern your use of{' '}
          <a href={site.url}>{site.domain}</a> and the services provided by{' '}
          {site.legalName} (
          {B !== site.legalName && <>“{B}”, </>}
          “we”, “us” or “our”). By using our website, contacting us or using
          our services, you agree to these Terms. If you do not agree, please
          do not use the website or services.
        </p>
      ),
    },
    {
      id: 'services',
      title: 'Our services',
      body: (
        <p>
          {B} provides website development, software development, app
          development, SEO, social media marketing, graphic design, network
          security and bug-fixing services. The scope, price and timeline of
          any project are set out in a separate proposal or agreement, which
          takes priority over these Terms if the two conflict.
        </p>
      ),
    },
    {
      id: 'sms-program',
      title: 'SMS messaging program',
      body: (
        <>
          <Callout dark>
            <p>
              <strong>Program name:</strong> {site.smsProgram}
            </p>

            <p className="mt-1">
              <strong>Program description:</strong> {B} sends text messages to
              people who opt in through our website contact form. Messages
              include customer care replies to your inquiry, project updates,
              appointment reminders and account notifications
              {site.smsMarketing
                ? ', and, only if you separately opted in, marketing messages such as special offers and service announcements'
                : ''}
              .
            </p>
          </Callout>

          <ul>
            <li>
              <strong>Opting in:</strong> on our{' '}
              <Link to={site.routes.contact}>contact form</Link> (
              {site.url}{site.routes.contact}), enter your mobile number and
              check{' '}
              {site.smsMarketing
                ? 'the optional customer care box, the separate optional marketing box, or both. Both boxes are'
                : 'the optional SMS consent box. It is'}{' '}
              unchecked by default and not required to submit the form.
              Consent is not a condition of purchase.
            </li>

            <li>
              <strong>Message frequency:</strong> message frequency may vary
              depending on your inquiry and account activity.
            </li>

            <li>
              <strong>Cost:</strong> message and data rates may apply. Check
              your mobile plan for details.
            </li>

            <li>
              <strong>Opting out:</strong> you can cancel the SMS service at
              any time. Just text <strong>STOP</strong> to {site.smsNumber} or
              reply STOP to any message. After you send STOP, we will send you
              one message to confirm that you have been unsubscribed, and you
              will no longer receive SMS messages from us. To join again, text{' '}
              <strong>START</strong> and we will start sending messages to you
              again.
            </li>

            <li>
              <strong>Help:</strong> if you are having trouble with the
              messaging program, reply <strong>HELP</strong> for more
              assistance, or contact us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
              <a href={site.phoneHref}>{site.phone}</a>.
            </li>

            <li>
              <strong>Carriers</strong> are not liable for delayed or
              undelivered messages.
            </li>

            <li>
              <strong>Privacy:</strong> no mobile information will be shared
              with third parties or affiliates for marketing or promotional
              purposes. See our{' '}
              <Link to={site.routes.privacy}>Privacy Policy</Link>.
            </li>
          </ul>

          <p>
            Full details are in our{' '}
            <Link to={site.routes.sms}>SMS Terms</Link>.
          </p>
        </>
      ),
    },
    {
      id: 'use-of-site',
      title: 'Use of the website',
      body: (
        <>
          <p>You agree not to:</p>

          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Submit false information or impersonate another person</li>
            <li>
              Try to gain unauthorized access to our systems or interfere with
              the website’s operation
            </li>
            <li>
              Copy, scrape or reuse our content without written permission
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'payments',
      title: 'Quotes, payments and refunds',
      body: (
        <p>
          Quotes are valid for the period stated on them. Payment terms,
          deposits and any refund conditions are set out in your project
          proposal or agreement. Unless otherwise agreed in writing, invoices
          are due on receipt.
        </p>
      ),
    },
    {
      id: 'ip',
      title: 'Intellectual property',
      body: (
        <p>
          All content on this website, including text, graphics, logos and
          code, belongs to {B} or its licensors. Ownership of work we create
          for clients transfers as described in the client’s project
          agreement, usually after full payment.
        </p>
      ),
    },
    {
      id: 'liability',
      title: 'Disclaimers and limitation of liability',
      body: (
        <>
          <p>
            The website is provided “as is” without warranties of any kind.
            We do not guarantee that it will always be available or
            error-free.
          </p>

          <p>
            To the fullest extent allowed by law, {B} is not liable for any
            indirect, incidental or consequential damages arising from your
            use of the website or services. Our total liability for any claim
            is limited to the amount you paid us for the service that gave rise
            to the claim.
          </p>
        </>
      ),
    },
    {
      id: 'law',
      title: 'Governing law',
      body: (
        <p>
          These Terms are governed by the laws of the {site.governingLaw},
          without regard to its conflict-of-law rules.
        </p>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      body: (
        <p>
          We may update these Terms from time to time. The updated version
          will be posted on this page with a new effective date. Continuing to
          use the website after changes means you accept the updated Terms.
        </p>
      ),
    },
    {
      id: 'contact',
      title: 'Contact us',
      body: (
        <>
          <p>Questions about these Terms? Contact us:</p>
          <ContactBlock dark />
        </>
      ),
    },
  ]

  return (
    <main className="min-h-screen overflow-x-clip bg-[#000000]">
      <CursorFollower enabled={true} />

      <div className="relative z-20">
        <Navbar />
      </div>

      <LegalLayout
        title="Terms & Conditions"
        intro={`The terms for using the ${B} website, our services and our SMS messaging program.`}
        sections={sections}
        darkTheme={true}
      />
    </main>
  )
}
