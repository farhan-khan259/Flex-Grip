import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthShell } from '../../components/layout/PageLayouts'
import { apiRequest } from '../../services/api'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ loading: false, error: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '', message: '' })
    try {
      const data = await apiRequest('/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
      setStatus({ loading: false, error: '', message: data.message })
    } catch (error) {
      setStatus({ loading: false, error: error.message, message: '' })
    }
  }

  return <AuthShell eyebrow="Account recovery" title="Reset password." intro="Enter your email and we’ll send instructions to get you back in." footer={<Link to="/login">← Back to sign in</Link>}>
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>Email<input type="email" autoComplete="email" placeholder="you@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
      {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
      {status.message && <p className="form-message form-message--success" role="status">{status.message}</p>}
      <button type="submit" disabled={status.loading}>{status.loading ? 'Sending…' : <>Send reset link <span>→</span></>}</button>
    </form>
  </AuthShell>
}
