import { Link } from 'react-router-dom'
import { AdminLayout } from '../../components/layout/PageLayouts'
import { products } from '../../data/products'

export default function AdminDashboard() {
  const startingPrice = Math.min(...products.map((product) => product.price))

  return (
    <AdminLayout title="Store overview." subtitle="A current view of the FLEX storefront and catalogue.">
      <div className="admin-stats">
        <article className="admin-stat"><span>Live products</span><strong>{products.length}</strong><small>Published on the storefront</small></article>
        <article className="admin-stat"><span>Starting price</span><strong>£{startingPrice}</strong><small>Single-pair price</small></article>
        <article className="admin-stat"><span>Store status</span><strong className="admin-stat-word">Live</strong><small>Storefront available</small></article>
      </div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>Catalogue snapshot</h2><p>Products currently visible to customers</p></div><Link to="/admin/products">Manage products →</Link></div>
        <div className="admin-product-list">
          {products.map((product) => <div className="admin-product-row" key={product.id}><img src={product.image} alt="" /><div><b>{product.name}</b><small>{product.priceLabel}</small></div><span>{product.sizes.join(' · ')}</span><span className="admin-tag">Live</span></div>)}
        </div>
      </section>
      <section className="admin-panel admin-panel--compact">
        <div className="admin-panel__header"><div><h2>Orders</h2><p>Orders will appear after checkout storage is connected.</p></div><Link to="/admin/orders">Open orders →</Link></div>
      </section>
    </AdminLayout>
  )
}
