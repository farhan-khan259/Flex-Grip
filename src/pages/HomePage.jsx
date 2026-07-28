import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import productFlatLay from '../images/1F883272-DD6A-47C3-B64E-660869CF5308.jpeg'
import productPair from '../images/9180F299-6CF6-40B3-BAE0-FF0B242CED39.jpeg'
import playerDuel from '../images/new7.jpeg'
import playerAction from '../images/new1.png'
import playerRun from '../images/new2.png'
import playerWhite from '../images/new6.jpeg'
import playerDetail from '../images/new3.png'
import gameDetail from '../images/new4.jpeg'
import teamMoment from '../images/66121c08-a303-4964-9336-d9a7749b628c.jpeg'
import training from '../images/IMG_2807.jpeg'
import pitchMoment from '../images/IMG_2809.jpeg'
import closeUp from '../images/new5.png'
import matchDay from '../images/D81484E4-87C1-4310-8DB6-17B889802C53.jpeg'
import lockerRoom from '../images/38705B1B-CB8C-499E-933A-B551718EBC70.jpeg'
import onPitch from '../images/0D21DA47-148B-4939-8CE5-9AF44624C39B.jpeg'
import './HomePage.css'

const galleryImages = [
  { image: playerDuel, alt: 'Footballers competing on the pitch', label: 'Match day' },
  { image: playerAction, alt: 'Football player in action', label: 'Every sprint' },
  { image: playerRun, alt: 'Player moving across the pitch', label: 'Every turn' },
  { image: closeUp, alt: 'Close-up of football socks in use', label: 'Grip under pressure' },
  { image: playerDetail, alt: 'Football match detail', label: 'Game ready' },
  { image: gameDetail, alt: 'Action from a football game', label: 'Traction matters' },
  { image: teamMoment, alt: 'Team moment on the field', label: 'Trusted by players' },
  { image: training, alt: 'Athlete training', label: 'Train harder' },
  { image: pitchMoment, alt: 'Football moment on the pitch', label: 'Stay locked in' },
  { image: closeUp, alt: 'Close-up of football socks in use', label: 'Grip under pressure' },
  { image: matchDay, alt: 'Football match day action', label: 'Play with confidence' },
  { image: lockerRoom, alt: 'Football preparation moment', label: 'Ready when you are' },
  { image: onPitch, alt: 'Football player on the field', label: 'Made to perform' },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="landing-hero">
        <div className="landing-shell hero-layout">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={reveal} className="eyebrow"><span /> Performance grip socks</motion.p>
            <motion.h1 variants={reveal}>Own every<br /><em>step.</em></motion.h1>
            <motion.p variants={reveal} className="hero-text">
              The performance layer between you and your boots. FLEX Grip Socks are made to help you feel stable, comfortable, and ready for the next move.
            </motion.p>
            <motion.div variants={reveal} className="hero-actions">
              <Link to="/shop" className="landing-button landing-button--accent">Shop grip socks <span>↗</span></Link>
              <a href="#story" className="text-link">Explore the difference <span>↓</span></a>
            </motion.div>
            <motion.div variants={reveal} className="hero-proof">
              <div><strong>£10</strong><span>per pair</span></div>
              <div><strong>£25</strong><span>for 3 pairs</span></div>
              <div><strong>★★★★★</strong><span>Built for Athletes</span></div>
            </motion.div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
            <div className="hero-image hero-image--main"><img src={playerDuel} alt="Footballers competing in a match" /></div>
            <motion.div className="hero-image hero-image--product" animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}><img src={productFlatLay} alt="FLEX Grip Socks" /></motion.div>
            <div className="hero-orbit"><span>GRIP</span><span>•</span><span>COMFORT</span><span>•</span><span>CONTROL</span><span>•</span></div>
            <div className="hero-stamp"><span>FLEX</span><small>EST. 2026</small></div>
          </motion.div>
        </div>
      </section>

      <section className="ticker" aria-label="FLEX benefits">
        <div className="ticker-track"><span>ENGINEERED FOR THE GAME</span><b>✦</b><span>COMFORT IN EVERY STEP</span><b>✦</b><span>GRIP WHEN IT COUNTS</span><b>✦</b><span>ENGINEERED FOR THE GAME</span><b>✦</b><span>COMFORT IN EVERY STEP</span></div>
      </section>

      <section className="offer-section" id="story">
        <div className="landing-shell offer-layout">
          <motion.div className="offer-image-stack" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <img src={playerWhite} alt="Player wearing FLEX Grip Socks during a match" className="offer-action-image" />
            <img src={productPair} alt="FLEX Grip Socks product view" className="offer-product-image" />
            <p className="image-caption">MADE FOR<br />MATCHDAY</p>
          </motion.div>
          <motion.div className="offer-content" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
            <p className="eyebrow eyebrow--dark"><span /> One product. All the difference.</p>
            <h2>Your game,<br />more <em>secure.</em></h2>
            <p>Less slipping. Less distraction. More confidence in every burst, stop, and change of direction.</p>
            <div className="offer-cards">
              <Link to="/product/1" className="offer-card"><span>01</span><div><strong>One pair</strong><small>Your everyday essential</small></div><b>£10</b></Link>
              <Link to="/product/2" className="offer-card offer-card--highlight"><span>03</span><div><strong>Three pairs</strong><small>Better value, more game days</small></div><b>£25</b></Link>
            </div>
            <Link to="/shop" className="text-link text-link--dark">Choose your pack <span>→</span></Link>
          </motion.div>
        </div>
      </section>

      <section className="performance-section">
        <div className="landing-shell section-heading">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="eyebrow"><span /> Designed for the work</p>
            <h2>Small details.<br /><em>Big difference.</em></h2>
          </motion.div>
          <motion.p variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="section-intro">A dependable fit and confident feel, from your first warm-up to the final whistle.</motion.p>
        </div>
        <div className="landing-shell feature-grid">
          {[
            ['01', 'Stay planted', 'Grip-focused construction helps reduce movement inside your boot.'],
            ['02', 'Feel fresh', 'Breathable fabric supports all-day training and match comfort.'],
            ['03', 'Go again', 'A cushioned, supportive feel made for repeat performance.'],
          ].map(([number, title, description]) => (
            <motion.article key={number} className="feature-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -6 }}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><i>↗</i>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <div className="landing-shell gallery-heading">
          <div><p className="eyebrow eyebrow--dark"><span /> On and off the pitch</p><h2>The FLEX<br /><em>field notes.</em></h2></div>
          <p>From training ground to game day, made for the moments you have to make count.</p>
        </div>
      <div className="landing-shell visual-gallery">
  {galleryImages.slice(0, 5).map((item, index) => (
    <motion.figure
      key={item.image}
      className={`gallery-item gallery-item--${index + 1}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.45,
        delay: (index % 5) * 0.04,
      }}
      whileHover={{ y: -5 }}
    >
      <img src={item.image} alt={item.alt} loading="lazy" />
      <figcaption>{item.label}</figcaption>
    </motion.figure>
  ))}
</div>
      </section>

      <section className="quote-section">
        <div className="landing-shell quote-layout">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="quote-mark">“</span>
            <blockquote>Comfort you forget about. Grip you can feel when it matters.</blockquote>
            <p>FLEX GRIP SOCKS <b>—</b> MADE FOR MOVEMENT</p>
          </motion.div>
          <motion.img src={onPitch} alt="FLEX athlete on the pitch" initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
        </div>
      </section>

      <section className="landing-cta">
        <img src={matchDay} alt="Football match in progress" />
        <div className="landing-cta-overlay" />
        <motion.div className="landing-shell landing-cta-content" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="eyebrow"><span /> Ready when you are</p>
          <h2>Step into your<br /><em>best game.</em></h2>
          <p>£10 per pair, or 3 pairs for £25.</p>
          <Link to="/shop" className="landing-button landing-button--light">Shop FLEX Grip Socks <span>↗</span></Link>
        </motion.div>
      </section>
    </div>
  )
}
