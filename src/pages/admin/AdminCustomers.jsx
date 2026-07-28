import { AdminLayout } from '../../components/layout/PageLayouts'

export default function AdminCustomers() {
  const savedCustomer = (() => {
    try { return JSON.parse(localStorage.getItem('user')) } catch { return null }
  })()

  return (
    <AdminLayout title="Customers." subtitle="Customer accounts currently stored by the FLEX storefront.">
      <div className="admin-stats">
        <article className="admin-stat"><span>Known customers</span><strong>{savedCustomer ? 1 : 0}</strong><small>Stored customer accounts</small></article>
        <article className="admin-stat"><span>Returning</span><strong>0%</strong><small>No completed order history</small></article>
        <article className="admin-stat"><span>Average spend</span><strong>£0</strong><small>No persisted purchases</small></article>
      </div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>Customer directory</h2><p>Registered profile information available in this browser</p></div></div>
        {savedCustomer ? <div className="admin-customer-row"><span>{(savedCustomer.name || savedCustomer.email || 'C').slice(0, 1).toUpperCase()}</span><div><b>{savedCustomer.name || 'FLEX customer'}</b><small>{savedCustomer.email}</small></div><span className="admin-tag">Registered</span></div> : <div className="admin-empty-state"><span>○</span><h3>No customer accounts</h3><p>Registered customers will appear here once account storage is connected to a shared backend.</p></div>}
      </section>
    </AdminLayout>
  )
}
