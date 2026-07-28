import threePairImage from '../images/3pair.png'

export const DELIVERY_CHARGE = 3.99
export const DELIVERY_ESTIMATE = '3–5 business days'

export const products = [
  {
    id: 1,
    name: 'FLEX Grip Socks',
    price: 10,
    priceLabel: '£10 per pair',
    checkoutUrl: 'https://buy.stripe.com/28EbJ0dNR6gm74g3wv67S00',
    offers: [{ id: 'single', label: '1 pair', price: 10 }],
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F883272-DD6A-47C3-B64E-660869CF5308-sdf5hyQPM8pNQCJFnjauTKwgkJ9bnM.jpeg',
    category: 'grip-socks',
    description: 'Premium grip socks designed for reliable traction, comfort, and athletic performance.',
    colors: ['white'],
    sizes: ['M', 'L'],
    rating: 4.8,
    reviews: 342
  },
  {
    id: 2,
    name: 'FLEX Grip Socks — 3 Pair Pack',
    price: 25,
    priceLabel: '3 pairs for £25',
    checkoutUrl: 'https://buy.stripe.com/bJe00idNR8ouewI2sr67S01',
    offers: [{ id: 'three-pack', label: '3 pairs', price: 25 }],
    image: threePairImage,
    category: 'grip-socks',
    description: 'Three pairs of premium grip socks for reliable traction, comfort, and more game days.',
    colors: ['white'],
    sizes: ['M', 'L'],
    rating: 4.8,
    reviews: 342
  }
]

export const showcaseImages = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2809-fUZat6EOx7FKQLSqiBWrEK1sNc0QPB.jpeg',
    title: 'Team Performance',
    description: 'FLEX Grip socks trusted by professional athletes'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4439-ZsBXpMm08UBkSxNABSNPv1gQZr0Jez.jpeg',
    title: 'Athletic Excellence',
    description: 'Engineered for peak performance on the field'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3783-f16h5PJS4dxHiXSiEIYRVyxi4Di3FG.jpeg',
    title: 'Game-Changing Grip',
    description: 'Maximum traction when it matters most'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/D81484E4-87C1-4310-8DB6-17B889802C53-llgg9Qa82lrRQpfVID78GoLk7604dk.jpeg',
    title: 'Professional Standard',
    description: 'Worn by teams at the highest competitive levels'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/66121c08-a303-4964-9336-d9a7749b628c-hNl9Dm0hFnxumJe1vCmSI9fdvkhcoI.jpeg',
    title: 'Youth Development',
    description: 'Building the next generation of athletes'
  },
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2807-7mGC3qB0yvrUx82B5JAHflAnVUbmNi.jpeg',
    title: 'Training Perfected',
    description: 'Comfort meets performance in every stride'
  }
]
