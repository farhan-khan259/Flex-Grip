import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { useAuth } from "../../context/AuthContext";
import flexLogo from "../../images/logowithblue.jpeg";
import "./Header.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { getCartItemCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { isAuthenticated, user, logout } = useAuth();

  const cartCount = getCartItemCount();
  const wishlistCount = wishlistItems.length;

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="header-info">
              <p>Premium Grip Socks • Built to Perform</p>
            </div>
            <div className="header-links">
              <Link to="/contact">Need help?</Link>
              {isAuthenticated ? (
                <>
                  <span className="user-name">{user?.name || "Account"}</span>
                  <button onClick={logout} className="logout-btn">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="header-main">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo">
              <img className="logo-image" src={flexLogo} alt="FLEX" />
            </Link>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
              <NavLink to="/" end onClick={() => setMobileMenuOpen(false)}>
                Home
              </NavLink>
              <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </NavLink>
              <NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
                Our Story
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>

            <div className="nav-icons">
              <Link to="/wishlist" className="icon-link wishlist-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {wishlistCount > 0 && (
                  <span className="badge">{wishlistCount}</span>
                )}
              </Link>

              <Link to="/cart" className="icon-link cart-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </Link>

              {isAuthenticated && (
                <Link to="/account" className="icon-link account-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
