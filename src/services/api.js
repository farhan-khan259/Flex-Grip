const API_ORIGIN = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_ORIGIN}/api${path}`, {
    credentials: 'include',
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data.error?.message || 'Unable to complete your request.')
    error.code = data.error?.code
    error.status = response.status
    throw error
  }
  return data
}
