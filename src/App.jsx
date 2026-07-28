import { BrowserRouter as Router, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import { AuthProvider } from './context/AuthContext'
import { AdminAuthProvider, useAdminAuth } from './context/AdminAuthContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import ResetPasswordPage from './pages/auth/ResetPasswordPage'
import AccountPage from './pages/account/AccountPage'
import ProfilePage from './pages/account/ProfilePage'
import OrdersPage from './pages/account/OrdersPage'
import AddressesPage from './pages/account/AddressesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import ShippingPage from './pages/ShippingPage'
import ReturnsPage from './pages/ReturnsPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import NotFoundPage from './pages/NotFoundPage'

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminOrders from './pages/admin/AdminOrders'
import AdminProducts from './pages/admin/AdminProducts'
import AdminCustomers from './pages/admin/AdminCustomers'
import AdminReviews from './pages/admin/AdminReviews'
import AdminSettings from './pages/admin/AdminSettings'
import AdminLogin from './pages/admin/AdminLogin'

function StorefrontLayout() {
  return <div className="app"><Header /><main className="app-main"><Outlet /></main><Footer /></div>
}

function AdminGuard() {
  const { isAdmin } = useAdminAuth()
  const location = useLocation()
  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <AdminAuthProvider>
            <Router>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route element={<StorefrontLayout />}>
                    {/* Customer Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                    
                    {/* Auth Routes */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                    
                    {/* Account Routes */}
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/account/profile" element={<ProfilePage />} />
                    <Route path="/account/orders" element={<OrdersPage />} />
                    <Route path="/account/addresses" element={<AddressesPage />} />
                    
                    {/* Info Routes */}
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/shipping" element={<ShippingPage />} />
                    <Route path="/returns" element={<ReturnsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />
                    
                    {/* 404 */}
                    <Route path="*" element={<NotFoundPage />} />
                  </Route>

                  {/* Admin Routes use their own shell without the storefront header or footer. */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route element={<AdminGuard />}>
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/orders" element={<AdminOrders />} />
                    <Route path="/admin/products" element={<AdminProducts />} />
                    <Route path="/admin/customers" element={<AdminCustomers />} />
                    <Route path="/admin/reviews" element={<AdminReviews />} />
                    <Route path="/admin/settings" element={<AdminSettings />} />
                  </Route>
                </Routes>
              </AnimatePresence>
            </Router>
          </AdminAuthProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
