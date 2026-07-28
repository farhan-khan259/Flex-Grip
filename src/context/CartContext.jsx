import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, size = null, color = null) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.id === product.id && item.size === size && item.color === color && item.offer?.id === product.offer?.id
      )

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.size === size && item.color === color && item.offer?.id === product.offer?.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevItems, { ...product, quantity, size, color }]
    })
  }

  const removeFromCart = (productId, size = null, color = null, offerId = null) => {
    setCartItems(prevItems =>
      prevItems.filter(
        item => !(item.id === productId && item.size === size && item.color === color && item.offer?.id === offerId)
      )
    )
  }

  const updateCartItem = (productId, quantity, size = null, color = null, offerId = null) => {
    if (quantity <= 0) {
      removeFromCart(productId, size, color, offerId)
      return
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.size === size && item.color === color && item.offer?.id === offerId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
