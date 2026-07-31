import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './ShopPage.css'

export default function ShopPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const hoverScale = {
    hover: { scale: 1.08, transition: { duration: 0.3 } }
  }

  return (
    <div className="shop-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="shop-header"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h1>Shop FLEX Grip Socks</h1>
          <p>Performance grip, now at special launch prices.</p>
        </motion.div>

        <div className="shop-container">
          {/* Products Grid */}
          <div className="shop-products">
            <div className="products-grid">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.05 }}
                  whileHover="hover"
                >
                  <Link to={`/product/${product.id}`} className="product-image-link">
                    <motion.div
                      className="product-image"
                      variants={hoverScale}
                    >
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                  </Link>
                  <div className="product-info">
                    <span className="sale-badge">{product.discount}% off</span>
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <span className="stars">★★★★★</span>
                      <span className="rating-num">{product.rating.toFixed(1)}</span>
                      <span className="reviews">({product.reviews})</span>
                    </div>
                    <div className="product-price" aria-label={`Now £${product.price.toFixed(2)}, was £${product.originalPrice.toFixed(2)}`}>
                      <span className="product-price__was">£{product.originalPrice.toFixed(2)}</span>
                      <strong>£{product.price.toFixed(2)}</strong>
                      <span className="product-price__detail">{product.id === 1 ? 'per pair' : 'for 3 pairs'}</span>
                    </div>
                    <p className="product-saving">Save £{product.saving.toFixed(2)}</p>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/product/${product.id}`} className="btn btn-small">
                        View Details →
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
