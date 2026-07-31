import { AdminLayout } from '../../components/layout/PageLayouts'
import { products } from '../../data/products'

export default function AdminSettings() {
  return (
    <AdminLayout title="Settings." subtitle="Current storefront, support and catalogue configuration.">
      <div className="admin-stats">
        <article className="admin-stat"><span>Store status</span><strong className="admin-stat-word">Live</strong><small>FLEX storefront is active</small></article>
        <article className="admin-stat"><span>Currency</span><strong>GBP</strong><small>British pound sterling</small></article>
        <article className="admin-stat"><span>Products</span><strong>{products.length}</strong><small>Active catalogue listings</small></article>
      </div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>Store details</h2><p>Public-facing business and support information</p></div><span className="admin-tag">Current</span></div>
        <dl className="admin-settings-list">
          <div><dt>Store name</dt><dd>FLEX Grip Socks</dd></div>
          <div><dt>Support email</dt><dd><a href="mailto:flexofficial26@gmail.com">flexofficial26@gmail.com</a></dd></div>
          <div><dt>Delivery charge</dt><dd>£3.99</dd></div>
          <div><dt>Delivery estimate</dt><dd>3–5 business days</dd></div>
          <div><dt>Available sizes</dt><dd>M, L</dd></div>
        </dl>
      </section>
    </AdminLayout>
  )
}
