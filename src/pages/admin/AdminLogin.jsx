import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAdminAuth } from '../../context/AdminAuthContext'
import './AdminLogin.css'

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const { isAdmin, login } = useAdminAuth()
  const location = useLocation()
  const navigate = useNavigate()

  if (isAdmin) return <Navigate to="/admin" replace />

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    if (login(formData.email, formData.password)) {
      navigate(location.state?.from || '/admin', { replace: true })
    } else {
      setError('The email or password is incorrect.')
    }
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-visual" aria-label="FLEX administration">
        <Link to="/" className="admin-login-brand"><span>F</span> FLEX <small>ADMIN</small></Link>
        <div>
          <p>Store management</p>
          <h1>Control the<br /><em>next move.</em></h1>
          <span>Secure access for authorised FLEX administrators.</span>
        </div>
      </section>
      <section className="admin-login-panel">
        <div className="admin-login-card">
          <p className="admin-login-eyebrow"><span />Admin portal</p>
          <h2>Welcome back.</h2>
          <p className="admin-login-intro">Sign in with your administrator credentials to continue.</p>
          <form onSubmit={handleSubmit}>
            <label>Email address<input type="email" autoComplete="username" placeholder="admin@flexgrip.co.uk" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required autoFocus /></label>
            <label>Password<input type="password" autoComplete="current-password" placeholder="Enter your password" value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} required /></label>
            {error && <p className="admin-login-error" role="alert">{error}</p>}
            <button type="submit">Sign in to dashboard <span>→</span></button>
          </form>
          <Link to="/" className="admin-login-store-link">← Return to storefront</Link>
        </div>
      </section>
    </main>
  )
}
