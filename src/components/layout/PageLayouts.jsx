import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PageLayouts.css'

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }

export function InfoPage({ eyebrow = 'FLEX support', title, intro, children }) {
  return (
    <main className="ui-page">
      <div className="ui-page__halo" />
      <motion.section className="ui-page__hero ui-wrap" initial="hidden" animate="visible" variants={reveal}>
        <p className="ui-eyebrow"><span />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </motion.section>
      <motion.section className="ui-page__content ui-wrap" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
        {children}
      </motion.section>
    </main>
  )
}

export function InfoCards({ cards }) {
  return <div className="ui-info-grid">{cards.map((card) => <article className="ui-info-card" key={card.title}><span>{card.number || '✦'}</span><h2>{card.title}</h2><p>{card.text}</p>{card.link && <Link to={card.link.to}>{card.link.label} <b>→</b></Link>}</article>)}</div>
}

export function AuthShell({ eyebrow, title, intro, children, footer }) {
  return (
    <main className="auth-page">
      <div className="auth-page__visual"><div><p className="ui-eyebrow"><span />FLEX Grip Socks</p><h1>Own every<br /><em>step.</em></h1><p>Designed for the work. Made for the moments that matter.</p></div></div>
      <motion.section className="auth-card" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <p className="ui-eyebrow"><span />{eyebrow}</p><h2>{title}</h2><p className="auth-card__intro">{intro}</p>{children}{footer && <div className="auth-card__footer">{footer}</div>}
      </motion.section>
    </main>
  )
}

const accountLinks = [['/account', 'Overview'], ['/account/profile', 'Profile'], ['/account/orders', 'Orders'], ['/account/addresses', 'Addresses']]
export function AccountLayout({ title, intro, children }) {
  return <main className="ui-page account-page"><div className="ui-wrap account-layout"><aside className="account-nav"><Link className="account-brand" to="/account"><span>F</span><div><b>My FLEX</b><small>Your player account</small></div></Link><nav>{accountLinks.map(([to, label]) => <NavLink key={to} to={to} end={to === '/account'}>{label}<span>→</span></NavLink>)}</nav><Link className="account-help" to="/contact">Need a hand? <b>Contact us</b></Link></aside><section className="account-main"><p className="ui-eyebrow"><span />Account</p><h1>{title}</h1><p className="account-intro">{intro}</p>{children}</section></div></main>
}

const adminLinks = [['/admin', 'Overview'], ['/admin/orders', 'Orders'], ['/admin/products', 'Products'], ['/admin/customers', 'Customers'], ['/admin/reviews', 'Reviews'], ['/admin/settings', 'Settings']]
export function AdminLayout({ title, subtitle, children }) {
  return <main className="admin-page"><div className="admin-layout"><aside className="admin-side"><Link to="/" className="admin-logo"><span>F</span> FLEX <small>ADMIN</small></Link><nav>{adminLinks.map(([to, label]) => <NavLink key={to} to={to} end={to === '/admin'}><i>{label.slice(0, 1)}</i>{label}</NavLink>)}</nav><Link to="/" className="admin-store-link">↗ View storefront</Link></aside><section className="admin-main"><header className="admin-header"><div><p className="ui-eyebrow"><span />Store management</p><h1>{title}</h1><p>{subtitle}</p></div><button className="admin-avatar" aria-label="Admin profile">A</button></header>{children}</section></div></main>
}

export function EmptyState({ title, text, action = 'Shop FLEX Grip Socks', to = '/shop' }) {
  return <div className="ui-empty"><div>✦</div><h2>{title}</h2><p>{text}</p><Link to={to} className="ui-button">{action} <span>→</span></Link></div>
}
