import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-section">
              <div className="footer-brand">
                <span className="footer-logo">FLEX Grip</span>
                <p>Premium athletic socks engineered for performance and comfort.</p>
              </div>
              <div className="footer-socials">
                <a href="#" className="social-link" title="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle>
                  </svg>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <nav className="footer-links">
                <Link to="/shop">Shop</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/faq">FAQ</Link>
              </nav>
            </div>

            {/* Support */}
            <div className="footer-section">
              <h4 className="footer-title">Support</h4>
              <nav className="footer-links">
                <Link to="/shipping">Shipping Info</Link>
                <Link to="/returns">Returns</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms & Conditions</Link>
              </nav>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4 className="footer-title">Newsletter</h4>
              <p className="newsletter-text">Subscribe to get special offers and updates.</p>
              <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                />
                <button type="submit">Join <span>→</span></button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; {currentYear} FLEX Grip Socks. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/cookies">Cookies</Link>
              <span className="separator">•</span>
              <Link to="/privacy">Privacy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
