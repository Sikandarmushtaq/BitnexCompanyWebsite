// All company details come from the .env file. Edit .env, not this file.
const env = import.meta.env

const get = (key, fallback = '') => {
  const v = env[key]
  return v === undefined || v === '' ? fallback : String(v).trim()
}

const phoneDisplay = get('VITE_PHONE_DISPLAY', '(210) 972-5049')
const phoneE164 = get('VITE_PHONE_E164', phoneDisplay.replace(/[^\d+]/g, ''))
const smsDisplay = get('VITE_SMS_NUMBER_DISPLAY', phoneDisplay)
const smsE164 = get('VITE_SMS_NUMBER_E164', smsDisplay.replace(/[^\d+]/g, ''))

const site = {
  name: get('VITE_COMPANY_NAME', 'Bitnex Technologies LLC'),
  legalName: get('VITE_COMPANY_LEGAL_NAME', 'Bitnex Technologies LLC'),
  url: get('VITE_WEBSITE_URL', 'https://bitnextechnologies.com'),
  domain: get('VITE_WEBSITE_DOMAIN', 'bitnextechnologies.com'),

  email: get('VITE_SUPPORT_EMAIL', 'info@bitnextechnologies.com'),
  complaintsEmail: get('VITE_COMPLAINTS_EMAIL', 'complaints@bitnextechnologies.com'),
  privacyEmail: get('VITE_PRIVACY_EMAIL', get('VITE_SUPPORT_EMAIL', 'info@bitnextechnologies.com')),
  phone: phoneDisplay,
  phoneHref: `tel:${phoneE164}`,
  smsNumber: smsDisplay,
  smsHref: `sms:${smsE164}`,
  hours: get('VITE_BUSINESS_HOURS', 'Monday to Friday, 9:00 AM to 6:00 PM (EST)'),

  offices: [
    { label: get('VITE_PRIMARY_OFFICE_LABEL', 'Corporate Office'), address: get('VITE_PRIMARY_OFFICE_ADDRESS', '6545 Market Ave N Ste 100, Canton, OH 44721, USA') },
    { label: get('VITE_SECONDARY_OFFICE_LABEL'), address: get('VITE_SECONDARY_OFFICE_ADDRESS') },
  ].filter((o) => o.label && o.address),

  socials: {
    facebook: get('VITE_FACEBOOK_URL', 'https://www.facebook.com/bitnextechnologies/'),
    instagram: get('VITE_INSTAGRAM_URL', 'https://www.instagram.com/bitnextechnologies/'),
    linkedin: get('VITE_LINKEDIN_URL', 'https://www.linkedin.com/company/bitnex-technologies/'),
  },

  effectiveDate: get('VITE_LEGAL_EFFECTIVE_DATE', 'September 24, 2026'),
  governingLaw: get('VITE_GOVERNING_LAW_STATE', 'State of Ohio'),

  smsProgram: get('VITE_SMS_PROGRAM_NAME', `${get('VITE_COMPANY_NAME', 'Bitnex Technologies LLC')} SMS`),
  smsMarketing: get('VITE_SMS_MARKETING_ENABLED', 'true').toLowerCase() === 'true',

  formEndpoint: get('VITE_CONTACT_FORM_ENDPOINT', '/contact.php'),

  routes: { privacy: '/privacy-policy', terms: '/terms-and-conditions', sms: '/sms-terms', contact: '/contact' },
}

site.primaryAddress = site.offices[0]?.address || ''

/**
 * The exact SMS consent wording shown next to each checkbox on the contact form.
 * Built to match Telnyx's 10DLC opt-in form requirements:
 * brand, message type, frequency, rates, STOP, HELP, no sharing, links to Terms & Privacy.
 * The same text is saved with each form submission as the consent record.
 */
export const smsConsentText = {
  transactional:
    `By checking this box, I agree to receive SMS text messages from ${site.name} at the phone number provided about my inquiry, including customer care replies, project updates, appointment reminders and account notifications. ` +
    `Message frequency may vary. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. ` +
    `Consent is not a condition of purchase. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.`,
  marketing:
    `By checking this box, I agree to receive marketing and promotional SMS text messages from ${site.name} at the phone number provided, including special offers and service announcements. You are opting in to marketing texts. ` +
    `Message frequency may vary. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. ` +
    `Consent is not a condition of purchase. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.`,
}

/** Keyword auto-replies — copy these into your Telnyx campaign so the site and campaign match. */
export const smsMessages = {
  optIn: `${site.name}: Thanks for subscribing to SMS updates! Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.`,
  optOut: `${site.name}: You have been unsubscribed and will receive no further messages. Reply START to resubscribe.`,
  help: `${site.name}: For help, email ${site.email} or call ${site.phone}. Msg & data rates may apply. Reply STOP to opt out.`,
  samples: [
    `${site.name}: Hi Sara, thanks for contacting us about your website project. Our team will call you today. Reply STOP to opt out, HELP for help.`,
    `${site.name}: Your project update is ready. Your homepage design is live for review. Reply STOP to opt out.`,
    `${site.name}: Reminder: your consultation is tomorrow at 11:00 AM EST. Reply STOP to opt out, HELP for help.`,
  ],
  marketingSamples: [
    `${site.name}: Get 15% off a new website package this month. Reply to book a free call. Msg & data rates may apply. Reply STOP to opt out.`,
    `${site.name}: New! Free SEO audits for small businesses this week. Reply to book yours. Reply STOP to opt out, HELP for help.`,
  ],
}

export default site
