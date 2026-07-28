import { createContext, useContext, useState } from 'react'

const AdminAuthContext = createContext(null)
const SESSION_KEY = 'flex_admin_session'

export function AdminAuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => sessionStorage.getItem(SESSION_KEY) === 'authenticated')

  const login = (email, password) => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'admin@flexgrip.co.uk'
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'FlexAdmin2026!'
    const isValid = email.trim().toLowerCase() === adminEmail.toLowerCase() && password === adminPassword

    if (isValid) {
      sessionStorage.setItem(SESSION_KEY, 'authenticated')
      setIsAdmin(true)
    }

    return isValid
  }

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setIsAdmin(false)
  }

  return <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>{children}</AdminAuthContext.Provider>
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext)
  if (!context) throw new Error('useAdminAuth must be used inside AdminAuthProvider')
  return context
}
