import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { AuthShell } from '../../components/layout/PageLayouts'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [status, setStatus] = useState({ loading: false, error: '' })
  const { login } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '' })
    try {
      await login(formData)
      navigate(location.state?.from || '/account', { replace: true })
    } catch (error) {
      setStatus({ loading: false, error: error.message })
    }
  }

  return <AuthShell eyebrow="Welcome back" title="Sign in." intro="Pick up right where you left off." footer={<>New to FLEX? <Link to="/register">Create an account</Link></>}>
    <form className="auth-form" onSubmit={handleSubmit}>
      <label>Email<input type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required /></label>
      <label>Password<input type="password" autoComplete="current-password" placeholder="Your password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required /></label>
      <Link className="auth-forgot" to="/forgot-password">Forgot your password?</Link>
      {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
      <button type="submit" disabled={status.loading}>{status.loading ? 'Signing in…' : <>Sign in <span>→</span></>}</button>
    </form>
  </AuthShell>
}
