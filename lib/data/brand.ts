// lib/data/brand.ts
import { Truck, MessageCircle, Star, Sparkles, Tag, CheckCircle, ShieldCheck } from 'lucide-react';

export const brand = {
  name: "Nike Store Nairobi",
  shortName: "Nike Nairobi",
  logo: "/nike-nairobi-logo.enc",
  tagline: "Where All Athletes Belong",
  description:
    "Premium streetwear vibes. Clean, comfortable, and trendy Nike sneakers and full drip outfits.",
  location: "Sarit Centre, Westlands, Nairobi",
  seo: {
    title: "Nike Store Nairobi | Premium Sneakers & Streetwear",
    description: "Premium Nike footwear and streetwear ecommerce website. Fast delivery available countrywide in Kenya.",
  },

  hero: {
    badge: "Premium Shoes and Outfits in Kenya",
    headlineTop: "WEAR",
    headlineHighlight: "CONFIDENCE",
    backgroundImage: "/NIKE AIR FORCE 1.jpg",
    ctaPrimary: "Order on WhatsApp",
    ctaSecondary: "Shop Collection",
  },

  sections: {
    featured: {
      title: "Featured Collections",
      subtitle: "Find your type. Browse by style and step out with the full Nike drip."
    },
    flashDeals: {
      badge: "Live Now",
      title: "Flash Deals",
      subtitle: "Grab your favorite styles like the Nike Alphafly 3 before they're gone.",
      cta: "View All Deals"
    },
    newArrivals: {
      badge: "Updated Weekly",
      title: "Latest Styles",
      subtitle: "Fresh styles added weekly — be the first to own them.",
      cta: "View All Arrivals",
      trendingBadgePrefix: "Trending in" 
    },
    bestSellers: {
      badge: "Customer Favorites",
      title: "BEST SELLERS",
      subtitle: "Trusted and loved by athletes and streetwear lovers across Kenya.",
      cta: "View All Favorites"
    },
    whyUs: {
      badge: "Trust & Reliability",
      titleTop: "WHY SHOP WITH",
      subtitle: "We focus on premium quality, comfort, and fast service to make your shopping experience effortless."
    },
    reviews: {
      badge: "Real Customers from TikTok & WhatsApp",
      titleTop: "WHAT OUR",
      titleBottom: "CUSTOMERS SAY"
    },
    whatsappCta: {
      badge: "We Are Online",
      titleTop: "START YOUR",
      titleBottom: "ORDER NOW",
      subtitle: "Chat with us directly on WhatsApp to confirm size, color, and delivery in minutes."
    }
  },

  whatsappNumber: "254762231280",
  whatsappMessage: {
    general:
      "Hello Nike Store Nairobi,\n\nI would like to place an order.\n\nShoe Screenshot/Name:\n\nShoe Size:\nPreferred Colour:\nDelivery Location:\n\nPlease confirm availability and total price.\n\nThank you.",
  },
  socialLinks: {
    instagram: "https://instagram.com/nike.store.nairobi",
    facebook: "https://facebook.com/nike.store.nairobi",
    tiktok: "https://tiktok.com/@nike.store.nairobi",
  },
  deliveryInfo: {
    standard: "Countrywide shipping via trusted couriers",
    nairobi: "Fast delivery available within Nairobi (Sarit Centre dispatch)",
  },
  trustStatements: [
    "Fast Countrywide Delivery",
    "Premium Quality Guaranteed",
    "WhatsApp Ordering",
    "Dress Simple. Look Expensive.",
  ],
  features: [
    {
      title: "Premium Quality",
      description: "Every pair and outfit is carefully selected to ensure comfort, durability, and modern style."
    },
    {
      title: "Exclusive Outfits",
      description: "Get the full Nike drip with our premium two-piece tracksuits and modern streetwear collection."
    },
    {
      title: "Fast Delivery",
      description: "We process and deliver orders promptly so you receive your items as fast as possible across Kenya."
    },
    {
      title: "WhatsApp Ordering",
      description: "No complicated checkout — just send a shoe screenshot/name, size, and location to place your order instantly."
    }
  ],
  whatsappTrustSignals: [
    "Fast response within minutes",
    "Secure and reliable",
    "Quick countrywide delivery available",
    "Trusted across 🇰🇪 🇺🇬 🇹🇿"
  ],
  whatsappMockChat: [
    {
      sender: "user",
      text: `Hello Nike Store Nairobi

I'd like to order:

• ORIGINAL NIKE AIR FORCE 1 RED
Reference Image: NIKE AIR FORCE 1.jpg
Size: 42 

Delivery: Westlands

Subtotal: KSh 19,800

Please confirm availability, total payable and payment method.

Thank you.

`,
      time: "10:05 AM"
    },
    {
      sender: "brand",
      text: `Yes, it's available.

Total including fast delivery: KSh 20,000

You can pay via M-Pesa.

Send the confirmation message once payment is complete.
`,
      time: "10:06 AM"
    }
  ],
  salesCallout: "Boss Up Your Game 💯",
  
  featuredImages: [
    "AIR JORDAN 11 RETRO.jpg",
    "EXCLUSIVE NIKE PREMIUM OUTFITS.jpg",
    "FULL DRIFT.jpg",
    "FULL NIKE DRIP green.jpg",
    "NIKE AIR FORCE 1.jpg",
    "NIKE AIR MORNACH.jpg",
    "Nike Alphafly 3.jpg",
    "Premium Nike Two Piece black.jpg"
  ]
};

export const announcementMessages = [
  { text: "Fast Delivery Countrywide", icon: Truck },
  { text: "Order Easily Via WhatsApp", icon: MessageCircle },
  { text: "Premium Streetwear Collection", icon: Sparkles },
  { text: "Located at Sarit Centre, Westlands", icon: Star },
  { text: "Flash Deals on Alphafly 3 Available", icon: Tag },
];

export const cartTrustFeatures = [
  { text: "Countrywide Shipping", icon: Truck },
  { text: "Premium Quality Guaranteed", icon: CheckCircle },
  { text: "Secure Ordering", icon: ShieldCheck },
  { text: "WhatsApp Support", icon: MessageCircle },
];

export const footerQuickShopLinks = [
  { label: "Sneakers (Air Force, Jordans)", href: "/shop?category=sneakers" },
  { label: "Premium Nike Outfits", href: "/shop?category=outfits" },
  { label: "Nike Full Drift", href: "/shop?category=drift" },
  { label: "Running Shoes", href: "/shop?category=running" },
  { label: "Best Sellers", href: "/shop?category=best-sellers" },
];

export const footerSupportLinks = [
  { label: "How to Order", href: "/how-to-order" },
  { label: "Delivery Info", href: "/delivery" },
  { label: "Size Guide", href: "/size-guide" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "FAQ", href: "/faq" },
];