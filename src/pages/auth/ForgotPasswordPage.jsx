import { Link } from 'react-router-dom'
import { AuthShell } from '../../components/layout/PageLayouts'
export default function ForgotPasswordPage() { return <AuthShell eyebrow="Account recovery" title="Reset password." intro="Enter your email and we’ll send instructions to get you back in." footer={<Link to="/login">← Back to sign in</Link>}><form className="auth-form" onSubmit={(event) => event.preventDefault()}><label>Email<input type="email" placeholder="you@example.com" required /></label><button type="submit">Send reset link <span>→</span></button></form></AuthShell> }
