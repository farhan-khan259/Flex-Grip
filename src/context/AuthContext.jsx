import { createContext, useContext, useEffect, useState } from 'react'
import { apiRequest } from '../services/api'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    apiRequest('/auth/me')
      .then((data) => setUser(data.user))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false))
  }, [])

  const login = async (credentials) => {
    const data = await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(credentials) })
    setUser(data.user)
    return data.user
  }

  const register = async (details) => {
    const data = await apiRequest('/auth/register', { method: 'POST', body: JSON.stringify(details) })
    setUser(data.user)
    return data.user
  }

  const logout = async () => {
    try { await apiRequest('/auth/logout', { method: 'POST' }) } catch { /* Clear local state even if the API is unavailable. */ }
    setUser(null)
  }

  const updateProfile = async (details) => {
    const data = await apiRequest('/auth/profile', { method: 'PATCH', body: JSON.stringify(details) })
    setUser(data.user)
    return data.user
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: Boolean(user), isLoading, login, logout, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
