import { InfoPage } from '../components/layout/PageLayouts'

export default function ContactPage() {
  return (
    <InfoPage eyebrow="Contact FLEX" title="We’re here for your next move." intro="Questions about an order, sizing, or our grip socks? Reach out directly or send us a message.">
      <div className="ui-contact-layout">
        <aside className="ui-contact-details" aria-label="Contact details">
          <p className="ui-contact-kicker">Talk to our team</p>
          <h2>How can we help?</h2>
          <p>Our support team is ready to help with product and order enquiries.</p>
          <address>
            <a href="mailto:shabynazir07@gmail.com"><span className="ui-contact-icon" aria-hidden="true">@</span><span><small>Email us</small><strong>shabynazir07@gmail.com</strong></span></a>
            <a href="tel:+447449976827"><span className="ui-contact-icon" aria-hidden="true">↗</span><span><small>Call us</small><strong>+44 74499 76827</strong></span></a>
          </address>
        </aside>
        <form className="ui-form ui-contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
          <label>Message<textarea name="message" placeholder="How can we help?" rows="5" required /></label>
          <button className="ui-button" type="submit">Send message <span>→</span></button>
        </form>
      </div>
    </InfoPage>
  )
}
