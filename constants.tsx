
import { Product, Category, UserRole } from './types';

export const CATEGORIES: Category[] = [
  { 
    id: '1', 
    name: 'Performance Computing', 
    slug: 'laptops', 
    icon: 'laptop',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: '2', 
    name: 'Neural Mobile', 
    slug: 'smartphones', 
    icon: 'smartphone',
    imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: '3', 
    name: 'Smart Bio-Wear', 
    slug: 'wearables', 
    icon: 'watch',
    imageUrl: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: '4', 
    name: 'Spatial Audio', 
    slug: 'audio', 
    icon: 'headphones',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    id: '5', 
    name: 'Cinematic Imaging', 
    slug: 'photography', 
    icon: 'camera',
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000'
  },
];

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Nebula Pro Gen-9',
    description: 'The ultimate spatial workstation. Powered by TECHIFY X2 Neural chip with 120Hz Liquid OLED display and advanced thermal management.',
    price: 1499.00,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewsCount: 420,
    stock: 12,
    tags: ['Best Seller', 'New Arrival', 'Professional'],
    isNew: true,
    features: ['TECHIFY X2 Chip', '32GB Neural Memory', '2TB SSD', 'Liquid OLED']
  },
  {
    id: 'p2',
    name: 'Horizon Z-Fold Phone',
    description: 'A masterpiece of folding technology. Seamless 7.9-inch display in a pocketable titanium form factor with neural-link OS.',
    price: 1799.00,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviewsCount: 156,
    stock: 8,
    tags: ['Premium', 'Innovation'],
    features: ['Titanium Frame', 'Folding OLED', 'Satellite Link', 'AI Pro Cam']
  },
  {
    id: 'p3',
    name: 'Aura Halo Watch 4',
    description: 'More than a watch. A complete health diagnostic center on your wrist with non-invasive biometric monitoring.',
    price: 449.00,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviewsCount: 312,
    stock: 40,
    tags: ['Health Tech', 'Bestseller'],
    features: ['Bio-Sensor Array', '7-Day Battery', 'Sapphire Glass', 'Titanium Case']
  },
  {
    id: 'p4',
    name: 'Zenith Studio Pods',
    description: 'Unmatched spatial clarity. Zero-latency wireless audio with high-fidelity 32-bit streaming support.',
    price: 299.00,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewsCount: 890,
    stock: 65,
    tags: ['Editors Choice', 'Audio Grade'],
    features: ['32-bit DAC', 'Adaptive ANC', 'Spatial Tracking', 'Lossless Audio']
  },
  {
    id: 'p5',
    name: 'Prism V1 Cinema Cam',
    description: 'Professional cinema quality in a palm-sized body. Shoot 8K RAW video with 15 stops of dynamic range.',
    price: 2499.00,
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewsCount: 28,
    stock: 5,
    tags: ['Pro Video', 'Cinematic'],
    features: ['8K RAW', 'Full Frame Sensor', 'Global Shutter', 'Internal ND']
  },
  {
    id: 'p6',
    name: 'Titan X Workstation',
    description: 'Desktop-class performance in a portable chassis. Features the 128-core Neural Core for massive AI workloads.',
    price: 3299.00,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewsCount: 88,
    stock: 4,
    tags: ['Enterprise', 'Powerhouse'],
    features: ['128-core GPU', '128GB Unified Memory', 'Liquid Cooling', '1000 nits HDR']
  },
  {
    id: 'p7',
    name: 'Onyx Edge 15 Pro',
    description: 'Sleek, powerful, and private. The Edge 15 features an under-display camera and hardware-level encryption.',
    price: 1199.00,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=1200',
    rating: 4.6,
    reviewsCount: 540,
    stock: 22,
    tags: ['Privacy', 'Sleek'],
    features: ['Under-display Cam', 'Titan Security Chip', '144Hz Screen', '100W Charging']
  },
  {
    id: 'p8',
    name: 'Quantum VR Visor',
    description: 'Step into the metaverse with 12K resolution per eye and integrated neural haptic feedback.',
    price: 899.00,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviewsCount: 92,
    stock: 15,
    tags: ['Gaming', 'Metaverse'],
    features: ['12K Dual Panels', 'Eye Tracking', 'Wireless Link', 'Haptic Strap']
  },
  {
    id: 'p9',
    name: 'Pulse Bass Tower',
    description: 'Fill any room with concert-quality sound. Features carbon fiber drivers and room-sensing acoustics in a high-fidelity floor tower.',
    price: 649.00,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
    rating: 4.7,
    reviewsCount: 210,
    stock: 18,
    tags: ['Home Audio', 'Luxury'],
    features: ['360 Sound', 'Carbon Fiber Woofers', 'Smart Sync', 'Voice Control']
  },
  {
    id: 'p10',
    name: 'Falcon Eye Drone',
    description: 'Capture the world from above in stunning 8K. AI-powered flight paths and 45-minute battery life.',
    price: 1299.00,
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewsCount: 145,
    stock: 10,
    tags: ['Aerial', 'New Release'],
    isNew: true,
    features: ['8K Video', 'Omni-Obstacle Avoidance', '45min Flight', '10km Range']
  },
  {
    id: 'p11',
    name: 'Carbon Book Air',
    description: 'The world\'s lightest 15-inch laptop. Made from aerospace-grade carbon fiber for extreme durability.',
    price: 1399.00,
    category: 'laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=1200',
    rating: 4.5,
    reviewsCount: 320,
    stock: 25,
    tags: ['Ultra-Light', 'Executive'],
    features: ['Carbon Chassis', '20-hour Battery', 'Fanless Design', '5G Modem']
  },
  {
    id: 'p12',
    name: 'Stellar S24 Ultra',
    description: 'The photography powerhouse. 200MP main sensor with 100x Space Zoom and integrated AI editing tools.',
    price: 1399.00,
    category: 'smartphones',
    image: 'https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&q=80&w=1200',
    rating: 4.9,
    reviewsCount: 1200,
    stock: 50,
    tags: ['Flagship', 'Photography'],
    features: ['200MP Lens', 'S-Pen Integrated', 'Titanium build', 'Dynamic AMOLED']
  },
  {
    id: 'p13',
    name: 'BioBand Pulse X',
    description: 'Discreet fitness tracking. Monitor your heart, stress, and sleep without the bulk of a traditional watch with this minimalist biometric band.',
    price: 199.00,
    category: 'wearables',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&q=80&w=1200',
    rating: 4.4,
    reviewsCount: 430,
    stock: 100,
    tags: ['Fitness', 'Minimalist'],
    features: ['Stress Tracking', 'Sleep Analysis', 'Waterproof', 'Month Battery']
  },
  {
    id: 'p14',
    name: 'Sonic Wave Bar',
    description: 'The future of home cinema. 9.1.4 channel surround sound with wireless subwoofer and rear satellites.',
    price: 899.00,
    category: 'audio',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1200',
    rating: 4.8,
    reviewsCount: 180,
    stock: 12,
    tags: ['Cinema', 'Surround'],
    features: ['Dolby Atmos', '9.1.4 Channels', 'eARC Support', 'Spotify Connect']
  },
  {
    id: 'p15',
    name: 'Focus Prime Lens Set',
    description: 'A set of three premium cinema prime lenses (35mm, 50mm, 85mm) for professional filmmakers.',
    price: 1899.00,
    category: 'photography',
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=1200',
    rating: 5.0,
    reviewsCount: 15,
    stock: 3,
    tags: ['Optics', 'Professional'],
    features: ['f/1.2 Aperture', 'Multi-coating', 'Metal housing', 'PL Mount']
  }
];

export const MOCK_ADMIN = {
  id: 'admin-1',
  name: 'Alex Techify',
  email: 'admin@techify.com',
  role: UserRole.ADMIN,
  avatar: 'https://i.pravatar.cc/150?u=admin',
  joinedAt: '2023-01-01'
};
