import { useEffect, useState } from 'react'
import { AccountLayout } from '../../components/layout/PageLayouts'
import { useAuth } from '../../context/AuthContext'

export default function ProfilePage() {
  const { user, updateProfile } = useAuth()
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState({ loading: false, error: '', message: '' })

  useEffect(() => {
    if (user) setFormData({ name: user.name || '', email: user.email || '' })
  }, [user])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ loading: true, error: '', message: '' })
    try {
      await updateProfile(formData)
      setStatus({ loading: false, error: '', message: 'Your profile has been updated.' })
    } catch (error) {
      setStatus({ loading: false, error: error.message, message: '' })
    }
  }

  return <AccountLayout title="Your profile." intro="Update the information connected to your FLEX account.">
    <form className="ui-form account-form" onSubmit={handleSubmit}>
      <label>Full name<input autoComplete="name" placeholder="Your name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required /></label>
      <label>Email<input type="email" autoComplete="email" placeholder="you@example.com" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required /></label>
      {status.error && <p className="form-message form-message--error" role="alert">{status.error}</p>}
      {status.message && <p className="form-message form-message--success" role="status">{status.message}</p>}
      <button className="ui-button" type="submit" disabled={status.loading}>{status.loading ? 'Saving…' : <>Save changes <span>→</span></>}</button>
    </form>
  </AccountLayout>
}
