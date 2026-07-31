import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useAuth } from './AuthContext'
import { products } from '../data/products'
import { apiRequest } from '../services/api'

const CartContext = createContext()
const GUEST_STORAGE_KEY = 'cart'

function readStoredItems(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || '[]')
    return Array.isArray(value) ? value : []
  } catch { return [] }
}

function itemKey(item) {
  return `${item.id}|${item.size || ''}|${item.color || ''}|${item.offer?.id || ''}`
}

function mergeItems(...groups) {
  const items = new Map()
  groups.flat().forEach((item) => item?.id && items.set(itemKey(item), { ...item, quantity: item.quantity || 1 }))
  return [...items.values()]
}

function serializeCart(items) {
  return items.map((item) => ({
    productId: item.id,
    quantity: item.quantity || 1,
    size: item.size || null,
    color: item.color || null,
    offerId: item.offer?.id || null,
  }))
}

function hydrateCart(items) {
  return items.map((item) => {
    const product = products.find((entry) => entry.id === Number(item.productId))
    if (!product) return null
    const offer = product.offers.find((entry) => entry.id === item.offerId) || product.offers[0]
    return { ...product, price: offer?.price ?? product.price, offer, quantity: item.quantity || 1, size: item.size || null, color: item.color || null }
  }).filter(Boolean)
}

export const CartProvider = ({ children }) => {
  const { user, isLoading } = useAuth()
  const [cartItems, setCartItems] = useState(() => readStoredItems(GUEST_STORAGE_KEY))
  const cartRef = useRef(cartItems)
  const previousUserId = useRef(null)
  const saveQueue = useRef(Promise.resolve())

  const setItems = (items) => {
    cartRef.current = items
    setCartItems(items)
  }

  const persistAccountCart = (items, userId = user?.id) => {
    if (!userId) return
    const backupKey = `flex_cart_${userId}`
    const payload = serializeCart(items)
    localStorage.setItem(backupKey, JSON.stringify(items))
    saveQueue.current = saveQueue.current
      .catch(() => {})
      .then(() => apiRequest('/account/cart', { method: 'PUT', body: JSON.stringify({ cart: payload }) }))
      .then(() => {
        if (JSON.stringify(serializeCart(cartRef.current)) === JSON.stringify(payload)) localStorage.removeItem(backupKey)
      })
      .catch((error) => console.error('Cart sync failed:', error.message))
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
    const backupKey = `flex_cart_${userId}`
    apiRequest('/account/cart').then((data) => {
      if (cancelled) return
      const merged = mergeItems(hydrateCart(data.cart || []), cartRef.current, readStoredItems(backupKey))
      setItems(merged)
      localStorage.removeItem(GUEST_STORAGE_KEY)
      previousUserId.current = userId
      persistAccountCart(merged, userId)
    }).catch((error) => console.error('Cart load failed:', error.message))
    return () => { cancelled = true }
  }, [isLoading, user?.id])

  const updateItems = (updater) => {
    const next = typeof updater === 'function' ? updater(cartRef.current) : updater
    setItems(next)
    if (user?.id) persistAccountCart(next)
    else localStorage.setItem(GUEST_STORAGE_KEY, JSON.stringify(next))
  }

  const addToCart = (product, quantity = 1, size = null, color = null) => updateItems((items) => {
    const candidate = { ...product, quantity: quantity || 1, size, color }
    return items.some((item) => itemKey(item) === itemKey(candidate)) ? items : [...items, candidate]
  })

  const removeFromCart = (productId, size = null, color = null, offerId = null) => updateItems((items) =>
    items.filter((item) => !(item.id === productId && item.size === size && item.color === color && item.offer?.id === offerId)))

  const updateCartItem = (productId, quantity, size = null, color = null, offerId = null) => {
    if (quantity <= 0) return removeFromCart(productId, size, color, offerId)
    updateItems((items) => items.map((item) => item.id === productId && item.size === size && item.color === color && item.offer?.id === offerId ? { ...item, quantity } : item))
  }

  const clearCart = () => updateItems([])
  const getCartTotal = () => cartItems.reduce((total, item) => total + item.price, 0)
  const getCartItemCount = () => cartItems.length

  return <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart, getCartTotal, getCartItemCount }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
