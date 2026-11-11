# Deploy to cPanel (bitnextechnologies.com)

## 1. Check the phone numbers
`.env` uses (210) 972-5049 as the main phone and, because `VITE_SMS_NUMBER_*` is empty,
also as the "Text HELP to ..." number. That is correct only if (210) 972-5049 is your
Telnyx 10DLC number. If your Telnyx texting number is different, put it in
`VITE_SMS_NUMBER_DISPLAY` / `VITE_SMS_NUMBER_E164`.

## 2. Build
```
npm install
npm run build
```
This creates the `dist/` folder. It already contains `.htaccess` and `contact.php`.

## 3. Upload
1. cPanel → **File Manager** → `public_html`.
2. Click **Settings** (top right) → tick **Show Hidden Files (dotfiles)**.
3. Delete the old website files (keep `.well-known` and `cgi-bin` if they exist).
4. Upload **everything inside `dist/`**, not the `dist` folder itself.
   Easiest: zip the contents of `dist/`, upload the zip, then **Extract**.
5. Check that `public_html` contains: `index.html`, `assets/`, `.htaccess`, `contact.php`.

## 4. Test (in a private/incognito window)
- https://bitnextechnologies.com/contact shows the two unchecked SMS boxes.
- Open each of these directly. None should show a 404:
  - https://bitnextechnologies.com/privacy-policy
  - https://bitnextechnologies.com/terms-and-conditions
  - https://bitnextechnologies.com/sms-terms
- Submit the contact form with an SMS box checked. The success popup should appear,
  and an email should arrive at info@bitnextechnologies.com.
  (If no email arrives, check spam, or ask your host whether PHP `mail()` is enabled.)
- In File Manager, `public_html/consent-logs/sms-consent.csv` should now exist.
- https://bitnextechnologies.com/consent-logs/sms-consent.csv must show **403 Forbidden**.

## 5. Consent records
Download `consent-logs/sms-consent.csv` from File Manager from time to time and keep it.
It is your proof of opt-in if Telnyx or a carrier asks.
Do not delete the `consent-logs` folder when you upload a new version of the site.
