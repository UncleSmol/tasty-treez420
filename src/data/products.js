// Sample Product Data for Tasty Treez 420

const products = [
  // Smokes - Outdoor Grown
  {
    id: 'smoke-outdoor-1',
    name: 'Sunshine Haze (Outdoor)',
    category: 'Smokes',
    subCategory: 'Outdoor Grown',
    shortDescription: 'Sun-kissed sativa with a bright, uplifting effect.',
    fullDescription: 'Grown under the warm South African sun, Sunshine Haze is a vibrant sativa strain known for its energetic and euphoric effects. It features a citrusy aroma with earthy undertones. Perfect for daytime activities and boosting creativity. Organically grown outdoors.',
    price: 'R150 / 3.5g',
    rating: 4.5,
    numReviews: 12,
    images: [
      { original: 'https://images.unsplash.com/photo-1600959901373-369004571d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1600959901373-369004571d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
      { original: 'https://images.unsplash.com/photo-1561322749-2435a0701332?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1561322749-2435a0701332?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Smokes - Indoor Premium
  {
    id: 'smoke-indoor-1',
    name: 'Velvet Kush (Indoor)',
    category: 'Smokes',
    subCategory: 'Indoor Premium',
    shortDescription: 'Smooth, potent indica for deep relaxation.',
    fullDescription: 'Cultivated indoors under optimal conditions, Velvet Kush is a premium indica strain delivering a deeply relaxing body high. Its dense buds are coated in trichomes and offer a sweet, earthy aroma with hints of grape. Ideal for evening use and unwinding.',
    price: 'R250 / 3.5g',
    rating: 4.8,
    numReviews: 25,
    images: [
      { original: 'https://images.unsplash.com/photo-1618403220001-295068af8616?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1618403220001-295068af8616?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Smokes - Greenhouse Selects
  {
    id: 'smoke-greenhouse-1',
    name: 'Hybrid Harmony (Greenhouse)',
    category: 'Smokes',
    subCategory: 'Greenhouse Selects',
    shortDescription: 'Balanced hybrid offering the best of both worlds.',
    fullDescription: 'Grown in our controlled greenhouse environment, Hybrid Harmony provides a balanced experience, blending cerebral uplift with gentle body relaxation. It has a complex aroma profile with floral and spicy notes. Versatile for various occasions.',
    price: 'R200 / 3.5g',
    rating: 4.3,
    numReviews: 18,
    images: [
      { original: 'https://images.unsplash.com/photo-1598528000901-7674998102e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1598528000901-7674998102e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
      { original: 'https://images.unsplash.com/photo-1590319600026-53439a10179a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1590319600026-53439a10179a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
      { original: 'https://images.unsplash.com/photo-1608914847321-51e061041591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1608914847321-51e061041591?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Edibles
  {
    id: 'edible-1',
    name: 'Cosmic Brownies',
    category: 'Edibles',
    shortDescription: 'Delicious and potent chocolate brownies.',
    fullDescription: 'Our signature Cosmic Brownies are baked with love and infused with high-quality cannabis extract. Each brownie is precisely dosed for a consistent and enjoyable experience. A tasty way to explore edibles. Start low, go slow!',
    price: 'R80 / each',
    rating: 4.7,
    numReviews: 30,
    images: [
      { original: 'https://images.unsplash.com/photo-1580826041083-616d522675c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1580826041083-616d522675c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Extracts
  {
    id: 'extract-1',
    name: 'Golden Shatter',
    category: 'Extracts',
    shortDescription: 'Pure, potent BHO shatter.',
    fullDescription: 'Experience the concentrated power of Golden Shatter. This BHO extract boasts high cannabinoid content and a clean, smooth finish. Ideal for dabbing or vaporizing. Lab tested for purity and potency.',
    price: 'R300 / 1g',
    rating: 4.9,
    numReviews: 15,
    images: [
      { original: 'https://images.unsplash.com/photo-1609373009053-a02d0713ff3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1609373009053-a02d0713ff3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Vapes
  {
    id: 'vape-1',
    name: 'Zen Vape Cartridge',
    category: 'Vapes',
    shortDescription: 'Smooth and discreet vape experience.',
    fullDescription: 'The Zen Vape Cartridge is filled with premium cannabis oil, offering a convenient and discreet way to enjoy your Treez. Features a calming indica-dominant blend with natural terpenes. Compatible with standard 510 thread batteries.',
    price: 'R280 / 0.5g',
    rating: 4.6,
    numReviews: 22,
    images: [
      { original: 'https://images.unsplash.com/photo-1611272881004-8f839c7051bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1611272881004-8f839c7051bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
  // Accessories
  {
    id: 'accessory-1',
    name: 'Organic Hemp Rolling Papers',
    category: 'Accessories',
    shortDescription: 'Natural, slow-burning papers.',
    fullDescription: 'Crafted from 100% organic hemp, these rolling papers provide a clean and slow burn, allowing you to fully enjoy the flavour of your smokes. Ultra-thin and easy to roll.',
    price: 'R30 / pack',
    rating: 4.4,
    numReviews: 40,
    images: [
      { original: 'https://images.unsplash.com/photo-1599828355089-a90e1cb7588c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', thumbnail: 'https://images.unsplash.com/photo-1599828355089-a90e1cb7588c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80' },
    ],
  },
];

export default products;