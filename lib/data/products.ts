// lib/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFlashDeal?: boolean;
  description: string;
}

export const products: Product[] = [
  {
    "id": "p1",
    "name": "Nike Alphafly 3",
    "price": 39100,
    "originalPrice": 45000,
    "image": "/Nike Alphafly 3.jpg",
    "images": ["/Nike Alphafly 3.jpg"],
    "category": "Running",
    "rating": 4.9,
    "reviews": 42,
    "sizes": ["39", "40", "41", "42", "43", "44", "45"],
    "colors": ["White", "Pink"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": true,
    "description": "Premium marathon running shoes engineered for speed. Experience unmatched energy return and comfort with the Nike Alphafly 3."
  },
  {
    "id": "p2",
    "name": "Original Nike Air Force 1 Red",
    "price": 19800,
    "originalPrice": 22500,
    "image": "/NIKE AIR FORCE 1.jpg",
    "images": ["/NIKE AIR FORCE 1.jpg", "/NIKE AIR FORCE 1 white.jpg"],
    "category": "Sneakers",
    "rating": 4.8,
    "reviews": 56,
    "sizes": ["39", "40", "41", "42", "43", "44", "45"],
    "colors": ["Red"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "The timeless classic. Original Nike Air Force 1 in a striking all-red colorway. Clean, durable, and an absolute staple for your rotation."
  },
  {
    "id": "p3",
    "name": "Air Jordan 11 Retro",
    "price": 24500,
    "originalPrice": 28000,
    "image": "/AIR JORDAN 11 RETRO.jpg",
    "images": ["/AIR JORDAN 11 RETRO.jpg"],
    "category": "Sneakers",
    "rating": 4.9,
    "reviews": 31,
    "sizes": ["39", "40", "41", "42", "43", "44"],
    "colors": ["Black", "Blue"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Boss up your game with the iconic Air Jordan 11 Retro. Featuring premium patent leather detailing and classic Jordan cushioning."
  },
  {
    "id": "p4",
    "name": "Nike Air Monarch",
    "price": 11000,
    "originalPrice": 14000,
    "image": "/NIKE AIR MORNACH.jpg",
    "images": ["/NIKE AIR MORNACH.jpg"],
    "category": "Sneakers",
    "rating": 4.6,
    "reviews": 18,
    "sizes": ["39", "40", "41", "42", "43", "44", "45"],
    "colors": ["White", "Navy Blue"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": false,
    "description": "Keep winning with the ultimate comfort sneaker. The Nike Air Monarch delivers supportive cushioning and durable leather for everyday wear."
  },
  {
    "id": "p5",
    "name": "Exclusive Nike Premium Outfit",
    "price": 12500,
    "originalPrice": 15000,
    "image": "/EXCLUSIVE NIKE PREMIUM OUTFITS.jpg",
    "images": ["/EXCLUSIVE NIKE PREMIUM OUTFITS.jpg", "/EXCLUSIVE NIKE PREMIUM OUTFITS1.jpg", "/EXCLUSIVE NIKE PREMIUM OUTFITS2.jpg"],
    "category": "Outfits",
    "rating": 4.8,
    "reviews": 24,
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Red", "White"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Dress simple. Look expensive. Premium Nike streetwear featuring a comfortable half-zip sweatshirt and matching track pants."
  },
  {
    "id": "p6",
    "name": "Nike Store Full Drift Set",
    "price": 14000,
    "originalPrice": 16500,
    "image": "/FULL DRIFT.jpg",
    "images": ["/FULL DRIFT.jpg", "/FULL DRIFT1.jpg", "/FULL DRIFT2.jpg", "/FULL DRIFT3.jpg"],
    "category": "Outfits",
    "rating": 4.7,
    "reviews": 19,
    "sizes": ["M", "L", "XL"],
    "colors": ["Black", "White"],
    "isNewArrival": false,
    "isBestSeller": false,
    "isFlashDeal": true,
    "description": "Stay trending with the Full Drift set. Bold color blocking and premium materials make this the perfect modern streetwear collection."
  },
  {
    "id": "p7",
    "name": "Full Nike Drip Set",
    "price": 18500,
    "originalPrice": 22000,
    "image": "/FULL NIKE DRIP green.jpg",
    "images": ["/FULL NIKE DRIP green.jpg", "/FULL NIKE DRIP grey.jpg", "/FULL NIKE DRIP maroon.jpg", "/FULL NIKE DRIP pink.jpg", "/FULL NIKE DRIP purple.jpg"],
    "category": "Outfits",
    "rating": 5.0,
    "reviews": 42,
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Green"],
    "isNewArrival": true,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Clean. Comfortable. Premium streetwear vibes. Get the ultimate full set including heavy jacket, hoodie, sweatpants, tee, gloves, and beanie."
  },
  {
    "id": "p8",
    "name": "Premium Nike Two Piece",
    "price": 9500,
    "originalPrice": 12000,
    "image": "/Premium Nike Two Piece black.jpg",
    "images": ["/Premium Nike Two Piece black.jpg", "/Premium Nike Two Piece grey.jpg", "/Premium Nike Two Piece yellow.jpg"],
    "category": "Outfits",
    "rating": 4.7,
    "reviews": 27,
    "sizes": ["M", "L", "XL"],
    "colors": ["Black"],
    "isNewArrival": false,
    "isBestSeller": true,
    "isFlashDeal": false,
    "description": "Wear confidence. This stealthy all-black Premium Nike Two Piece features a ribbed collar shirt and matching shorts for a modern, sleek look."
  }
];

export const getBestSellers = () => products.filter((p) => p.isBestSeller);
export const getNewArrivals = () => products.filter((p) => p.isNewArrival);
export const getFlashDeals = () => products.filter((p) => p.isFlashDeal);
export const getProductById = (id: string) => products.find((p) => p.id === id);

export const colorMap: Record<string, string> = {
  'Black': '#000000',
  'White': '#ffffff',
  'Red': '#ff0000',
  'Green': '#228B22',
  'Navy Blue': '#000080',
  'Blue': '#0000ff',
  'Pink': '#ff1493'
};

export const sizeGuideData = [
  {eu: 39, uk: 5.5, us: 6.5, cm: 24.5},
  {eu: 40, uk: 6, us: 7, cm: 25},
  {eu: 41, uk: 7, us: 8, cm: 26},
  {eu: 42, uk: 7.5, us: 8.5, cm: 26.5},
  {eu: 43, uk: 8.5, us: 9.5, cm: 27.5},
  {eu: 44, uk: 9, us: 10, cm: 28},
  {eu: 45, uk: 10, us: 11, cm: 29},
];