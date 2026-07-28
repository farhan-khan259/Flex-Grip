import { Link } from 'react-router-dom'
import { AdminLayout } from '../../components/layout/PageLayouts'
import { products } from '../../data/products'

export default function AdminProducts() {
  return (
    <AdminLayout title="Products." subtitle="The live catalogue customers see in the FLEX shop.">
      <div className="admin-summary-strip"><span><b>{products.length}</b> products</span><span><b>{products.length}</b> active</span><span><b>GBP</b> currency</span></div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>Product catalogue</h2><p>Pricing, packs, sizes and storefront status</p></div><Link to="/shop" target="_blank">View shop ↗</Link></div>
        <div className="admin-product-list">
          {products.map((product) => (
            <article className="admin-product-row admin-product-row--detailed" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div><b>{product.name}</b><small>Product ID #{product.id} · {product.category.replace('-', ' ')}</small></div>
              <div className="admin-product-meta"><small>Price</small><strong>{product.priceLabel}</strong></div>
              <div className="admin-product-meta"><small>Options</small><strong>{product.sizes.join(', ')} · {product.colors.join(', ')}</strong></div>
              <span className="admin-tag">Active</span>
              <Link className="admin-action" to={`/product/${product.id}`} target="_blank">Preview</Link>
            </article>
          ))}
        </div>
      </section>
    </AdminLayout>
  )
}
