import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { products } from '../data/products'
import { apiRequest } from '../services/api'

const WishlistContext = createContext()
const GUEST_STORAGE_KEY = 'wishlist'

function readStoredItems(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value : []
  } catch { return [] }
}

function mergeItems(...groups) {
  const items = new Map()
  groups.flat().forEach((item) => item?.id && items.set(item.id, item))
  return [...items.values()]
}

function hydrateWishlist(ids) {
  return ids.map((id) => products.find((product) => product.id === Number(id))).filter(Boolean)
}

export const WishlistProvider = ({ children }) => {
  const { user, isLoading } = useAuth()
  const [wishlistItems, setWishlistItems] = useState(() => readStoredItems(GUEST_STORAGE_KEY))
  const itemsRef = useRef(wishlistItems)
  const previousUserId = useRef(null)
  const saveQueue = useRef(Promise.resolve())

  const setItems = (items) => {
    itemsRef.current = items
    setWishlistItems(items)
  }

  const persistAccountWishlist = (items, userId = user?.id) => {
    if (!userId) return
    const backupKey = `flex_wishlist_${userId}`
    const payload = items.map((item) => item.id)
    localStorage.setItem(backupKey, JSON.stringify(items))
    saveQueue.current = saveQueue.current
      .catch(() => {})
      .then(() => apiRequest('/account/wishlist', { method: 'PUT', body: JSON.stringify({ wishlist: payload }) }))
      .then(() => {
        if (JSON.stringify(itemsRef.current.map((item) => item.id)) === JSON.stringify(payload)) localStorage.removeItem(backupKey)
      })
      .catch((error) => console.error('Wishlist sync failed:', error.message))
  }

  useEffect(() => {
    if (isLoading) return
    const userId = user?.id || null
    if (!userId) {
      if (previousUserId.current) {
        setItems([])
        localStorage.removeItem(GUEST_STORAGE_KEY)
      }
      previousUserId.current = null
      return
    }

    let cancelled = false
    const backupKey = `flex_wishlist_${userId}`
    apiRequest('/account/wishlist').then((data) => {
      if (cancelled) return
      const merged = mergeItems(hydrateWishlist(data.wishlist || []), itemsRef.current, readStoredItems(backupKey))
      setItems(merged)
      localStorage.removeItem(GUEST_STORAGE_KEY)
      previousUserId.current = userId
      persistAccountWishlist(merged, userId)
    }).catch((error) => console.error('Wishlist load failed:', error.message))
    return () => { cancelled = true }
  }, [isLoading, user?.id])

  const updateItems = (updater) => {
    const next = typeof updater === 'function' ? updater(itemsRef.current) : updater
    setItems(next)
    if (user?.id) persistAccountWishlist(next)
    else localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(next))
  }

  const addToWishlist = (product) => updateItems((items) => items.some((item) => item.id === product.id) ? items : [...items, product])
  const removeFromWishlist = (productId) => updateItems((items) => items.filter((item) => item.id !== productId))
  const isInWishlist = (productId) => wishlistItems.some((item) => item.id === productId)
  const toggleWishlist = (product) => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
  const clearWishlist = () => updateItems([])

  return <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist, clearWishlist }}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => {
  const context = useContext(WishlistContext)
  if (!context) throw new Error('useWishlist must be used within WishlistProvider')
  return context
}
