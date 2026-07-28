import { AdminLayout } from '../../components/layout/PageLayouts'
import { products } from '../../data/products'

export default function AdminReviews() {
  return (
    <AdminLayout title="Reviews." subtitle="Published rating summaries across the current product catalogue.">
      <div className="admin-stats">
        <article className="admin-stat"><span>Average rating</span><strong>{products[0].rating.toFixed(1)}</strong><small>Across live listings</small></article>
        <article className="admin-stat"><span>Listings rated</span><strong>{products.length}</strong><small>All active products</small></article>
        <article className="admin-stat"><span>Moderation</span><strong className="admin-stat-word">Clear</strong><small>No pending queue</small></article>
      </div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>Product ratings</h2><p>Rating information shown on the storefront</p></div></div>
        <div className="admin-product-list">
          {products.map((product) => <div className="admin-product-row" key={product.id}><img src={product.image} alt="" /><div><b>{product.name}</b><small>{product.reviews} displayed reviews</small></div><strong className="admin-rating">★ {product.rating.toFixed(1)}</strong><span className="admin-tag">Published</span></div>)}
        </div>
      </section>
    </AdminLayout>
  )
}
