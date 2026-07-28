import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import './CartPage.css'

const fallbackProductImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F883272-DD6A-47C3-B64E-660869CF5308-sdf5hyQPM8pNQCJFnjauTKwgkJ9bnM.jpeg'

export default function CartPage() {
  const { cartItems, removeFromCart, updateCartItem, getCartTotal, clearCart } = useCart()

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <motion.div
            className="empty-cart"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h1>Your Cart is Empty</h1>
            <p>Start adding some amazing FLEX Grip Socks to get started!</p>
            <Link to="/shop" className="btn btn-primary">
              Continue Shopping
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="container">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Shopping Cart
        </motion.h1>

        <div className="cart-container">
          <div className="cart-items">
            {cartItems.map((item, i) => (
              <motion.div
                key={`${item.id}-${item.size}-${item.color}-${item.offer?.id}`}
                className="cart-item"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
              >
                <img src={item.image || fallbackProductImage} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.offer?.label && `${item.offer.label} | `}{item.size && `Size: ${item.size}`} {item.color && `| Color: ${item.color}`}</p>
                  <p className="item-price">£{item.price.toFixed(2)}</p>
                </div>
                <div className="item-quantity">
                  <button onClick={() => updateCartItem(item.id, Math.max(1, item.quantity - 1), item.size, item.color, item.offer?.id)}>−</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button onClick={() => updateCartItem(item.id, item.quantity + 1, item.size, item.color, item.offer?.id)}>+</button>
                </div>
                <p className="item-total">£{(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id, item.size, item.color, item.offer?.id)}
                  className="btn-remove"
                >
                  ✕
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cart-summary"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>£{getCartTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>FREE</span>
            </div>
            <div className="summary-row">
              <span>Tax:</span>
              <span>£0.00</span>
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>£{getCartTotal().toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn btn-primary full-width checkout-button">
              <span>Proceed to Checkout</span>
              <span aria-hidden="true">→</span>
            </Link>
            <button onClick={clearCart} className="btn btn-outline full-width">
              Clear Cart
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
