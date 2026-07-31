import { useState } from 'react'
import { InfoPage } from '../components/layout/PageLayouts'
import { apiRequest } from '../services/api'

const emptyForm = { name: '', email: '', message: '' }

export default function ContactPage() {
  const [formData, setFormData] = useState(emptyForm)
  const [status, setStatus] = useState({ loading: false, error: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '', message: '' })
    try {
      const data = await apiRequest('/contact', { method: 'POST', body: JSON.stringify(formData) })
      setFormData(emptyForm)
      setStatus({ loading: false, error: '', message: data.message })
    } catch (error) {
      setStatus({ loading: false, error: error.message, message: '' })
    }
  }

  return (
    <InfoPage eyebrow="Contact FLEX" title="We’re here for your next move." intro="Questions about an order, sizing, or our grip socks? Reach out directly or send us a message.">
      <div className="ui-contact-layout">
        <aside className="ui-contact-details" aria-label="Contact details">
          <p className="ui-contact-kicker">Talk to our team</p>
          <h2>How can we help?</h2>
          <p>Our support team is ready to help with product and order enquiries.</p>
          <address><a href="mailto:flexofficial26@gmail.com"><span className="ui-contact-icon" aria-hidden="true">@</span><span><small>Email us</small><strong>flexofficial26@gmail.com</strong></span></a></address>
        </aside>
        <form className="ui-form ui-contact-form" onSubmit={handleSubmit}>
          <label>Name<input name="name" autoComplete="name" placeholder="Your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required /></label>
          <label>Message<textarea name="message" placeholder="How can we help?" rows="5" minLength="10" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} required /></label>
          {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
          {status.message && <p className="form-message form-message--success" role="status">{status.message}</p>}
          <button className="ui-button" type="submit" disabled={status.loading}>{status.loading ? 'Sending…' : <>Send message <span>→</span></>}</button>
        </form>
      </div>
    </InfoPage>
  )
}
