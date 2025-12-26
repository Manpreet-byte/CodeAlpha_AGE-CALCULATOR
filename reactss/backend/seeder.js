import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import connectDB from './config/db.js';

dotenv.config();

const products = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and superior sound quality. Perfect for music lovers and professionals.',
    price: 199.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500'
    ],
    stock: 50,
    rating: 4.5,
    numReviews: 128,
    brand: 'AudioPro',
    featured: true
  },
  {
    name: 'Smart Watch Series 7',
    description: 'Advanced fitness tracking, heart rate monitoring, GPS, water-resistant smartwatch with a stunning AMOLED display and 5-day battery life.',
    price: 349.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500'
    ],
    stock: 35,
    rating: 4.8,
    numReviews: 256,
    brand: 'TechTime',
    featured: true
  },
  {
    name: 'Professional DSLR Camera',
    description: '24MP full-frame sensor, 4K video recording, dual card slots, weather-sealed body. Ideal for professional photographers and videographers.',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500'
    ],
    stock: 15,
    rating: 4.9,
    numReviews: 89,
    brand: 'PhotoMaster',
    featured: true
  },
  {
    name: 'Premium Leather Backpack',
    description: 'Handcrafted genuine leather backpack with laptop compartment, USB charging port, and multiple pockets. Perfect for work and travel.',
    price: 159.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500'
    ],
    stock: 42,
    rating: 4.6,
    numReviews: 174,
    brand: 'UrbanStyle',
    featured: false
  },
  {
    name: 'Running Shoes Pro',
    description: 'Lightweight cushioned running shoes with breathable mesh, responsive sole, and excellent grip. Designed for marathon runners.',
    price: 129.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500'
    ],
    stock: 68,
    rating: 4.7,
    numReviews: 312,
    brand: 'RunFast',
    featured: true
  },
  {
    name: 'Organic Cotton T-Shirt',
    description: 'Soft, breathable 100% organic cotton t-shirt. Eco-friendly and comfortable for everyday wear. Available in multiple colors.',
    price: 29.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500'
    ],
    stock: 150,
    rating: 4.3,
    numReviews: 487,
    brand: 'EcoWear',
    featured: false
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Extra-thick non-slip yoga mat with carrying strap. Eco-friendly TPE material, perfect for yoga, pilates, and home workouts.',
    price: 49.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a8?w=500'
    ],
    stock: 85,
    rating: 4.5,
    numReviews: 201,
    brand: 'ZenFit',
    featured: false
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free, leak-proof, 32oz capacity.',
    price: 34.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500',
      'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500'
    ],
    stock: 120,
    rating: 4.4,
    numReviews: 356,
    brand: 'HydroLife',
    featured: false
  },
  {
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with blue switches, anti-ghosting, programmable keys, and aluminum frame. Perfect for gamers.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'
    ],
    stock: 45,
    rating: 4.6,
    numReviews: 189,
    brand: 'GameTech',
    featured: true
  },
  {
    name: 'Portable Blender',
    description: 'USB rechargeable portable blender for smoothies and shakes. 6 blades, 380ml capacity, perfect for travel, gym, and office.',
    price: 39.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500',
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=500',
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500'
    ],
    stock: 92,
    rating: 4.2,
    numReviews: 267,
    brand: 'BlendGo',
    featured: false
  },
  {
    name: 'Wireless Gaming Mouse',
    description: 'High-precision wireless gaming mouse with 16000 DPI, RGB lighting, 8 programmable buttons, and ergonomic design.',
    price: 69.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
    images: [
      'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500'
    ],
    stock: 58,
    rating: 4.7,
    numReviews: 143,
    brand: 'GameTech',
    featured: false
  },
  {
    name: 'Aromatherapy Diffuser',
    description: 'Ultrasonic essential oil diffuser with 7-color LED lights, auto shut-off, and whisper-quiet operation. 300ml capacity.',
    price: 44.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500',
      'https://images.unsplash.com/photo-1612320443308-6604fb52f736?w=500'
    ],
    stock: 76,
    rating: 4.5,
    numReviews: 298,
    brand: 'AromaHome',
    featured: true
  },
  {
    name: 'Minimalist Wallet',
    description: 'Slim RFID-blocking leather wallet. Holds up to 12 cards and cash. Sleek design perfect for everyday carry.',
    price: 39.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
    images: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500',
      'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500'
    ],
    stock: 110,
    rating: 4.4,
    numReviews: 412,
    brand: 'SlimCarry',
    featured: false
  },
  {
    name: 'Resistance Bands Set',
    description: 'Set of 5 resistance bands with different resistance levels, door anchor, handles, and carrying bag. Perfect for home workouts.',
    price: 24.99,
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500',
      'https://images.unsplash.com/photo-1591940742878-13aba4b7a34e?w=500'
    ],
    stock: 135,
    rating: 4.6,
    numReviews: 521,
    brand: 'FitStrong',
    featured: false
  },
  {
    name: 'LED Desk Lamp',
    description: 'Modern LED desk lamp with touch control, adjustable brightness, USB charging port, and eye-care technology.',
    price: 54.99,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500'
    ],
    stock: 63,
    rating: 4.3,
    numReviews: 178,
    brand: 'BrightSpace',
    featured: false
  },
  {
    name: 'Sunglasses Polarized',
    description: 'UV400 polarized sunglasses with lightweight frame and scratch-resistant lenses. Classic design for men and women.',
    price: 79.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
    images: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500'
    ],
    stock: 88,
    rating: 4.5,
    numReviews: 234,
    brand: 'SunShield',
    featured: true
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    console.log('Products deleted');

    await Product.insertMany(products);
    console.log('Products seeded');

    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
