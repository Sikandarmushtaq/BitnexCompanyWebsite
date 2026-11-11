# Telnyx 10DLC — copy-paste text for your campaign

Everything below matches what the website shows. If you change `.env`, update the
names/emails/numbers here too — **the campaign, the website and the brand must say the same thing**
(inconsistency is the #1 rejection reason).

## Before you submit
1. Deploy the site and check these pages load publicly (no login, no pop-up):
   - https://bitnextechnologies.com/contact  (opt-in form, "Get in touch")
   - https://bitnextechnologies.com/privacy-policy
   - https://bitnextechnologies.com/terms-and-conditions
   - https://bitnextechnologies.com/sms-terms
2. Set `VITE_COMPANY_LEGAL_NAME` to the legal name **exactly as on your EIN**, and the address to the one on your brand registration.
3. Deploy on cPanel with `contact.php` (already set as `VITE_CONTACT_FORM_ENDPOINT=/contact.php`). It emails each inquiry and stores consent in `consent-logs/sms-consent.csv`.
4. If your Telnyx texting number is different from (210) 972-5049, put it in `VITE_SMS_NUMBER_DISPLAY` / `VITE_SMS_NUMBER_E164` and rebuild.
5. Take a screenshot of the contact form (with the SMS checkboxes visible), upload it to Imgur or Google Drive (public link).
6. If your campaign does **not** include Marketing, set `VITE_SMS_MARKETING_ENABLED=false`.

## Use case
Mixed: Customer Care + Account Notification + Marketing
(or Customer Care only, if marketing is disabled)

## Campaign description
Bitnex Technologies LLC is an IT services company (website, software and app development, SEO, social media marketing and graphic design). We send text messages to prospects and clients who opt in on our website contact form: customer care replies to their inquiries, project updates, consultation/appointment reminders and account notifications. Users who separately opt in to marketing also receive occasional promotional offers about our services.

## Message flow / Call to action
End users opt in on our website at https://bitnextechnologies.com/contact by filling in the "Get in touch" form at the bottom of the page, entering their mobile number, and checking an optional, unchecked-by-default SMS consent checkbox. There are two separate checkboxes: one for customer care/project/account messages and a separate one for marketing messages. SMS consent is not required to submit the form and is not combined with any other consent. The disclosure next to the checkbox reads: "By checking this box, I agree to receive SMS text messages from Bitnex Technologies LLC at the phone number provided about my inquiry, including customer care replies, project updates, appointment reminders and account notifications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is not a condition of purchase. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes." Links to the Privacy Policy (https://bitnextechnologies.com/privacy-policy) and Terms (https://bitnextechnologies.com/terms-and-conditions) are shown directly below. Screenshot: [PASTE PUBLIC IMGUR/GOOGLE DRIVE LINK]

## Privacy Policy URL
https://bitnextechnologies.com/privacy-policy

## Terms and Conditions URL
https://bitnextechnologies.com/terms-and-conditions

## Keywords
- Opt-in: START, YES, UNSTOP
- Opt-out: STOP, UNSUBSCRIBE, CANCEL, END, QUIT, STOPALL
- Help: HELP, INFO

## Auto-responses
**Opt-in confirmation**
Bitnex Technologies LLC: Thanks for subscribing to SMS updates! Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.

**Opt-out**
Bitnex Technologies LLC: You have been unsubscribed and will receive no further messages. Reply START to resubscribe.

**Help**
Bitnex Technologies LLC: For help, email info@bitnextechnologies.com or call (210) 972-5049. Msg & data rates may apply. Reply STOP to opt out.

## Sample messages
1. Bitnex Technologies LLC: Hi Sara, thanks for contacting us about your website project. Our team will call you today. Reply STOP to opt out, HELP for help.
2. Bitnex Technologies LLC: Your project update is ready. Your homepage design is live for review. Reply STOP to opt out.
3. Bitnex Technologies LLC: Reminder: your consultation is tomorrow at 11:00 AM EST. Reply STOP to opt out, HELP for help.
4. (Marketing) Bitnex Technologies LLC: Get 15% off a new website package this month. Reply to book a free call. Msg & data rates may apply. Reply STOP to opt out.
5. (Marketing) Bitnex Technologies LLC: New! Free SEO audits for small businesses this week. Reply to book yours. Reply STOP to opt out, HELP for help.

## Campaign attributes
- Subscriber opt-in: Yes
- Subscriber opt-out: Yes
- Subscriber help: Yes
- Embedded link: No (don't put links in texts unless you tick this and add a sample with a link)
- Embedded phone number: No
- Number pooling / Direct lending / Affiliate marketing / Age-gated: No
