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
              <address className="footer-contact">
                <a href="mailto:flexofficial26@gmail.com"><span aria-hidden="true">@</span><span>flexofficial26@gmail.com</span></a>
              </address>
              <div className="footer-socials">
                <a href="https://www.instagram.com/flex.officialgrip" className="social-link" title="Instagram" aria-label="FLEX on Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"></circle>
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
