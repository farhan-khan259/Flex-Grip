import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import new1 from '../images/new1.png'
import new2 from '../images/new2.png'
import new3 from '../images/new3.png'
import new4 from '../images/updated3.jpeg'
import new5 from '../images/updated13.jpeg'
import new6 from '../images/1F883272-DD6A-47C3-B64E-660869CF5308.jpeg'
import new7 from '../images/updated14.jpeg'
import './AboutPage.css'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const productBenefits = [
  ['01', 'Advanced grip technology', 'Optimal traction and stability when every change of direction matters.'],
  ['02', 'Breathable, durable materials', 'Long-lasting comfort designed for hard sessions and repeat wear.'],
  ['03', 'Ergonomic athletic fit', 'A close, supportive fit shaped around natural athletic movement.'],
  ['04', 'Built for every sport', 'Performance support for every athlete, every sport, and every training session.']
]

const businessChannels = [
  'Team and academy supply contracts',
  'Collaborations with gyms and training facilities',
  'Retail placement in sportswear stores',
  'International shipping and partnerships'
]

const investmentPriorities = [
  'Increase inventory and scale production',
  'Expand marketing and brand reach',
  'Develop and launch new product lines',
  'Optimise our e-commerce platform',
  'Explore global distribution partnerships'
]

export default function AboutPage() {
  return (
    <main className="about-premium">
      <section className="about-hero">
        <img src={new7} alt="Athletes competing on the pitch" />
        <div className="about-hero__overlay" />
        <motion.div className="about-shell about-hero__content" initial="hidden" animate="visible" variants={reveal}>
          <p className="about-eyebrow"><span /> FLEX Official</p>
          <h1>Performance for<br /><em>every athlete.</em></h1>
          <p>FLEX Official is a performance-driven fitness apparel brand built for athletes across every sport. Our mission is simple: create essential gear that helps serious competitors move with confidence.</p>
          <div className="about-hero__actions">
            <Link to="/shop" className="about-button about-button--accent">Shop Elite Grip Socks <span>↗</span></Link>
            <a href="#partnership" className="about-link">Partner with FLEX <span>↓</span></a>
          </div>
        </motion.div>
      </section>

      <section className="about-intro">
        <div className="about-shell about-intro__grid">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="about-eyebrow about-eyebrow--dark"><span /> Executive summary</p>
            <h2>Made to meet<br />the <em>moment.</em></h2>
          </motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p>Our flagship product, Elite Grip Socks, combines superior traction, comfort, and style to meet the demands of serious competitors. We are building FLEX Official into a trusted performance brand through thoughtful product development, direct customer relationships, and strategic partnerships.</p>
            <p>From grassroots athletes to elite levels, FLEX is designed to be the performance accessory athletes reach for first.</p>
          </motion.div>
        </div>
      </section>

      <section className="about-product">
        <div className="about-shell about-product__layout">
          <motion.div className="about-product__visual" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <img src={new5} alt="Close-up of FLEX performance socks" />
            <span>ELITE<br />GRIP SOCKS</span>
          </motion.div>
          <div className="about-product__content">
            <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="about-eyebrow"><span /> Our product</p>
              <h2>Grip that goes<br /><em>further.</em></h2>
              <p>Elite Grip Socks are engineered to enhance performance with secure traction, lasting comfort, and a clean athletic silhouette.</p>
            </motion.div>
            <div className="about-benefits">
              {productBenefits.map(([number, title, text]) => (
                <motion.article key={number} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -4 }}>
                  <span>{number}</span><h3>{title}</h3><p>{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="about-market">
        <div className="about-shell about-market__heading">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="about-eyebrow about-eyebrow--dark"><span /> Opportunity</p>
            <h2>A market built<br />for <em>movement.</em></h2>
          </motion.div>
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>The global sports apparel market is expected to exceed $300 billion by 2030. Performance accessories, including grip socks, are gaining momentum with both amateur and professional athletes.</motion.p>
        </div>
        <div className="about-shell about-market__content">
          <motion.div className="about-market__images" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <img src={new1} alt="Football player in action" />
            <img src={new2} alt="Athlete training on the pitch" />
            <img src={new3} alt="Football performance detail" />
          </motion.div>
          <div className="about-market__copy">
            <article>
              <span>01</span>
              <h3>Market opportunity</h3>
              <p>FLEX Premium is positioned to earn a distinctive place in this growing space through quality, affordability, and considered design.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Business model</h3>
              <p>We sell directly to consumers through our online platform, with a focused path into wholesale distribution and retail partnerships.</p>
              <ul>{businessChannels.map(channel => <li key={channel}>{channel}</li>)}</ul>
              <small>Bulk discounts are available on orders over 500 pairs—ideal for teams, leagues, and sports organisations.</small>
            </article>
          </div>
        </div>
      </section> */}

      <section className="about-vision">
        <div className="about-shell about-vision__layout">
          <motion.div className="about-vision__copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="about-eyebrow"><span /> Vision & product development</p>
            <h2>The next edge<br />is <em>lighter.</em></h2>
            <p>Our vision is to become the go-to brand for performance accessories in sport. Next, we plan to introduce mini shin pads: a lightweight, streamlined solution for footballers who want protection without sacrificing mobility.</p>
            <div><b>01</b><span>Elite Grip Socks</span><b>02</b><span>Mini Shin Pads</span></div>
          </motion.div>
          <motion.div className="about-vision__images" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <img src={new4} alt="Competitive football match" />
            <img src={new6} alt="Football player preparing for match day" />
          </motion.div>
        </div>
      </section>
{/* 
      <section className="about-partnership" id="partnership">
        <div className="about-shell about-partnership__layout">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="about-eyebrow"><span /> Investment opportunity</p>
            <h2>Build the future<br />of <em>FLEX.</em></h2>
            <p>We are seeking funding and strategic partners who are financially invested and passionate about performance innovation and sport.</p>
            <Link to="/contact" className="about-button about-button--light">Start a conversation <span>↗</span></Link>
          </motion.div>
          <motion.div className="about-priorities" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h3>What investment unlocks</h3>
            {investmentPriorities.map((priority, index) => <p key={priority}><b>0{index + 1}</b>{priority}</p>)}
          </motion.div>
        </div>
        <div className="about-shell about-reasons">
          <img src={new7} alt="FLEX athletes on match day" />
          <div>
            <p className="about-eyebrow"><span /> Why partner with FLEX Premium?</p>
            <ul>
              <li>High-growth market with proven demand</li>
              <li>Product-first approach focused on quality and athlete needs</li>
              <li>Scalable business model with strong brand potential</li>
              <li>Opportunities for short-term ROI and long-term brand equity</li>
            </ul>
          </div>
        </div>
      </section> */}
    </main>
  )
}
