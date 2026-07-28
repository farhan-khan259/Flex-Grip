import { AdminLayout } from '../../components/layout/PageLayouts'

export default function AdminOrders() {
  return (
    <AdminLayout title="Orders." subtitle="Track purchases once customers complete checkout.">
      <div className="admin-summary-strip"><span><b>0</b> total orders</span><span><b>£0.00</b> revenue</span><span><b>0</b> awaiting fulfilment</span></div>
      <section className="admin-panel">
        <div className="admin-panel__header"><div><h2>All orders</h2><p>Order number, customer, total and fulfilment status</p></div><button type="button" disabled>Export</button></div>
        <div className="admin-empty-state"><span>□</span><h3>No orders received</h3><p>New purchases will be listed here when order persistence is connected to checkout.</p></div>
      </section>
    </AdminLayout>
  )
}
