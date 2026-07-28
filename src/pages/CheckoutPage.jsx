import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import './CheckoutPage.css'

export default function CheckoutPage() {
  const { getCartTotal } = useCart()
  const subtotal = getCartTotal()
  const tax = 0
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = '/order-confirmation/12345'
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <h1>Checkout</h1>
        <div className="checkout-container">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2>Shipping Address</h2>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="ZIP" value={formData.zip} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-section">
              <h2>Payment</h2>
              <div className="form-group">
                <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVC" required />
              </div>
            </div>

            <button type="submit" className="btn btn-primary full-width">Complete Purchase</button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: £{subtotal.toFixed(2)}</p>
            <p>Shipping: FREE</p>
            <p>Tax: £{tax.toFixed(2)}</p>
            <p className="total">Total: £{(subtotal + tax).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
