import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useWishlist } from '../context/WishlistContext'
import './WishlistPage.css'

const fallbackProductImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F883272-DD6A-47C3-B64E-660869CF5308-sdf5hyQPM8pNQCJFnjauTKwgkJ9bnM.jpeg'

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="container">
          <h1>My Wishlist</h1>
          <p>Your wishlist is empty. Start adding your favorite items!</p>
          <Link to="/shop" className="btn btn-primary">Shop Now</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1>My Wishlist</h1>
        <div className="wishlist-grid">
          {wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item">
              <img src={item.image || fallbackProductImage} alt={item.name} />
              <h3>{item.name}</h3>
              <p>£10 per pair · 3 pairs for £25</p>
              <Link to={`/product/${item.id}`} className="btn btn-small">View</Link>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="btn-remove"
                aria-label={`Remove ${item.name} from wishlist`}
                title="Remove from wishlist"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
