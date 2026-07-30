# 09 — Contact page + functional contact form

**What to build:** A visitor ready to enquire can find every real way to reach AJM Property Solutions on one page, and submit an enquiry through a working form that actually emails the business.

**Blocked by:** 01 — Project scaffold & site shell

**Status:** ready-for-agent

- [ ] `/contact` page displays real phone (`07960121157`), email (`info@ajmpropertysolutions.co.uk`), WhatsApp (`07376236883`), address ("Freedom House, Church St, Wilmslow, SK9 1AX"), and opening hours (Mon–Fri 8:00–17:00, Sat 9:00–13:00, Sun Closed)
- [ ] Real embedded Google Maps iframe centered on the company's real address (not a placeholder graphic)
- [ ] Contact form (name, email, phone, message at minimum) with client-side validation and a large, clear CTA
- [ ] A `submitContactForm(input): Result` function exists as the seam between the form's Server Action and the Resend email client; the Resend client is injected/abstracted so it can be substituted with a fake sender in tests
- [ ] Server-side validation rejects invalid/incomplete submissions before any send is attempted
- [ ] A honeypot field detects bot submissions; when triggered, the sender is never called but the result returned is indistinguishable from success
- [ ] On valid submission, the function calls the injected sender once with the correctly-shaped payload and returns a success result
- [ ] On sender failure, the function returns a failure result with no internal detail (API keys, stack traces) leaked
- [ ] Resend API key is read from an environment variable that is not yet set — the code path is complete and will work the moment the key is supplied, without further code changes
- [ ] Automated tests cover all four cases above (valid input, invalid input, honeypot triggered, sender throws), asserting only on the function's return value and on calls to the injected sender — no test relies on internal implementation details
- [ ] Fully responsive across breakpoints; form is keyboard-accessible with clear focus states and error messaging
