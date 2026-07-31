import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AuthShell } from '../../components/layout/PageLayouts'
import { apiRequest } from '../../services/api'

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' })
  const [status, setStatus] = useState({ loading: false, error: '' })
  const { token } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formData.password !== formData.confirmPassword) return setStatus({ loading: false, error: 'Passwords do not match.' })
    setStatus({ loading: true, error: '' })
    try {
      await apiRequest(`/auth/reset-password/${encodeURIComponent(token)}`, { method: 'POST', body: JSON.stringify({ password: formData.password }) })
      // Reload so AuthContext reads the new HTTP-only session cookie.
      window.location.assign('/account')
    } catch (error) {
      setStatus({ loading: false, error: error.message })
    }
  }

  return <AuthShell eyebrow="Account recovery" title="Choose a new password." intro="Use a strong password you have not used elsewhere." footer={<Link to="/login">← Back to sign in</Link>}>
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>New password<input type="password" autoComplete="new-password" minLength="8" placeholder="New password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required /></label>
      <label>Confirm password<input type="password" autoComplete="new-password" minLength="8" placeholder="Confirm password" value={formData.confirmPassword} onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })} required /></label>
      {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
      <button type="submit" disabled={status.loading}>{status.loading ? 'Saving…' : <>Save new password <span>→</span></>}</button>
    </form>
  </AuthShell>
}
