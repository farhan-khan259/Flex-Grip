import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { DELIVERY_CHARGE, DELIVERY_ESTIMATE, products } from '../data/products'
import './CartPage.css'

const fallbackProductImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F883272-DD6A-47C3-B64E-660869CF5308-sdf5hyQPM8pNQCJFnjauTKwgkJ9bnM.jpeg'

export default function CartPage() {
  const { cartItems, removeFromCart, getCartTotal, clearCart } = useCart()
  const checkoutOptions = [...new Map(cartItems.map((item) => {
    const product = products.find((entry) => entry.id === item.id)
    return product ? [product.id, product] : null
  }).filter(Boolean)).values()]
  const deliveryTotal = DELIVERY_CHARGE * checkoutOptions.length
  const orderTotal = getCartTotal() + deliveryTotal

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
                <p className="item-total">£{item.price.toFixed(2)}</p>
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
              <span>{checkoutOptions.length > 1 ? 'Delivery (2 checkouts):' : 'Delivery:'}</span>
              <span>£{deliveryTotal.toFixed(2)}</span>
            </div>
            <div className="summary-total">
              <span>Estimated total:</span>
              <span>£{orderTotal.toFixed(2)}</span>
            </div>
            <p className="cart-delivery-estimate"><span aria-hidden="true">✓</span> Delivery in {DELIVERY_ESTIMATE}</p>
            {checkoutOptions.length > 1 && <p className="cart-checkout-help">Each pack uses its own secure checkout. Complete each option separately.</p>}
            <div className="cart-checkout-options">
              {checkoutOptions.map((product) => <a key={product.id} href={product.checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary full-width checkout-button"><span>{checkoutOptions.length > 1 ? `Checkout ${product.id === 1 ? '1 pair' : '3 pairs'}` : 'Secure Stripe checkout'}</span><span aria-hidden="true">↗</span></a>)}
            </div>
            <button onClick={clearCart} className="btn btn-outline full-width">
              Clear Cart
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
