import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { AuthShell } from '../../components/layout/PageLayouts'

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [status, setStatus] = useState({ loading: false, error: '' })
  const { register } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '' })
    try {
      await register(formData)
      navigate('/account', { replace: true })
    } catch (error) {
      setStatus({ loading: false, error: error.message })
    }
  }

  return <AuthShell eyebrow="Join FLEX" title="Create account." intro="Keep your details close and checkout faster next time." footer={<>Already have an account? <Link to="/login">Sign in</Link></>}>
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>Full name<input autoComplete="name" placeholder="Your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required /></label>
      <label>Email<input type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required /></label>
      <label>Password<input type="password" autoComplete="new-password" minLength="8" placeholder="At least 8 characters" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required /></label>
      {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
      <button type="submit" disabled={status.loading}>{status.loading ? 'Creating account…' : <>Create account <span>→</span></>}</button>
    </form>
  </AuthShell>
}
