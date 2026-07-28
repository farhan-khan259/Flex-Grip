import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { DELIVERY_CHARGE, DELIVERY_ESTIMATE, products } from "../data/products";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)) || {
    id: id,
    name: `FLEX Grip Sock ${id}`,
    price: 10,
    offers: [{ id: "single", label: "1 pair", price: 10 }],
    rating: 4.8,
    reviews: 142,
    description:
      "Premium athletic sock engineered for maximum performance and comfort.",
    details: "Features our proprietary grip technology for enhanced traction.",
    sizes: ["M", "L"],
    colors: ["white"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F883272-DD6A-47C3-B64E-660869CF5308-sdf5hyQPM8pNQCJFnjauTKwgkJ9bnM.jpeg",
  };
  const [selectedOfferId, setSelectedOfferId] = useState(product.offers[0].id);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("white");
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(parseInt(id));
  const selectedOffer =
    product.offers.find((offer) => offer.id === selectedOfferId) ||
    product.offers[0];

  useEffect(() => {
    setSelectedOfferId(product.offers[0].id);
  }, [id]);

  const handleAddToCart = () => {
    addToCart(
      { ...product, price: selectedOffer.price, offer: selectedOffer },
      1,
      selectedSize,
      selectedColor,
    );
    alert("Added to cart!");
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const hoverScale = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="product-container">
          {/* Images */}
          <motion.div
            className="product-images"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className={`main-image ${product.id === 2 ? "main-image--three-pack" : ""}`}
              whileHover="hover"
            >
              <motion.img
                src={product.image}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                variants={hoverScale}
              />
            </motion.div>
          </motion.div>

          {/* Details */}
          <motion.div
            className="product-details"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h1>{product.name}</h1>
            <div className="product-rating">
              <span className="stars">★★★★★</span>
              <span className="rating-value">{product.rating}</span>
              <span className="reviews">({product.reviews} reviews)</span>
            </div>
            <p className="product-description">{product.description}</p>
            <p className="product-price">£{selectedOffer.price.toFixed(2)}</p>

            {/* Options */}
            <div className="product-options">
              <div className="option-group">
                <label>Choose your pack:</label>
                <div className="pack-options">
                  {product.offers.map((offer) => (
                    <button
                      key={offer.id}
                      className={`pack-btn ${selectedOfferId === offer.id ? "active" : ""}`}
                      onClick={() => setSelectedOfferId(offer.id)}
                    >
                      <span>{offer.label}</span>
                      <strong>£{offer.price.toFixed(2)}</strong>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="option-group">
                <label>Size:</label>
                <div className="size-options">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color */}
              <div className="option-group">
                <label>Color:</label>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-btn ${selectedColor === color ? "active" : ""}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                      style={{
                        backgroundColor:
                          color === "black"
                            ? "#000"
                            : color === "white"
                              ? "#fff"
                              : "#999",
                        border: `2px solid ${selectedColor === color ? "#10b981" : "transparent"}`,
                      }}
                    />
                  ))}
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="product-actions">
              <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <a className="btn btn-buy-now" href={product.checkoutUrl} target="_blank" rel="noopener noreferrer">
                Buy now securely ↗
              </a>
              <button
                className="btn btn-wishlist"
                onClick={() => toggleWishlist(product)}
                title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                ♡
              </button>
            </div>

            <div className="product-delivery-note">
              <span aria-hidden="true">✓</span>
              <p><strong>£{DELIVERY_CHARGE.toFixed(2)} delivery charges</strong><small>Estimated in {DELIVERY_ESTIMATE}</small></p>
            </div>

            {/* Features */}
            <div className="product-features">
              <h3>Features</h3>
              <ul>
                <li>Compressive fabric</li>
                <li>Thickened sole</li>
                <li>Breathable material</li>
                <li>Rubber pads</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
